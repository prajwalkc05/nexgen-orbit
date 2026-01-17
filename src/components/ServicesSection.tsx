import { useState } from 'react';
import { Cpu, PieChart, Shield, Sun, GraduationCap, Code, Cloud, Brain, Wallet, LineChart, Lock, Radar, Leaf, Zap, BookOpen, Award } from 'lucide-react';

const servicesData = {
  tech: {
    name: 'TechVerse Solutions',
    icon: Cpu,
    color: 'branch-tech',
    services: [
      { icon: Code, title: 'Custom Software', description: 'Tailored applications built to solve your unique business challenges.' },
      { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services for modern enterprises.' },
      { icon: Brain, title: 'AI Integration', description: 'Intelligent automation and machine learning solutions for data-driven insights.' },
      { icon: Cpu, title: 'System Architecture', description: 'Robust and scalable system design for future-proof applications.' },
    ]
  },
  finance: {
    name: 'FinanceHub Pro',
    icon: PieChart,
    color: 'branch-finance',
    services: [
      { icon: Wallet, title: 'Wealth Management', description: 'Comprehensive strategies to grow and protect your assets.' },
      { icon: LineChart, title: 'Investment Advisory', description: 'Expert guidance for smart investment decisions and portfolio optimization.' },
      { icon: PieChart, title: 'Tax Planning', description: 'Strategic tax solutions to maximize your financial efficiency.' },
      { icon: Award, title: 'Financial Planning', description: 'Personalized roadmaps for achieving your financial goals.' },
    ]
  },
  security: {
    name: 'SecureGuard Systems',
    icon: Shield,
    color: 'branch-security',
    services: [
      { icon: Shield, title: 'Cyber Defense', description: 'Multi-layered protection against evolving digital threats.' },
      { icon: Lock, title: 'Data Protection', description: 'Encryption and security protocols to safeguard sensitive information.' },
      { icon: Radar, title: 'Threat Monitoring', description: '24/7 surveillance and real-time threat detection and response.' },
      { icon: Code, title: 'Security Audits', description: 'Comprehensive assessments to identify and fix vulnerabilities.' },
    ]
  },
  eco: {
    name: 'EcoEnergy Solutions',
    icon: Sun,
    color: 'branch-eco',
    services: [
      { icon: Sun, title: 'Solar Energy', description: 'Clean, renewable solar power systems for homes and businesses.' },
      { icon: Zap, title: 'Energy Efficiency', description: 'Optimize consumption and reduce costs with smart energy solutions.' },
      { icon: Leaf, title: 'Green Consulting', description: 'Sustainability strategies to achieve your environmental goals.' },
      { icon: Cloud, title: 'Carbon Offset', description: 'Programs to neutralize your carbon footprint effectively.' },
    ]
  },
  edu: {
    name: 'EduPrime Academy',
    icon: GraduationCap,
    color: 'branch-edu',
    services: [
      { icon: BookOpen, title: 'E-Learning', description: 'Flexible online courses designed for professional development.' },
      { icon: Award, title: 'Certifications', description: 'Industry-recognized credentials to boost your career.' },
      { icon: GraduationCap, title: 'Corporate Training', description: 'Customized programs to upskill your workforce.' },
      { icon: Brain, title: 'Leadership Development', description: 'Programs to nurture and develop future leaders.' },
    ]
  }
};

type TabKey = keyof typeof servicesData;

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('tech');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'tech', label: 'Technology' },
    { key: 'finance', label: 'Finance' },
    { key: 'security', label: 'Security' },
    { key: 'eco', label: 'Energy' },
    { key: 'edu', label: 'Education' },
  ];

  const activeData = servicesData[activeTab];
  const ActiveBranchIcon = activeData.icon;

  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the specialized services offered by each of our five divisions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const TabIcon = servicesData[tab.key].icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? 'glass-card border-primary/50 text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                <TabIcon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeData.services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card-hover p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 mx-auto rounded-xl ${activeData.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ServiceIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
