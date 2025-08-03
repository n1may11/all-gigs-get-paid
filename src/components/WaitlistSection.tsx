import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell, Rocket, CheckCircle } from "lucide-react";
import { useState } from "react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual waitlist signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    "First access when we launch",
    "Exclusive early-bird gig opportunities", 
    "Free premium features for early adopters",
    "Direct line to the founder for feedback"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Rocket size={64} className="text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <Mail size={64} className="text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Bell size={48} className="text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Be First in Line to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Start Earning
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Launching soon. Sign up to get notified first and unlock exclusive early access.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 text-sm font-medium text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Over 1,000 teens already signed up!</span>
            </div>
          </div>

          {/* Waitlist Form */}
          <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-glow-primary mb-12 animate-fade-in-scale">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 text-lg border-border/50"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg"
                      className="h-12 px-8 whitespace-nowrap"
                    >
                      Get Early Access
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No spam, ever. Unsubscribe anytime with one click.
                  </p>
                </form>
              ) : (
                <div className="animate-fade-in-scale">
                  <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    You're on the list! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    We'll notify you as soon as All Giggs launches.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Join teens and parents who are already excited about All Giggs:
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>+995 others</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;