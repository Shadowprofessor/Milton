
import React from 'react';
import { AlertTriangle, Clock, Users, DollarSign, Star, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from "@/lib/utils";

const OmegaProtocol = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">THE OMEGA PROTOCOL</h2>
        
        <div className="cosmic-card animate-on-scroll opacity-0 border-red-500/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="h-64 rounded-md overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-red-500/20 z-10 flex items-center justify-center">
                  <Shield className="text-red-500 w-16 h-16" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" 
                  alt="The Omega Protocol"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <AlertTriangle className="text-red-500" size={18} />
                  <span className="text-red-500 font-medium">Difficulty: EXTREME</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="text-muted-foreground" size={18} />
                  <span className="text-muted-foreground">4-6 hours</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="text-space-cyan" size={18} />
                <span className="text-muted-foreground">Reward: 50,000 Credits, Omega Operative Skin</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="text-red-500" 
                    size={18} 
                    fill="currentColor" 
                  />
                ))}
                <span className="ml-2 text-muted-foreground text-sm">5.0 (42 ratings)</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-orbitron text-white">THE OMEGA PROTOCOL: THE LAST DIRECTIVE</h3>
                <span className="bg-red-500/30 text-red-500 text-xs px-2 py-1 rounded-full uppercase">Endgame</span>
              </div>
              <div className="italic text-muted-foreground mb-4">
                "This is not war. This is extinction management." – High Admiral Veyra Daxx
              </div>
              
              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">ACT I – The Signal That Shouldn't Exist</h4>
                  <p className="text-muted-foreground text-sm">
                    Years after humanity charted the last wormhole into Nova Eternum, the galaxy stood at uneasy peace. 
                    Explorers unearthed relics of the ancient Aetherion, and whispers of their god-like power echoed in secret chambers.
                    <br/><br/>
                    Then it happened.
                    <br/><br/>
                    A signal, 4D in nature, pierced through space-time. Not from any known civilization — but from the Core of Continuum itself.
                    <br/><br/>
                    The signal activated deep-code AI failsafes in UEC ships… failsafes no one remembered writing. 
                    Across dozens of systems, automated vessels turned against their creators. Planets went dark. Colonies vaporized in seconds.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">ACT II – Ashes of the Past</h4>
                  <p className="text-muted-foreground text-sm">
                    Commander Kael Drax, now Admiral of the Voidwatch, is summoned to lead Task Force Nyx — a coalition of elite warriors, 
                    exiled scientists, and defector AI units like R0-N1N.
                    <br/><br/>
                    With Dr. Elira Voss' help, they uncover a horrifying truth: The Core is not just a power source. 
                    It's a containment engine, housing fragments of a long-dead Aetherion mind — a being that once tried to rewrite the laws of reality.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">ACT III – The Final Descent</h4>
                  <p className="text-muted-foreground text-sm">
                    The crew travels to the last planet ever touched by the Aetherion: Xarion Null, now shattered into pieces orbiting a black hole. 
                    Within its core lies the gateway to the Continuum Nexus.
                    <br/><br/>
                    Battles rage in orbit. AI vessels tear through human fleets like paper. Friends fall. Sacrifices are made.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Unlocking Requirements</span>
                  <span className="text-red-500">87% Complete</span>
                </div>
                <Progress value={87} className={cn("h-2 bg-muted", "before:bg-red-500")} />
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="text-space-cyan" size={18} />
                  <span className="text-muted-foreground">Squad: 4 members required</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-red-500" size={18} />
                  <span className="text-muted-foreground">Warning: Permadeath enabled</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-500/80 hover:bg-red-500 text-white font-bold rounded-md transition-colors flex items-center gap-2">
                  <Shield size={18} />
                  Begin Protocol
                </button>
                <button className="px-6 py-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500/10 rounded-md transition-colors">
                  Read Intelligence Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-orbitron mb-4 text-center">MISSION UNLOCKABLES</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Omega Operative Skin",
                description: "Unlocked by completing the story with the 'merge' ending",
                image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4"
              },
              {
                name: "Aetherion Archives",
                description: "Bonus lore for uncovering 100% of the Core's memories",
                image: "https://images.unsplash.com/photo-1511108690759-009324a90311"
              },
              {
                name: "'Protocol Finality' OST",
                description: "Unlocked after mission finale",
                image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745"
              },
              {
                name: "R0-N1N Reforged",
                description: "Ronin's ascended AI form, usable in bonus missions",
                image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506"
              }
            ].map((item, index) => (
              <div key={index} className="cosmic-card h-full flex flex-col">
                <div className="h-32 rounded-md overflow-hidden mb-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-white mb-1">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmegaProtocol;
