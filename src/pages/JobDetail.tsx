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

  const formatBulletPoints = (text: string) => {
    return text.split('\n').filter(line => line.trim()).map((line, index) => (
      <li key={index} className="text-muted-foreground leading-relaxed">{line.trim()}</li>
    ));
  };

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background matching Career page */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-electric-blue/3 to-neon-green/3 rounded-full blur-3xl opacity-30"></div>
      
      <Navigation />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Job Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight animate-fade-in">
              {job.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              {job.salary && (
                <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-2">
                    <DollarSign className="h-4 w-4 text-neon-green" />
                  </div>
                  {job.salary}
                </div>
              )}
              {job.employment_type && (
                <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-2">
                    <Briefcase className="h-4 w-4 text-electric-blue" />
                  </div>
                  {job.employment_type}
                </div>
              )}
              {job.location && (
                <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-2">
                    <MapPin className="h-4 w-4 text-neon-green" />
                  </div>
                  {job.location}
                </div>
              )}
              {job.experience_required && (
                <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-2">
                    <User className="h-4 w-4 text-electric-blue" />
                  </div>
                  {job.experience_required}
                </div>
              )}
            </div>
            {job.application_deadline && (
              <div className="mt-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Badge variant="outline" className="bg-gradient-glass backdrop-blur-sm border border-white/20 text-primary px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2 text-neon-green" />
                  Bewerbungsfrist: {new Date(job.application_deadline).toLocaleDateString('de-DE')}
                </Badge>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          {/* Left Column - Facts Card (1/3) */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 animate-fade-in sticky top-8" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-3">
                    <Briefcase className="h-4 w-4 text-electric-blue" />
                  </div>
                  Daten & Fakten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {job.salary && (
                  <div className="group">
                    <p className="font-medium text-primary group-hover:text-electric-blue transition-colors duration-300">Gehalt</p>
                    <p className="text-muted-foreground">{job.salary}</p>
                  </div>
                )}
                {job.employment_type && (
                  <div className="group">
                    <p className="font-medium text-primary group-hover:text-electric-blue transition-colors duration-300">Anstellungsmodell</p>
                    <p className="text-muted-foreground">{job.employment_type}</p>
                  </div>
                )}
                {job.location && (
                  <div className="group">
                    <p className="font-medium text-primary group-hover:text-electric-blue transition-colors duration-300">Standort</p>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                )}
                {job.experience_required && (
                  <div className="group">
                    <p className="font-medium text-primary group-hover:text-electric-blue transition-colors duration-300">Vorerfahrung</p>
                    <p className="text-muted-foreground">{job.experience_required}</p>
                  </div>
                )}
                {job.application_deadline && (
                  <div className="group">
                    <p className="font-medium text-primary group-hover:text-electric-blue transition-colors duration-300">Bewerbungsfrist</p>
                    <p className="text-muted-foreground">
                      {new Date(job.application_deadline).toLocaleDateString('de-DE')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Job Details (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {job.about_position && (
              <Card className="group bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-primary group-hover:text-electric-blue transition-colors duration-300 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-neon-green" />
                    </div>
                    Über die Position
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="whitespace-pre-wrap text-muted-foreground leading-relaxed">{job.about_position}</p>
                </CardContent>
              </Card>
            )}

            {job.qualifications && (
              <Card className="group bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-primary group-hover:text-electric-blue transition-colors duration-300 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-electric-blue" />
                    </div>
                    Ihre Qualifikationen
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="list-disc list-inside space-y-2">
                    {formatBulletPoints(job.qualifications)}
                  </ul>
                </CardContent>
              </Card>
            )}

            {job.responsibilities && (
              <Card className="group bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-primary group-hover:text-electric-blue transition-colors duration-300 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-3">
                      <Briefcase className="h-4 w-4 text-neon-green" />
                    </div>
                    Ihre Aufgaben
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="list-disc list-inside space-y-2">
                    {formatBulletPoints(job.responsibilities)}
                  </ul>
                </CardContent>
              </Card>
            )}

            {job.benefits && (
              <Card className="group bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-primary group-hover:text-electric-blue transition-colors duration-300 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-3">
                      <DollarSign className="h-4 w-4 text-electric-blue" />
                    </div>
                    Was wir Ihnen bieten
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="list-disc list-inside space-y-2">
                    {formatBulletPoints(job.benefits)}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Application Form - Full width of right column */}
            <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
              <ApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;