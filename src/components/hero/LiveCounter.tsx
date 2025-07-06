
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const LiveCounter = () => {
  const [activeCallsCount, setActiveCallsCount] = useState(247);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCallsCount(prev => {
        const change = Math.floor(Math.random() * 6) - 2; // -2 to +3
        const newCount = prev + change;
        return Math.max(200, Math.min(300, newCount)); // Keep between 200-300
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
      </div>
      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {activeCallsCount}
      </div>
      <p className="text-sm text-muted-foreground">Aktive Gespräche</p>
      <div className="mt-3 text-xs text-neon-green">●LIVE</div>
    </div>
  );
};

export default LiveCounter;
