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
import { ApplicationSuccessDialog } from '@/components/ui/application-success-dialog';

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
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
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

      // Show success dialog immediately
      setShowSuccessDialog(true);

      // Send confirmation email asynchronously (don't block UI)
      supabase.functions.invoke('send-confirmation-email', {
        body: { 
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          jobTitle: jobTitle,
          useStoredKey: true
        }
      }).catch(emailError => {
        console.error('Error sending confirmation email:', emailError);
        // Don't show error to user as application was successful
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
    <>
      <ApplicationSuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        jobTitle={jobTitle}
      />
      
      <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-xl text-primary flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-3">
              <Upload className="h-4 w-4 text-neon-green" />
            </div>
            Jetzt bewerben
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Bewerben Sie sich für die Position: {jobTitle}
          </CardDescription>
        </CardHeader>
      <CardContent className="relative z-10">
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
                      <Input placeholder="Ihr Vorname" {...field} />
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
                      <Input placeholder="Ihr Nachname" {...field} />
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
                      <Input type="email" placeholder="ihre.email@beispiel.com" {...field} />
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
                    <Input placeholder="Ihre Straße und Hausnummer" {...field} />
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
                      <Input placeholder="Ihre PLZ" {...field} />
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
                      <Input placeholder="Ihre Stadt" {...field} />
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
                      <Input placeholder="Ihre Nationalität" {...field} />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="group bg-gradient-glass backdrop-blur-sm border border-white/20 hover:border-electric-blue/40 transition-all duration-300">
                <CardContent className="p-4">
                  <FormLabel className="text-primary group-hover:text-electric-blue transition-colors duration-300 flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-2">
                      <Upload className="h-3 w-3 text-electric-blue" />
                    </div>
                    Lebenslauf (erforderlich)
                  </FormLabel>
                  <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-border rounded-md cursor-pointer hover:bg-muted/50 transition-colors duration-300">
                    <Upload className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {cvFile ? cvFile.name : 'PDF/Word hochladen'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-glass backdrop-blur-sm border border-white/20 hover:border-neon-green/40 transition-all duration-300">
                <CardContent className="p-4">
                  <FormLabel className="text-primary group-hover:text-neon-green transition-colors duration-300 flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-2">
                      <Upload className="h-3 w-3 text-neon-green" />
                    </div>
                    Anschreiben (optional)
                  </FormLabel>
                  <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-border rounded-md cursor-pointer hover:bg-muted/50 transition-colors duration-300">
                    <Upload className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {coverLetterFile ? coverLetterFile.name : 'PDF/Word hochladen'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCoverLetterFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </CardContent>
              </Card>
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
              className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 text-white border-0 shadow-lg hover:shadow-xl" 
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
    </>
  );
};

export default ApplicationForm;