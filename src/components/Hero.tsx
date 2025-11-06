import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/atif-profile.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-gradient-primary opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-gradient-secondary opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Digital Marketing Expert</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none"
            >
              Atif
              <br />
              <span className="text-gradient">Qadeer</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gradient-secondary"
            >
              Results-driven Digital Marketing & Lead Generation Specialist
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              Based in Dubai, delivering measurable growth through expert lead generation, paid social campaigns (Facebook/Instagram), Google Ads, SEO, and digital brand development for real estate and e-commerce.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gap-2 shadow-neon hover:scale-105 transition-all duration-300 bg-gradient-primary border-0 text-lg px-8 py-6 h-auto group"
                onClick={() => window.open("https://wa.me/971547634170?text=Hey%20Atif%2C%20I%20need%20your%20digital%20marketing%20services", "_blank")}
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Let's Talk on WhatsApp
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 glass-card border-primary/30 hover:border-primary transition-all duration-300 text-lg px-8 py-6 h-auto"
              >
                <Zap className="w-5 h-5" />
                View Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image with modern frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing rings */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-30 blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Main image container */}
              <div className="relative glass-card rounded-3xl p-2 glow-border">
                <motion.img
                  src={profileImage}
                  alt="Atif Qadeer - Digital Marketing Specialist"
                  className="relative rounded-2xl w-full h-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-intense"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
