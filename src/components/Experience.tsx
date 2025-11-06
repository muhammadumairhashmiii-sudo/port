import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Marketing & Lead Generation Specialist",
    company: "Prime Homes Properties LLC",
    location: "Dubai, UAE",
    period: "Feb 2024 — Present",
    current: true,
    bullets: [
      "Developing strategies & managing paid social media ads for Real Estate lead generation",
      "Running Google Search/Display/Video campaigns with performance optimization",
    ],
  },
  {
    role: "Digital Marketing Specialist",
    company: "Ilaan.com",
    location: "Lahore, Pakistan",
    period: "Jun 2023 — Mar 2024",
    bullets: [
      "Multi-platform paid ads (FB, IG, YouTube, Google) with SERP tracking",
    ],
  },
  {
    role: "Digital Marketing Manager",
    company: "Al-Khair Gadoon Limited",
    location: "Pakistan",
    period: "Mar 2022 — Jun 2023",
    bullets: [
      "Digital strategy, SEO, e-commerce campaigns, analytics-driven improvements",
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Standard Capital Securities",
    location: "Pakistan",
    period: "Jun 2019 — Mar 2022",
    bullets: [],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-secondary opacity-10 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">5+ years driving digital growth</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 group cursor-pointer">
                {exp.current && (
                  <div className="absolute -top-3 -right-3">
                    <div className="px-4 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold animate-pulse-glow">
                      CURRENT
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:animate-pulse-glow">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {exp.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
