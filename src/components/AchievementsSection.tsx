import { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Clock, Award, Trophy, Star, Target, Zap } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 250, suffix: '+', label: 'Happy Clients' },
  { icon: Clock, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 50, suffix: '+', label: 'Industry Awards' },
];

const awards = [
  { icon: Trophy, title: 'Excellence in Innovation', year: '2024', org: 'Tech Leaders Summit' },
  { icon: Star, title: 'Best Enterprise Solution', year: '2023', org: 'Global Business Awards' },
  { icon: Target, title: 'Sustainability Champion', year: '2023', org: 'Green Future Initiative' },
  { icon: Zap, title: 'Digital Transformation Award', year: '2022', org: 'IT Excellence Forum' },
];

const AnimatedCounter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence, innovation, and client satisfaction that speaks for itself.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Awards */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">Recognition & Awards</h3>
          <p className="text-muted-foreground">Honored by industry leaders worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={award.title}
                className="glass-card-hover p-6 text-center group"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{award.title}</h4>
                <p className="text-sm text-muted-foreground">{award.org}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {award.year}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
