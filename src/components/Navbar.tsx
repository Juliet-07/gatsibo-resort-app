
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const navLinks = [
    { name: t.nav.about, path: "/about" },
    { name: "Resort Offering", path: "/resort-offering" },
    { name: "Cultural Center", path: "/cultural-center" },
    { name: t.nav.gallery, path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Split navigation items
  const leftNavItems = navLinks.slice(0, 3);
  const rightNavItems = navLinks.slice(3);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      const isScrolled = currentScrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Calculate dynamic logo size based on scroll
  const getLogoSize = () => {
    const maxSize = 120; // h-20
    const minSize = 80; // h-12
    const scrollRange = 100;
    
    if (scrollY === 0) return maxSize;
    if (scrollY >= scrollRange) return minSize;
    
    const sizeReduction = (scrollY / scrollRange) * (maxSize - minSize);
    return Math.max(minSize, maxSize - sizeReduction);
  };
  
  const logoSize = getLogoSize();
  
  return (
    <header
      style={{ borderBottom: '3px solid #fff', backgroundColor: '#064c40' }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2 shadow-lg" : "py-8"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Navigation Container */}
        <div className="flex items-center justify-between relative">
          {/* Left Navigation */}
          <nav className="hidden xl:flex flex-1 justify-start">
            <ul className="flex items-center space-x-12">
              {leftNavItems.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm font-semibold tracking-[0.15em] text-white hover:text-white/80 transition-colors uppercase nav-marcellus"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo - Left positioned on mobile, Center on desktop */}
          <div className={cn(
            "absolute z-10",
            "left-6 xl:left-1/2 xl:transform xl:-translate-x-1/2"
          )} style={{ top: scrolled ? '-4px' : '-15px' }}>
            <Link to="/" className="block">
              <div className={cn(
                "relative transition-all duration-500 ease-out",
                "bg-white/100 dark:bg-black/100 backdrop-blur-sm",
                "p-1 rounded-lg",
                scrolled 
                  ? "shadow-lg shadow-black/10 dark:shadow-white/10" 
                  : "shadow-2xl shadow-black/20 dark:shadow-white/20"
              )}>
                <img 
                  src="/gatsibo-resort-logo.webp" 
                  alt="Gatsibo Resort"
                  style={{ height: window.innerWidth < 1280 ? '60px' : `${logoSize}px` }}
                  className="transition-all duration-500 ease-out object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation + Controls */}
          <div className="flex items-center flex-1 justify-end">
            {/* Right Navigation - Desktop only */}
            <nav className="hidden xl:flex mr-6">
              <ul className="flex items-center space-x-12">
                {rightNavItems.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm font-semibold tracking-[0.15em] text-white hover:text-white/80 transition-colors uppercase nav-marcellus"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-6">
              {/* Bookings Button */} 
              {/* <button className="bg-white text-dusky font-bold tracking-[0.3em] px-5 py-2 text-sm text-primary hover:bg-cream transition-all uppercase nav-marcellus"  style={{ letterSpacing: '0.3em' }}>
                Bookings           
              </button> */}

              {/* Language Selector - Hidden on mobile */}
              {/* <div className="hidden md:flex">
                <LanguageSelector />
              </div> */}
              
              {/* Mobile Menu Button with exact 15px gap */}
              <div className="xl:hidden" style={{ marginLeft: '15px' }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="h-12 w-12"
                >
                  {mobileMenuOpen ? <X className="h-10 w-10 text-white" /> : <Menu className="h-10 w-10 text-white" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] xl:hidden transition-opacity duration-300",
        "h-[50dvh] w-full",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} style={{ backgroundColor: '#064c3f' }}>
        <div className={cn(
          "fixed inset-0 w-full transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <span className="text-xl font-light tracking-[0.15em] uppercase text-white">Menu</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(false)}
                className="h-12 w-12 text-white hover:bg-white/10"
              >
                <X className="h-10 w-10" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="block text-sm font-light tracking-[0.1em] text-white/80 hover:text-white transition-colors uppercase py-2 nav-marcellus"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Footer */}
            {/* <div className="p-6 border-t border-white/20">
              <div className="flex items-center justify-center">
                <LanguageSelector />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
