import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Maximize, MapPin, Bath, Coffee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export interface AccommodationProps {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  location: string;
  features: string[];
}

export default function AccommodationCard({ accommodation }: { accommodation: AccommodationProps }) {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const translatedName = language !== 'en' && t.accommodationDescriptions?.[accommodation.id]?.name
    ? t.accommodationDescriptions[accommodation.id].name
    : accommodation.name;

  const translatedDescription = language !== 'en' && t.accommodationDescriptions?.[accommodation.id]?.description
    ? t.accommodationDescriptions[accommodation.id].description
    : accommodation.description;

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={accommodation.image}
          alt={translatedName}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-1">{translatedName}</h3>
            {/* <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{accommodation.location}</span>
            </div> */}
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{accommodation.capacity} {accommodation.capacity === 1 ?
                  t.accommodations.filters.guests : t.accommodations.filters.guests}</span>
              </div>
              <div className="flex items-center">
                <Maximize className="h-4 w-4 mr-1" />
                <span>{accommodation.size} m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-muted-foreground line-clamp-2">{translatedDescription}</p>

        <div className="flex flex-wrap gap-2">
          {accommodation.features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
            >
              {feature === "Bathroom" && <Bath className="h-3.5 w-3.5 mr-1" />}
              {feature === "Kitchen" && <Coffee className="h-3.5 w-3.5 mr-1" />}
              {feature === "Wi-Fi" && <Wifi className="h-3.5 w-3.5 mr-1" />}
              <span>{feature}</span>
            </div>
          ))}
          {accommodation.features.length > 3 && (
            <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              +{accommodation.features.length - 3} {t.accommodations.filters.more}
            </div>
          )}
        </div>

        <div className="flex items-end justify-between pt-2">
          <div>
            <span className="text-xl font-bold">{accommodation.price.toLocaleString()} RWF</span>
            <span className="text-muted-foreground text-sm"> / {t.booking.summary.night}</span>
          </div>
          <Button asChild className="btn-primary">
            <Link to={`/accommodations/${accommodation.id}`}>{t.accommodations.filters.viewDetails}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
