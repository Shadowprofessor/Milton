
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 bg-space-dark flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center max-w-md">
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-space-cyan/30"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-space-cyan animate-spin"
            style={{ animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-space-cyan/20 rounded-full animate-pulse-bright"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-orbitron mb-2 text-white">
          <span className="animate-flicker">INITIALIZING SYSTEMS</span>
        </h2>
        
        <div className="w-72 h-2 bg-muted rounded-full mb-3 overflow-hidden">
          <div 
            className="h-full bg-space-cyan transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-muted-foreground font-mono text-sm">
          {progress.toFixed(0)}% - <span className="text-space-cyan">Launching Cosmic Odyssey</span>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground opacity-70 max-w-xs text-center">
          "The cosmos is within us. We are made of star-stuff." - Carl Sagan
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
