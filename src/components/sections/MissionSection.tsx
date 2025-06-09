
import { Globe, Sparkles, TrendingUp } from "lucide-react";

export default function MissionSection() {
  const pillars = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Hospitality starts with you",
      description: "Our philosophy centers on the belief that exceptional hospitality begins with understanding and caring for each individual guest, treating them like family."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Create magic, create memories",
      description: "We make the extraordinary feel effortless so you can spend more time creating unforgettable moments with your loved ones and experiencing authentic Rwanda."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "The recipe for growth",
      description: "We help our community establish deeper relationships with visitors and use our platform to drive sustainable tourism and support local families."
    }
  ];

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 max-w-4xl mx-auto">
            We believe hospitality businesses deserve to earn more
          </h2>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Resorts, cultural centers, eco-lodges, and all hospitality businesses play a vital role in the fabric of our communities. 
            We've witnessed firsthand the beauty and the challenges, the traditions and the innovations that make up the world of Rwandan hospitality. 
            We're here to serve you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-primary">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
