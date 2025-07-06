
import { useState, useEffect } from 'react';
import { Globe, ChevronRight } from 'lucide-react';

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
    <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center animate-glow">
          <Globe className="h-6 w-6 text-white" />
        </div>
        <ChevronRight className="h-5 w-5 text-primary animate-pulse" />
      </div>
      <div className="text-2xl mb-2">{currentLang.flag}</div>
      <div className="text-lg font-semibold text-primary mb-1">{currentLang.name}</div>
      <p className="text-sm text-muted-foreground">Verfügbar 24/7</p>
    </div>
  );
};

export default LanguageSelector;
