import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Atif delivered high-quality buyer leads consistently. His FB/Google strategies boosted our pipeline and reduced CPL by 32%.",
    author: "Head of Sales",
    company: "Prime Homes",
    rating: 5,
  },
  {
    quote: "Managed multi-platform campaigns with clear reporting — drove growth and improved SERP visibility.",
    author: "Marketing Lead",
    company: "Ilaan.com",
    rating: 5,
  },
  {
    quote: "Built conversion-oriented funnels and improved our ROAS with smart creatives and targeting.",
    author: "Ecomm Manager",
    company: "Al-Khair Gadoon",
    rating: 5,
  },
  {
    quote: "Set up Shopify store, optimized product pages, and ran campaigns that increased month-over-month sales.",
    author: "Owner",
    company: "Shopify Client",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-5 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">What clients say about working with me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
