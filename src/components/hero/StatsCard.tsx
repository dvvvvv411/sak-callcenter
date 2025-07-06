
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Zufriedene Kunden', color: 'text-primary' },
  { icon: Clock, value: '<5s', label: 'Antwortzeit', color: 'text-secondary' },
  { icon: TrendingUp, value: '+25%', label: 'Mehr Leads', color: 'text-neon-green' },
  { icon: Award, value: '7 Jahre', label: 'Erfahrung', color: 'text-primary' }
];

const StatsCard = () => {
  return (
    <Card className="hover:scale-105 transition-all duration-300 border-primary/20 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-muted-foreground">Unsere Erfolge</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center space-y-1">
                <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-primary/10 flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <div className={`text-lg font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
