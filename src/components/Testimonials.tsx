import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Atif delivered high-quality buyer leads consistently. His FB/Google strategies boosted our pipeline and reduced CPL by 32%.",
    author: "Head of Sales",
    company: "Prime Homes",
  },
  {
    quote: "Managed multi-platform campaigns with clear reporting — drove growth and improved SERP visibility.",
    author: "Marketing Lead",
    company: "Ilaan.com",
  },
  {
    quote: "Built conversion-oriented funnels and improved our ROAS with smart creatives and targeting.",
    author: "Ecomm Manager",
    company: "Al-Khair Gadoon",
  },
  {
    quote: "Set up Shopify store, optimized product pages, and ran campaigns that increased month-over-month sales.",
    author: "Owner",
    company: "Shopify Client",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass border-0 shadow-glass h-full hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
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
