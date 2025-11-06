import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
      <StickyWhatsApp />
      
      <footer className="py-8 px-4 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Atif Qadeer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
