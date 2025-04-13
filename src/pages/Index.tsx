import { useEffect } from 'react';
import { ArrowDown, Rocket, Users, Zap, Star, Globe, Award } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('.animate-on-scroll');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - window.innerHeight / 1.2;
        
        if (scrollY > sectionTop) {
          section.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4 animate-fade-in">
              COSMIC <span className="text-space-cyan animate-glow">ODYSSEY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0" style={{ animation: 'fade-in 0.5s 0.3s forwards' }}>
              Explore the vast unknown, discover alien worlds, and build your interstellar legacy.
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-0" style={{ animation: 'fade-in 0.5s 0.6s forwards' }}>
              <button className="px-8 py-3 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-space-cyan/30">
                <Rocket size={20} />
                Launch Game
              </button>
              <button className="px-8 py-3 bg-transparent border border-space-cyan hover:border-space-purple text-space-cyan hover:text-space-purple font-bold rounded-md transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-space-cyan" size={30} />
        </div>
        
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[100px] bg-space-purple/20 -z-10"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="section-title">DISCOVER THE UNIVERSE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Star className="text-space-cyan" size={40} />, 
                title: "Explore Planets", 
                desc: "Discover and explore hundreds of procedurally generated planets, each with unique ecosystems and resources." 
              },
              { 
                icon: <Rocket className="text-space-magenta" size={40} />, 
                title: "Epic Missions", 
                desc: "Embark on challenging missions across the galaxy, from diplomatic negotiations to intense space battles." 
              },
              { 
                icon: <Users className="text-space-blue" size={40} />, 
                title: "Build Your Crew", 
                desc: "Recruit diverse alien species to your crew, each with unique abilities and storylines to discover." 
              },
              { 
                icon: <Zap className="text-space-orange" size={40} />, 
                title: "Upgrade Your Ship", 
                desc: "Customize and upgrade your spaceship with advanced technology and weapons for interstellar travel." 
              },
              { 
                icon: <Globe className="text-space-blue" size={40} />, 
                title: "Alliance Politics", 
                desc: "Navigate complex political landscapes between galactic factions and forge powerful alliances." 
              },
              { 
                icon: <Award className="text-space-cyan" size={40} />, 
                title: "Compete & Achieve", 
                desc: "Rise through the ranks, complete achievements, and leave your mark in the cosmic leaderboards." 
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="cosmic-card animate-on-scroll opacity-0" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-orbitron mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-space-blue/20 -z-10"></div>
      </section>
      
      {/* Cinematic Section */}
      <section className="py-24 relative animate-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <h2 className="section-title">IMMERSIVE EXPERIENCE</h2>
          <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden neon-border">
            <div className="absolute inset-0 flex items-center justify-center bg-space-dark/60">
              <button className="w-20 h-20 rounded-full bg-space-cyan/20 border border-space-cyan flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-space-cyan ml-1"></div>
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
              alt="Cosmic Odyssey Gameplay" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Screenshots Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="section-title">GALACTIC SHOWCASE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
              "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
              "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
              "https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
              "https://images.unsplash.com/photo-1543722530-d2c3201371e7"
            ].map((img, index) => (
              <div 
                key={index} 
                className="relative rounded-lg overflow-hidden h-60 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={img} 
                  alt={`Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-orbitron">Explore the Galaxy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-space-magenta/10 -z-10"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative animate-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              JOIN THE <span className="text-space-cyan animate-glow">EXPLORATION</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              The universe awaits. Begin your cosmic journey today and join thousands of explorers 
              across the galaxy. Your odyssey starts now.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-space-cyan/30">
                <Rocket size={20} />
                Start Your Journey
              </button>
              <button className="px-10 py-4 bg-transparent border border-space-cyan hover:border-space-purple text-space-cyan hover:text-space-purple font-bold rounded-md transition-all duration-300 flex items-center gap-2 hover:scale-105">
                <Users size={20} />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
