import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const jobSchema = z.object({
  title: z.string().min(1, 'Titel ist erforderlich'),
  about_position: z.string().optional(),
  qualifications: z.string().optional(),
  responsibilities: z.string().optional(),
  benefits: z.string().optional(),
  salary: z.string().optional(),
  employment_type: z.string().optional(),
  location: z.string().optional(),
  experience_required: z.string().optional(),
  application_deadline: z.string().optional(),
  is_active: z.boolean().default(true),
});

type JobFormData = z.infer<typeof jobSchema>;

interface JobManagementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job?: any;
  onSuccess: () => void;
}

export const JobManagementDialog = ({ open, onOpenChange, job, onSuccess }: JobManagementDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const isEditing = !!job;

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      about_position: '',
      qualifications: '',
      responsibilities: '',
      benefits: '',
      salary: '',
      employment_type: '',
      location: '',
      experience_required: '',
      application_deadline: '',
      is_active: true,
    },
  });

  useEffect(() => {
    if (job) {
      form.reset({
        title: job.title || '',
        about_position: job.about_position || '',
        qualifications: job.qualifications || '',
        responsibilities: job.responsibilities || '',
        benefits: job.benefits || '',
        salary: job.salary || '',
        employment_type: job.employment_type || '',
        location: job.location || '',
        experience_required: job.experience_required || '',
        application_deadline: job.application_deadline ? new Date(job.application_deadline).toISOString().split('T')[0] : '',
        is_active: job.is_active !== false,
      });
    } else {
      form.reset({
        title: '',
        about_position: '',
        qualifications: '',
        responsibilities: '',
        benefits: '',
        salary: '',
        employment_type: '',
        location: '',
        experience_required: '',
        application_deadline: '',
        is_active: true,
      });
    }
  }, [job, form]);

  const onSubmit = async (data: JobFormData) => {
    setLoading(true);
    try {
      const jobData = {
        title: data.title,
        about_position: data.about_position || null,
        qualifications: data.qualifications || null,
        responsibilities: data.responsibilities || null,
        benefits: data.benefits || null,
        salary: data.salary || null,
        employment_type: data.employment_type || null,
        location: data.location || null,
        experience_required: data.experience_required || null,
        application_deadline: data.application_deadline || null,
        is_active: data.is_active,
      };

      let error;
      if (isEditing) {
        ({ error } = await supabase
          .from('jobs')
          .update(jobData)
          .eq('id', job.id));
      } else {
        ({ error } = await supabase
          .from('jobs')
          .insert([jobData]));
      }

      if (error) throw error;

      toast({
        title: 'Erfolgreich',
        description: isEditing ? 'Stelle wurde aktualisiert.' : 'Neue Stelle wurde erstellt.',
      });

      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving job:', error);
      toast({
        title: 'Fehler',
        description: 'Stelle konnte nicht gespeichert werden.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Stelle bearbeiten' : 'Neue Stelle erstellen'}
          </DialogTitle>
          <DialogDescription>
            {isEditing ? 'Bearbeiten Sie die Stelleninformationen.' : 'Erstellen Sie eine neue Stellenanzeige.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titel *</FormLabel>
                  <FormControl>
                    <Input placeholder="z.B. Frontend Entwickler" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="employment_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Beschäftigungsart</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Wählen Sie..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Vollzeit">Vollzeit</SelectItem>
                        <SelectItem value="Teilzeit">Teilzeit</SelectItem>
                        <SelectItem value="Freelance">Freelance</SelectItem>
                        <SelectItem value="Praktikum">Praktikum</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Standort</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. Berlin, Remote" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gehalt</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. 50.000€ - 70.000€" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience_required"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Erforderliche Erfahrung</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. 3+ Jahre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="application_deadline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bewerbungsfrist</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="about_position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Über die Position</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Beschreiben Sie die Position..."
                      className="min-h-20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="responsibilities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aufgaben</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Listen Sie die Hauptaufgaben auf..."
                      className="min-h-20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="qualifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qualifikationen</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Listen Sie die erforderlichen Qualifikationen auf..."
                      className="min-h-20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="benefits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vorteile</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Listen Sie die Vorteile auf..."
                      className="min-h-20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Aktiv</FormLabel>
                    <FormDescription>
                      Stelle ist öffentlich sichtbar und nimmt Bewerbungen entgegen.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Abbrechen
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Speichern...' : isEditing ? 'Aktualisieren' : 'Erstellen'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};