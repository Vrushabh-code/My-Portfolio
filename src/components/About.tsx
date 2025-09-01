import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      Icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and industry standards.',
    },
    {
      Icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive user interfaces that provide exceptional user experiences.',
    },
    {
      Icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency across all devices and platforms.',
    },
    {
      Icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and creating solutions that make a difference.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with 9+ months of experience creating digital experiences 
              that combine beautiful design with powerful functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development started with a curiosity about how websites work, 
                  and it has evolved into a passion for creating seamless digital experiences. 
                  I specialize in React, JavaScript, and modern web technologies.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing my knowledge with the developer community. I believe in continuous learning and 
                  staying up-to-date with the latest industry trends.
                </p>
              </div>
            </div>

<div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-xl border border-border/20 mx-auto">
  <img 
    src="/profile.png" 
    alt="Profile Photo" 
    className="w-full h-full object-cover"
  />
</div>


          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, description }) => (
              <Card key={title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;