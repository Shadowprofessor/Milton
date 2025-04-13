import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  useEffect(() => {
    // In a real implementation, we would apply different theme classes
    // For this example, we'll just keep the dark mode always on
    // document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative h-7 w-14 rounded-full transition-colors duration-300",
        isDarkMode ? "bg-space-blue" : "bg-space-orange"
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 left-0.5 h-6 w-6 rounded-full transition-transform duration-300 flex items-center justify-center",
          isDarkMode ? "bg-space-dark transform translate-x-7" : "bg-white"
        )}
      >
        {isDarkMode ? (
          <Moon size={16} className="text-space-blue" />
        ) : (
          <Sun size={16} className="text-space-orange" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
