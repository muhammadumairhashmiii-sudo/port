import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Marketing Analytics and Measurement",
    provider: "Google Coursera",
    date: "Dec 2023",
  },
  {
    title: "Interact with Customers Online",
    provider: "Google Coursera",
    date: "Nov 2023",
  },
  {
    title: "Email Marketing",
    provider: "Google Coursera",
    date: "Nov 2023",
  },
  {
    title: "Attract and Engage Customers",
    provider: "Google Coursera",
    date: "Oct 2023",
  },
  {
    title: "Digital Marketing & E-commerce Foundation",
    provider: "Google Coursera",
    date: "Aug 2023",
  },
  {
    title: "SEO",
    provider: "Digiskills",
    date: "Feb 2020",
  },
  {
    title: "WordPress",
    provider: "Digiskills",
    date: "Feb 2020",
  },
  {
    title: "Digital Marketing",
    provider: "Digiskills",
    date: "Nov 2018",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-4 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-accent opacity-10 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-muted-foreground text-lg">Continuously learning and improving</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 group-hover:animate-pulse-glow">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold leading-tight mb-2 group-hover:text-gradient transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">{cert.provider}</p>
                  <Badge variant="secondary" className="text-xs gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {cert.date}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
