import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const timeline = [
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of multiple web applications using MERN stack, integrated AI features, and mentored junior developers.',
      achievements: [
        'Reduced load time by 40% through optimization',
        'Implemented AI-powered features',
        'Managed team of  developers',
      ],
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      organization: 'Digital Agency',
      period: '2022 - 2025',
      description: 'Developed responsive web applications and collaborated with design teams to create engaging user experiences.',
      achievements: [
        'Built 10+ responsive websites',
        'Improved user engagement by 30%',
        'Implemented modern UI/UX practices',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'Somali National University',
      period: '2021 - 2025',
      description: 'Focused on software engineering, web development, and artificial intelligence.',
      achievements: [
        'current -  semesters 8',
        'Built multiple academic projects',
        'Led university coding club',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          
          <p className="text-center text-foreground/70 mb-16 text-lg">
            My professional journey
          </p>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    {item.type === 'work' ? (
                      <Briefcase className="text-primary-foreground" size={20} />
                    ) : (
                      <GraduationCap className="text-primary-foreground" size={20} />
                    )}
                  </div>
                  
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                      <span className="text-primary text-sm font-medium">{item.period}</span>
                    </div>
                    
                    <p className="text-foreground/80 font-medium mb-3">{item.organization}</p>
                    <p className="text-foreground/70 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/70">
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-primary opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
