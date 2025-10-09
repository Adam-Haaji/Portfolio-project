import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: Code2,
      title: '2+ Years Experience',
      description: 'Building full-stack applications with modern technologies',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implementing intelligent features in production apps',
    },
    {
      icon: Rocket,
      title: 'Production Ready',
      description: 'Delivering scalable solutions that work reliably',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Get to know me better
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-soft mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm a passionate Full-Stack Developer with over 2 years of experience building robust web applications. 
              My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I have a keen interest 
              in integrating AI components to create intelligent, pattern-detecting applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I thrive on solving complex problems and turning innovative ideas into reality. My projects demonstrate 
              a strong focus on user experience, performance optimization, and maintainable code. I'm constantly learning 
              and staying updated with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-foreground/70">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
