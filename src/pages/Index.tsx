import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BranchesSection from '@/components/BranchesSection';
import ServicesSection from '@/components/ServicesSection';
import AchievementsSection from '@/components/AchievementsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BranchesSection />
        <ServicesSection />
        <AchievementsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
