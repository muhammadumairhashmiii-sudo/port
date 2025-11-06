import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Real Estate Lead Funnel",
    company: "Prime Homes",
    description: "FB/IG acquisition + landing page + lead nurture. Result-oriented with CPL optimization.",
    impact: "Reduced CPL by 32%",
  },
  {
    title: "Property Portal Campaigns",
    company: "Ilaan.com",
    description: "Multi-platform acquisition, SERP improvements.",
    impact: "Improved SERP visibility",
  },
  {
    title: "E-commerce Growth",
    company: "Al-Khair Gadoon",
    description: "SEO + Paid campaigns that improved traffic and conversion.",
    impact: "Increased ROAS",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Selected Projects & Campaigns
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="glass border-0 shadow-glass h-full hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                  <CardDescription className="text-primary font-semibold">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {project.impact}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
