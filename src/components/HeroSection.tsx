
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('img/AKP_012_original.jpg')",
          transform: `translateY(${backgroundY}px)`,
          backgroundPosition: `center ${50 + scrollY * 0.05}%`
        }}
      />
      
      {/* Stronger Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4" style={{ transform: `translateY(${contentY}px)` }}>
        <div className="container">
          <div className="max-w-3xl animate-fade-in text-left flex flex-col items-start">
            <span className="inline-block text-white/90 text-lg mb-4 tracking-wide border-b border-white/30 pb-2">
              {t.hero.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* <Button asChild size="lg" variant="heroSolid" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
                <Link to="/booking">{t.hero.bookStay}</Link>
              </Button> */}
              <Button asChild variant="hero" size="lg" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
                <Link to="/accommodations">{t.hero.exploreAccommodations}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a 
          href="#welcome" 
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm mb-2">{t.hero.scrollDown}</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
