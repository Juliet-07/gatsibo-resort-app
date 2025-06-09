
import { BedDouble, Users, Palette, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

// Helper to map icon names to components
const iconComponents: { [key: string]: React.ElementType } = {
  BedDouble,
  Users,
  Palette,
  Mail,
};

export default function ValuePropositionSection() {
  const { t } = useLanguage();

  // Ensure the translation path is correct and data exists
  const sectionData = t.home.valueProposition;
  
  // Fallback or loading state if translations aren't ready
  if (!sectionData || !sectionData.cards) {
    return <div className="py-20 px-4 text-center">Loading value propositions...</div>; 
  }
  const features = sectionData.cards;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {sectionData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {sectionData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.iconName] || BedDouble; // Default icon if not found
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-center mb-6">
                  <IconComponent className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>
                <Link 
                  to={feature.linkTo} 
                  className="mt-auto text-primary font-semibold flex items-center justify-center hover:text-primary/80 transition-colors"
                >
                  {feature.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
