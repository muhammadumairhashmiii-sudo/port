import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Marketing & Lead Generation Specialist",
    company: "Prime Homes Properties LLC",
    location: "Dubai, UAE",
    period: "Feb 2024 — Present",
    bullets: [
      "Developing strategies & managing paid social media ads for Real Estate lead generation across FB, IG, Google",
      "Scheduling posts and optimizing profiles; running Google Search/Display/Video campaigns; analyzing performance",
    ],
  },
  {
    role: "Digital Marketing Specialist",
    company: "Ilaan.com",
    location: "Lahore, Pakistan",
    period: "Jun 2023 — Mar 2024",
    bullets: [
      "Multi-platform paid ads (FB, IG, YouTube, Google), SEO monitoring, content strategy and SERP tracking",
    ],
  },
  {
    role: "Digital Marketing Manager",
    company: "Al-Khair Gadoon Limited",
    location: "Pakistan",
    period: "Mar 2022 — Jun 2023",
    bullets: [
      "Digital strategy, SEO, e-commerce campaigns, cross-functional collaboration, analytics-driven improvements",
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Standard Capital Securities",
    location: "Pakistan",
    period: "Jun 2019 — Mar 2022",
    bullets: [],
  },
  {
    role: "Business Development Officer (Team Lead)",
    company: "Grey Media LLC",
    location: "Pakistan",
    period: "Sep 2018 — May 2019",
    bullets: [],
  },
  {
    role: "Internee",
    company: "Meezan Bank Limited",
    location: "Pakistan",
    period: "Jul 2018 — Sep 2018",
    bullets: [],
  },
  {
    role: "Internee Internal Auditor",
    company: "Grant Thornton",
    location: "Pakistan",
    period: "Nov 2017 — Dec 2017",
    bullets: [],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Experience Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                  <div className="glass rounded-2xl p-6 shadow-glass hover:shadow-glow transition-shadow duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
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
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
