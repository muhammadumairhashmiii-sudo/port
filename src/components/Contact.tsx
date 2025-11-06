import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's work together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Only WhatsApp contact — click below to start a professional conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gap-2 shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open("https://wa.me/971547634170?text=Hey%20Atif%2C%20I%20need%20your%20digital%20marketing%20services", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto"
              onClick={() => window.location.href = "mailto:Atif.qadeerr@gmail.com"}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
