
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    alt: "Beachfront view",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    alt: "Luxury suite interior",
    category: "rooms"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1584132905271-512c958d674a?w=800&h=600&fit=crop",
    alt: "Swimming pool",
    category: "amenities"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop",
    alt: "Premium apartment",
    category: "rooms"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
    alt: "Beach sunset",
    category: "exterior"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
    alt: "Dining area",
    category: "amenities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    alt: "Bathroom",
    category: "rooms"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
    alt: "Beach pathway",
    category: "exterior"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    alt: "Restaurant",
    category: "amenities"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop",
    alt: "Bedroom",
    category: "rooms"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    alt: "Beach umbrellas",
    category: "exterior"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    alt: "Spa",
    category: "amenities"
  },
  // {
  //   id: 13,
  //   src: "https://images.unsplash.com/photo-1519074069444-1752457ea266?w=800&h=600&fit=crop",
  //   alt: "Lush green hills of Rwanda",
  //   category: "nature"
  // },
  // {
  //   id: 14,
  //   src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
  //   alt: "Scenic view of Volcanoes National Park",
  //   category: "nature"
  // },
  // {
  //   id: 15,
  //   src: "https://images.unsplash.com/photo-1536338600004-83390818c136?w=800&h=600&fit=crop",
  //   alt: "Wildlife in Akagera National Park",
  //   category: "nature"
  // },
  // {
  //   id: 16,
  //   src: "https://images.unsplash.com/photo-1530532643200-a01f6a2e07c9?w=800&h=600&fit=crop",
  //   alt: "Smiling Rwandan woman",
  //   category: "people"
  // },
  // {
  //   id: 17,
  //   src: "https://images.unsplash.com/photo-1604320926302-a00603561341?w=800&h=600&fit=crop",
  //   alt: "Rwandan children playing",
  //   category: "people"
  // },
  // {
  //   id: 18,
  //   src: "https://images.unsplash.com/photo-1542754931-097152774808?w=800&h=600&fit=crop",
  //   alt: "Local artisan crafting goods",
  //   category: "people"
  // },
  // {
  //   id: 19,
  //   src: "https://images.unsplash.com/photo-1569940807340-13cf378b5013?w=800&h=600&fit=crop",
  //   alt: "Traditional Intore dancers performing",
  //   category: "tradition"
  // },
  // {
  //   id: 20,
  //   src: "https://images.unsplash.com/photo-1604320926402-a00603561341?w=800&h=600&fit=crop",
  //   alt: "Woman in traditional Rwandan umushanana attire",
  //   category: "tradition"
  // },
  // {
  //   id: 21,
  //   src: "https://images.unsplash.com/photo-1542754931-097152774808?w=800&h=600&fit=crop",
  //   alt: "Close-up of traditional Imigongo art",
  //   category: "tradition"
  // },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
    alt: "Crowd at a vibrant festival",
    category: "events"
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
    alt: "Local community market event",
    category: "events"
  },
  // {
  //   id: 24,
  //   src: "https://images.unsplash.com/photo-1561414227-6d20a915f8e3?w=800&h=600&fit=crop",
  //   alt: "Elegant outdoor celebration setup",
  //   category: "events"
  // },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Gallery Hero */}
        <section id="gallery-hero" className="relative h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40 z-10"></div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/54909a4692-c4480e9be80ff3772c6c.png" alt="Rwanda cultural gallery showcase with traditional art, nature photography, and cultural artifacts displayed in elegant frames" />
            <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
                <div className="max-w-4xl">
                    <h1 className="font-bold text-4xl md:text-5xl text-white mb-6">
                        {t.gallery.heroTitle}
                    </h1>
                    <p className="text-xl text-white/90 leading-relaxed">
                        {t.gallery.heroSubtitle}
                    </p>
                </div>
            </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "exterior", "rooms", "amenities", "events"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {t.gallery.filters[category as keyof typeof t.gallery.filters]}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
         {/* CTA Section */}
      <section id="heritage-cta" className="py-20 px-5 bg-dusky">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">
          Experience These Moments Yourself
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
          Every image tells a story waiting to be lived. Join us and become part of Rwanda's continuing narrative of culture, nature, and community.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-dusky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-all">
              Book Cultural Experience
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dusky transition-all">
            Plan Your Visit
            </button>
          </div> */}
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
}
