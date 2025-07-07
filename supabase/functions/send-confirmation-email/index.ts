import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.3";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  useStoredKey?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { email, firstName, lastName, jobTitle, useStoredKey = false }: EmailRequest = await req.json();

    console.log('Received request with:', { email: !!email, firstName: !!firstName, lastName: !!lastName, jobTitle: !!jobTitle, useStoredKey });

    // Validate required data
    if (!email || !firstName || !lastName || !jobTitle) {
      console.error('Invalid request: missing required data');
      return new Response(
        JSON.stringify({ error: 'Missing required data: email, firstName, lastName, and jobTitle are required' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const applicationData = {
      email,
      firstName,
      lastName,
      jobTitle
    };
    
    console.log('Using application data:', { email: applicationData.email, firstName: applicationData.firstName, lastName: applicationData.lastName, jobTitle: applicationData.jobTitle });

    // Get email configuration
    let resendApiKey = Deno.env.get('RESEND_API_KEY');
    let senderEmail = 'noreply@sakservice.de';
    let senderName = 'SAK Service GmbH';
    let replyToEmail = '';

    if (useStoredKey) {
      const { data: emailConfig } = await supabaseClient
        .from('email_config')
        .select('*')
        .single();

      if (emailConfig) {
        resendApiKey = emailConfig.resend_api_key || resendApiKey;
        senderEmail = emailConfig.sender_email || senderEmail;
        senderName = emailConfig.sender_name || senderName;
        replyToEmail = emailConfig.reply_to_email || '';
      }
    }

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'Resend API key not configured' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendApiKey);

    // Create simple email content
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bewerbungsbestätigung - SAK Service GmbH</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          
          <h1 style="color: #333; margin-bottom: 20px;">SAK Service GmbH</h1>
          <h2 style="color: #007BFF; margin-bottom: 30px;">Bewerbungsbestätigung</h2>
          
          <p>Liebe/r ${applicationData.firstName} ${applicationData.lastName},</p>
          
          <p>vielen Dank für Ihre Bewerbung! Wir haben Ihre Unterlagen erfolgreich erhalten und danken Ihnen für Ihr Interesse an einer Zusammenarbeit mit der SAK Service GmbH.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #007BFF;">
            <h3 style="margin-top: 0; color: #333;">Bewerbungsdetails:</h3>
            <p><strong>Position:</strong> ${applicationData.jobTitle}</p>
            <p><strong>Bewerbungsdatum:</strong> ${new Date().toLocaleDateString('de-DE')}</p>
          </div>
          
          <p>Wir werden Ihre Unterlagen sorgfältig prüfen und uns in den nächsten Tagen bei Ihnen melden. Falls Sie Fragen haben, können Sie sich gerne jederzeit an uns wenden.</p>
          
          <p>Mit freundlichen Grüßen<br>
          <strong>Ihr Team der SAK Service GmbH</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <h4 style="margin-top: 0; color: #333;">Kontaktinformationen:</h4>
            <p><strong>E-Mail:</strong> kontakt@sakservice.de<br>
            <strong>Telefon:</strong> +49 (0) 30 12345678<br>
            <strong>Website:</strong> www.sakservice.de</p>
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese Nachricht.
          </p>
          
        </div>
      </body>
      </html>
    `;

    // Send email
    const emailData: any = {
      from: `${senderName} <${senderEmail}>`,
      to: [applicationData.email],
      subject: `Bewerbungsbestätigung - ${applicationData.jobTitle}`,
      html: emailHtml,
    };

    if (replyToEmail) {
      emailData.reply_to = replyToEmail;
    }

    const emailResponse = await resend.emails.send(emailData);

    if (emailResponse.error) {
      console.error('Error sending email:', emailResponse.error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log('Email sent successfully:', emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error('Error in send-confirmation-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);