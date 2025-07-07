import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.3";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  applicationId: string;
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

    const { applicationId, useStoredKey = false }: EmailRequest = await req.json();

    // Get application details with job information
    const { data: application, error: appError } = await supabaseClient
      .from('applications')
      .select(`
        *,
        jobs (
          title,
          location,
          employment_type
        )
      `)
      .eq('id', applicationId)
      .single();

    if (appError || !application) {
      console.error('Error fetching application:', appError);
      return new Response(
        JSON.stringify({ error: 'Application not found' }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

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

    // Create email HTML with modern design
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bewerbungsbestätigung - SAK Service GmbH</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); margin-top: 40px; margin-bottom: 40px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              SAK Service GmbH
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
              Bewerbungsbestätigung
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #1a1a1a; margin: 0 0 24px 0; font-size: 24px; font-weight: 600;">
              Vielen Dank für Ihre Bewerbung!
            </h2>
            
            <p style="color: #4a5568; margin: 0 0 20px 0; font-size: 16px;">
              Liebe/r ${application.first_name} ${application.last_name},
            </p>
            
            <p style="color: #4a5568; margin: 0 0 20px 0; font-size: 16px;">
              wir haben Ihre Bewerbung erfolgreich erhalten und danken Ihnen für Ihr Interesse an einer Zusammenarbeit mit der SAK Service GmbH.
            </p>

            <!-- Job Details Box -->
            <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius: 8px; padding: 24px; margin: 24px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #2d3748; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">
                Bewerbungsdetails:
              </h3>
              <div style="color: #4a5568; font-size: 14px; line-height: 1.8;">
                <p style="margin: 0 0 8px 0;"><strong>Position:</strong> ${application.jobs?.title || 'Allgemeine Bewerbung'}</p>
                ${application.jobs?.location ? `<p style="margin: 0 0 8px 0;"><strong>Standort:</strong> ${application.jobs.location}</p>` : ''}
                ${application.jobs?.employment_type ? `<p style="margin: 0 0 8px 0;"><strong>Beschäftigungsart:</strong> ${application.jobs.employment_type}</p>` : ''}
                <p style="margin: 0;"><strong>Bewerbungsdatum:</strong> ${new Date(application.created_at).toLocaleDateString('de-DE')}</p>
              </div>
            </div>

            <p style="color: #4a5568; margin: 0 0 20px 0; font-size: 16px;">
              Wir werden Ihre Unterlagen sorgfältig prüfen und uns in den nächsten Tagen bei Ihnen melden. Falls Sie Fragen haben, können Sie sich gerne jederzeit an uns wenden.
            </p>

            <p style="color: #4a5568; margin: 0 0 32px 0; font-size: 16px;">
              Mit freundlichen Grüßen<br>
              <strong>Ihr Team der SAK Service GmbH</strong>
            </p>

            <!-- Contact Info -->
            <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-top: 32px;">
              <h4 style="color: #2d3748; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">
                Kontaktinformationen:
              </h4>
              <div style="color: #4a5568; font-size: 14px; line-height: 1.8;">
                <p style="margin: 0 0 8px 0;">📧 info@sak-service.de</p>
                <p style="margin: 0 0 8px 0;">📞 +49 123 456 789</p>
                <p style="margin: 0;">🌐 www.sak-service.de</p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f8fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #718096; margin: 0; font-size: 12px;">
              Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese Nachricht.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    const emailData: any = {
      from: `${senderName} <${senderEmail}>`,
      to: [application.email],
      subject: `Bewerbungsbestätigung - ${application.jobs?.title || 'Ihre Bewerbung'}`,
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

    // Update application to mark email as sent
    await supabaseClient
      .from('applications')
      .update({
        confirmation_email_sent: true,
        confirmation_email_sent_at: new Date().toISOString()
      })
      .eq('id', applicationId);

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