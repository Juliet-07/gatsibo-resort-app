
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  location: string;
  title: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    location: "LAKE KIVU, RWANDA",
    title: "Authentic Cultural Immersion",
    description: "Experience traditional Rwandan hospitality with modern luxury",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    location: "VOLCANOES NATIONAL PARK, RWANDA",
    title: "Adventure Meets Serenity",
    description: "Discover breathtaking landscapes in a peaceful mountain setting",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    location: "NYUNGWE FOREST, RWANDA",
    title: "Nature's Paradise Retreat",
    description: "Immerse yourself in pristine rainforest beauty",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
  }
];

export default function ExperiencesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextExperience = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % experiences.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevExperience = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextExperience, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-black text-white overflow-hidden">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium tracking-wider text-white/70 mb-4">
                TRANSCEND
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Experiences<br />
                That Will Change<br />
                You Forever
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Welcome to our collection of transformative experiences in the heart of Rwanda.
              </p>
              <Button 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-black"
              >
                Explore →
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    activeIndex === index 
                      ? "opacity-100 translate-x-0" 
                      : index < activeIndex 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  )}
                >
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-medium text-white/80 mb-2">
                      {experience.location}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-white/90">
                      {experience.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={nextExperience}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "bg-white w-8" 
                      : "bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
