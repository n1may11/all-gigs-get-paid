import { Card, CardContent } from "@/components/ui/card";
import { Shield, CreditCard, Lock, CheckCircle, Star, Heart } from "lucide-react";

const ParentsSection = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Financial Education",
      description: "Your child learns real-world money management, budgeting, and saving skills that schools don't teach."
    },
    {
      icon: CreditCard,
      title: "Safe & Supervised",
      description: "All jobs are vetted, payments secured through Stripe, and you maintain full oversight of activities."
    },
    {
      icon: Lock,
      title: "Entrepreneurial Mindset",
      description: "Build confidence, work ethic, and business thinking that will benefit them for life."
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Why Parents{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Love
            </span>{" "}
            All Giggs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Give your child the head start they deserve. All Giggs isn't just about earning money—it's about building the foundation for a successful, financially responsible future.
          </p>
        </div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 animate-fade-in-scale bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <h3 className="text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Parent Testimonial */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-glow-secondary">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={24} 
                      className="text-yellow-500 fill-yellow-500" 
                    />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 italic">
                  "The earlier kids learn about money, the better prepared they'll be for life. All Giggs teaches them that money isn't just given—it's earned through hard work and dedication."
                </blockquote>
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Heart size={20} className="text-red-500 fill-red-500" />
                  <span className="font-medium">Dr. Sarah Johnson, Child Development Expert & Mom of 3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-8 py-4 border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>COPPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;