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
      const duration = 3000;
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

        const particleCount = 50 * (timeLeft / duration);

        // Left side
        confetti({
          particleCount,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#007bff', '#8b5cf6', '#10b981', '#f59e0b']
        });

        // Right side  
        confetti({
          particleCount,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#007bff', '#8b5cf6', '#10b981', '#f59e0b']
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