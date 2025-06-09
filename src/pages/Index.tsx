import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccommodationCard, { AccommodationProps } from "@/components/AccommodationCard";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import ExperiencesCarousel from "@/components/sections/ExperiencesCarousel";
import MissionSection from "@/components/sections/MissionSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee, Bed, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample apartments data
const featuredApartments: AccommodationProps[] = [
  {
    id: "1",
    name: "Private Villas",
    description: "Spacious private villas with panoramic views, perfect for families or groups seeking privacy and comfort.",
    price: 180000,
    capacity: 2,
    size: 45,
    image: "/img/accommodation/private-villas.png",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Balcony"]
  },
  {
    id: "2",
    name: "Cultural Suites",
    description: "Elegantly designed suites featuring locally inspired interiors and authentic Rwandan craftsmanship.",
    price: 250000,
    capacity: 4,
    size: 75,
    image: "/img/accommodation/cultural-suites.jpg",
    location: "Second row",
    features: ["Wi-Fi", "Kitchen", "Bathroom", "Air Conditioning", "TV", "Washing Machine"]
  },
  {
    id: "3",
    name: "Garden Rooms",
    description: "Intimate rooms with garden views, featuring natural materials and peaceful ambiance for solo travelers or couples.",
    price: 150000,
    capacity: 2,
    size: 35,
    image: "/img/accommodation/garden-rooms.png",
    location: "Beachfront",
    features: ["Wi-Fi", "Kitchenette", "Bathroom", "Air Conditioning", "TV"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  // State for dining carousel
  const [diningActiveSlide, setDiningActiveSlide] = useState(0);
  const diningCarouselRef = useRef<HTMLDivElement>(null);
  
  // State for adventure carousel
  const [adventureActiveSlide, setAdventureActiveSlide] = useState(0);
  const adventureCarouselRef = useRef<HTMLDivElement>(null);
  
  const diningSlides = [
    {
      id: 1,
      location: "KIGALI HEIGHTS, RWANDA",
      title: "Creative Rwandan amid dramatic mountain views",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/df2d89aa28-5483ceaf9a01088a0873.png"
    },
    {
      id: 2,
      location: "LAKE KIVU, RWANDA", 
      title: "Elevated African fare with lakeside flair",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/cf16fe2410-0f3d70a4dded26c5048b.png"
    }
  ];

  const adventureSlides = [
    {
      id: 1,
      title: "Cultural Performances",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/bf5e233962-72eeea5cdbbb547b3ba9.png"
    },
    {
      id: 2,
      title: "Luxury Stays", 
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5408eec1da-1ad175b3959d4f114f18.png"
    }
  ];

  // Dining carousel navigation
  const nextDiningSlide = () => {
    const nextIndex = (diningActiveSlide + 1) % diningSlides.length;
    setDiningActiveSlide(nextIndex);
    if (diningCarouselRef.current) {
      diningCarouselRef.current.scrollTo({
        left: nextIndex * 320,
        behavior: 'smooth'
      });
    }
  };

  const prevDiningSlide = () => {
    const prevIndex = (diningActiveSlide - 1 + diningSlides.length) % diningSlides.length;
    setDiningActiveSlide(prevIndex);
    if (diningCarouselRef.current) {
      diningCarouselRef.current.scrollTo({
        left: prevIndex * 320,
        behavior: 'smooth'
      });
    }
  };

  // Adventure carousel navigation
  const nextAdventureSlide = () => {
    const nextIndex = (adventureActiveSlide + 1) % adventureSlides.length;
    setAdventureActiveSlide(nextIndex);
    if (adventureCarouselRef.current) {
      adventureCarouselRef.current.scrollTo({
        left: nextIndex * 600,
        behavior: 'smooth'
      });
    }
  };

  const prevAdventureSlide = () => {
    const prevIndex = (adventureActiveSlide - 1 + adventureSlides.length) % adventureSlides.length;
    setAdventureActiveSlide(prevIndex);
    if (adventureCarouselRef.current) {
      adventureCarouselRef.current.scrollTo({
        left: prevIndex * 600,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        {/* New Intro Section */}
        <section id="intro" className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Welcome to Rwanda Resort & Cultural Center</h2>
                <p className="text-foreground/70 mb-6">Where luxury meets tradition, our resort offers an unparalleled experience that combines modern comfort with Rwanda's rich cultural heritage.</p>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <Bed className="text-2xl text-primary mb-2 mx-auto" />
                    <p className="font-semibold">Luxury Rooms</p>
                  </div>
                  <div className="text-center">
                    <Waves className="text-2xl text-primary mb-2 mx-auto" />
                    <p className="font-semibold">Wellness Spa</p>
                  </div>
                  <div className="text-center">
                    <Utensils className="text-2xl text-primary mb-2 mx-auto" />
                    <p className="font-semibold">Fine Dining</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px]">
                <img className="rounded-lg object-cover w-full h-full" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5408eec1da-1ad175b3959d4f114f18.png" alt="luxurious hotel room interior with traditional Rwandan decor elements" />
              </div>
            </div>
          </div>
        </section>
        {/* Value Proposition Section */}
        <ValuePropositionSection />
        
        {/* Experiences Carousel */}
        <ExperiencesCarousel />

        

        {/* New Highlights Section */}
        <section id="highlights" className="py-20 bg-muted">
          <div className="container mx-auto px-5">
            <h2 className="text-center text-3xl font-bold mb-12">Experience Our Offerings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <div className="h-48">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bf5e233962-72eeea5cdbbb547b3ba9.png" alt="traditional Rwandan dance performance in cultural setting" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">Cultural Center</h3>
                  <p className="text-foreground/70 mb-4">Immerse yourself in authentic Rwandan traditions through performances, workshops, and exhibitions.</p>
                  <Link to="/cultural-center" className="text-primary font-semibold flex items-center cursor-pointer hover:text-primary/80">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <div className="h-48">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5c572cc9b2-7226f97014b719392cf7.png" alt="luxury resort pool with mountain view in Rwanda" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">Luxury Accommodation</h3>
                  <p className="text-foreground/70 mb-4">Experience comfort in our thoughtfully designed rooms that blend modern luxury with local aesthetics.</p>
                  <Link to="/accommodations" className="text-primary font-semibold flex items-center cursor-pointer hover:text-primary/80">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <div className="h-48">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0d33435f1c-7e85c46ac25dbe6a826a.png" alt="gourmet Rwandan cuisine plated elegantly" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">Dining Experience</h3>
                  <p className="text-foreground/70 mb-4">Savor the finest Rwandan cuisine prepared by our expert chefs using local ingredients.</p>
                  <Link to="/amenities" className="text-primary font-semibold flex items-center cursor-pointer hover:text-primary/80">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Dining Experience Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-lg">
                <div className="uppercase text-sm tracking-wider mb-4 text-foreground/70">TRANSCEND</div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Discover Tastes<br />
                  That Will Change<br />
                  You Forever
                </h2>
                <p className="text-foreground/70 mb-8 text-lg">
                  Welcome to our collection of award-winning dining experiences around Rwanda.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/amenities">
                    Explore <ArrowRight className="ml-3 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div ref={diningCarouselRef} className="hidden md:flex gap-4 overflow-hidden">
                  {diningSlides.map((slide, index) => (
                    <div key={slide.id} className="min-w-[320px] group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4">
                        <img className="w-full h-full object-cover" src={slide.image} alt={slide.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="uppercase text-xs tracking-wider text-gray-300 mb-2">{slide.location}</div>
                          <h3 className="text-xl font-bold mb-3 text-white">{slide.title}</h3>
                          <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={nextDiningSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors z-10"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {diningSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setDiningActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    diningActiveSlide === index ? 'bg-primary' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New Adventure Section */}
        {/* <section id="adventure" className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <h2 className="text-4xl font-bold mb-4 text-center">Your Next Adventure is Calling</h2>
            <p className="text-center text-foreground/70 mb-12">Experience authentic Rwandan culture at over 10 unique locations across the country.</p>
            
            <div className="relative">
              <button 
                onClick={prevAdventureSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-10 hover:bg-black/70 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              
              <div ref={adventureCarouselRef} className="flex gap-6 overflow-x-auto pb-4">
                {adventureSlides.map((slide, index) => (
                  <div key={slide.id} className="min-w-[600px] relative rounded-xl overflow-hidden group cursor-pointer">
                    <img src={slide.image} alt={slide.title} className="w-full h-[400px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3>
                        <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Explore more</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={nextAdventureSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-10 hover:bg-black/70 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {adventureSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setAdventureActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    adventureActiveSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
         */}
        {/* Welcome Section */}
        {/* <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-foreground/70 mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-foreground/70 mb-8">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                    alt="Seaside view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&h=300&fit=crop"
                    alt="Luxury apartment interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop"
                    alt="Pool view" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
       
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredAccommodations.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.featuredAccommodations.title}
              </h2>
              <p className="text-foreground/70">
                {t.home.featuredAccommodations.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredApartments.map((accommodation, index) => (
                <div key={accommodation.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <AccommodationCard accommodation={accommodation} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <Link to="/accommodations">
                  {t.home.featuredAccommodations.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        {/* <MissionSection /> */}
        
        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.amenities.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.amenities.title}
              </h2>
              <p className="text-foreground/70">
                {t.home.amenities.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-foreground/70 mb-8">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/booking">{t.home.cta.bookNow}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
