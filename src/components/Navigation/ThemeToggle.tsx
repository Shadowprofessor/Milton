
"use client";

import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
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
      </Switch>
    </div>
  );
};

export default ThemeToggle;
