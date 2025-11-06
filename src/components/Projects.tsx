import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Real Estate Lead Funnel",
    company: "Prime Homes",
    description: "FB/IG acquisition + landing page + lead nurture with CPL optimization.",
    impact: "32% CPL Reduction",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Property Portal Campaigns",
    company: "Ilaan.com",
    description: "Multi-platform acquisition with SERP improvements.",
    impact: "Improved SERP Visibility",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "E-commerce Growth",
    company: "Al-Khair Gadoon",
    description: "SEO + Paid campaigns improving traffic and conversion.",
    impact: "Increased ROAS",
    color: "from-orange-500 to-pink-500",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Delivering measurable results</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">{project.company}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-bold`}>
                  <span>{project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
