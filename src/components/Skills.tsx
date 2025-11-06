import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, TrendingUp, Search, Share2, ShoppingBag, Code, BarChart, MessageSquare } from "lucide-react";

const skills = [
  {
    name: "Lead Generation",
    icon: Target,
    example: "Real Estate full-funnel acquisition",
    level: 95,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Facebook Ads",
    icon: Share2,
    example: "Dynamic creatives & A/B testing",
    level: 95,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Google Ads",
    icon: TrendingUp,
    example: "Search, Display & Video campaigns",
    level: 90,
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "SEO Strategy",
    icon: Search,
    example: "Technical & backlink optimization",
    level: 88,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Content Strategy",
    icon: MessageSquare,
    example: "Pillar content & short-form assets",
    level: 92,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Brand Development",
    icon: TrendingUp,
    example: "Visual identity & messaging",
    level: 85,
    color: "from-blue-600 to-blue-500",
  },
  {
    name: "E-commerce",
    icon: ShoppingBag,
    example: "Shopify setup & product funnels",
    level: 82,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Analytics",
    icon: BarChart,
    example: "GA4 dashboards & tracking",
    level: 91,
    color: "from-blue-500 to-cyan-600",
  },
];

const ProgressBar = ({ level, inView, color }: { level: number; inView: boolean; color: string }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  return (
    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full bg-gradient-to-r ${color} relative`}
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
    <section id="skills" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">Specialized in driving measurable results</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shrink-0 group-hover:animate-pulse-glow`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-gradient transition-colors">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.example}</p>
                </div>
                <div className="text-2xl font-bold text-gradient">{skill.level}%</div>
              </div>
              <ProgressBar level={skill.level} inView={inView} color={skill.color} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
