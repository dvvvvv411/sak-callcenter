-- Create jobs table for job postings
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  about_position TEXT,
  qualifications TEXT,
  responsibilities TEXT,
  benefits TEXT,
  application_deadline DATE,
  salary TEXT,
  employment_type TEXT,
  location TEXT,
  experience_required TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create applications table for job applications
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  street_address TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  city TEXT NOT NULL,
  birth_date DATE NOT NULL,
  nationality TEXT NOT NULL,
  marital_status TEXT NOT NULL,
  languages TEXT[] NOT NULL DEFAULT '{}',
  cv_file_url TEXT,
  cover_letter_file_url TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Jobs policies - public can view active jobs
CREATE POLICY "Anyone can view active jobs" 
ON public.jobs 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage jobs" 
ON public.jobs 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Applications policies - anyone can insert, admins can view all
CREATE POLICY "Anyone can submit applications" 
ON public.applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all applications" 
ON public.applications 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add triggers for updated_at
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for application files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('applications', 'applications', false);

-- Storage policies for applications
CREATE POLICY "Anyone can upload application files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'applications');

CREATE POLICY "Admins can view application files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'applications' AND has_role(auth.uid(), 'admin'::app_role));