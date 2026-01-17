import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface BranchData {
  id: string;
  name: string;
  tagline: string;
  about: string;
  services: string[];
  stats: { label: string; value: string }[];
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface BranchModalProps {
  isOpen: boolean;
  onClose: () => void;
  branch: BranchData | null;
}

const BranchModal = ({ isOpen, onClose, branch }: BranchModalProps) => {
  if (!branch) return null;

  const Icon = branch.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-white/10 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl ${branch.color} flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {branch.name}
              </DialogTitle>
              <p className="text-muted-foreground">{branch.tagline}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-2 gradient-text">About</h3>
            <p className="text-muted-foreground leading-relaxed">{branch.about}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3 gradient-text">Our Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {branch.services.map((service, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className={`w-2 h-2 rounded-full ${branch.color}`} />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-lg font-semibold mb-3 gradient-text">Key Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              {branch.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <button className="w-full btn-primary">
            Contact This Branch
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BranchModal;
