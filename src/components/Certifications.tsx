import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Assess for Success: Marketing Analytics and Measurement",
    provider: "Google Coursera",
    date: "Dec, 2023",
  },
  {
    title: "From Likes to Leads: Interact with Customers Online",
    provider: "Google Coursera",
    date: "Nov, 2023",
  },
  {
    title: "Think Outside the Inbox: Email Marketing",
    provider: "Google Coursera",
    date: "Nov, 2023",
  },
  {
    title: "Attract and Engage Customers with Digital Marketing",
    provider: "Google Coursera",
    date: "Oct, 2023",
  },
  {
    title: "Foundation of Digital Marketing and E-commerce",
    provider: "Google Coursera",
    date: "Aug, 2023",
  },
  {
    title: "SEO",
    provider: "Digiskills Virtual University of Pakistan",
    date: "Feb, 2020",
  },
  {
    title: "WordPress",
    provider: "Digiskills",
    date: "Feb, 2020",
  },
  {
    title: "Digital Marketing",
    provider: "Digiskills",
    date: "Nov, 2018",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 shadow-glass"
            >
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-lg leading-tight">{cert.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{cert.provider}</p>
              <Badge variant="secondary" className="text-xs">
                {cert.date}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
