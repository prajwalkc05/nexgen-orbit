import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600', alt: 'Modern Office Space', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400', alt: 'Team Collaboration', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400', alt: 'Tech Workspace', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', alt: 'Corporate Meeting', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400', alt: 'Team Building Event', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600', alt: 'Company Building', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400', alt: 'Office Interior', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400', alt: 'Project Discussion', size: 'small' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world - our spaces, our people, and the moments that define us.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-foreground font-medium">{image.alt}</span>
                <ZoomIn className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src.replace('w=600', 'w=1200').replace('w=400', 'w=1200')}
                alt={selectedImage.alt}
                className="w-full rounded-xl"
              />
              <div className="absolute bottom-4 left-4 glass-card px-4 py-2">
                <span className="text-foreground font-medium">{selectedImage.alt}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
