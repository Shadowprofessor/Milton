
import { Github, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="cosmic-gradient pt-16 pb-8 border-t border-space-purple/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-space-cyan"></div>
              <span className="text-xl font-orbitron font-bold tracking-wider neon-text">
                COSMIC<span className="text-space-cyan">ODYSSEY</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Embark on an interstellar journey through the cosmos. Explore uncharted planets, 
              engage with alien civilizations, and uncover the secrets of the universe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-space-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-space-cyan transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-space-cyan transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-space-cyan transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-space-cyan transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-orbitron mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-space-cyan transition-colors">Home</Link></li>
              <li><Link to="/lore" className="text-muted-foreground hover:text-space-cyan transition-colors">Game Lore</Link></li>
              <li><Link to="/missions" className="text-muted-foreground hover:text-space-cyan transition-colors">Missions</Link></li>
              <li><Link to="/leaderboard" className="text-muted-foreground hover:text-space-cyan transition-colors">Leaderboard</Link></li>
              <li><Link to="/media" className="text-muted-foreground hover:text-space-cyan transition-colors">Media Gallery</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-space-cyan transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-orbitron mb-6 text-white">Join Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive cosmic updates about new missions, features, and community events.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-muted text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-space-cyan w-full"
              />
              <button 
                type="submit" 
                className="bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold px-4 py-2 rounded-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-space-purple/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Cosmic Odyssey. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-space-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-space-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-space-cyan transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
