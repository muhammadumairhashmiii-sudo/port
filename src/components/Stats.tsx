import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 5, suffix: "+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
  { icon: Users, value: 50, suffix: "+", label: "Successful Campaigns", color: "from-cyan-500 to-blue-500" },
  { icon: Target, value: 32, suffix: "%", label: "Avg CPL Reduction", color: "from-orange-500 to-pink-500" },
  { icon: Zap, value: 100, suffix: "%", label: "Result Focused", color: "from-blue-500 to-purple-500" },
];

const CountUp = ({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, inView]);

  return <span>{count}{suffix}</span>;
};

export const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
                <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
