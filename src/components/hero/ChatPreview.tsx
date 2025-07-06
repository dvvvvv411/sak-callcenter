
import { useState, useEffect } from 'react';
import { MessageCircle, User, Headphones } from 'lucide-react';

const messages = [
  { type: 'customer', text: 'Hallo, ich brauche Hilfe', time: '14:32' },
  { type: 'agent', text: 'Gerne! Wie kann ich Ihnen helfen?', time: '14:32' },
  { type: 'customer', text: 'Es geht um meine Bestellung', time: '14:33' },
  { type: 'agent', text: 'Ich schaue das sofort für Sie nach', time: '14:33' }
];

const ChatPreview = () => {
  const [visibleMessages, setVisibleMessages] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev >= messages.length) {
          setTimeout(() => setVisibleMessages(1), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <div className="text-xs text-neon-green font-semibold">LIVE CHAT</div>
      </div>
      
      <div className="space-y-3 h-32 overflow-hidden">
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div 
            key={index}
            className={`flex items-start space-x-2 animate-slide-up ${
              message.type === 'agent' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              message.type === 'customer' ? 'bg-primary/20' : 'bg-secondary/20'
            }`}>
              {message.type === 'customer' ? 
                <User className="h-3 w-3 text-primary" /> : 
                <Headphones className="h-3 w-3 text-secondary" />
              }
            </div>
            <div className={`flex-1 max-w-[80%] ${
              message.type === 'agent' ? 'text-right' : ''
            }`}>
              <div className={`text-xs p-2 rounded-lg ${
                message.type === 'customer' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-secondary/10 text-secondary'
              }`}>
                {message.text}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{message.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPreview;
