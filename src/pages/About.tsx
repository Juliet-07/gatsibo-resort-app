import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Added Navbar import
import Footer from '../components/Footer'; // Added Footer import
import {
  Heart,
  Music,
  Check,
  Paintbrush, // Replaced fa-hands for crafts
  Star,
  Hammer,
  Clock,
  Users,
  Route as RouteIcon, // Renamed to avoid conflict with React Router's Route
  Languages,
  Handshake,
  ShoppingBag,
  GraduationCap,
  HeartHandshake,
  Palette
} from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section id="heritage-hero" className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3c90bc2119-359cff4309b7c886be57.png" alt="Traditional Rwandan cultural ceremony with elders, community gathering, traditional architecture, vibrant cultural patterns" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Our Living Heritage
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Preserving traditions, empowering communities, and sharing the authentic spirit of Rwanda
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Introduction */}
      <section id="heritage-intro" className="py-20 px-5 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">
                A Legacy Born from Passion
              </h2>
              <p className="text-dusky text-lg mb-6 leading-relaxed">
                Founded by passionate custodians of Rwandan culture, our center began as a vision to preserve and celebrate tradition while empowering the local community. Every stone, every story, every song carries the weight of generations.
              </p>
              <p className="text-dusky text-lg mb-8 leading-relaxed">
                We are more than a cultural center—we are guardians of memory, keepers of wisdom, and bridges between the past and future of Rwanda.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="font-bold text-3xl text-rainforest">50+</div>
                  <div className="text-dusky text-sm">Years of Heritage</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-3xl text-rainforest">200+</div>
                  <div className="text-dusky text-sm">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-3xl text-rainforest">15+</div>
                  <div className="text-dusky text-sm">Traditional Crafts</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img className="w-full h-[400px] object-cover rounded-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/688a8bc2ac-6eec00aed853e6569ac6.png" alt="Rwandan cultural founders, community elders teaching traditional crafts, intergenerational knowledge transfer" />
              <div className="absolute -bottom-6 -right-6 bg-lightblue text-white p-4 rounded-xl">
                <Heart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Practices */}
      <section id="traditional-practices" className="py-20 px-5 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">
              Traditions & Teachings
            </h2>
            <p className="text-dusky text-lg max-w-3xl mx-auto">
              Learn about age-old practices passed down through generations, each one a thread in the rich tapestry of Rwandan culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div id="intore-dance" className="bg-white p-8 rounded-xl border border-dusky/20 hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <Music className="text-lightblue text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-xl text-black mb-4">Intore Dance & Drumming</h3>
              </div>
              <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f496210ca1-95aa3762fb1d4021f06b.png" alt="Traditional Rwandan Intore dancers in colorful feathered headdresses, dynamic dance performance, traditional drums" />
              <p className="text-dusky mb-4">Experience the powerful rhythms and graceful movements of Rwanda's most celebrated traditional dance form.</p>
              <ul className="text-dusky text-sm space-y-2">
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Evening performances</li>
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Interactive workshops</li>
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Traditional costume fitting</li>
              </ul>
            </div>
            
            <div id="traditional-crafts" className="bg-white p-8 rounded-xl border border-dusky/20 hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <Paintbrush className="text-lightblue text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-xl text-black mb-4">Weaving & Pottery</h3>
              </div>
              <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9a4349e010-f2ee1895799d0bbd3cc7.png" alt="Rwandan artisans weaving traditional baskets, pottery making, intricate basket patterns, clay pottery" />
              <p className="text-dusky mb-4">Master the ancient arts of basket weaving and pottery under the guidance of skilled local artisans.</p>
              <ul className="text-dusky text-sm space-y-2">
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Hands-on workshops</li>
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Take home your creations</li>
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Meet master artisans</li>
              </ul>
            </div>
            
            <div id="storytelling" className="bg-white p-8 rounded-xl border border-dusky/20 hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <Star className="text-lightblue text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-xl text-black mb-4">Storytelling Nights</h3>
              </div>
              <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c5daf90944-19497edd5fac29735d90.png" alt="Community gathering around fire at night, elder telling stories under stars, traditional storytelling circle" />
              <p className="text-dusky mb-4">Gather under starlit skies for enchanting tales that have shaped Rwandan culture for centuries.</p>
              <ul className="text-dusky text-sm space-y-2">
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Weekly storytelling circles</li>
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Traditional refreshments</li>
                <li className="flex items-center"><Check className="text-rainforest mr-2" />Interactive participation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section id="community-engagement" className="py-20 px-5 bg-rainforest">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">
              Engage & Experience
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Immerse yourself in authentic cultural experiences that support and celebrate our local community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="cultural-workshops" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Hammer className="text-lightblue text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-white mb-4">Cultural Workshops</h3>
              <p className="text-white/90 mb-4">Participate in hands-on learning experiences with master craftspeople and cultural keepers.</p>
              <div className="space-y-2">
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="mr-2" />Daily sessions available
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <Users className="mr-2" />Small group experiences
                </div>
              </div>
            </div>
            
            <div id="community-tours" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <RouteIcon className="text-lightblue text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-white mb-4">Community Tours</h3>
              <p className="text-white/90 mb-4">Join guided tours through local villages and learn about daily life and traditions firsthand.</p>
              <div className="space-y-2">
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="mr-2" />Half-day and full-day options
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <Languages className="mr-2" />Local guide included
                </div>
              </div>
            </div>
            
            <div id="artisan-support" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Handshake className="text-lightblue text-3xl mb-4" />
              <h3 className="font-semibold text-xl text-white mb-4">Support Local Artisans</h3>
              <p className="text-white/90 mb-4">Purchase authentic handmade crafts directly from local makers and support community livelihoods.</p>
              <div className="space-y-2">
                <div className="flex items-center text-white/80 text-sm">
                  <ShoppingBag className="mr-2" />Authentic handmade items
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <Heart className="mr-2" />Direct community support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section id="heritage-timeline" className="py-20 px-5 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-dusky text-lg">
              Discover the milestones that shaped our cultural center and community
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-rainforest h-full"></div>
            
            <div id="timeline-1" className="relative flex items-center mb-12">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-semibold text-xl text-black mb-2">1970s - Foundation</h3>
                <p className="text-dusky">Local elders establish the first cultural preservation initiative to safeguard traditional practices.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lightblue rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            
            <div id="timeline-2" className="relative flex items-center mb-12">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lightblue rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-semibold text-xl text-black mb-2">1990s - Growth</h3>
                <p className="text-dusky">Expansion of programs to include youth education and international cultural exchange initiatives.</p>
              </div>
            </div>
            
            <div id="timeline-3" className="relative flex items-center mb-12">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-semibold text-xl text-black mb-2">2010s - Resort Integration</h3>
                <p className="text-dusky">Launch of the resort component, creating sustainable tourism that benefits the local community.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lightblue rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            
            <div id="timeline-4" className="relative flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lightblue rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-semibold text-xl text-black mb-2">Today - Living Heritage</h3>
                <p className="text-dusky">A thriving center where tradition meets innovation, preserving culture while embracing the future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section id="cultural-impact" className="py-20 px-5 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-black mb-6">
              Our Cultural Impact
            </h2>
            <p className="text-dusky text-lg max-w-3xl mx-auto">
              Measuring our success through the preservation of traditions and empowerment of our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div id="impact-1" className="text-center">
              <div className="bg-white p-6 rounded-xl border border-dusky/20 mb-4">
                <Users className="text-rainforest text-4xl mb-4 mx-auto" />
                <div className="font-bold text-3xl text-black">5,000+</div>
                <div className="text-dusky">Visitors Educated</div>
              </div>
            </div>
            
            <div id="impact-2" className="text-center">
              <div className="bg-white p-6 rounded-xl border border-dusky/20 mb-4">
                <GraduationCap className="text-rainforest text-4xl mb-4 mx-auto" />
                <div className="font-bold text-3xl text-black">500+</div>
                <div className="text-dusky">Youth Trained</div>
              </div>
            </div>
            
            <div id="impact-3" className="text-center">
              <div className="bg-white p-6 rounded-xl border border-dusky/20 mb-4">
                <HeartHandshake className="text-rainforest text-4xl mb-4 mx-auto" />
                <div className="font-bold text-3xl text-black">150+</div>
                <div className="text-dusky">Families Supported</div>
              </div>
            </div>
            
            <div id="impact-4" className="text-center">
              <div className="bg-white p-6 rounded-xl border border-dusky/20 mb-4">
                <Palette className="text-rainforest text-4xl mb-4 mx-auto" />
                <div className="font-bold text-3xl text-black">25+</div>
                <div className="text-dusky">Traditions Preserved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="heritage-cta" className="py-20 px-5 bg-dusky">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">
            Become Part of Our Story
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Join us in preserving Rwanda's rich heritage while creating new memories and connections that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-dusky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-all">
              Book Cultural Experience
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dusky transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
