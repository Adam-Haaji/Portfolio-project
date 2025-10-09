import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Smart Blood Donation & Emergency Alert System',
      description: 'A life-saving platform connecting blood donors with those in need, featuring real-time emergency alerts and location-based matching.',
      technologies: ['React', 'Node.js', 'MongoDB', 'express'],
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&h=400&fit=crop',
    },
    {
      title: 'Real Estate Management System',
      description: 'Comprehensive property management solution with advanced search, virtual tours, and automated lease management.',
      technologies: ['React', 'Express', 'MongoDB',],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    },
    {
      title: 'Desktop Travel Agency App',
      description: 'Modern travel booking platform with AI-powered recommendations, multi-currency support, and seamless payment integration.',
      technologies: ['Java', 'mysql', ],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    },
    {
      title: 'Booking Web Application',
      description: 'Versatile booking system for services and appointments with calendar integration and automated notifications.',
      technologies: ['React', 'Express', 'MongoDB', ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-center text-foreground/70 mb-16 text-lg">
            Some of my recent work
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="shadow-soft">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="shadow-soft">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-sm rounded-full text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
