import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Users, Shield, Settings, BarChart3, Briefcase, FileText } from 'lucide-react';

interface Profile {
  id: string;
  user_id: string;
  display_name: string;
  email: string;
  created_at: string;
}

interface UserRole {
  user_id: string;
  role: string;
}

const Admin = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    newUsersThisMonth: 0
  });

  useEffect(() => {
    fetchProfiles();
    fetchJobs();
    fetchApplications();
    fetchStats();
  }, []);

  const fetchProfiles = async () => {
    try {
      // Fetch profiles
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch user roles
      const { data: rolesData, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      setProfiles(profilesData || []);
      setUserRoles(rolesData || []);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      toast({
        title: 'Fehler',
        description: 'Benutzerprofile konnten nicht geladen werden.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      // Total users
      const { count: totalUsers } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Total admins
      const { count: totalAdmins } = await supabase
        .from('user_roles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'admin');

      // New users this month
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const { count: newUsersThisMonth } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', startOfMonth.toISOString());

      setStats({
        totalUsers: totalUsers || 0,
        totalAdmins: totalAdmins || 0,
        newUsersThisMonth: newUsersThisMonth || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const updateUserRole = async (userId: string, newRole: 'admin' | 'user') => {
    try {
      // First, remove existing roles
      await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId);

      // Then add the new role
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role: newRole });

      if (error) throw error;

      toast({
        title: 'Rolle aktualisiert',
        description: `Benutzerrolle wurde erfolgreich zu ${newRole} geändert.`
      });

      fetchProfiles();
      fetchStats();
    } catch (error) {
      console.error('Error updating role:', error);
      toast({
        title: 'Fehler',
        description: 'Rolle konnte nicht aktualisiert werden.',
        variant: 'destructive'
      });
    }
  };

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*, jobs(title)')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Verwalten Sie Benutzer und Systemeinstellungen</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Benutzer gesamt</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Administratoren</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalAdmins}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Neue Benutzer</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.newUsersThisMonth}</div>
              <p className="text-xs text-muted-foreground">Diesen Monat</p>
            </CardContent>
          </Card>
        </div>

        {/* Users Management */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Benutzer</TabsTrigger>
            <TabsTrigger value="jobs">Stellen</TabsTrigger>
            <TabsTrigger value="applications">Bewerbungen</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Benutzerverwaltung</CardTitle>
                <CardDescription>
                  Verwalten Sie Benutzerrollen und -berechtigungen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profiles.map((profile) => {
                    const roleData = userRoles.find(role => role.user_id === profile.user_id);
                    const userRole = roleData?.role || 'user';
                    const isCurrentUser = profile.user_id === user?.id;
                    
                    return (
                      <div
                        key={profile.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{profile.display_name}</p>
                            <p className="text-sm text-muted-foreground">{profile.email}</p>
                            <p className="text-xs text-muted-foreground">
                              Registriert: {new Date(profile.created_at).toLocaleDateString('de-DE')}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Badge variant={userRole === 'admin' ? 'default' : 'secondary'}>
                            {userRole === 'admin' ? 'Administrator' : 'Benutzer'}
                          </Badge>
                          
                          {!isCurrentUser && (
                            <Select
                              value={userRole}
                              onValueChange={(value: 'admin' | 'user') => 
                                updateUserRole(profile.user_id, value)
                              }
                            >
                              <SelectTrigger className="w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="user">Benutzer</SelectItem>
                                <SelectItem value="admin">Administrator</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Stellenverwaltung</CardTitle>
                <CardDescription>Verwalten Sie Stellenanzeigen</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titel</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Erstellt</TableHead>
                      <TableHead>Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jobs.map((job) => (
                      <TableRow key={job.id}>
                        <TableCell className="font-medium">{job.title}</TableCell>
                        <TableCell>
                          <Badge variant={job.is_active ? 'default' : 'secondary'}>
                            {job.is_active ? 'Aktiv' : 'Inaktiv'}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(job.created_at).toLocaleDateString('de-DE')}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Bearbeiten</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Bewerbungen</CardTitle>
                <CardDescription>Übersicht aller eingegangenen Bewerbungen</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Datum & Uhrzeit</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>E-Mail</TableHead>
                      <TableHead>Telefon</TableHead>
                      <TableHead>Fremdsprachen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>
                          {new Date(app.created_at).toLocaleString('de-DE')}
                        </TableCell>
                        <TableCell className="font-medium">
                          {app.first_name} {app.last_name}
                        </TableCell>
                        <TableCell>{app.email}</TableCell>
                        <TableCell>{app.phone}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {app.languages?.join(', ') || 'Keine Angabe'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;