import { useState } from 'react';
import { Cpu, PieChart, Shield, Sun, GraduationCap } from 'lucide-react';
import BranchModal from './BranchModal';

const branchesData = [
  {
    id: 'tech',
    name: 'TechVerse Solutions',
    tagline: 'Powering Digital Innovation',
    description: 'Cutting-edge software development, AI solutions, and cloud computing services for modern enterprises.',
    icon: Cpu,
    color: 'branch-tech',
    about: 'TechVerse Solutions is the technological backbone of NexGen, specializing in creating innovative software solutions that drive business transformation. Our team of expert developers and AI specialists work tirelessly to deliver cutting-edge applications that meet the evolving needs of our clients.',
    services: ['Custom Software Development', 'AI & Machine Learning', 'Cloud Migration', 'DevOps Consulting', 'Mobile App Development', 'API Integration'],
    stats: [
      { label: 'Projects', value: '200+' },
      { label: 'Clients', value: '85+' },
      { label: 'Countries', value: '12' }
    ]
  },
  {
    id: 'finance',
    name: 'FinanceHub Pro',
    tagline: 'Smart Financial Solutions',
    description: 'Expert investment strategies, tax planning, and comprehensive wealth management for lasting success.',
    icon: PieChart,
    color: 'branch-finance',
    about: 'FinanceHub Pro provides comprehensive financial services tailored to both individuals and corporations. Our seasoned financial advisors combine deep market knowledge with innovative strategies to help you achieve your financial goals and secure your future.',
    services: ['Investment Portfolio Management', 'Tax Planning & Optimization', 'Wealth Management', 'Corporate Finance Advisory', 'Retirement Planning', 'Risk Assessment'],
    stats: [
      { label: 'Assets Managed', value: '$2B+' },
      { label: 'Clients', value: '500+' },
      { label: 'Years Active', value: '12' }
    ]
  },
  {
    id: 'security',
    name: 'SecureGuard Systems',
    tagline: 'Protecting Digital Assets',
    description: 'Advanced cybersecurity solutions, threat analysis, and data protection for complete digital safety.',
    icon: Shield,
    color: 'branch-security',
    about: 'SecureGuard Systems is dedicated to protecting organizations from ever-evolving cyber threats. We offer comprehensive security solutions that safeguard your digital infrastructure, data, and reputation with military-grade protection and 24/7 monitoring.',
    services: ['Penetration Testing', 'Security Audits', 'Threat Detection & Response', 'Data Encryption', 'Compliance Consulting', 'Security Training'],
    stats: [
      { label: 'Threats Blocked', value: '10M+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Certifications', value: '15+' }
    ]
  },
  {
    id: 'eco',
    name: 'EcoEnergy Solutions',
    tagline: 'Sustainable Future Today',
    description: 'Renewable energy solutions, sustainability consulting, and green technology for a better tomorrow.',
    icon: Sun,
    color: 'branch-eco',
    about: 'EcoEnergy Solutions leads the charge towards a sustainable future. We provide comprehensive renewable energy solutions and sustainability consulting that help organizations reduce their carbon footprint while improving operational efficiency and meeting ESG goals.',
    services: ['Solar Energy Systems', 'Wind Power Solutions', 'Energy Efficiency Audits', 'Carbon Offset Programs', 'Sustainability Strategy', 'Green Certifications'],
    stats: [
      { label: 'CO2 Reduced', value: '50K tons' },
      { label: 'MW Installed', value: '150+' },
      { label: 'Green Projects', value: '75+' }
    ]
  },
  {
    id: 'edu',
    name: 'EduPrime Academy',
    tagline: 'Empowering Minds',
    description: 'Professional corporate training, industry certifications, and innovative online learning programs.',
    icon: GraduationCap,
    color: 'branch-edu',
    about: 'EduPrime Academy is committed to developing talent and empowering professionals with the skills they need to excel. Our comprehensive training programs and certification courses are designed by industry experts to deliver practical, career-enhancing education.',
    services: ['Corporate Training Programs', 'Professional Certifications', 'E-Learning Platforms', 'Leadership Development', 'Technical Workshops', 'Soft Skills Training'],
    stats: [
      { label: 'Students', value: '25K+' },
      { label: 'Courses', value: '150+' },
      { label: 'Completion Rate', value: '94%' }
    ]
  }
];

const BranchesSection = () => {
  const [selectedBranch, setSelectedBranch] = useState<typeof branchesData[0] | null>(null);

  return (
    <section id="branches" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Five Divisions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each branch specializes in delivering excellence within their domain, 
            working together to provide comprehensive solutions for our clients.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branchesData.map((branch, index) => {
            const Icon = branch.icon;
            return (
              <div
                key={branch.id}
                className="glass-card-hover p-6 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBranch(branch)}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${branch.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {branch.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {branch.description}
                </p>

                {/* Learn More */}
                <button className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <span className="w-4 h-4 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    →
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <BranchModal
        isOpen={!!selectedBranch}
        onClose={() => setSelectedBranch(null)}
        branch={selectedBranch}
      />
    </section>
  );
};

export default BranchesSection;
