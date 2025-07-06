
import { useState, useEffect } from 'react';
import { Phone, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="hover:scale-105 transition-all duration-300 border-primary/20 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div className="flex items-center space-x-1 text-neon-green text-xs font-semibold">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span>LIVE</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {activeCallsCount}
          </div>
          <CardTitle className="text-sm text-muted-foreground">Aktive Gespräche</CardTitle>
          <div className="flex items-center space-x-1 text-xs text-neon-green">
            <TrendingUp className="h-3 w-3" />
            <span>+12% heute</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveCounter;
