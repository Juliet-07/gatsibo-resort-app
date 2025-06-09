
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccommodationCard, { AccommodationProps } from "@/components/AccommodationCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Users, Leaf, Utensils, Wifi, Car, ConciergeBell, Phone, Mail } from "lucide-react";
// Sample accommodations data (will use translations from context)
const allAccommodations: AccommodationProps[] = [
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
export default function ResortDetails() {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [filteredAccommodations, setFilteredAccommodations] = useState<AccommodationProps[]>(allAccommodations);
    const [capacityFilter, setCapacityFilter] = useState<string>("all");
    const [locationFilter, setLocationFilter] = useState<string>("all");
    const [priceRange, setPriceRange] = useState<number[]>([100000, 350000]);
    
  // Apply filters
  useEffect(() => {
    let result = allAccommodations;
    
    // Filter by capacity
    if (capacityFilter !== "all") {
      const capacity = parseInt(capacityFilter);
      result = result.filter(acc => acc.capacity >= capacity);
    }
    
    // Filter by location
    if (locationFilter !== "all") {
      result = result.filter(acc => acc.location === locationFilter);
    }
    
    // Filter by price range
    result = result.filter(acc => acc.price >= priceRange[0] && acc.price <= priceRange[1]);
    
    setFilteredAccommodations(result);
  }, [capacityFilter, locationFilter, priceRange]);
  
  // Get unique locations for filter
  const locations = ["all", ...new Set(allAccommodations.map(acc => acc.location))];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section id="resort-hero" className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/60 z-10"></div>
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src="/img/Resort-offerings-cover.jpg" 
            alt="luxury resort villas in Rwanda with traditional architecture, lush gardens, mountain backdrop, serene lakeside setting" 
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
            <div className="max-w-4xl">
              <h1 className="font-bold text-4xl md:text-5xl text-white mb-6">
                A Stay Inspired by Culture and Calm
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover accommodations that blend modern comfort with authentic Rwandan tradition
              </p>
            </div>
          </div>
        </section>

        {/* Accommodations Section */}
        <section id="accommodations" className="py-20 px-5 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">Accommodations</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Whether you're traveling solo, as a couple, or with a group, our rooms are designed for rest and connection.</p>
            </div>
          </div>
        </section>
        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {/* Capacity Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.accommodations.filters.guests}
                </label>
                <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.accommodations.filters.guests} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.accommodations.filters.anyGuests}</SelectItem>
                    <SelectItem value="1">{t.accommodations.filters.onePlus}</SelectItem>
                    <SelectItem value="2">{t.accommodations.filters.twoPlus}</SelectItem>
                    <SelectItem value="3">{t.accommodations.filters.threePlus}</SelectItem>
                    <SelectItem value="4">{t.accommodations.filters.fourPlus}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.accommodations.filters.location}
                </label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.accommodations.filters.location} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.accommodations.filters.allLocations}</SelectItem>
                    {locations.filter(loc => loc !== "all").map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
  {t.accommodations.filters.priceRange}: {priceRange[0].toLocaleString()} RWF - {priceRange[1].toLocaleString()} RWF
</label>
<Slider
  defaultValue={[100000, 350000]}
  min={100000}
  max={350000}
  step={10000}
  value={priceRange}
  onValueChange={setPriceRange}
  className="my-4"
/>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6 animate-fade-in [animation-delay:200ms]">
              <p className="text-muted-foreground">
                {t.accommodations.filters.showing} {filteredAccommodations.length} {t.accommodations.filters.of} {allAccommodations.length} {t.accommodations.filters.accommodations}
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setCapacityFilter("all");
                  setLocationFilter("all");
                  setPriceRange([100000, 350000]);
                }}
              >
                {t.accommodations.filters.resetFilters}
              </Button>
            </div>
          </div>
        </section>
        
        {/* Accommodations Grid */}
        <section className="section">
          <div className="container">
            {filteredAccommodations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAccommodations.map((accommodation, index) => (
                  <div key={accommodation.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <AccommodationCard accommodation={accommodation} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">{t.accommodations.filters.noMatch}</h3>
                <p className="text-muted-foreground mb-6">{t.accommodations.filters.adjustFilters}</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCapacityFilter("all");
                    setLocationFilter("all");
                    setPriceRange([100000, 350000]);
                  }}
                >
                  {t.accommodations.filters.resetFilters}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Dining Section */}
        <section id="dining" className="py-20 px-5 bg-rainforest">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Dining & Recreation</h2>
                <p className="text-white/90 text-lg mb-8">Savor Rwandan flavors under the open sky with our farm-to-table dining experiences.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Utensils className="text-accent text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Farm-to-Table Dining</h4>
                      <p className="text-white/80">Fresh, locally sourced ingredients prepared with traditional Rwandan recipes and modern culinary techniques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-accent text-xl mt-1">🔥</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Outdoor Lounges & Fire Pits</h4>
                      <p className="text-white/80">Gather around crackling fires under starlit skies, sharing stories and creating memories.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-accent text-xl mt-1">🚶</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Scenic Walking Trails</h4>
                      <p className="text-white/80">Explore beautiful gardens and lakeside paths that showcase Rwanda's natural beauty.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/efb1bf0d76-084926c35ef551cd6068.png" alt="outdoor dining Rwanda resort, traditional food presentation, lakeside restaurant, fire pit evening" />
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d8bee460be-762cb7604f281939078f.png" alt="scenic walking trail Rwanda resort, lush gardens, peaceful pathway, mountain views" />
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/369c532eb8-0359972602f9f785de29.png" alt="outdoor lounge area Rwanda resort, comfortable seating, fire pit, evening atmosphere" />
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/544023883d-7f7631313bb6d6a9603d.png" alt="farm to table dining Rwanda, fresh local ingredients, traditional cooking, outdoor kitchen" />
              </div>
            </div>
          </div>
        </section>

        {/* Recreation Section */}
        <section id="recreation" className="py-20 px-5 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">For Relaxation and Play</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Discover spaces designed for every mood - from active recreation to peaceful contemplation.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div id="games-card" className="bg-cream p-8 rounded-xl border border-border text-center">
                <div className="text-primary text-4xl mb-4">🎮</div>
                <h3 className="font-semibold text-xl text-black mb-4">Outdoor Games</h3>
                <p className="text-muted-foreground mb-4">Traditional games and modern activities for guests of all ages to enjoy together.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Traditional board games</li>
                  <li>• Volleyball court</li>
                  <li>• Children's play area</li>
                </ul>
              </div>
              
              <div id="bonfire-card" className="bg-cream p-8 rounded-xl border border-border text-center">
                <div className="text-primary text-4xl mb-4">🔥</div>
                <h3 className="font-semibold text-xl text-black mb-4">Evening Bonfires</h3>
                <p className="text-muted-foreground mb-4">Gather around warm fires for storytelling, music, and community connection.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Nightly bonfire sessions</li>
                  <li>• Traditional music</li>
                  <li>• Storytelling circles</li>
                </ul>
              </div>
              
              <div id="meditation-card" className="bg-cream p-8 rounded-xl border border-border text-center">
                <Leaf className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-xl text-black mb-4">Quiet Corners</h3>
                <p className="text-muted-foreground mb-4">Peaceful spaces for meditation, reading, and personal reflection.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Garden meditation spots</li>
                  <li>• Reading nooks</li>
                  <li>• Lakeside benches</li>
                </ul>
              </div>
              
              <div id="family-card" className="bg-cream p-8 rounded-xl border border-border text-center">
                <Users className="text-primary text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-xl text-black mb-4">Family Gatherings</h3>
                <p className="text-muted-foreground mb-4">Spacious areas perfect for family reunions and group celebrations.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Large gathering spaces</li>
                  <li>• Event planning services</li>
                  <li>• Catering options</li>
                </ul>
              </div>
              
              <div id="creative-card" className="bg-cream p-8 rounded-xl border border-border text-center">
                <div className="text-primary text-4xl mb-4">🎨</div>
                <h3 className="font-semibold text-xl text-black mb-4">Creative Retreats</h3>
                <p className="text-muted-foreground mb-4">Inspiring environments for artists, writers, and creative minds.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Art studio space</li>
                  <li>• Quiet work areas</li>
                  <li>• Natural inspiration</li>
                </ul>
              </div>
              
              <div id="wellness-card" className="bg-cream p-8 rounded-xl border border-border text-center">
                <div className="text-primary text-4xl mb-4">🧘</div>
                <h3 className="font-semibold text-xl text-black mb-4">Wellness Activities</h3>
                <p className="text-muted-foreground mb-4">Rejuvenating activities to restore mind, body, and spirit.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Yoga sessions</li>
                  <li>• Nature walks</li>
                  <li>• Wellness workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Highlight */}
        <section id="amenities" className="py-20 px-5 bg-dusky">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-12">Resort Amenities</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Wifi className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="font-semibold text-white mb-2">Free WiFi</h4>
                <p className="text-white/80 text-sm">High-speed internet throughout the resort</p>
              </div>
              
              <div className="text-center">
                <Car className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="font-semibold text-white mb-2">Free Parking</h4>
                <p className="text-white/80 text-sm">Secure parking for all guests</p>
              </div>
              
              <div className="text-center">
                <ConciergeBell className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="font-semibold text-white mb-2">Concierge</h4>
                <p className="text-white/80 text-sm">24/7 guest services and assistance</p>
              </div>
              
              <div className="text-center">
                <div className="text-white text-3xl mb-3">🚐</div>
                <h4 className="font-semibold text-white mb-2">Airport Transfer</h4>
                <p className="text-white/80 text-sm">Convenient transportation services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section id="booking-cta" className="py-20 px-5 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">Ready to Experience Authentic Rwanda?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Book your stay at our resort where culture meets comfort, and every moment becomes a cherished memory.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all">
                Book Your Stay Now
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all">
                View Availability
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="text-primary mr-2 h-4 w-4" />
                <span>+250 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2 h-4 w-4" />
                <span>reservations@rwandaresort.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
