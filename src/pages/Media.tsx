
import { useState, useEffect } from 'react';
import { Image, Film, FileText, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Media = () => {
  const [activeTab, setActiveTab] = useState('screenshots');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    type: 'image' | 'video';
    src: string;
    title: string;
  } | null>(null);
  
  const screenshots = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      title: "Andromeda Station"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
      title: "Quantum Fold Engine"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "The Void Nebula"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      title: "Alien Civilization"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
      title: "Zephyrian Homeworld"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
      title: "Interstellar Battle"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
      title: "The Last Frontier"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
      title: "Cosmic Anomaly"
    }
  ];
  
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      title: "Cosmic Odyssey Trailer",
      duration: "2:34"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1581822261290-991b38693d1b",
      title: "Gameplay Demo",
      duration: "8:15"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
      title: "Developer Diary: Creating Alien Worlds",
      duration: "12:47"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
      title: "Space Combat Tutorial",
      duration: "5:23"
    }
  ];
  
  const artwork = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      title: "Cosmic Vanguard",
      artist: "Stella Nova"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
      title: "The Void Guardian",
      artist: "Orion Black"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      title: "Quantum Traveler",
      artist: "Aurora Dawn"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507499739999-097706ad8914",
      title: "Astral Projection",
      artist: "Nebula Wade"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1566345984367-fa2dadc92065",
      title: "The Last Explorer",
      artist: "Stella Nova"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
      title: "Beyond The Stars",
      artist: "Orion Black"
    }
  ];
  
  const openModal = (item: any, type: 'image' | 'video') => {
    setModalContent({
      type,
      src: type === 'image' ? item.src : item.thumbnail,
      title: item.title
    });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-center">
              MEDIA <span className="text-space-cyan">GALLERY</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-10">
              Explore screenshots, videos, and concept art from across the Cosmic Odyssey universe.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="screenshots" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted rounded-full p-1 inline-flex">
                <TabsTrigger 
                  value="screenshots" 
                  className="rounded-full flex items-center gap-2 px-6 data-[state=active]:bg-space-cyan data-[state=active]:text-space-dark"
                >
                  <Image size={18} />
                  Screenshots
                </TabsTrigger>
                <TabsTrigger 
                  value="videos" 
                  className="rounded-full flex items-center gap-2 px-6 data-[state=active]:bg-space-cyan data-[state=active]:text-space-dark"
                >
                  <Film size={18} />
                  Videos
                </TabsTrigger>
                <TabsTrigger 
                  value="artwork" 
                  className="rounded-full flex items-center gap-2 px-6 data-[state=active]:bg-space-cyan data-[state=active]:text-space-dark"
                >
                  <FileText size={18} />
                  Concept Art
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="screenshots">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {screenshots.map((screenshot, index) => (
                  <div 
                    key={screenshot.id} 
                    className="cosmic-card p-0 overflow-hidden animate-on-scroll opacity-0 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openModal(screenshot, 'image')}
                  >
                    <div className="h-48 sm:h-40 md:h-52 overflow-hidden">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium truncate">{screenshot.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <div 
                    key={video.id} 
                    className="cosmic-card p-0 overflow-hidden animate-on-scroll opacity-0 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openModal(video, 'video')}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-space-dark/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-space-cyan/80 rounded-full p-3">
                          <Play className="text-space-dark" size={24} fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-space-dark/80 px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="artwork">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artwork.map((art, index) => (
                  <div 
                    key={art.id} 
                    className="cosmic-card p-0 overflow-hidden animate-on-scroll opacity-0 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openModal(art, 'image')}
                  >
                    <div className="h-60 sm:h-52 md:h-72 overflow-hidden">
                      <img 
                        src={art.src} 
                        alt={art.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium">{art.title}</h3>
                      <p className="text-muted-foreground text-sm">by {art.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Modal */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 bg-space-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="absolute top-6 right-6 z-10">
            <button 
              onClick={closeModal}
              className="bg-space-dark/50 hover:bg-space-dark text-white rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="max-w-screen-lg w-full max-h-[80vh] relative">
            {modalContent.type === 'image' ? (
              <img 
                src={modalContent.src} 
                alt={modalContent.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-space-dark">
                  <Play size={64} className="text-space-cyan" />
                </div>
                <img 
                  src={modalContent.src} 
                  alt={modalContent.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-xl text-white font-medium">{modalContent.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
