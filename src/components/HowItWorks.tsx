import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Heart, CreditCard, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Find Jobs",
      description: "Browse cool jobs in your neighborhood - from pet sitting to lawn care to tutoring. Pick what you love!",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      number: "02", 
      icon: Heart,
      title: "Get Hired",
      description: "Chat with friendly neighbors, show them you're responsible, and land your first gig. It's that easy!",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Get Paid",
      description: "Complete your job, get reviewed, and watch the money flow into your account. Secure payments via Stripe!",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/30"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            How It{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, safe, and rewarding. Start earning in three easy steps!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-primary animate-bounce-gentle" />
                  </div>
                )}
                
                <Card 
                  className="group hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 animate-fade-in-scale border-border/50 h-full"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-6xl font-black text-primary/20 mb-4">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex p-6 rounded-full ${step.bgColor} mb-6 mx-auto`}>
                      <step.icon size={40} className={step.color} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey! 🎉
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;