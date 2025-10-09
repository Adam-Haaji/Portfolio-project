import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST API', level: 88 },
      ],
    },
    {
      category: 'Other',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'AI/ML', level: 70 },
        { name: 'Firebase', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="text-center text-foreground/70 mb-16 text-lg">
            Technologies I work with
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-card border border-border rounded-xl p-6 shadow-soft"
              >
                <h3 className="font-display text-2xl font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          className="h-full bg-gradient-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
