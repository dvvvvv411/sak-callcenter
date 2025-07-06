
import { useState, useEffect } from 'react';
import { Globe, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const languages = [
  { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
  { code: 'NL', name: 'Nederlands', flag: '🇳🇱' }
];

const LanguageSelector = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % languages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentLang = languages[currentIndex];

  return (
    <Card className="hover:scale-105 transition-all duration-300 border-secondary/20 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
            <Globe className="h-5 w-5 text-white" />
          </div>
          <ChevronRight className="h-4 w-4 text-primary animate-pulse" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl">{currentLang.flag}</div>
          <CardTitle className="text-sm font-semibold text-primary">{currentLang.name}</CardTitle>
          <p className="text-xs text-muted-foreground">Verfügbar 24/7</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageSelector;
