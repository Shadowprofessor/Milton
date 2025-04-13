
import { useState, useEffect } from 'react';
import { MessageSquare, Users, Globe, ArrowUp, MessageCircle, ThumbsUp } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  
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
  
  const discussions = [
    {
      id: 1,
      title: "Best strategy for defeating the Void Guardians?",
      author: {
        name: "CosmicQueen",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      replies: 24,
      likes: 18,
      lastActivity: "2 hours ago",
      tags: ["combat", "strategies", "void-entities"]
    },
    {
      id: 2,
      title: "Quantum Fold Drive calibration tips for newbies",
      author: {
        name: "NebulaNomad",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
      },
      replies: 42,
      likes: 35,
      lastActivity: "5 hours ago",
      tags: ["ship-upgrades", "guides", "beginners"]
    },
    {
      id: 3,
      title: "Anyone discovered the hidden planet in the Arcturus system?",
      author: {
        name: "StarStrider",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      },
      replies: 18,
      likes: 12,
      lastActivity: "8 hours ago",
      tags: ["exploration", "discoveries", "secrets"]
    },
    {
      id: 4,
      title: "Official Patch 2.4 Discussion Thread",
      author: {
        name: "CosmicMod",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      replies: 156,
      likes: 87,
      lastActivity: "1 day ago",
      tags: ["official", "updates", "patch-notes"]
    },
    {
      id: 5,
      title: "Zephyrian language translation guide - Updated for 2025",
      author: {
        name: "VoidVoyager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      replies: 32,
      likes: 41,
      lastActivity: "2 days ago",
      tags: ["lore", "guides", "zephyrians"]
    }
  ];
  
  const events = [
    {
      id: 1,
      title: "Void Incursion Community Event",
      description: "Join forces with other explorers to repel the largest Void attack in the game's history.",
      date: "April 20 - April 27, 2025",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      participants: 3428,
    },
    {
      id: 2,
      title: "Cosmic Screenshot Contest",
      description: "Share your most breathtaking views of the cosmos and win exclusive rewards.",
      date: "May 5 - May 15, 2025",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
      participants: 876,
    },
    {
      id: 3,
      title: "Developer Live Q&A",
      description: "Ask your burning questions about the upcoming Quantum Horizon expansion.",
      date: "April 29, 2025 - 19:00 UTC",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      participants: 1245,
    }
  ];
  
  const teams = [
    {
      id: 1,
      name: "Void Vanguard",
      description: "Elite combat specialists focused on repelling Void incursions.",
      members: 24,
      image: "https://images.unsplash.com/photo-1569466126773-842a038eae3e",
      recruiting: true
    },
    {
      id: 2,
      name: "Quantum Pioneers",
      description: "Explorers charting the farthest reaches of the galaxy.",
      members: 18,
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
      recruiting: true
    },
    {
      id: 3,
      name: "Stellar Engineers",
      description: "Resource specialists and ship builders supporting the fleet.",
      members: 32,
      image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
      recruiting: false
    },
    {
      id: 4,
      name: "Astral Diplomats",
      description: "Negotiators focused on inter-species relations and alliances.",
      members: 16,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      recruiting: true
    }
  ];
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-center">
              COSMIC <span className="text-space-cyan">COMMUNITY</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-10">
              Connect with fellow explorers, join events, and become part of our growing community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className={`px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${activeTab === 'discussions' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
                onClick={() => setActiveTab('discussions')}
              >
                <MessageSquare size={18} />
                Discussions
              </button>
              <button 
                className={`px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${activeTab === 'events' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
                onClick={() => setActiveTab('events')}
              >
                <Globe size={18} />
                Events
              </button>
              <button 
                className={`px-6 py-2 rounded-md transition-colors flex items-center gap-2 ${activeTab === 'teams' ? 'bg-space-cyan text-space-dark font-bold' : 'bg-muted text-muted-foreground hover:bg-muted/70'}`}
                onClick={() => setActiveTab('teams')}
              >
                <Users size={18} />
                Teams
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discussions Section */}
      {activeTab === 'discussions' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-orbitron text-white">Recent Discussions</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-colors">
                  New Discussion
                </button>
                <button className="px-4 py-2 bg-transparent border border-space-cyan text-space-cyan hover:bg-space-cyan/10 rounded-md transition-colors">
                  My Topics
                </button>
              </div>
            </div>
            
            <div className="space-y-4 animate-on-scroll opacity-0">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="cosmic-card flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-12">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={discussion.author.avatar} 
                        alt={discussion.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-2">{discussion.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion.tags.map((tag, index) => (
                        <span key={index} className="bg-space-purple/30 text-space-cyan text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">by <span className="text-space-cyan">{discussion.author.name}</span></span>
                        <span className="text-muted-foreground">Activity: {discussion.lastActivity}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MessageCircle size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{discussion.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{discussion.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button className="px-6 py-3 bg-muted hover:bg-muted/70 text-muted-foreground rounded-md transition-colors flex items-center gap-2">
                <ArrowUp size={18} />
                Load More
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Events Section */}
      {activeTab === 'events' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-orbitron text-white">Upcoming Events</h2>
              <div>
                <button className="px-4 py-2 bg-transparent border border-space-cyan text-space-cyan hover:bg-space-cyan/10 rounded-md transition-colors">
                  Calendar View
                </button>
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll opacity-0">
              {events.map((event) => (
                <div key={event.id} className="cosmic-card">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="h-48 rounded-md overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-orbitron mb-2 text-white">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0">
                        <div>
                          <div className="text-space-cyan font-medium mb-1">Date & Time</div>
                          <div className="text-muted-foreground">{event.date}</div>
                        </div>
                        <div>
                          <div className="text-space-cyan font-medium mb-1">Participants</div>
                          <div className="text-muted-foreground">
                            <span className="text-white font-medium">{event.participants}</span> explorers registered
                          </div>
                        </div>
                        <div>
                          <button className="px-4 py-2 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-colors">
                            Join Event
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-muted hover:bg-muted/70 text-muted-foreground rounded-md transition-colors inline-flex items-center gap-2">
                View Past Events
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Teams Section */}
      {activeTab === 'teams' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-orbitron text-white">Explorer Teams</h2>
              <div>
                <button className="px-4 py-2 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-colors">
                  Create Team
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll opacity-0">
              {teams.map((team) => (
                <div key={team.id} className="cosmic-card">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden">
                      <img 
                        src={team.image} 
                        alt={team.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-orbitron text-white">{team.name}</h3>
                        {team.recruiting ? (
                          <span className="bg-space-cyan/20 text-space-cyan text-xs px-2 py-1 rounded-full">
                            Recruiting
                          </span>
                        ) : (
                          <span className="bg-muted/30 text-muted-foreground text-xs px-2 py-1 rounded-full">
                            Closed
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm my-2">{team.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          <span className="text-white font-medium">{team.members}</span> members
                        </div>
                        <button className={`px-3 py-1.5 rounded-md text-sm transition-colors ${team.recruiting ? 'bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                                disabled={!team.recruiting}>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-muted hover:bg-muted/70 text-muted-foreground rounded-md transition-colors inline-flex items-center gap-2">
                Browse All Teams
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Community Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">COMMUNITY STATS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Active Explorers", value: "24,879", icon: <Users className="text-space-cyan" size={24} /> },
              { label: "Discussions", value: "15,432", icon: <MessageSquare className="text-space-cyan" size={24} /> },
              { label: "Teams", value: "2,305", icon: <Users className="text-space-cyan" size={24} /> },
              { label: "Events This Month", value: "28", icon: <Globe className="text-space-cyan" size={24} /> }
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
      
      {/* Newsletter Section */}
      <section className="py-12 animate-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="cosmic-card">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 text-white">
                Join Our Cosmic Network
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest community events, game updates, and exclusive in-game rewards.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-muted text-white px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-space-cyan flex-1"
                />
                <button 
                  type="submit" 
                  className="bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold px-6 py-3 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to receive promotional emails. You can unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
