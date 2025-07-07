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
        <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-xl">
          
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center animate-scale-in border-2 border-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Bewerbung erfolgreich gesendet!
            </DialogTitle>
            
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <span className="text-sm">
                  Ihre Bewerbung für <strong className="text-gray-900">{jobTitle}</strong> wurde erfolgreich übermittelt
                </span>
                <Sparkles className="h-4 w-4 text-green-500" />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Vielen Dank für Ihr Interesse! Wir werden Ihre Bewerbung sorgfältig prüfen und uns zeitnah bei Ihnen melden.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-xs text-gray-700">
                  💼 Nächste Schritte: Unser HR-Team wird sich innerhalb von 5-7 Werktagen bei Ihnen melden
                </p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="pt-4">
            <Button 
              onClick={() => onOpenChange(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white"
            >
              Verstanden
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};