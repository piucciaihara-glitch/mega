import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  // Set time to 10 minutes from now (fake urgency)
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-1 font-mono font-bold text-white bg-black/80 px-2 py-1 rounded">
      <span className="text-yellow-400 text-sm">EXPIRA EM:</span>
      <span className="text-lg tracking-widest text-red-500 bg-white px-1 rounded-sm">{formatTime(timeLeft)}</span>
    </div>
  );
};