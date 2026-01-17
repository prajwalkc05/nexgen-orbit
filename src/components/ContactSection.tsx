import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const branches = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'tech', label: 'TechVerse Solutions' },
  { value: 'finance', label: 'FinanceHub Pro' },
  { value: 'security', label: 'SecureGuard Systems' },
  { value: 'eco', label: 'EcoEnergy Solutions' },
  { value: 'edu', label: 'EduPrime Academy' },
];

const contactInfo = [
  { icon: MapPin, title: 'Address', value: '123 Innovation Drive, Tech City, TC 10001' },
  { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, title: 'Email', value: 'contact@nexgensolutions.com' },
  { icon: Clock, title: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    branch: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        branch: 'general',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Select Branch</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  {branches.map((branch) => (
                    <option key={branch.value} value={branch.value} className="bg-card">
                      {branch.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
