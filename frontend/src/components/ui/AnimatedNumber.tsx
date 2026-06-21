import React, { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  formatter?: (val: number) => string;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 300,
  formatter = (val) => val.toLocaleString(),
  className = ""
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const startVal = prevValueRef.current;
    const endVal = value;
    if (startVal === endVal) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutQuad
      const easeProgress = progress * (2 - progress);
      
      const currentVal = startVal + (endVal - startVal) * easeProgress;
      setDisplayValue(Math.round(currentVal));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        prevValueRef.current = endVal;
      }
    };

    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }
    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [value, duration]);

  return <span className={className}>{formatter(displayValue)}</span>;
};
