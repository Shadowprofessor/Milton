
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container px-4 text-center z-10">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-space-dark border border-space-cyan flex items-center justify-center animate-pulse-bright">
            <div className="text-space-cyan animate-glow">404</div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
          SIGNAL <span className="text-space-cyan">LOST</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
          The coordinates you're searching for don't exist in this galaxy. Let's navigate back to charted space.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-space-cyan hover:bg-space-cyan/80 text-space-dark font-bold rounded-md transition-all duration-300 hover:scale-105">
          <Rocket size={20} />
          Return to Base
        </Link>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-space-purple/10 -z-10"></div>
      <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-space-blue/10 -z-10"></div>
      
      {/* Star-like dots */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white animate-pulse-bright"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 3}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default NotFound;
