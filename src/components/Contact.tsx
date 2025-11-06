import { motion } from "framer-motion";
import { MessageCircle, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Send className="w-16 h-16 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to grow your business with data-driven digital marketing? Let's start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gap-2 shadow-neon hover:scale-105 transition-all duration-300 bg-gradient-primary border-0 text-lg px-10 py-7 h-auto group w-full sm:w-auto"
              onClick={() => window.open("https://wa.me/971547634170?text=Hey%20Atif%2C%20I%20need%20your%20digital%20marketing%20services", "_blank")}
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              WhatsApp Me Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 glass-card border-primary/30 hover:border-primary transition-all duration-300 text-lg px-10 py-7 h-auto w-full sm:w-auto"
              onClick={() => window.location.href = "mailto:Atif.qadeerr@gmail.com"}
            >
              <Mail className="w-6 h-6" />
              Email Me
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 glass-card rounded-2xl p-8 inline-block"
          >
            <p className="text-sm text-muted-foreground mb-2">Based in</p>
            <p className="text-2xl font-bold text-gradient">Dubai, UAE 🇦🇪</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
