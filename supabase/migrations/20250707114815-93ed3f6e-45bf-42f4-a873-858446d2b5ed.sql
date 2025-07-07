-- Grant INSERT permission to anon role for applications table
GRANT INSERT ON public.applications TO anon;

-- Grant SELECT permission to anon role for applications table (needed for RLS evaluation)
GRANT SELECT ON public.applications TO anon;

-- Grant permissions for storage bucket access to anon role
GRANT SELECT, INSERT ON storage.objects TO anon;
GRANT SELECT ON storage.buckets TO anon;