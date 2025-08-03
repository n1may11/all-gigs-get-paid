import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I helped move boxes for a neighbor and bought my own headphones!",
      author: "Alex, 14 years old",
      type: "teen",
      rating: 5,
      avatar: "A",
      color: "bg-blue-500"
    },
    {
      quote: "My son gained responsibility, and I didn't have to worry about safety.",
      author: "Maria Rodriguez, Parent",
      type: "parent", 
      rating: 5,
      avatar: "M",
      color: "bg-purple-500"
    },
    {
      quote: "Finally earning my own money feels amazing! Got concert tickets last week.",
      author: "Jordan, 16 years old",
      type: "teen",
      rating: 5,
      avatar: "J",
      color: "bg-green-500"
    },
    {
      quote: "All Giggs taught my daughter about money management and work ethic.",
      author: "David Kim, Parent",
      type: "parent",
      rating: 5,
      avatar: "D",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Real Stories, Real{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from teens who are earning and parents who are proud!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 animate-fade-in-scale bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote size={24} className="text-primary/60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-yellow-500 fill-yellow-500" 
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {testimonial.type === 'teen' ? (
                        <User size={12} />
                      ) : (
                        <Heart size={12} className="text-red-500" />
                      )}
                      <span className="capitalize">{testimonial.type}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Teens Earning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Gigs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Parent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;