import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.3";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  // Direct data (from ApplicationForm)
  email?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  // Application ID (from Admin Panel)
  applicationId?: string;
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

    const { email, firstName, lastName, jobTitle, applicationId, useStoredKey = false }: EmailRequest = await req.json();

    console.log('Received request with:', { email: !!email, firstName: !!firstName, lastName: !!lastName, jobTitle: !!jobTitle, applicationId: !!applicationId, useStoredKey });

    let applicationData: {
      email: string;
      firstName: string;
      lastName: string;
      jobTitle: string;
    };

    // Determine data source and validate
    if (applicationId) {
      console.log('Fetching application data from database for applicationId:', applicationId);
      
      // Fetch application data from database (Admin Panel scenario)
      const { data: application, error: appError } = await supabaseClient
        .from('applications')
        .select(`
          email,
          first_name,
          last_name,
          jobs!job_id(title)
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

      applicationData = {
        email: application.email,
        firstName: application.first_name,
        lastName: application.last_name,
        jobTitle: application.jobs?.title || 'Unbekannte Position'
      };
      
      console.log('Fetched application data:', { email: applicationData.email, firstName: applicationData.firstName, lastName: applicationData.lastName, jobTitle: applicationData.jobTitle });
    } else if (email && firstName && lastName && jobTitle) {
      // Use direct data (ApplicationForm scenario)
      applicationData = {
        email,
        firstName,
        lastName,
        jobTitle
      };
      
      console.log('Using direct application data:', { email: applicationData.email, firstName: applicationData.firstName, lastName: applicationData.lastName, jobTitle: applicationData.jobTitle });
    } else {
      console.error('Invalid request: missing required data');
      return new Response(
        JSON.stringify({ error: 'Invalid request: either applicationId or direct application data (email, firstName, lastName, jobTitle) must be provided' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
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

    // Create modern, Outlook-compatible email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="de" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Bewerbungsbestätigung - SAK Service GmbH</title>
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <style type="text/css">
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table { border-collapse: collapse !important; }
          img { border: 0; outline: none; text-decoration: none; }
          .outlook-gradient {
            background: #007BFF;
            background: -webkit-linear-gradient(135deg, #007BFF 0%, #8B5FBF 100%);
            background: -moz-linear-gradient(135deg, #007BFF 0%, #8B5FBF 100%);
            background: linear-gradient(135deg, #007BFF 0%, #8B5FBF 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#007BFF', endColorstr='#8B5FBF', GradientType=1);
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; background-color: #f8fafc;">
        <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="gradient" color="#007BFF" color2="#8B5FBF" angle="135"/>
        </v:background>
        <![endif]-->
        
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; padding: 40px 0;">
          <tr>
            <td align="center">
              <!-- Main Container -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
                
                <!-- Header with Gradient Background -->
                <tr>
                  <td class="outlook-gradient" style="background: linear-gradient(135deg, #007BFF 0%, #8B5FBF 100%); padding: 50px 40px; text-align: center;">
                    <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px; height: 140px;">
                      <v:fill type="gradient" color="#007BFF" color2="#8B5FBF" angle="135"/>
                      <v:textbox inset="0,0,0,0">
                    <![endif]-->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                            SAK Service GmbH
                          </h1>
                          <p style="color: rgba(255,255,255,0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">
                            Bewerbungsbestätigung
                          </p>
                        </td>
                      </tr>
                    </table>
                    <!--[if gte mso 9]>
                      </v:textbox>
                    </v:rect>
                    <![endif]-->
                  </td>
                </tr>

                <!-- Content Section -->
                <tr>
                  <td style="padding: 50px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      
                      <!-- Main Greeting -->
                      <tr>
                        <td>
                          <h2 style="color: #1a202c; margin: 0 0 30px 0; font-size: 26px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                            Vielen Dank für Ihre Bewerbung!
                          </h2>
                        </td>
                      </tr>
                      
                      <!-- Personal Greeting -->
                      <tr>
                        <td>
                           <p style="color: #4a5568; margin: 0 0 25px 0; font-size: 16px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                             Liebe/r ${applicationData.firstName} ${applicationData.lastName},
                           </p>
                        </td>
                      </tr>
                      
                      <!-- Introduction Text -->
                      <tr>
                        <td>
                          <p style="color: #4a5568; margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                            wir haben Ihre Bewerbung erfolgreich erhalten und danken Ihnen für Ihr Interesse an einer Zusammenarbeit mit der SAK Service GmbH.
                          </p>
                        </td>
                      </tr>

                      <!-- Job Details Card -->
                      <tr>
                        <td>
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius: 12px; margin: 30px 0; border-left: 5px solid #007BFF;">
                            <tr>
                              <td style="padding: 30px;">
                                <h3 style="color: #2d3748; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                                  📋 Bewerbungsdetails
                                </h3>
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tr>
                                    <td style="color: #4a5568; font-size: 15px; line-height: 1.8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                                       <p style="margin: 0 0 12px 0;"><strong style="color: #2d3748;">Position:</strong> ${applicationData.jobTitle}</p>
                                       <p style="margin: 0;"><strong style="color: #2d3748;">Bewerbungsdatum:</strong> ${new Date().toLocaleDateString('de-DE')}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Next Steps -->
                      <tr>
                        <td>
                          <p style="color: #4a5568; margin: 0 0 25px 0; font-size: 16px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                            Wir werden Ihre Unterlagen sorgfältig prüfen und uns in den nächsten Tagen bei Ihnen melden. Falls Sie Fragen haben, können Sie sich gerne jederzeit an uns wenden.
                          </p>
                        </td>
                      </tr>

                      <!-- Closing -->
                      <tr>
                        <td>
                          <p style="color: #4a5568; margin: 0 0 40px 0; font-size: 16px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                            Mit freundlichen Grüßen<br>
                            <strong style="color: #2d3748;">Ihr Team der SAK Service GmbH</strong>
                          </p>
                        </td>
                      </tr>

                      <!-- Contact Information Card -->
                      <tr>
                        <td>
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; border-radius: 12px; border: 2px solid #e2e8f0;">
                            <tr>
                              <td style="padding: 30px;">
                                <h4 style="color: #2d3748; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                                  📞 Kontaktinformationen
                                </h4>
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tr>
                                    <td style="color: #4a5568; font-size: 15px; line-height: 2.0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                                      <p style="margin: 0 0 10px 0;">📧 <strong>E-Mail:</strong> info@sak-service.de</p>
                                      <p style="margin: 0 0 10px 0;">📞 <strong>Telefon:</strong> +49 123 456 789</p>
                                      <p style="margin: 0;">🌐 <strong>Website:</strong> www.sak-service.de</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f1f5f9; padding: 30px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="color: #718096; margin: 0; font-size: 13px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                      Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese Nachricht.<br>
                      <span style="color: #a0aec0;">SAK Service GmbH - Ihr Partner für professionelle Dienstleistungen</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
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