
import { useEffect } from 'react';
import { Book, Landmark, Skull, Globe, Users, Zap } from 'lucide-react';

const Lore = () => {
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
              THE <span className="text-space-cyan">LORE</span> OF COSMIC ODYSSEY
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-10">
              Discover the rich history and deep mythology behind the Cosmic Odyssey universe.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">GALACTIC TIMELINE</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-cyan/30 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline entries */}
            {[
              {
                year: "2157",
                title: "First Contact",
                description: "Humanity makes first contact with the Zephyrians, an advanced civilization from the Andromeda galaxy.",
                image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
                icon: <Users />,
                align: "right"
              },
              {
                year: "2189",
                title: "The Galactic Council",
                description: "The formation of the Interstellar Alliance brings together five major civilizations into a peaceful coalition.",
                image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
                icon: <Landmark />,
                align: "left"
              },
              {
                year: "2214",
                title: "The Void Incursion",
                description: "The first appearance of the mysterious Void entities that threatened multiple star systems.",
                image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
                icon: <Skull />,
                align: "right"
              },
              {
                year: "2245",
                title: "The Expansion Era",
                description: "Humanity colonizes over 200 exoplanets across three star systems, marking the golden age of expansion.",
                image: "https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0",
                icon: <Globe />,
                align: "left"
              },
              {
                year: "2278",
                title: "The Quantum Revolution",
                description: "The discovery of quantum fold technology allows for instantaneous travel between distant parts of the galaxy.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                icon: <Zap />,
                align: "right"
              }
            ].map((entry, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center md:items-start relative mb-16 animate-on-scroll opacity-0`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-12px] md:left-1/2 md:transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-space-dark border-2 border-space-cyan flex items-center justify-center z-10">
                  {entry.icon}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${entry.align === "left" ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <div className="cosmic-card">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-full md:w-1/3 h-48 rounded-md overflow-hidden ${entry.align === "right" ? "md:order-2" : ""}`}>
                        <img 
                          src={entry.image} 
                          alt={entry.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`w-full md:w-2/3 ${entry.align === "right" ? "md:order-1" : ""}`}>
                        <div className="text-space-cyan font-orbitron font-bold mb-1">{entry.year}</div>
                        <h3 className="text-xl font-orbitron mb-3 text-white">{entry.title}</h3>
                        <p className="text-muted-foreground">{entry.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Species Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">GALACTIC SPECIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Humans",
                origin: "Solar System - Earth",
                description: "Resourceful and adaptable, humans have spread across the galaxy, known for their diplomatic skills and technological innovation.",
                image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13"
              },
              {
                name: "Zephyrians",
                origin: "Andromeda - Zephyr Prime",
                description: "An ancient civilization with advanced psionic abilities, the Zephyrians can manipulate energy and communicate telepathically.",
                image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd"
              },
              {
                name: "Myr'khai",
                origin: "Triangulum Galaxy - Myr",
                description: "Silicon-based lifeforms with crystalline bodies, the Myr'khai can survive in extreme environments and live for thousands of years.",
                image: "https://images.unsplash.com/photo-1534447677768-be436bb09401"
              },
              {
                name: "Voidborn",
                origin: "Unknown - Deep Space",
                description: "Mysterious entities that exist between dimensions, the Voidborn's true nature and intentions remain largely unknown.",
                image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"
              },
              {
                name: "Thalassians",
                origin: "Milky Way - Thalassa",
                description: "Amphibious beings with advanced biotech, the Thalassians are master geneticists and ecological engineers.",
                image: "https://images.unsplash.com/photo-1551244072-5d12893278ab"
              },
              {
                name: "Aetheri",
                origin: "Milky Way - Gas Giant Aether",
                description: "Gaseous entities that can change their form at will, the Aetheri are natural explorers and knowledge seekers.",
                image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
              }
            ].map((species, index) => (
              <div 
                key={index} 
                className="cosmic-card animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 rounded-md overflow-hidden mb-4">
                  <img 
                    src={species.image} 
                    alt={species.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-orbitron mb-2 text-white">{species.name}</h3>
                <div className="text-space-cyan text-sm mb-3">{species.origin}</div>
                <p className="text-muted-foreground">{species.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lore Chapters Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">LORE CHAPTERS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Quantum Fold Discovery",
                excerpt: "The discovery that changed interstellar travel forever and connected distant star systems...",
                icon: <Book />
              },
              {
                title: "The Void War Chronicles",
                excerpt: "The 20-year conflict that united the galaxy against an interdimensional threat...",
                icon: <Book />
              },
              {
                title: "The Forgotten Colony of Proxima",
                excerpt: "The mysterious disappearance of an entire human settlement and what was found decades later...",
                icon: <Book />
              },
              {
                title: "The Zephyrian Prophecies",
                excerpt: "Ancient predictions about the fate of the galaxy and the role of a chosen explorer...",
                icon: <Book />
              }
            ].map((chapter, index) => (
              <div 
                key={index} 
                className="cosmic-card flex gap-4 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-space-cyan">
                  {chapter.icon}
                </div>
                <div>
                  <h3 className="text-xl font-orbitron mb-2 text-white">{chapter.title}</h3>
                  <p className="text-muted-foreground mb-3">{chapter.excerpt}</p>
                  <button className="text-space-cyan hover:text-space-cyan/70 font-medium transition-colors">Read Chapter</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lore Artifacts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ANCIENT ARTIFACTS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "The Quantum Keystone",
                description: "An ancient device capable of stabilizing wormholes for safe passage.",
                image: "https://images.unsplash.com/photo-1569466126773-842a038eae3e"
              },
              {
                name: "The Void Crystal",
                description: "A mysterious crystal that seems to absorb and redirect energy.",
                image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
              },
              {
                name: "The Star Map",
                description: "An interactive holographic map showing star systems beyond our galaxy.",
                image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3"
              },
              {
                name: "The Memory Core",
                description: "A data storage device containing the collective knowledge of a lost civilization.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
              }
            ].map((artifact, index) => (
              <div 
                key={index} 
                className="group relative h-72 overflow-hidden rounded-lg neon-border animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={artifact.image} 
                  alt={artifact.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-orbitron text-white mb-1">{artifact.name}</h3>
                  <p className="text-sm text-muted-foreground">{artifact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lore;
