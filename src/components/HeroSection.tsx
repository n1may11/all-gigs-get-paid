import { Button } from "@/components/ui/button";
import { Sparkles, Briefcase, DollarSign, Backpack, Dog } from "lucide-react";
import heroImage from "@/assets/hero-teens-working.jpg";

const HeroSection = () => {
  const floatingIcons = [
    { icon: Briefcase, delay: "0s", position: "top-20 left-20" },
    { icon: DollarSign, delay: "0.5s", position: "top-32 right-32" },
    { icon: Backpack, delay: "1s", position: "bottom-40 left-16" },
    { icon: Dog, delay: "1.5s", position: "bottom-32 right-20" },
    { icon: Sparkles, delay: "2s", position: "top-40 left-1/2" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ icon: Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20 text-primary`}
            style={{ animationDelay: delay }}
          >
            <Icon size={48} className="animate-float" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
                Teens{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Earning.
                </span>{" "}
                Parents{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smiling.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl">
                Find safe, real gigs in your neighborhood—start building skills,
                confidence, and your wallet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="animate-bounce-gentle">
                Join the Waitlist
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                Background-checked
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                Secure payments
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                Parent-approved
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative rounded-2xl overflow-hidden shadow-glow-primary">
              <img
                src={heroImage}
                alt="Teens working on various gigs"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg animate-bounce-gentle">
              <div className="text-2xl font-bold text-primary">$20+</div>
              <div className="text-sm text-muted-foreground">per hour</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg animate-bounce-gentle" style={{ animationDelay: "1s" }}>
              <div className="text-2xl font-bold text-primary">Safe</div>
              <div className="text-sm text-muted-foreground">verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 fill-background"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;