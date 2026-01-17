import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Branches', href: '#branches' },
  { name: 'Services', href: '#services' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-card py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-lg">
              N
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">NexGen</span>
              <span className="text-foreground"> Solutions</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden lg:block btn-primary">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-foreground"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 glass-card z-50 lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold gradient-text">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/50"
              >
                {item.name}
              </button>
            ))}
            <button className="btn-primary mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
