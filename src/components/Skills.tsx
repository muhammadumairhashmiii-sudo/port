import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const skills = [
  {
    name: "Lead Generation Strategies (Real Estate focus)",
    example: "Full-funnel lead acquisition with landing pages and lead magnets",
    level: 95,
  },
  {
    name: "Facebook Ads Creation & Management",
    example: "Campaign architecture, dynamic creatives, A/B testing",
    level: 95,
  },
  {
    name: "Google Ads (Search, Display, Video)",
    example: "Keyword funnels + display retargeting",
    level: 90,
  },
  {
    name: "SEO Planning & Implementation",
    example: "On-page, technical, and backlink strategy",
    level: 88,
  },
  {
    name: "Social Media Content Strategy",
    example: "Monthly pillar content + short-form assets",
    level: 92,
  },
  {
    name: "Digital Brand Development",
    example: "Visual identity + messaging frameworks",
    level: 85,
  },
  {
    name: "Digital Display Ads Management",
    example: "Programmatic & remarketing creatives",
    level: 87,
  },
  {
    name: "Social Media Management",
    example: "Scheduling, community moderation, analytics",
    level: 93,
  },
  {
    name: "Shopify Development & Management",
    example: "Store setup, product funnels, UTM tracking",
    level: 82,
  },
  {
    name: "WordPress Development & Management",
    example: "CMS ops, speed & SEO",
    level: 80,
  },
  {
    name: "Analytics & Reporting",
    example: "GA4 setups, dashboards, conversion tracking",
    level: 91,
  },
];

const ProgressBar = ({ level, inView }: { level: number; inView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-vibrant relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
             style={{ backgroundSize: "200% 100%" }} />
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 shadow-glass"
            >
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{skill.example}</p>
              <ProgressBar level={skill.level} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
