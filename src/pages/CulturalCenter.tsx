
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Users, Handshake, Gift, Moon, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CulturalCenter() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section id="cultural-hero" className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4db104128a-c148a4b526234a610583.png" 
            alt="traditional Rwandan cultural center with dancers performing, colorful traditional costumes, drums, community gathering, authentic heritage celebration" 
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
            <div className="max-w-4xl">
              <h1 className="font-bold text-4xl md:text-5xl text-white mb-6">
                A Living Heritage, Shared With You
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover the soul of Rwanda through authentic cultural experiences and timeless traditions
              </p>
            </div>
          </div>
        </section>

        {/* Our Origins Section */}
        <section id="origins" className="py-20 px-5 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">Our Origins</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded by passionate custodians of Rwandan culture, the center began as a vision to preserve and celebrate tradition while empowering the local community.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  What started as a small initiative to keep our ancestral stories alive has grown into a vibrant hub where visitors from around the world come to experience the authentic heart of Rwanda. Every corner of our center tells a story, every performance carries the wisdom of generations.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <div className="w-6 h-6 text-primary">❤️</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Community Driven</h4>
                    <p className="text-muted-foreground text-sm">Built by locals, for locals and visitors alike</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/922600b542-382fb7f84998d6518df4.png" alt="Rwandan cultural center founders, community elders, traditional meeting, heritage preservation" />
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/966bc33d79-0c655700e6eb56f20982.png" alt="traditional Rwandan village, authentic architecture, community life, cultural preservation" />
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7681eb0486-87215fcfa81e1ca9df0e.png" alt="Rwandan artisans working, traditional crafts, pottery making, weaving, community workshop" />
                <img className="w-full h-[200px] object-cover rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5cc3a81bdd-1ae4b8ff7089a7397a48.png" alt="cultural center construction, community building together, traditional and modern architecture blend" />
              </div>
            </div>
          </div>
        </section>

        {/* Traditions Section */}
        <section id="traditions" className="py-20 px-5 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Traditions & Teachings</h2>
              <p className="text-white/90 text-lg max-w-3xl mx-auto">Learn about age-old practices passed down through generations, keeping the spirit of Rwanda alive through every dance, craft, and story.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div id="intore-card" className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
                <img className="w-full h-[200px] object-cover rounded-lg mb-6" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/58d41b275b-20fbd415938c84c15e41.png" alt="Intore traditional Rwandan dance performance, colorful costumes, drummers, energetic dancers, cultural celebration" />
                <h3 className="font-semibold text-xl text-black mb-4">Intore Dance & Drumming</h3>
                <p className="text-muted-foreground mb-6">Experience the powerful rhythms and graceful movements of Rwanda's most celebrated traditional dance, performed by skilled artists in authentic costumes.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>Daily performances at 6 PM</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    <span>Interactive workshops available</span>
                  </div>
                </div>
              </div>
              
              <div id="crafts-card" className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
                <img className="w-full h-[200px] object-cover rounded-lg mb-6" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/16e513555c-942e7daba5e087827eb5.png" alt="traditional Rwandan weaving and pottery, artisan hands working, colorful textiles, clay pottery, traditional crafts" />
                <h3 className="font-semibold text-xl text-black mb-4">Traditional Weaving & Pottery</h3>
                <p className="text-muted-foreground mb-6">Learn the ancient arts of basket weaving and pottery making from master craftspeople who have inherited these skills through generations.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Handshake className="mr-2 h-4 w-4 text-primary" />
                    <span>Hands-on workshops</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Gift className="mr-2 h-4 w-4 text-primary" />
                    <span>Take home your creations</span>
                  </div>
                </div>
              </div>
              
              <div id="storytelling-card" className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
                <img className="w-full h-[200px] object-cover rounded-lg mb-6" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/aa69dbe2e9-875bc0bc20d88ca75254.png" alt="community storytelling night under stars, elder telling stories, gathered audience, traditional fire, cultural wisdom sharing" />
                <h3 className="font-semibold text-xl text-black mb-4">Storytelling Under Stars</h3>
                <p className="text-muted-foreground mb-6">Gather around the fire as elders share ancient folktales, legends, and wisdom that have shaped Rwandan culture for centuries.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Moon className="mr-2 h-4 w-4 text-primary" />
                    <span>Every Friday & Saturday night</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MessageCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Stories in Kinyarwanda & English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engage & Experience Section */}
        <section id="engage" className="py-20 px-5 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">Engage & Experience</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Immerse yourself in authentic Rwandan culture through interactive experiences that connect you with our community and heritage.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div id="workshops-section">
                <h3 className="font-semibold text-2xl text-black mb-6">Cultural Workshops</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                    <div className="text-primary text-2xl mt-1">🥁</div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Drumming Lessons</h4>
                      <p className="text-muted-foreground text-sm">Learn traditional rhythms on authentic Rwandan drums with master musicians.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                    <div className="text-primary text-2xl mt-1">🎨</div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Traditional Art</h4>
                      <p className="text-muted-foreground text-sm">Create beautiful artwork using traditional Rwandan techniques and materials.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                    <div className="text-primary text-2xl mt-1">🍽️</div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Cooking Classes</h4>
                      <p className="text-muted-foreground text-sm">Prepare authentic Rwandan dishes with local ingredients and traditional methods.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="tours-section">
                <h3 className="font-semibold text-2xl text-black mb-6">Community Tours</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                    <div className="text-primary text-2xl mt-1">🏠</div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Village Visits</h4>
                      <p className="text-muted-foreground text-sm">Experience daily life in traditional Rwandan villages with guided tours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                    <div className="text-primary text-2xl mt-1">🌱</div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Farm Experiences</h4>
                      <p className="text-muted-foreground text-sm">Learn about traditional farming methods and participate in agricultural activities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                    <Handshake className="text-primary text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-black mb-2">Artisan Workshops</h4>
                      <p className="text-muted-foreground text-sm">Meet local craftspeople and learn about their traditional skills and techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Local Artisans */}
        <section id="artisans" className="py-20 px-5 bg-rainforest">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Support Local Artisans & Makers</h2>
              <p className="text-white/90 text-lg max-w-3xl mx-auto">Every purchase directly supports local families and helps preserve traditional crafts for future generations.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <img className="w-full h-[150px] object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/790f810c51-49ce1509c4b0f69852da.png" alt="traditional Rwandan baskets, colorful woven patterns, artisan craftsmanship, authentic handmade goods" />
                <h4 className="font-semibold text-black mb-2">Handwoven Baskets</h4>
                <p className="text-muted-foreground text-sm">Traditional Agaseke baskets made by local women cooperatives</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center">
                <img className="w-full h-[150px] object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b6c5fdbf3a-ba35b7d958c0634b6645.png" alt="traditional Rwandan pottery, clay vessels, handmade ceramics, artisan pottery workshop" />
                <h4 className="font-semibold text-black mb-2">Ceramic Pottery</h4>
                <p className="text-muted-foreground text-sm">Beautiful clay pots and vessels crafted using ancient techniques</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center">
                <img className="w-full h-[150px] object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c357a6f046-0f790a7375217e1e1fb1.png" alt="traditional Rwandan textiles, colorful fabrics, woven patterns, authentic clothing, cultural designs" />
                <h4 className="font-semibold text-black mb-2">Traditional Textiles</h4>
                <p className="text-muted-foreground text-sm">Authentic fabrics with traditional patterns and vibrant colors</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center">
                <img className="w-full h-[150px] object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3993637509-a629358cd58a7157f599.png" alt="traditional Rwandan jewelry, handmade accessories, cultural ornaments, artisan crafted items" />
                <h4 className="font-semibold text-black mb-2">Cultural Jewelry</h4>
                <p className="text-muted-foreground text-sm">Handcrafted jewelry inspired by traditional Rwandan designs</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-white text-rainforest px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all">
                Visit Our Craft Shop
              </button>
            </div>
          </div>
        </section>

        {/* Cultural Programs */}
        <section id="programs" className="py-20 px-5 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">Cultural Programs</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Join our regular programs designed to deepen your understanding of Rwandan culture and traditions.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div id="youth-program" className="bg-cream p-8 rounded-xl border border-border">
                <div className="text-primary text-3xl mb-4">👦</div>
                <h3 className="font-semibold text-xl text-black mb-4">Youth Cultural Education</h3>
                <p className="text-muted-foreground mb-4">Educational programs for young people to learn about their heritage and cultural identity.</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Traditional dance classes</li>
                  <li>• Language learning sessions</li>
                  <li>• Cultural history workshops</li>
                  <li>• Leadership development</li>
                </ul>
              </div>
              
              <div id="women-program" className="bg-cream p-8 rounded-xl border border-border">
                <div className="text-primary text-3xl mb-4">👩</div>
                <h3 className="font-semibold text-xl text-black mb-4">Women's Empowerment</h3>
                <p className="text-muted-foreground mb-4">Programs supporting women through traditional crafts, entrepreneurship, and cultural preservation.</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Craft cooperatives</li>
                  <li>• Business training</li>
                  <li>• Traditional skills preservation</li>
                  <li>• Community leadership</li>
                </ul>
              </div>
              
              <div id="visitor-program" className="bg-cream p-8 rounded-xl border border-border">
                <Users className="text-primary text-3xl mb-4" />
                <h3 className="font-semibold text-xl text-black mb-4">Visitor Immersion</h3>
                <p className="text-muted-foreground mb-4">Comprehensive cultural immersion programs for international visitors and cultural enthusiasts.</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Multi-day cultural retreats</li>
                  <li>• Homestay experiences</li>
                  <li>• Cultural exchange programs</li>
                  <li>• Volunteer opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cultural-cta" className="py-20 px-5 bg-rainforest">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Experience Authentic Rwanda</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join us for an unforgettable journey into the heart of Rwandan culture. Book your cultural experience today.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rainforest text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all">
                Book Cultural Experience
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
