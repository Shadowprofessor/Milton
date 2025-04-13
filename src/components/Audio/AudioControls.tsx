
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Music2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const AudioControls = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [volume, setVolume] = useState(0.5);
  
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    bgMusicRef.current = new Audio('/assets/audio/background-space.mp3');
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = volume;
    
    hoverSoundRef.current = new Audio('/assets/audio/hover.mp3');
    clickSoundRef.current = new Audio('/assets/audio/click.mp3');
    
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
      
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, [sfxEnabled, volume]);
  
  useEffect(() => {
    if (bgMusicRef.current) {
      if (musicEnabled) {
        bgMusicRef.current.play().catch(err => {
          console.log('Background music play failed:', err);
          setMusicEnabled(false);
        });
      } else {
        bgMusicRef.current.pause();
      }
    }
  }, [musicEnabled]);
  
  useEffect(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="fixed bottom-4 right-4 z-50 glassmorphism p-3 rounded-lg space-y-3 hover:border-space-cyan/50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        {musicEnabled ? <Music2 className="text-space-cyan animate-pulse-bright" size={18} /> : <Music className="text-muted-foreground" size={18} />}
        <Switch 
          checked={musicEnabled} 
          onCheckedChange={setMusicEnabled}
          className="data-[state=checked]:bg-space-cyan"
        />
        <span className="text-sm">Music</span>
      </div>
      
      <div className="flex items-center gap-3">
        {sfxEnabled ? <Volume2 className="text-space-cyan" size={18} /> : <VolumeX className="text-muted-foreground" size={18} />}
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
