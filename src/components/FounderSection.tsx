import { Card, CardContent } from "@/components/ui/card";
import { Quote, Lightbulb, Target, Users } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Meet the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Founder
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Built by a teen, for teens who want to start earning early
            </p>
          </div>

          <Card className="bg-gradient-secondary border-border/50 shadow-glow-secondary animate-fade-in-scale">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Founder Image/Avatar */}
                <div className="text-center md:text-left">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-black text-primary-foreground mx-auto md:mx-0 mb-4 shadow-glow-primary">
                    NP
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Nimay Popat
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Founder & CEO, Age 13
                  </p>
                </div>

                {/* Quote */}
                <div className="md:col-span-2">
                  <Quote size={40} className="text-primary/60 mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                    "I created All Giggs because kids like me shouldn't have to wait until we're adults to start building our financial independence. We have the energy, creativity, and drive to earn our own money right now."
                  </blockquote>
                  <div className="text-muted-foreground">
                    Every teen deserves the chance to learn entrepreneurship and become self-reliant—something traditional education doesn't teach us.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Points */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-secondary transition-all duration-300 animate-fade-in-scale">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Lightbulb size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Reimagining how teens can start their entrepreneurial journey early
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-secondary transition-all duration-300 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Target size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Independence</h4>
                <p className="text-sm text-muted-foreground">
                  Building financial literacy and self-reliance from a young age
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-secondary transition-all duration-300 animate-fade-in-scale" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Users size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">
                  Creating safe spaces for teens to learn, earn, and grow together
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;