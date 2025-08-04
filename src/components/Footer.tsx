import { Button } from "@/components/ui/button";
import { Heart, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }, 
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "How it Works", href: "#how-it-works" },
        { name: "Safety", href: "#safety" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "COPPA Compliance", href: "/coppa" },
        { name: "Safety Guidelines", href: "/safety-guidelines" }
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-foreground mb-3">
                All<span className="text-primary">Giggs</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering teens to start their entrepreneurial journey early, safely, and successfully.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <form onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                if (email) {
                  console.log('Newsletter signup:', email);
                  // TODO: Implement newsletter signup
                  (e.target as HTMLFormElement).reset();
                }
              }}>
                <div className="flex gap-2">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="flex-1 px-3 py-2 text-sm bg-background border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button type="submit" size="sm" variant="cta">
                    <Mail size={16} />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 All Giggs. Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>by Nimay Popat</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-primary/10 rounded-full"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-6 text-xs text-muted-foreground bg-muted/30 rounded-full px-6 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <span>•</span>
              <span>Built for teens, trusted by parents</span>
              <span>•</span>
              <span>Founded by a 13-year-old entrepreneur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;