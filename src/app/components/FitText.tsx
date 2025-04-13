'use client';

import { useEffect, useRef } from 'react';
import fitty from 'fitty';

type FitTextProps = {
  children: string;
  className?: string;
};

export default function FitText({ children, className }: FitTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const fitInstance = fitty(textRef.current, {
        minSize: 16,
        maxSize: 200,
        multiLine: false,
      });

      return () => {
        fitInstance.unsubscribe();
      };
    }
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
