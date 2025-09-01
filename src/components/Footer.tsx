import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Code className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">by Vrushabh Satpute</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vrushabh Satpute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;