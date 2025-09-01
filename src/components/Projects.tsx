import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Finance Bot',
      description: 'FinanceBot is an intelligent web application that leverages advanced AI and Natural Language Processing to analyze financial documents, extract key insights, and provide comprehensive research reports. Built with modern full-stack technologies, it offers an intuitive interface for investors, analysts, and financial professionals to quickly understand complex financial documents through AI-powered analysis and interactive chat capabilities.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['Python', 'Node.js', 'React', 'CSS'],
      category: 'Full Stack',
      github: 'https://github.com/Vrushabh-code/Smart-Document-Based-Chatbox.git',
      // demo: '#',
    },
    {
      title: 'Landing Page',
      description: 'Developed a modern, responsive venture capital firm website using React, TypeScript, Vite, and Tailwind CSS — showcasing portfolio, investment approach, and team expertise with smooth animations and a professional UI.',
      image: 'https://images.stockcake.com/public/d/5/5/d5570607-1d08-4f35-afa9-60209f3a0fff_medium/professional-modern-connection-stockcake.jpg',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Typescript', 'Radix UI', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com/Vrushabh-code/landingPage.git',
      demo: 'https://landing-page-vert-five.vercel.app/',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    //   image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg',
    //   technologies: ['React', 'Tailwind CSS', 'Weather API'],
    //   category: 'Frontend',
    //   github: '#',
    //   demo: '#',
    // },
    {
      title: 'Fake News Detector',
      description: 'TruthGuard is an fake news detection demo built with React and TypeScript that evaluates news credibility through hybrid detection combining simulated online verification and content analysis heuristics. The application features a modern UI with Tailwind CSS, allowing users to input articles via URL or text, receive predictions with confidence scores and key indicators, and provide feedback to improve accuracy tracking. The system includes an analytics dashboard showing analysis history, real/fake counts, and user-rated accuracy, demonstrating full-stack development skills with Vite build tooling and responsive design principles.',
      image: 'https://www.shutterstock.com/image-photo/online-fake-news-on-laptop-260nw-1758820139.jpg',
      technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Python'],
      category: 'Backend',
      github: 'https://github.com/Vrushabh-code/TruthGuard.git',
      demo: 'https://truth-guard-omega.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description: 'You are in portfolio website',
      image: 'https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: '#',
      demo: '#',
    },
    // {
    //   title: 'Chat Application',
    //   description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
    //   image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    //   category: 'Full Stack',
    //   github: '#',
    //   demo: '#',
    // },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here's a selection of projects I've worked on, showcasing different technologies and approaches.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-muted-foreground self-center mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/20 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full w-8 h-8 hover:scale-110 transition-transform duration-200"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full w-8 h-8 hover:scale-110 transition-transform duration-200"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;