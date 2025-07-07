import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, DollarSign, Briefcase, Clock, User } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import ApplicationForm from '@/components/career/ApplicationForm';
import { useToast } from '@/hooks/use-toast';

interface Job {
  id: string;
  title: string;
  about_position: string;
  qualifications: string;
  responsibilities: string;
  benefits: string;
  salary: string;
  employment_type: string;
  location: string;
  experience_required: string;
  application_deadline: string;
}

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      setJob(data);
    } catch (error) {
      console.error('Error fetching job:', error);
      toast({
        title: 'Fehler',
        description: 'Stellenanzeige konnte nicht geladen werden.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
        <Navigation />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
        <Navigation />
        <div className="container mx-auto px-6 py-24">
          <Card className="text-center p-8 max-w-2xl mx-auto">
            <CardContent>
              <h1 className="text-2xl font-bold mb-4">Stellenanzeige nicht gefunden</h1>
              <p className="text-muted-foreground">
                Die angeforderte Stellenanzeige existiert nicht oder ist nicht mehr verfügbar.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        {/* Job Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                {job.salary && (
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                )}
                {job.employment_type && (
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.employment_type}
                  </div>
                )}
                {job.location && (
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                )}
                {job.experience_required && (
                  <div className="flex items-center text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    {job.experience_required}
                  </div>
                )}
              </div>
            </div>
            {job.application_deadline && (
              <Badge variant="outline" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Bis {new Date(job.application_deadline).toLocaleDateString('de-DE')}
              </Badge>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-3">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-6">
            {job.about_position && (
              <Card>
                <CardHeader>
                  <CardTitle>Über die Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{job.about_position}</p>
                </CardContent>
              </Card>
            )}

            {job.qualifications && (
              <Card>
                <CardHeader>
                  <CardTitle>Ihre Qualifikationen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{job.qualifications}</p>
                </CardContent>
              </Card>
            )}

            {job.responsibilities && (
              <Card>
                <CardHeader>
                  <CardTitle>Ihre Aufgaben</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{job.responsibilities}</p>
                </CardContent>
              </Card>
            )}

            {job.benefits && (
              <Card>
                <CardHeader>
                  <CardTitle>Was wir Ihnen bieten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{job.benefits}</p>
                </CardContent>
              </Card>
            )}

            {/* Facts Card */}
            <Card>
              <CardHeader>
                <CardTitle>Daten & Fakten</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                {job.salary && (
                  <div>
                    <p className="font-medium">Gehalt</p>
                    <p className="text-muted-foreground">{job.salary}</p>
                  </div>
                )}
                {job.employment_type && (
                  <div>
                    <p className="font-medium">Anstellungsmodell</p>
                    <p className="text-muted-foreground">{job.employment_type}</p>
                  </div>
                )}
                {job.location && (
                  <div>
                    <p className="font-medium">Standort</p>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                )}
                {job.experience_required && (
                  <div>
                    <p className="font-medium">Vorerfahrung</p>
                    <p className="text-muted-foreground">{job.experience_required}</p>
                  </div>
                )}
                {job.application_deadline && (
                  <div>
                    <p className="font-medium">Bewerbungsfrist</p>
                    <p className="text-muted-foreground">
                      {new Date(job.application_deadline).toLocaleDateString('de-DE')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <ApplicationForm jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;