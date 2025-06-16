import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccommodationCard, {
  AccommodationProps,
} from "@/components/AccommodationCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample accommodations data
const accommodations: AccommodationProps[] = [
  {
    id: "1",
    name: "Private Villas",
    description:
      "Spacious private villas with panoramic views, perfect for families or groups seeking privacy and comfort.",
    price: 120000,
    capacity: 6,
    size: 85,
    image: "/img/accommodation/private-villas.png",
    location: "Lakeside",
    features: [
      "Wi-Fi",
      "Kitchen",
      "Bathroom",
      "Air Conditioning",
      "TV",
      "Balcony",
      "Garden View",
    ],
  },
  {
    id: "2",
    name: "Cultural Suites",
    description:
      "Elegantly designed suites featuring locally inspired interiors and authentic Rwandan craftsmanship.",
    price: 100000,
    capacity: 4,
    size: 65,
    image: "/img/accommodation/cultural-suites.jpg",
    location: "Cultural Center",
    features: [
      "Wi-Fi",
      "Kitchenette",
      "Bathroom",
      "Air Conditioning",
      "TV",
      "Traditional Decor",
    ],
  },
  {
    id: "3",
    name: "Garden Rooms",
    description:
      "Intimate rooms with garden views, featuring natural materials and peaceful ambiance for solo travelers or couples.",
    price: 70000,
    capacity: 2,
    size: 35,
    image: "/img/accommodation/garden-rooms.png",
    location: "Garden Area",
    features: [
      "Wi-Fi",
      "Bathroom",
      "Air Conditioning",
      "TV",
      "Garden View",
      "Natural Materials",
    ],
  },
];

export default function Accommodations() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5 mt-28">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.accommodations.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.accommodations.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Accommodations Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accommodations.map((accommodation, index) => (
                <div
                  key={accommodation.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <AccommodationCard accommodation={accommodation} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
