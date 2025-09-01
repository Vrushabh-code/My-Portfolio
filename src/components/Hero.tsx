import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'React Developer', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex % texts.length];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            Vrushabh Satpute
          </h1>

          <div className="h-20 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              I'm a{' '}
              <span className="text-primary font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications with modern technologies.
            I love turning ideas into reality through clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                onClick={() => href.startsWith('#') ? scrollToSection(href) : window.open(href, '_blank')}
                className="w-12 h-12 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <Icon className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
              </Button>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;