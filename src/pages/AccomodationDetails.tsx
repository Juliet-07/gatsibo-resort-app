import React, { useEffect, useState } from "react";
import {
  Users,
  Home,
  Bed,
  Mountain,
  Sofa,
  Utensils,
  Bath,
  Wifi,
  Trees,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AccommodationDetails: React.FC = () => {
  const galleryImages = [
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/aa43ee03b0-29b637f7610242df4dc3.png",
      alt: "villa living room Rwanda resort, traditional furniture, mountain views, natural lighting",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/60296c179d-c87b66d04e27ebd9c2ac.png",
      alt: "villa kitchen Rwanda resort, modern appliances, natural materials, local design elements",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/03dcd850d2-1008528ec410ebac9758.png",
      alt: "villa master bedroom Rwanda resort, king bed, traditional textiles, panoramic windows",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1e0cdd97dd-46c2e139be523c09e774.png",
      alt: "villa bathroom Rwanda resort, rainfall shower, natural stone, luxury amenities",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/81913511b4-aec36b9c528a161de7ff.png",
      alt: "villa terrace Rwanda resort, outdoor seating, mountain views, garden setting",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1c51dca6bf-8622ae4ffb28c51b212d.png",
      alt: "villa dining area Rwanda resort, traditional table, cultural decor, family setting",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c0c6c57e28-d7c00d849364a56de2f7.png",
      alt: "villa fire pit Rwanda resort, outdoor gathering, evening atmosphere, traditional setting",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8d7cb7d936-f43c431daeb20b18a744.png",
      alt: "villa garden Rwanda resort, private outdoor space, lush vegetation, peaceful setting",
    },
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex! + 1) % galleryImages.length
      );
    }
  };

  const showPrevImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex! - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts or lightbox closes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  // Optional: Add keyboard navigation for lightbox (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (event.key === "ArrowRight") {
        showNextImage();
      }
      if (event.key === "ArrowLeft") {
        showPrevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, currentImageIndex]); // Add currentImageIndex to dependencies if showNext/PrevImage rely on it directly

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        id="accommodation-hero"
        className="relative h-[400px] overflow-hidden mt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40  z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fad0cc0c63-89755b2a6762edc5ded9.png"
          alt="luxury private villa Rwanda resort with traditional architecture, panoramic mountain views, lush gardens, modern amenities"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-4">
              Private Villa Details
            </h1>
            <p className="text-xl text-white/90">
              Experience luxury and tradition in perfect harmony
            </p>
          </div>
        </div>
      </section>

      {/* Villa Overview */}
      <section id="villa-overview" className="py-16 px-5 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl text-black mb-6">
                Private Villa Experience
              </h2>
              <p className="text-lg text-dusky mb-6">
                Our spacious private villas offer the perfect blend of modern
                luxury and authentic Rwandan culture. Each villa is thoughtfully
                designed to provide an intimate connection with nature while
                ensuring the highest standards of comfort.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-cream rounded-lg">
                  <Users className="text-sunset text-2xl mb-2" />
                  <div className="font-semibold text-black">Up to 6 Guests</div>
                  <div className="text-sm text-dusky">Perfect for families</div>
                </div>
                <div className="text-center p-4 bg-cream rounded-lg">
                  <Home className="text-sunset text-2xl mb-2" />
                  <div className="font-semibold text-black">150 m²</div>
                  <div className="text-sm text-dusky">Spacious living area</div>
                </div>
                <div className="text-center p-4 bg-cream rounded-lg">
                  <Bed className="text-sunset text-2xl mb-2" />
                  <div className="font-semibold text-black">3 Bedrooms</div>
                  <div className="text-sm text-dusky">King & twin beds</div>
                </div>
                <div className="text-center p-4 bg-cream rounded-lg">
                  <Mountain className="text-sunset text-2xl mb-2" />
                  <div className="font-semibold text-black">Mountain Views</div>
                  <div className="text-sm text-dusky">Panoramic vistas</div>
                </div>
              </div>

              <button className="bg-sunset text-white px-8 py-3 rounded-lg font-semibold hover:bg-sunset/90 transition-all">
                Book This Villa
              </button>
            </div>

            <div className="space-y-4">
              <img
                className="w-full h-[280px] object-cover rounded-lg"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/032cb75d4b-7aa01ad8943a960bde50.png"
                alt="private villa interior Rwanda resort, traditional decor, modern amenities, natural lighting, cultural artwork"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="w-full h-[130px] object-cover rounded-lg"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/58f0cd808d-05eee7bb3e185451ddbe.png"
                  alt="villa bedroom Rwanda resort, comfortable king bed, traditional textiles, mountain view window"
                />
                <img
                  className="w-full h-[130px] object-cover rounded-lg"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1e0cdd97dd-86e702f311cff2132ef5.png"
                  alt="villa bathroom Rwanda resort, modern fixtures, natural materials, spa-like atmosphere"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Features */}
      <section id="villa-features" className="py-16 px-5 bg-rainforest">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-3xl text-white text-center mb-12">
            Villa Features & Amenities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="bedroom-features" className="bg-white p-6 rounded-xl">
              <Bed className="text-sunset text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-black mb-3">
                Bedroom Comfort
              </h3>
              <ul className="text-dusky space-y-2">
                <li>• Premium king-size beds</li>
                <li>• Egyptian cotton linens</li>
                <li>• Climate control</li>
                <li>• Blackout curtains</li>
                <li>• Traditional artwork</li>
              </ul>
            </div>

            <div id="living-features" className="bg-white p-6 rounded-xl">
              <Sofa className="text-sunset text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-black mb-3">
                Living Spaces
              </h3>
              <ul className="text-dusky space-y-2">
                <li>• Spacious living room</li>
                <li>• Dining area for 6</li>
                <li>• Traditional furniture</li>
                <li>• Floor-to-ceiling windows</li>
                <li>• Private terrace</li>
              </ul>
            </div>

            <div id="kitchen-features" className="bg-white p-6 rounded-xl">
              <Utensils className="text-sunset text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-black mb-3">
                Kitchen & Dining
              </h3>
              <ul className="text-dusky space-y-2">
                <li>• Fully equipped kitchen</li>
                <li>• Modern appliances</li>
                <li>• Local spice collection</li>
                <li>• Outdoor BBQ area</li>
                <li>• Mini bar</li>
              </ul>
            </div>

            <div id="bathroom-features" className="bg-white p-6 rounded-xl">
              <Bath className="text-sunset text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-black mb-3">
                Bathroom Luxury
              </h3>
              <ul className="text-dusky space-y-2">
                <li>• Rainfall shower</li>
                <li>• Soaking tub</li>
                <li>• Natural stone finishes</li>
                <li>• Luxury toiletries</li>
                <li>• Heated floors</li>
              </ul>
            </div>

            <div id="tech-features" className="bg-white p-6 rounded-xl">
              <Wifi className="text-sunset text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-black mb-3">
                Technology
              </h3>
              <ul className="text-dusky space-y-2">
                <li>• High-speed WiFi</li>
                <li>• Smart TV system</li>
                <li>• Sound system</li>
                <li>• USB charging ports</li>
                <li>• Safe deposit box</li>
              </ul>
            </div>

            <div id="outdoor-features" className="bg-white p-6 rounded-xl">
              <Trees className="text-sunset text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-black mb-3">
                Outdoor Spaces
              </h3>
              <ul className="text-dusky space-y-2">
                <li>• Private garden</li>
                <li>• Outdoor seating</li>
                <li>• Fire pit area</li>
                <li>• Mountain views</li>
                <li>• Walking paths</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Gallery */}
      <section id="villa-gallery" className="py-16 px-5 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-3xl text-black text-center mb-12">
            Villa Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      {/* <section id="villa-pricing" className="py-16 px-5 bg-cream">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-bold text-3xl text-black text-center mb-12">
            Pricing & Availability
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-2xl text-black mb-6">
                  Villa Rates
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-cream rounded-lg">
                    <div>
                      <div className="font-semibold text-black">
                        Peak Season
                      </div>
                      <div className="text-sm text-dusky">
                        Dec - Feb, Jul - Aug
                      </div>
                    </div>
                    <div className="text-sunset font-bold text-xl">
                      450 RWF/night
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-cream rounded-lg">
                    <div>
                      <div className="font-semibold text-black">
                        High Season
                      </div>
                      <div className="text-sm text-dusky">
                        Mar - Jun, Sep - Nov
                      </div>
                    </div>
                    <div className="text-sunset font-bold text-xl">
                      350 RWF/night
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-cream rounded-lg">
                    <div>
                      <div className="font-semibold text-black">Low Season</div>
                      <div className="text-sm text-dusky">
                        Special rates available
                      </div>
                    </div>
                    <div className="text-sunset font-bold text-xl">
                      280 RWF/night
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-rainforest/10 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">
                    Included Services
                  </h4>
                  <ul className="text-sm text-dusky space-y-1">
                    <li>• Daily housekeeping</li>
                    <li>• Welcome amenities</li>
                    <li>• WiFi & parking</li>
                    <li>• Concierge services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-2xl text-black mb-6">
                  Quick Booking
                </h3>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="checkin-date"
                      className="block text-sm font-medium text-dusky mb-2"
                    >
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkin-date"
                      className="w-full p-3 border border-dusky/30 rounded-lg focus:border-sunset focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-date"
                      className="block text-sm font-medium text-dusky mb-2"
                    >
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkout-date"
                      className="w-full p-3 border border-dusky/30 rounded-lg focus:border-sunset focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-dusky mb-2"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      className="w-full p-3 border border-dusky/30 rounded-lg focus:border-sunset focus:outline-none"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sunset text-white py-3 rounded-lg font-semibold hover:bg-sunset/90 transition-all"
                  >
                    Check Availability
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sunset hover:text-sunset/80 font-medium"
                    >
                      Or call us: +250 123 456 789
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Related Accommodations */}
      <section id="related-accommodations" className="py-16 px-5 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-bold text-3xl text-black text-center mb-12">
            Other Accommodations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              id="suite-option"
              className="bg-cream rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                className="w-full h-[250px] object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5695d8a346-6715a6bf45ed88fc0a07.png"
                alt="cultural suite Rwanda resort, traditional patterns, comfortable bed, natural lighting, authentic decor"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-black mb-3">
                  Cultural Suites
                </h3>
                <p className="text-dusky mb-4">
                  Elegantly designed suites featuring locally inspired interiors
                  and authentic Rwandan craftsmanship.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sunset font-bold text-lg">
                    From 180 RWF/night
                  </span>
                  <button className="bg-sunset text-white px-6 py-2 rounded-lg font-semibold hover:bg-sunset/90 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div
              id="garden-option"
              className="bg-cream rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                className="w-full h-[250px] object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bb2ff0195f-1977d7f917b90d69b3b8.png"
                alt="garden room Rwanda resort, natural materials, wooden furniture, traditional textiles, peaceful setting"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-black mb-3">
                  Garden Rooms
                </h3>
                <p className="text-dusky mb-4">
                  Intimate rooms with garden views, featuring natural materials
                  and peaceful ambiance for couples.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sunset font-bold text-lg">
                    From 120 RWF/night
                  </span>
                  <button className="bg-sunset text-white px-6 py-2 rounded-lg font-semibold hover:bg-sunset/90 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLightboxOpen && currentImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            {/* Stop propagation to prevent closing when clicking on image/buttons */}
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 md:top-2 md:right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <button
              onClick={showPrevImage}
              className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-12 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={showNextImage}
              className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-12 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccommodationDetails;
