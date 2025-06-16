import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData);

    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Contact Hero Section */}
        <section
          id="contact-hero"
          className="relative h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50 z-10"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f676db2a01-f381d9aa64bb34391e93.png"
            alt="Rwanda resort contact reception area, traditional Rwandan architecture, welcoming entrance with cultural elements"
          />
          <div className="relative z-20 h-full flex items-center justify-center text-center px-5">
            <div className="max-w-4xl">
              <h1 className="font-bold text-4xl md:text-5xl text-white mb-6">
                {t.contact.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {t.contact.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <h2 className="text-2xl font-bold mb-6">
                  {t.contact.getInTouch}
                </h2>

                <div className="glass-card p-6 space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t.contact.address}
                      </h3>
                      <p className="text-muted-foreground">
                        Eatern Province
                        <br />
                        Towards Akagera Game Reserve
                        <br />
                        Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                      <p className="text-muted-foreground">+250 788 305 943</p>
                      <p className="text-muted-foreground">
                        +250 788 517 761 (Reservations)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.email}</h3>
                      <p className="text-muted-foreground">
                        bettykalisa21@gmail.com
                      </p>
                      <p className="text-muted-foreground">
                        jbkalisa@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t.contact.receptionHours}
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 24 hours
                        <br />
                        {t.contact.checkInTime}
                        <br />
                        {t.contact.checkOutTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03606358136!2d14.165818971864153!3d40.85529294646443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328d896b%3A0x309e11f99628150!2sGulf%20of%20Naples!5e0!3m2!1sen!2sus!4v1628613152777!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                  />
                </div> */}
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in [animation-delay:300ms]">
                <h2 className="text-2xl font-bold mb-6">
                  {t.contact.sendMessage}
                </h2>

                <div className="glass-card p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.fullName}</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">{t.contact.email}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t.contact.phoneNumber}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 234 567 8900"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">{t.contact.subject}</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Reservation Inquiry"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t.contact.message}</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={t.contact.howCanWeHelp}
                          className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary">
                        <Send className="mr-2 h-4 w-4" />
                        {t.contact.send}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {t.contact.messageSent}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {t.contact.thankYou}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">{t.contact.faq}</h2>
              <p className="text-muted-foreground">{t.contact.faqSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in [animation-delay:200ms]">
              {[
                {
                  questionKey: "checkInOut",
                  icon: <Clock className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "parking",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "pets",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "breakfast",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "transfers",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "amenities",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {t.contact.questions[faq.questionKey].question}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.contact.questions[faq.questionKey].answer}
                  </p>
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
