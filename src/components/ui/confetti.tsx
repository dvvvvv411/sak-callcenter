import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  active: boolean;
  onComplete?: () => void;
}

export const Confetti = ({ active, onComplete }: ConfettiProps) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (active) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Create confetti burst
      const duration = 1500;
      const animationEnd = Date.now() + duration;
      
      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const runAnimation = () => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          onComplete?.();
          return;
        }

        const particleCount = 25 * (timeLeft / duration);

        // Left side
        confetti({
          particleCount: Math.ceil(particleCount / 2),
          angle: 60,
          spread: 45,
          origin: { x: 0 },
          colors: ['#2563eb', '#059669', '#dc2626', '#d97706']
        });

        // Right side  
        confetti({
          particleCount: Math.ceil(particleCount / 2),
          angle: 120,
          spread: 45,
          origin: { x: 1 },
          colors: ['#2563eb', '#059669', '#dc2626', '#d97706']
        });

        if (timeLeft > 0) {
          requestAnimationFrame(runAnimation);
        }
      };

      runAnimation();

      // Cleanup timeout
      timeoutRef.current = setTimeout(() => {
        onComplete?.();
      }, duration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [active, onComplete]);

  return null;
};