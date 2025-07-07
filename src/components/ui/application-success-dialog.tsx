import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles } from 'lucide-react';
import { Confetti } from './confetti';

interface ApplicationSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
}

export const ApplicationSuccessDialog = ({
  open,
  onOpenChange,
  jobTitle
}: ApplicationSuccessDialogProps) => {
  return (
    <>
      <Confetti active={open} />
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-gradient-glass backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-green/10 rounded-lg"></div>
          
          <DialogHeader className="relative z-10 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-green/10 rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle className="h-8 w-8 text-neon-green" />
            </div>
            
            <DialogTitle className="text-2xl font-bold text-primary">
              Bewerbung erfolgreich gesendet!
            </DialogTitle>
            
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Sparkles className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">
                  Ihre Bewerbung für <strong className="text-primary">{jobTitle}</strong> wurde erfolgreich übermittelt
                </span>
                <Sparkles className="h-4 w-4 text-neon-green" />
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                Vielen Dank für Ihr Interesse! Wir werden Ihre Bewerbung sorgfältig prüfen und uns zeitnah bei Ihnen melden.
              </p>
              
              <div className="bg-gradient-to-r from-electric-blue/10 to-neon-green/10 rounded-lg p-4 border border-white/10">
                <p className="text-xs text-muted-foreground">
                  💼 Nächste Schritte: Unser HR-Team wird sich innerhalb von 5-7 Werktagen bei Ihnen melden
                </p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="relative z-10 pt-4">
            <Button 
              onClick={() => onOpenChange(false)}
              className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 text-white border-0 shadow-lg hover:shadow-xl"
            >
              Verstanden
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};