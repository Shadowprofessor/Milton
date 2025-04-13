
import { useEffect } from 'react';
import { Rocket, Clock, Users, AlertTriangle, DollarSign, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Missions = () => {
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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-center">
              <span className="text-space-cyan">MISSIONS</span> & ADVENTURES
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-10">
              Embark on epic journeys across the galaxy. Complete missions to earn rewards, unlock new gear, and advance your cosmic legacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 bg-space-cyan text-space-dark font-bold rounded-md hover:bg-space-cyan/80 transition-colors">
                All Missions
              </button>
              <button className="px-6 py-2 bg-transparent border border-space-cyan text-space-cyan rounded-md hover:bg-space-cyan/10 transition-colors">
                Story Missions
              </button>
              <button className="px-6 py-2 bg-transparent border border-muted text-muted-foreground rounded-md hover:bg-muted/10 transition-colors">
                Side Quests
              </button>
              <button className="px-6 py-2 bg-transparent border border-muted text-muted-foreground rounded-md hover:bg-muted/10 transition-colors">
                Daily Challenges
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">FEATURED MISSION</h2>
          
          <div className="cosmic-card animate-on-scroll opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="h-64 rounded-md overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13" 
                    alt="The Omega Protocol"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="text-space-orange" size={18} />
                    <span className="text-space-orange font-medium">Difficulty: High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="text-muted-foreground" size={18} />
                    <span className="text-muted-foreground">2-3 hours</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="text-space-cyan" size={18} />
                  <span className="text-muted-foreground">Reward: 5000 Credits, Rare Ship Module</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={star <= 4 ? "text-space-cyan" : "text-muted"} 
                      size={18} 
                      fill={star <= 4 ? "currentColor" : "none"} 
                    />
                  ))}
                  <span className="ml-2 text-muted-foreground text-sm">4.0 (287 ratings)</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-orbitron mb-2 text-white">The Omega Protocol</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-space-purple/30 text-space-cyan text-xs px-2 py-1 rounded-full">STORY MISSION</span>
                  <span className="bg-muted/30 text-muted-foreground text-xs px-2 py-1 rounded-full">CHAPTER 3</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  A mysterious signal has been detected from the edge of the Andromeda galaxy. The Galactic 
                  Council suspects it may be connected to the ancient Zephyrian artifacts discovered last month. 
                  Your mission is to investigate the source of the signal and retrieve any valuable technology 
                  or information. Be warned: initial scans indicate Void entity signatures in the region.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Mission Progress</span>
                    <span className="text-space-cyan">43%</span>
                  </div>
                  <Progress value={43} className="h-2 bg-muted" indicatorClassName="bg-space-cyan" />
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Rocket className="text-space-cyan" size={18} />
                    <span className="text-muted-foreground">Ship Required: Class B or higher</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-space-cyan" size={18} />
                    <span className="text-muted-foreground">Crew: 2-4 members recommended</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-colors flex items-center gap-2">
                    <Rocket size={18} />
                    Continue Mission
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-space-cyan text-space-cyan hover:bg-space-cyan/10 rounded-md transition-colors">
                    Mission Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Active Missions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ACTIVE MISSIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "The Lost Colony",
                type: "Side Quest",
                progress: 78,
                image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
                description: "Investigate the sudden disappearance of the Proxima B colony and rescue any survivors."
              },
              {
                title: "Resource Expedition",
                type: "Daily",
                progress: 25,
                image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
                description: "Collect rare minerals from the asteroid belt in the Tau Ceti system."
              },
              {
                title: "Diplomatic Summit",
                type: "Story Mission",
                progress: 50,
                image: "https://images.unsplash.com/photo-1569839333583-7375336d3e1e",
                description: "Represent humanity at the Galactic Council summit and negotiate a peace treaty."
              },
              {
                title: "Void Incursion",
                type: "Combat",
                progress: 12,
                image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
                description: "Defend the Arcturus station from an incoming wave of Void entities."
              }
            ].map((mission, index) => (
              <div 
                key={index} 
                className="cosmic-card flex flex-col md:flex-row gap-4 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="md:w-1/3 h-32 md:h-auto rounded-md overflow-hidden">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-orbitron text-white">{mission.title}</h3>
                    <span className="bg-space-purple/30 text-space-cyan text-xs px-2 py-1 rounded-full">
                      {mission.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{mission.description}</p>
                  <div className="mb-3">
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-space-cyan">{mission.progress}%</span>
                    </div>
                    <Progress value={mission.progress} className="h-1.5 bg-muted" indicatorClassName="bg-space-cyan" />
                  </div>
                  <button className="text-space-cyan hover:text-space-cyan/80 text-sm font-medium transition-colors">
                    Continue Mission
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Available Missions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">AVAILABLE MISSIONS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Ancient Ruins",
                type: "Exploration",
                difficulty: "Medium",
                image: "https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0",
                reward: "3500 Credits, Rare Artifact"
              },
              {
                title: "Smuggler's Run",
                type: "Transport",
                difficulty: "Easy",
                image: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2",
                reward: "2000 Credits, Ship Upgrade"
              },
              {
                title: "Quantum Anomaly",
                type: "Research",
                difficulty: "Hard",
                image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
                reward: "4500 Credits, Advanced Technology"
              },
              {
                title: "Rescue Operation",
                type: "Combat",
                difficulty: "Medium",
                image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
                reward: "3000 Credits, Medical Supplies"
              },
              {
                title: "Alien Diplomacy",
                type: "Negotiation",
                difficulty: "Hard",
                image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
                reward: "5000 Credits, Alliance Reputation"
              },
              {
                title: "Comet Harvesting",
                type: "Resource",
                difficulty: "Easy",
                image: "https://images.unsplash.com/photo-1537420327992-d6e192287183",
                reward: "1500 Credits, Rare Materials"
              }
            ].map((mission, index) => (
              <div 
                key={index} 
                className="cosmic-card animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 rounded-md overflow-hidden mb-4">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-space-dark/80 text-space-cyan text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {mission.type.toUpperCase()}
                  </div>
                </div>
                <h3 className="text-lg font-orbitron mb-2 text-white">{mission.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1">
                    <AlertTriangle 
                      className={
                        mission.difficulty === "Easy" ? "text-green-500" : 
                        mission.difficulty === "Medium" ? "text-yellow-500" : 
                        "text-red-500"
                      } 
                      size={16} 
                    />
                    <span className="text-muted-foreground text-sm">Difficulty: {mission.difficulty}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <DollarSign className="text-space-cyan" size={16} />
                  <span className="text-muted-foreground text-sm">{mission.reward}</span>
                </div>
                <button className="w-full px-4 py-2 bg-space-purple/30 hover:bg-space-purple/50 text-space-cyan rounded-md transition-colors text-center">
                  Accept Mission
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Missions;
