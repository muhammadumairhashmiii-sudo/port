import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const StickyWhatsApp = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <Button
        size="lg"
        className="w-full rounded-none h-16 gap-2 shadow-2xl"
        onClick={() => window.open("https://wa.me/971547634170?text=Hey%20Atif%2C%20I%20need%20your%20digital%20marketing%20services", "_blank")}
      >
        <MessageCircle className="w-5 h-5" />
        Contact via WhatsApp
      </Button>
    </motion.div>
  );
};
