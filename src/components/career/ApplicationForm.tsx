import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Upload, Loader2 } from 'lucide-react';

const languages = [
  'Deutsch',
  'Englisch', 
  'Französisch',
  'Spanisch',
  'Italienisch',
  'Portugiesisch',
  'Russisch',
  'Chinesisch',
  'Japanisch',
  'Arabisch',
  'Türkisch',
  'Niederländisch'
];

const maritalStatusOptions = [
  'Ledig',
  'Verheiratet',
  'Geschieden',
  'Verwitwet',
  'Eingetragene Partnerschaft'
];

const applicationSchema = z.object({
  firstName: z.string().min(2, 'Vorname ist erforderlich'),
  lastName: z.string().min(2, 'Nachname ist erforderlich'),
  email: z.string().email('Gültige E-Mail-Adresse erforderlich'),
  phone: z.string().min(10, 'Telefonnummer ist erforderlich'),
  streetAddress: z.string().min(5, 'Straße und Hausnummer erforderlich'),
  postalCode: z.string().min(5, 'PLZ ist erforderlich'),
  city: z.string().min(2, 'Stadt ist erforderlich'),
  birthDate: z.string().min(1, 'Geburtsdatum ist erforderlich'),
  nationality: z.string().min(2, 'Nationalität ist erforderlich'),
  maritalStatus: z.string().min(1, 'Familienstand ist erforderlich'),
  languages: z.array(z.string()).min(1, 'Mindestens eine Sprache erforderlich'),
  message: z.string().optional()
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

const ApplicationForm = ({ jobId, jobTitle }: ApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      streetAddress: '',
      postalCode: '',
      city: '',
      birthDate: '',
      nationality: '',
      maritalStatus: '',
      languages: [],
      message: ''
    }
  });

  const uploadFile = async (file: File, type: 'cv' | 'cover-letter') => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${type}.${fileExt}`;
    const filePath = `${jobId}/${fileName}`;

    const { error } = await supabase.storage
      .from('applications')
      .upload(filePath, file);

    if (error) throw error;
    return filePath;
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      let cvFileUrl = '';
      let coverLetterFileUrl = '';

      // Upload files if provided
      if (cvFile) {
        cvFileUrl = await uploadFile(cvFile, 'cv');
      }
      if (coverLetterFile) {
        coverLetterFileUrl = await uploadFile(coverLetterFile, 'cover-letter');
      }

      // Submit application
      const { error } = await supabase
        .from('applications')
        .insert({
          job_id: jobId,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          street_address: data.streetAddress,
          postal_code: data.postalCode,
          city: data.city,
          birth_date: data.birthDate,
          nationality: data.nationality,
          marital_status: data.maritalStatus,
          languages: selectedLanguages,
          cv_file_url: cvFileUrl,
          cover_letter_file_url: coverLetterFileUrl,
          message: data.message
        });

      if (error) throw error;

      toast({
        title: 'Bewerbung gesendet!',
        description: 'Ihre Bewerbung wurde erfolgreich übermittelt. Wir melden uns bald bei Ihnen.'
      });

      // Reset form
      form.reset();
      setCvFile(null);
      setCoverLetterFile(null);
      setSelectedLanguages([]);
      
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: 'Fehler',
        description: 'Beim Senden der Bewerbung ist ein Fehler aufgetreten.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLanguageChange = (language: string) => {
    const newLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter(l => l !== language)
      : [...selectedLanguages, language];
    
    setSelectedLanguages(newLanguages);
    form.setValue('languages', newLanguages);
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Jetzt bewerben</CardTitle>
        <CardDescription>
          Bewerben Sie sich für die Position: {jobTitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormControl>
                      <Input placeholder="Max" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachname</FormLabel>
                    <FormControl>
                      <Input placeholder="Mustermann" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="max@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input placeholder="+49 123 456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address */}
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Straße und Hausnummer</FormLabel>
                  <FormControl>
                    <Input placeholder="Musterstraße 123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PLZ</FormLabel>
                    <FormControl>
                      <Input placeholder="12345" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stadt</FormLabel>
                    <FormControl>
                      <Input placeholder="Berlin" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Geburtsdatum</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationalität</FormLabel>
                    <FormControl>
                      <Input placeholder="Deutsch" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Familienstand</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie Ihren Familienstand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {maritalStatusOptions.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Languages */}
            <div>
              <FormLabel>Fremdsprachen</FormLabel>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {languages.map((language) => (
                  <label key={language} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleLanguageChange(language)}
                      className="rounded"
                    />
                    <span className="text-sm">{language}</span>
                  </label>
                ))}
              </div>
              {form.formState.errors.languages && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.languages.message}
                </p>
              )}
            </div>

            {/* File Uploads */}
            <div className="space-y-4">
              <div>
                <FormLabel>Lebenslauf (PDF/Word)</FormLabel>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-border rounded-md cursor-pointer hover:bg-muted/50">
                    <Upload className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {cvFile ? cvFile.name : 'Lebenslauf hochladen'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <FormLabel>Anschreiben (PDF/Word)</FormLabel>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-border rounded-md cursor-pointer hover:bg-muted/50">
                    <Upload className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {coverLetterFile ? coverLetterFile.name : 'Anschreiben hochladen'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCoverLetterFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachricht (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Zusätzliche Informationen..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Bewerbung wird gesendet...
                </>
              ) : (
                'Bewerbung absenden'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;