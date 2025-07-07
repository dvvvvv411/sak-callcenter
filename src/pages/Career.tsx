import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, DollarSign, Briefcase } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { useToast } from '@/hooks/use-toast';

interface Job {
  id: string;
  title: string;
  about_position: string;
  salary: string;
  employment_type: string;
  location: string;
  application_deadline: string;
  created_at: string;
}

const Career = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: 'Fehler',
        description: 'Stellenanzeigen konnten nicht geladen werden.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    'Flexible Arbeitszeiten',
    'Homeoffice-Möglichkeiten',
    'Weiterbildungsmöglichkeiten',
    'Betriebliche Altersvorsorge',
    'Gesundheitsförderung',
    'Teamevents',
    'Modernes Arbeitsumfeld',
    'Firmenwagen'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Karriere bei <span className="text-primary">SAK</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der KI-gestützten Kundenbetreuung mit.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Unsere Vorteile
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <p className="font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Jobs Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Offene Positionen
          </h2>
          
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : jobs.length === 0 ? (
            <Card className="text-center p-8">
              <CardContent>
                <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Derzeit keine offenen Stellen</h3>
                <p className="text-muted-foreground">
                  Behalten Sie diese Seite im Auge oder senden Sie uns eine Initiativbewerbung.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base">
                          {job.about_position}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">Neu</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {job.salary && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {job.salary}
                        </div>
                      )}
                      {job.employment_type && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {job.employment_type}
                        </div>
                      )}
                      {job.location && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                      )}
                      {job.application_deadline && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(job.application_deadline).toLocaleDateString('de-DE')}
                        </div>
                      )}
                    </div>
                    <Link to={`/job/${job.id}`}>
                      <Button className="w-full">Details ansehen</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;