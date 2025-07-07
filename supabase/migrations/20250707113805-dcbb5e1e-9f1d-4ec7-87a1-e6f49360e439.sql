-- Create email configuration table
CREATE TABLE public.email_config (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  resend_api_key text,
  sender_email text DEFAULT 'noreply@sakservice.de',
  sender_name text DEFAULT 'SAK Service GmbH',
  reply_to_email text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_config ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can manage email config" 
ON public.email_config 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert default configuration
INSERT INTO public.email_config (sender_email, sender_name) 
VALUES ('noreply@sakservice.de', 'SAK Service GmbH');

-- Add email sent tracking to applications table
ALTER TABLE public.applications 
ADD COLUMN confirmation_email_sent boolean DEFAULT false,
ADD COLUMN confirmation_email_sent_at timestamp with time zone;

-- Create trigger for automatic timestamp updates on email_config
CREATE TRIGGER update_email_config_updated_at
BEFORE UPDATE ON public.email_config
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();