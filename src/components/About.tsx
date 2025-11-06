import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-glass"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Results-oriented Marketing professional specialized in Conventional Marketing as well as Digital Marketing, Social Media Management, Digital Brand Management, and hands-on problem solving in company environments. I focus on measurable growth and scalable ad systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
