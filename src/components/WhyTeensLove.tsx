import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dog, Package, PartyPopper, Gamepad2, Headphones, Smartphone } from "lucide-react";

const WhyTeensLove = () => {
  const gigExamples = [
    {
      icon: Dog,
      title: "Walk a neighbor's dog",
      pay: "$20/hour",
      description: "Fresh air, cute pets, easy money!",
      color: "text-blue-500"
    },
    {
      icon: Package,
      title: "Organize someone's garage",
      pay: "$40 flat",
      description: "Turn chaos into order, get paid!",
      color: "text-green-500"
    },
    {
      icon: PartyPopper,
      title: "Help set up for a party",
      pay: "$15/hour",
      description: "Make events awesome, earn cash!",
      color: "text-purple-500"
    }
  ];

  const earnedItems = [
    { icon: Gamepad2, name: "Gaming Setup", price: "$500" },
    { icon: Smartphone, name: "Latest iPhone", price: "$800" },
    { icon: Headphones, name: "Concert Tickets", price: "$100" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Stop Asking for Money.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Start Making It!
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Imagine buying anything you want with YOUR OWN money. No more waiting for allowance, no more asking parents for cash. Just pure financial freedom! 🚀
          </p>
          <div className="mt-6">
            <span className="text-lg font-bold text-primary">⚡ Kids are earning $50-500+ per month!</span>
          </div>
        </div>

        {/* Gig Examples */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {gigExamples.map((gig, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 animate-fade-in-scale border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full bg-secondary mb-4 ${gig.color}`}>
                  <gig.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {gig.title}
                </h3>
                <div className="text-3xl font-black text-primary mb-2">
                  {gig.pay}
                </div>
                <p className="text-muted-foreground">
                  {gig.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Teens Can Buy */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Could You Buy? 🤔
            </h3>
            <p className="text-muted-foreground">
              Be the kid who has their own money! While your friends are asking their parents for money, you'll be the one with cash in your pocket. 💪
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {earnedItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-card rounded-xl p-4 border border-border/50 hover:shadow-lg transition-all duration-200 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.name}</span>
                </div>
                <span className="font-bold text-primary">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              I Want Financial Freedom! 🚀
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTeensLove;