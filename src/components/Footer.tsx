import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Branches', href: '#branches' },
  { name: 'Services', href: '#services' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const branches = [
  'TechVerse Solutions',
  'FinanceHub Pro',
  'SecureGuard Systems',
  'EcoEnergy Solutions',
  'EduPrime Academy',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail('');
  };

  return (
    <footer className="pt-16 pb-8 relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                N
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">NexGen</span>
                <span className="text-foreground"> Solutions</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Five specialized divisions, one unified vision. We deliver excellence across technology, 
              finance, security, sustainability, and education.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Branches</h4>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch}>
                  <button
                    onClick={() => scrollToSection('#branches')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {branch}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 NexGen Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
