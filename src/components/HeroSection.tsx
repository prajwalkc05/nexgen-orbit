import { useState, useEffect } from 'react';
import { Cpu, PieChart, Shield, Sun, GraduationCap, ChevronDown } from 'lucide-react';

const branches = [
  { 
    id: 'tech', 
    name: 'TechVerse Solutions', 
    icon: Cpu, 
    color: 'branch-tech',
    angle: -90 
  },
  { 
    id: 'finance', 
    name: 'FinanceHub Pro', 
    icon: PieChart, 
    color: 'branch-finance',
    angle: -18 
  },
  { 
    id: 'security', 
    name: 'SecureGuard Systems', 
    icon: Shield, 
    color: 'branch-security',
    angle: 54 
  },
  { 
    id: 'eco', 
    name: 'EcoEnergy Solutions', 
    icon: Sun, 
    color: 'branch-eco',
    angle: 126 
  },
  { 
    id: 'edu', 
    name: 'EduPrime Academy', 
    icon: GraduationCap, 
    color: 'branch-edu',
    angle: 198 
  },
];

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle bg-primary/30"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            '--tx': (Math.random() - 0.5) * 200 + 'px',
            '--ty': (Math.random() - 0.5) * 200 + 'px',
            '--duration': Math.random() * 10 + 10 + 's',
            '--delay': Math.random() * 5 + 's',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const scrollToBranches = () => {
    const element = document.querySelector('#branches');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBranchSection = (branchId: string) => {
    const element = document.querySelector('#branches');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const orbitRadius = 160;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Particles />
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Orbital Layout */}
        <div 
          className="relative mb-12"
          style={{ width: '400px', height: '400px' }}
          onMouseEnter={() => setIsAnimating(false)}
          onMouseLeave={() => setIsAnimating(true)}
        >
          {/* Orbital Ring */}
          <div 
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: orbitRadius * 2 + 60 + 'px',
              height: orbitRadius * 2 + 60 + 'px',
            }}
          />
          
          {/* Center Logo */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center animate-pulse-glow z-10"
            style={{
              background: 'linear-gradient(135deg, hsl(348 82% 56%) 0%, hsl(37 90% 51%) 100%)',
            }}
          >
            <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">NG</span>
            </div>
          </div>

          {/* Orbiting Branches */}
          <div 
            className={`absolute inset-0 ${isAnimating ? 'animate-orbit' : ''}`}
            style={{ 
              transformOrigin: 'center center',
              animationPlayState: hoveredBranch ? 'paused' : 'running'
            }}
          >
            {branches.map((branch, index) => {
              const Icon = branch.icon;
              const angleRad = (branch.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * orbitRadius;
              const y = Math.sin(angleRad) * orbitRadius;
              
              return (
                <button
                  key={branch.id}
                  onClick={() => scrollToBranchSection(branch.id)}
                  onMouseEnter={() => setHoveredBranch(branch.id)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${branch.color} ${
                    hoveredBranch === branch.id ? 'scale-125 z-20' : 'scale-100'
                  } ${isAnimating ? 'animate-orbit-reverse' : ''}`}
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                    boxShadow: hoveredBranch === branch.id 
                      ? '0 0 30px currentColor' 
                      : '0 0 15px rgba(0,0,0,0.3)',
                    animationPlayState: hoveredBranch ? 'paused' : 'running'
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                  
                  {/* Tooltip */}
                  {hoveredBranch === branch.id && (
                    <div className="absolute top-full mt-2 whitespace-nowrap glass-card px-3 py-1.5 text-sm font-medium animate-fade-in">
                      {branch.name}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Innovating</span> Today,{' '}
            <span className="text-foreground">Shaping Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Five specialized divisions, one unified vision. We deliver excellence across technology, 
            finance, security, sustainability, and education.
          </p>
          
          <button 
            onClick={scrollToBranches}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Explore Our Branches
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
