import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, DollarSign, Briefcase, ChevronRight, Clock, Home, GraduationCap, Shield } from 'lucide-react';
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
  useEffect(() => {
    document.title = "Karriere - SAK Service GmbH";
  }, []);

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
    { text: 'Flexible Arbeitszeiten', icon: 'Clock' },
    { text: 'Homeoffice-Möglichkeiten', icon: 'Home' },
    { text: 'Weiterbildungsmöglichkeiten', icon: 'GraduationCap' },
    { text: 'Betriebliche Altersvorsorge', icon: 'Shield' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return Clock;
      case 'Home': return Home;
      case 'GraduationCap': return GraduationCap;
      case 'Shield': return Shield;
      default: return Briefcase;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-electric-blue/3 to-neon-green/3 rounded-full blur-3xl opacity-30"></div>
      
      <Navigation />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-glass backdrop-blur-sm border border-white/20 text-sm font-medium text-primary mb-6 animate-fade-in">
            <Briefcase className="h-4 w-4 mr-2 text-neon-green" />
            Werde Teil unseres Teams
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
            Karriere bei <span className="bg-gradient-primary bg-clip-text text-transparent">SAK</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der KI-gestützten Kundenbetreuung mit.
          </p>
        </div>

        {/* Jobs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            Offene <span className="bg-gradient-primary bg-clip-text text-transparent">Positionen</span>
          </h2>
          
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : jobs.length === 0 ? (
            <Card className="text-center p-8 bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-xl animate-fade-in">
              <CardContent>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 rounded-3xl flex items-center justify-center">
                  <Briefcase className="h-10 w-10 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Derzeit keine offenen Stellen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Behalten Sie diese Seite im Auge oder senden Sie uns eine Initiativbewerbung.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobs.map((job, index) => (
                <Card key={job.id} className="group hover:scale-[1.02] transition-all duration-500 bg-gradient-glass backdrop-blur-xl border border-white/20 hover:border-electric-blue/40 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/10 animate-fade-in overflow-hidden" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2 text-primary group-hover:text-electric-blue transition-colors duration-300">{job.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {job.about_position}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-neon-green/20 to-neon-green/10 text-neon-green border-neon-green/20 font-medium">
                        Neu
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {job.salary && (
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-2">
                            <DollarSign className="h-4 w-4 text-neon-green" />
                          </div>
                          {job.salary}
                        </div>
                      )}
                      {job.employment_type && (
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-2">
                            <Briefcase className="h-4 w-4 text-electric-blue" />
                          </div>
                          {job.employment_type}
                        </div>
                      )}
                      {job.location && (
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mr-2">
                            <MapPin className="h-4 w-4 text-neon-green" />
                          </div>
                          {job.location}
                        </div>
                      )}
                      {job.application_deadline && (
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 flex items-center justify-center mr-2">
                            <Calendar className="h-4 w-4 text-electric-blue" />
                          </div>
                          {new Date(job.application_deadline).toLocaleDateString('de-DE')}
                        </div>
                      )}
                    </div>
                    <Link to={`/job/${job.id}`}>
                      <Button className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 text-white border-0 shadow-lg hover:shadow-xl">
                        Details ansehen
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            Unsere <span className="bg-gradient-secondary bg-clip-text text-transparent">Vorteile</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = getIcon(benefit.icon);
              return (
                <Card key={index} className="group text-center hover:scale-105 transition-all duration-300 bg-gradient-glass backdrop-blur-xl border border-white/20 hover:border-neon-green/40 shadow-lg hover:shadow-xl animate-fade-in" style={{animationDelay: `${0.9 + index * 0.1}s`}}>
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-neon-green" />
                    </div>
                    <p className="font-medium text-primary group-hover:text-neon-green transition-colors duration-300">{benefit.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;