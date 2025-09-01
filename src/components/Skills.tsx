import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 70, color: 'from-blue-600 to-blue-400' },
        { name: 'Material-UI', level: 88, color: 'from-cyan-500 to-teal-500' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Google-Firebase', level: 82, color: 'from-yellow-600 to-yellow-400' },
        { name: 'MongoDB', level: 30, color: 'from-blue-600 to-indigo-600' },
        { name: 'REST APIs', level: 88, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-gray-500' },
        { name: 'Docker', level: 25, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 50, color: 'from-orange-500 to-yellow-500' },
        { name: 'Wordpress', level: 75, color: 'from-purple-500 to-purple-600' },
      ],
    },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Material_UI',
    'Javascript', 'Express.js', 'MongoDB', 'Docker', 'AWS',
    'Git', 'Wordpress', 'Google-Firebase', 'GitHub'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category) => (
              <Card 
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/20"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={hoveredCategory === category.title ? skill.level : 0} 
                          className="h-2 bg-muted/30"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: hoveredCategory === category.title ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;