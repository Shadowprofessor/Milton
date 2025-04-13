
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Music2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useLocation } from 'react-router-dom';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

// Define soundtrack mapping by route
const SOUNDTRACK_MAPPING = {
  '/': '/assets/audio/echoes-in-the-void.mp3',      // Main menu/landing
  '/missions': '/assets/audio/charting-the-unknown.mp3', // Mission selection
  '/lore': '/assets/audio/memories-of-continuum.mp3',   // Lore section
  '/community': '/assets/audio/starborn-warpath.mp3',   // Community battles
  '/media': '/assets/audio/aetherion-silence.mp3',     // Media gallery
  '/leaderboard': '/assets/audio/starborn-warpath.mp3',  // Competitive section
};

const AudioControls = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentTrack, setCurrentTrack] = useState('');
  
  const location = useLocation();
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    // Create audio elements
    bgMusicRef.current = new Audio();
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = volume;
    
    hoverSoundRef.current = new Audio('/assets/audio/hover.mp3');
    clickSoundRef.current = new Audio('/assets/audio/click.mp3');
    
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, []);
  
  // Handle route-based soundtrack changes
  useEffect(() => {
    const currentPath = location.pathname;
    const newTrack = SOUNDTRACK_MAPPING[currentPath as keyof typeof SOUNDTRACK_MAPPING] || SOUNDTRACK_MAPPING['/'];
    
    if (newTrack !== currentTrack) {
      setCurrentTrack(newTrack);
      
      if (bgMusicRef.current && musicEnabled) {
        bgMusicRef.current.src = newTrack;
        bgMusicRef.current.load();
        bgMusicRef.current.play().catch(err => {
          console.log('Background music play failed:', err);
        });
      }
    }
  }, [location, musicEnabled, currentTrack]);
  
  // Handle music toggle
  useEffect(() => {
    if (bgMusicRef.current) {
      if (musicEnabled && currentTrack) {
        bgMusicRef.current.src = currentTrack;
        bgMusicRef.current.load();
        bgMusicRef.current.play().catch(err => {
          console.log('Background music play failed:', err);
          setMusicEnabled(false);
        });
      } else {
        bgMusicRef.current.pause();
      }
    }
  }, [musicEnabled, currentTrack]);
  
  // Handle volume change
  useEffect(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = volume;
    }
  }, [volume]);
  
  // Set up sound effects
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if ((target.tagName === 'A' || 
           target.tagName === 'BUTTON' || 
           target.getAttribute('role') === 'button' ||
           target.classList.contains('hoverable')) && 
          sfxEnabled && 
          hoverSoundRef.current) {
        hoverSoundRef.current.currentTime = 0;
        hoverSoundRef.current.volume = volume * 0.5;
        hoverSoundRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
    };
    
    const handleClick = () => {
      if (sfxEnabled && clickSoundRef.current) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.volume = volume * 0.7;
        clickSoundRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [sfxEnabled, volume]);

  // Get current soundtrack name for display
  const getCurrentSoundtrackName = () => {
    const pathToNameMap: Record<string, string> = {
      '/assets/audio/echoes-in-the-void.mp3': 'Echoes in the Void',
      '/assets/audio/charting-the-unknown.mp3': 'Charting the Unknown',
      '/assets/audio/memories-of-continuum.mp3': 'Memories of Continuum',
      '/assets/audio/starborn-warpath.mp3': 'Starborn Warpath',
      '/assets/audio/aetherion-silence.mp3': 'Aetherion Silence',
    };
    
    return pathToNameMap[currentTrack] || 'Unknown Track';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 glassmorphism p-3 rounded-lg space-y-3 hover:border-space-cyan/50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {musicEnabled ? (
                <Music2 className="text-space-cyan animate-pulse-bright" size={18} />
              ) : (
                <Music className="text-muted-foreground" size={18} />
              )}
            </TooltipTrigger>
            <TooltipContent>
              {musicEnabled ? 'Now Playing: ' + getCurrentSoundtrackName() : 'Music Off'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Switch 
          checked={musicEnabled} 
          onCheckedChange={setMusicEnabled}
          className="data-[state=checked]:bg-space-cyan"
        />
        <span className="text-sm">Music</span>
      </div>
      
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {sfxEnabled ? (
                <Volume2 className="text-space-cyan" size={18} />
              ) : (
                <VolumeX className="text-muted-foreground" size={18} />
              )}
            </TooltipTrigger>
            <TooltipContent>
              {sfxEnabled ? 'Sound Effects On' : 'Sound Effects Off'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Switch 
          checked={sfxEnabled} 
          onCheckedChange={setSfxEnabled}
          className="data-[state=checked]:bg-space-cyan"
        />
        <span className="text-sm">SFX</span>
      </div>
      
      <div className="pt-1">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer range-sm accent-space-cyan"
        />
      </div>
    </div>
  );
};

export default AudioControls;
