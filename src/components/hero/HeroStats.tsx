
import { Star, Clock, Users } from 'lucide-react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center animate-slide-up">
        <div className="flex items-center justify-center mb-2">
          <Star className="h-6 w-6 text-yellow-500 mr-1" />
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">4.9</div>
        </div>
        <p className="text-sm text-muted-foreground">Kundenbewertung</p>
      </div>
      <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
        <div className="flex items-center justify-center mb-2">
          <Clock className="h-6 w-6 text-neon-green mr-1" />
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">&lt;3s</div>
        </div>
        <p className="text-sm text-muted-foreground">Antwortzeit</p>
      </div>
      <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
        <div className="flex items-center justify-center mb-2">
          <Users className="h-6 w-6 text-electric-blue mr-1" />
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">12</div>
        </div>
        <p className="text-sm text-muted-foreground">Sprachen</p>
      </div>
    </div>
  );
};

export default HeroStats;
