
import { useEffect, useState } from 'react';
import { Trophy, ArrowUp, ArrowDown, Minus, Medal, Star } from 'lucide-react';

type LeaderboardEntry = {
  rank: number;
  change: 'up' | 'down' | 'same';
  avatar: string;
  name: string;
  faction: string;
  level: number;
  missions: number;
  rating: number;
};

const Leaderboard = () => {
  const [filter, setFilter] = useState('all');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([
    {
      rank: 1,
      change: 'same',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      name: 'CosmicQueen',
      faction: 'Federation',
      level: 78,
      missions: 342,
      rating: 9.8
    },
    {
      rank: 2,
      change: 'up',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'StarStrider',
      faction: 'Republic',
      level: 76,
      missions: 335,
      rating: 9.7
    },
    {
      rank: 3,
      change: 'up',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'NebulaNomad',
      faction: 'Alliance',
      level: 75,
      missions: 310,
      rating: 9.5
    },
    {
      rank: 4,
      change: 'down',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'VoidVoyager',
      faction: 'Federation',
      level: 74,
      missions: 301,
      rating: 9.4
    },
    {
      rank: 5,
      change: 'same',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'GalacticGuardian',
      faction: 'Republic',
      level: 72,
      missions: 298,
      rating: 9.3
    },
    {
      rank: 6,
      change: 'up',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'CosmicCrusader',
      faction: 'Alliance',
      level: 70,
      missions: 287,
      rating: 9.1
    },
    {
      rank: 7,
      change: 'down',
      avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
      name: 'StarSurfer',
      faction: 'Federation',
      level: 69,
      missions: 275,
      rating: 9.0
    },
    {
      rank: 8,
      change: 'down',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      name: 'AstralAvenger',
      faction: 'Republic',
      level: 68,
      missions: 268,
      rating: 8.9
    },
    {
      rank: 9,
      change: 'same',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      name: 'QuantumQuasar',
      faction: 'Alliance',
      level: 67,
      missions: 261,
      rating: 8.8
    },
    {
      rank: 10,
      change: 'up',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      name: 'NebulaNinja',
      faction: 'Federation',
      level: 65,
      missions: 255,
      rating: 8.7
    }
  ]);

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
  
  const filteredData = filter === 'all' 
    ? leaderboardData 
    : leaderboardData.filter(entry => entry.faction.toLowerCase() === filter.toLowerCase());
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-center">
              COSMIC <span className="text-space-cyan">LEADERBOARD</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-10">
              The galaxy's finest explorers, ranked by their achievements across the cosmos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Top 3 Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-10">
            {/* Second Place */}
            <div className="order-2 md:order-1 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="cosmic-card w-full md:w-64 text-center py-8 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-[#A8A9AD] bg-space-dark">
                  <img 
                    src={leaderboardData[1].avatar} 
                    alt={leaderboardData[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-10">
                  <div className="text-[#A8A9AD] font-bold text-3xl mb-2 flex justify-center items-center gap-2">
                    <Medal size={24} fill="currentColor" />
                    2nd
                  </div>
                  <h3 className="text-lg font-orbitron text-white mb-1">{leaderboardData[1].name}</h3>
                  <div className="text-space-cyan text-sm mb-3">{leaderboardData[1].faction}</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Level</div>
                      <div className="font-bold text-white">{leaderboardData[1].level}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Missions</div>
                      <div className="font-bold text-white">{leaderboardData[1].missions}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rating</div>
                      <div className="font-bold text-white">{leaderboardData[1].rating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* First Place */}
            <div className="order-1 md:order-2 animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="cosmic-card w-full md:w-72 text-center py-10 relative border-space-cyan">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-[#FFD700] bg-space-dark">
                  <img 
                    src={leaderboardData[0].avatar} 
                    alt={leaderboardData[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-12">
                  <div className="text-[#FFD700] font-bold text-4xl mb-2 flex justify-center items-center gap-2 animate-glow">
                    <Trophy size={30} fill="currentColor" />
                    1st
                  </div>
                  <h3 className="text-xl font-orbitron text-white mb-1">{leaderboardData[0].name}</h3>
                  <div className="text-space-cyan text-sm mb-4">{leaderboardData[0].faction}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-muted-foreground">Level</div>
                      <div className="font-bold text-white text-xl">{leaderboardData[0].level}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Missions</div>
                      <div className="font-bold text-white text-xl">{leaderboardData[0].missions}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rating</div>
                      <div className="font-bold text-white text-xl">{leaderboardData[0].rating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third Place */}
            <div className="order-3 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="cosmic-card w-full md:w-64 text-center py-8 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-[#CD7F32] bg-space-dark">
                  <img 
                    src={leaderboardData[2].avatar} 
                    alt={leaderboardData[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-10">
                  <div className="text-[#CD7F32] font-bold text-3xl mb-2 flex justify-center items-center gap-2">
                    <Medal size={24} fill="currentColor" />
                    3rd
                  </div>
                  <h3 className="text-lg font-orbitron text-white mb-1">{leaderboardData[2].name}</h3>
                  <div className="text-space-cyan text-sm mb-3">{leaderboardData[2].faction}</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Level</div>
                      <div className="font-bold text-white">{leaderboardData[2].level}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Missions</div>
                      <div className="font-bold text-white">{leaderboardData[2].missions}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rating</div>
                      <div className="font-bold text-white">{leaderboardData[2].rating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leaderboard Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">TOP EXPLORERS</h2>
          
          <div className="mb-6 flex flex-wrap gap-4 justify-center">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
              onClick={() => setFilter('all')}
            >
              All Factions
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'federation' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
              onClick={() => setFilter('federation')}
            >
              Federation
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'republic' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
              onClick={() => setFilter('republic')}
            >
              Republic
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'alliance' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
              onClick={() => setFilter('alliance')}
            >
              Alliance
            </button>
          </div>
          
          <div className="cosmic-card animate-on-scroll opacity-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-space-purple/30">
                    <th className="px-4 py-3 text-left text-muted-foreground font-medium">Rank</th>
                    <th className="px-4 py-3 text-left text-muted-foreground font-medium">Explorer</th>
                    <th className="px-4 py-3 text-left text-muted-foreground font-medium">Faction</th>
                    <th className="px-4 py-3 text-center text-muted-foreground font-medium">Level</th>
                    <th className="px-4 py-3 text-center text-muted-foreground font-medium">Missions</th>
                    <th className="px-4 py-3 text-center text-muted-foreground font-medium">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((entry, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-space-purple/20 hover:bg-space-purple/5 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <span className="font-bold text-white mr-2">#{entry.rank}</span>
                          {entry.change === 'up' && <ArrowUp className="text-green-500" size={16} />}
                          {entry.change === 'down' && <ArrowDown className="text-red-500" size={16} />}
                          {entry.change === 'same' && <Minus className="text-muted-foreground" size={16} />}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img 
                              src={entry.avatar} 
                              alt={entry.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-white">{entry.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{entry.faction}</td>
                      <td className="px-4 py-3 text-center font-medium text-white">{entry.level}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground">{entry.missions}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-medium text-space-cyan">{entry.rating}</span>
                          <Star className="text-space-cyan" size={14} fill="currentColor" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">COSMIC STATISTICS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Explorers", value: "145,872", icon: <Users className="text-space-cyan" size={24} /> },
              { label: "Missions Completed", value: "3.2M", icon: <Trophy className="text-space-cyan" size={24} /> },
              { label: "Planets Discovered", value: "8,492", icon: <Globe className="text-space-cyan" size={24} /> },
              { label: "Alliance Wars", value: "257", icon: <Zap className="text-space-cyan" size={24} /> }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="cosmic-card text-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
