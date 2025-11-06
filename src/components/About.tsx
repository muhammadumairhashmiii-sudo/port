import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";

const highlights = [
  { icon: Target, label: "Result-Focused", value: "32% CPL Reduction" },
  { icon: TrendingUp, label: "Growth Driven", value: "Multi-Platform" },
  { icon: Users, label: "Client Success", value: "Real Estate & E-commerce" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-accent opacity-10 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Results-oriented Marketing professional specialized in Conventional Marketing as well as Digital Marketing, Social Media Management, Digital Brand Management, and hands-on problem solving in company environments.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I focus on <span className="text-primary font-semibold">measurable growth</span> and <span className="text-secondary font-semibold">scalable ad systems</span> that deliver real business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:animate-pulse-glow">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-xl font-bold">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
