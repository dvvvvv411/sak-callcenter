import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Users, Shield, Settings, BarChart3, Briefcase, FileText, Plus, Edit, Trash2, Eye, Download, Mail, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { JobManagementDialog } from '@/components/admin/JobManagementDialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

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
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [jobDialogOpen, setJobDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    newUsersThisMonth: 0
  });
  
  // Resend state
  const [emailConfig, setEmailConfig] = useState<any>(null);
  const [resendingEmails, setResendingEmails] = useState<Set<string>>(new Set());

  useEffect(() => {
    document.title = "Admin Dashboard - SAK Service GmbH";
  }, []);

  useEffect(() => {
    fetchProfiles();
    fetchJobs();
    fetchApplications();
    fetchStats();
    fetchEmailConfig();
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

  const handleJobSuccess = () => {
    fetchJobs();
    setEditingJob(null);
  };

  const handleEditJob = (job: any) => {
    setEditingJob(job);
    setJobDialogOpen(true);
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', jobId);

      if (error) throw error;

      toast({
        title: 'Erfolgreich',
        description: 'Stelle wurde gelöscht.',
      });

      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
      toast({
        title: 'Fehler',
        description: 'Stelle konnte nicht gelöscht werden.',
        variant: 'destructive',
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

  const openPdfFile = async (fileUrl: string) => {
    if (!fileUrl) {
      toast({
        title: 'Fehler',
        description: 'Datei nicht verfügbar.',
        variant: 'destructive'
      });
      return;
    }

    try {
      const { data, error } = await supabase.storage
        .from('applications')
        .download(fileUrl);

      if (error) throw error;

      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error opening PDF:', error);
      toast({
        title: 'Fehler',
        description: 'PDF konnte nicht geöffnet werden.',
        variant: 'destructive'
      });
    }
  };

  const showApplicationDetail = (application: any) => {
    setSelectedApplication(application);
    setDetailDialogOpen(true);
  };

  const fetchEmailConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('email_config')
        .select('*')
        .single();
      
      if (error) {
        console.error('Error fetching email config:', error);
        return;
      }
      
      setEmailConfig(data);
    } catch (error) {
      console.error('Error fetching email config:', error);
    }
  };

  const updateEmailConfig = async (config: any) => {
    try {
      const { error } = await supabase
        .from('email_config')
        .update(config)
        .eq('id', emailConfig?.id || '');

      if (error) throw error;

      toast({
        title: 'Erfolgreich',
        description: 'E-Mail-Konfiguration wurde aktualisiert.',
      });

      fetchEmailConfig();
    } catch (error) {
      console.error('Error updating email config:', error);
      toast({
        title: 'Fehler',
        description: 'E-Mail-Konfiguration konnte nicht aktualisiert werden.',
        variant: 'destructive',
      });
    }
  };

  const resendConfirmationEmail = async (applicationId: string) => {
    setResendingEmails(prev => new Set(prev).add(applicationId));
    
    try {
      const { error } = await supabase.functions.invoke('send-confirmation-email', {
        body: { 
          applicationId,
          useStoredKey: true
        }
      });

      if (error) throw error;

      toast({
        title: 'E-Mail gesendet',
        description: 'Bestätigungs-E-Mail wurde erfolgreich gesendet.',
      });

      // Refresh applications to update email sent status
      fetchApplications();
    } catch (error) {
      console.error('Error resending email:', error);
      toast({
        title: 'Fehler',
        description: 'E-Mail konnte nicht gesendet werden.',
        variant: 'destructive',
      });
    } finally {
      setResendingEmails(prev => {
        const newSet = new Set(prev);
        newSet.delete(applicationId);
        return newSet;
      });
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

        {/* Admin Management */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Benutzer</TabsTrigger>
            <TabsTrigger value="jobs">Stellen</TabsTrigger>
            <TabsTrigger value="applications">Bewerbungen</TabsTrigger>
            <TabsTrigger value="resend">Resend</TabsTrigger>
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
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Stellenverwaltung</CardTitle>
                    <CardDescription>Verwalten Sie Stellenanzeigen</CardDescription>
                  </div>
                  <Button onClick={() => setJobDialogOpen(true)} className="bg-gradient-primary text-white border-0">
                    <Plus className="h-4 w-4 mr-2" />
                    Neue Stelle
                  </Button>
                </div>
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
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditJob(job)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Bearbeiten
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Löschen
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Stelle löschen</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Sind Sie sicher, dass Sie diese Stelle löschen möchten? 
                                    Diese Aktion kann nicht rückgängig gemacht werden.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDeleteJob(job.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Löschen
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
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
                          <TableHead>Telefonnummer</TableHead>
                          <TableHead>Adresse</TableHead>
                          <TableHead>Fremdsprachen</TableHead>
                          <TableHead>Aktionen</TableHead>
                        </TableRow>
                      </TableHeader>
                    <TableBody>
                      {applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>
                            {new Date(app.created_at).toLocaleDateString('de-DE')} {new Date(app.created_at).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                          </TableCell>
                          <TableCell className="font-medium">
                            {app.first_name} {app.last_name}
                          </TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>{app.phone}</TableCell>
                          <TableCell className="text-sm">
                            <div>{app.street_address}</div>
                            <div>{app.postal_code} {app.city}</div>
                          </TableCell>
                          <TableCell className="text-sm">
                            {app.languages?.length > 0 ? app.languages.join(', ') : '-'}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => showApplicationDetail(app)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                Details
                              </Button>
                              {app.cv_file_url && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => openPdfFile(app.cv_file_url)}
                                >
                                  <FileText className="h-4 w-4 mr-1" />
                                  CV
                                </Button>
                              )}
                               {app.cover_letter_file_url && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => openPdfFile(app.cover_letter_file_url)}
                                >
                                  <Download className="h-4 w-4 mr-1" />
                                  Anschreiben
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => resendConfirmationEmail(app.id)}
                                disabled={resendingEmails.has(app.id)}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                {resendingEmails.has(app.id) ? (
                                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                ) : (
                                  <Send className="h-4 w-4 mr-1" />
                                )}
                                {app.confirmation_email_sent ? 'E-Mail erneut senden' : 'E-Mail senden'}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resend">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Resend E-Mail Konfiguration
                </CardTitle>
                <CardDescription>
                  Konfigurieren Sie die E-Mail-Einstellungen für Bestätigungs-E-Mails
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {emailConfig && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="resend-api-key">Resend API Key</Label>
                        <Input
                          id="resend-api-key"
                          type="password"
                          placeholder="re_..."
                          value={emailConfig.resend_api_key || ''}
                          onChange={(e) => setEmailConfig({...emailConfig, resend_api_key: e.target.value})}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Ihr Resend API-Schlüssel für den E-Mail-Versand
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="sender-email">Absender E-Mail</Label>
                        <Input
                          id="sender-email"
                          type="email"
                          placeholder="noreply@sakservice.de"
                          value={emailConfig.sender_email || ''}
                          onChange={(e) => setEmailConfig({...emailConfig, sender_email: e.target.value})}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Die E-Mail-Adresse, von der die Bestätigungen gesendet werden
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="sender-name">Absender Name</Label>
                        <Input
                          id="sender-name"
                          placeholder="SAK Service GmbH"
                          value={emailConfig.sender_name || ''}
                          onChange={(e) => setEmailConfig({...emailConfig, sender_name: e.target.value})}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Der Name, der als Absender angezeigt wird
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="reply-to-email">Antwort-E-Mail (Optional)</Label>
                        <Input
                          id="reply-to-email"
                          type="email"
                          placeholder="info@sakservice.de"
                          value={emailConfig.reply_to_email || ''}
                          onChange={(e) => setEmailConfig({...emailConfig, reply_to_email: e.target.value})}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          E-Mail-Adresse für Antworten (falls abweichend vom Absender)
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <p>Letzte Aktualisierung: {emailConfig?.updated_at ? new Date(emailConfig.updated_at).toLocaleString('de-DE') : 'Nie'}</p>
                  </div>
                  <Button 
                    onClick={() => updateEmailConfig(emailConfig)}
                    className="bg-gradient-primary text-white border-0"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Konfiguration speichern
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Hinweise zur E-Mail-Konfiguration
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stellen Sie sicher, dass Ihre Domain bei Resend verifiziert ist</li>
                    <li>• Die Absender-E-Mail muss von einer verifizierten Domain stammen</li>
                    <li>• Bestätigungs-E-Mails werden automatisch nach jeder Bewerbung gesendet</li>
                    <li>• Sie können E-Mails auch manuell über den "Resend" Button neu senden</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Job Management Dialog */}
      <JobManagementDialog
        open={jobDialogOpen}
        onOpenChange={(open) => {
          setJobDialogOpen(open);
          if (!open) setEditingJob(null);
        }}
        job={editingJob}
        onSuccess={handleJobSuccess}
      />

      {/* Application Detail Dialog */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Bewerbungsdetails</DialogTitle>
            <DialogDescription>
              Vollständige Informationen zur Bewerbung
            </DialogDescription>
          </DialogHeader>
          
          {selectedApplication && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">PERSÖNLICHE DATEN</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {selectedApplication.first_name} {selectedApplication.last_name}</p>
                    <p><span className="font-medium">E-Mail:</span> {selectedApplication.email}</p>
                    <p><span className="font-medium">Telefon:</span> {selectedApplication.phone}</p>
                    <p><span className="font-medium">Geburtsdatum:</span> {new Date(selectedApplication.birth_date).toLocaleDateString('de-DE')}</p>
                    <p><span className="font-medium">Nationalität:</span> {selectedApplication.nationality}</p>
                    <p><span className="font-medium">Familienstand:</span> {selectedApplication.marital_status}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">ADRESSE</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Straße:</span> {selectedApplication.street_address}</p>
                    <p><span className="font-medium">PLZ/Stadt:</span> {selectedApplication.postal_code} {selectedApplication.city}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">FREMDSPRACHEN</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.languages?.map((lang: string, index: number) => (
                      <Badge key={index} variant="secondary">{lang}</Badge>
                    ))}
                  </div>
                </div>
                
                {selectedApplication.message && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-2">NACHRICHT</h3>
                    <p className="text-sm bg-muted p-3 rounded-md">{selectedApplication.message}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">DOKUMENTE</h3>
                  <div className="space-y-2">
                    {selectedApplication.cv_file_url && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openPdfFile(selectedApplication.cv_file_url)}
                        className="w-full justify-start"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Lebenslauf öffnen
                      </Button>
                    )}
                    {selectedApplication.cover_letter_file_url && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openPdfFile(selectedApplication.cover_letter_file_url)}
                        className="w-full justify-start"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Anschreiben öffnen
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Bewerbung eingereicht:</span> {new Date(selectedApplication.created_at).toLocaleString('de-DE')}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Stelle:</span> {selectedApplication.jobs?.title || 'Unbekannt'}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;