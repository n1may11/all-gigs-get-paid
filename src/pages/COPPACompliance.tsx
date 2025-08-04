import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const COPPACompliance = () => {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "Parental Consent",
      description: "Verifiable parental consent required for all users under 13"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Minimal data collection with strict security measures"
    },
    {
      icon: Users,
      title: "Parental Control",
      description: "Parents can access, modify, or delete their child's data anytime"
    },
    {
      icon: CheckCircle,
      title: "Age Verification",
      description: "Robust age verification process for all users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-black text-foreground mb-4">
              COPPA Compliance
            </h1>
            <p className="text-muted-foreground">
              How All Giggs protects children's privacy and complies with federal law
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Commitment to Child Safety</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {complianceFeatures.map((feature, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <feature.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">What is COPPA?</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Children's Online Privacy Protection Act (COPPA) is a federal law that protects the privacy of children under 13. 
                All Giggs is fully compliant with COPPA requirements and goes beyond the minimum standards to ensure child safety.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">How We Comply</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Parental Consent Process</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Email verification from parent/guardian email address</li>
                  <li>Digital consent form with electronic signature</li>
                  <li>Phone verification for additional security</li>
                  <li>Clear explanation of data collection and use</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Information Collection</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>We collect only the minimum information necessary for our service</li>
                  <li>No behavioral tracking or targeted advertising to children</li>
                  <li>No sharing of children's personal information with third parties</li>
                  <li>Regular audits of data collection practices</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Parental Rights</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Review all personal information collected about their child</li>
                  <li>Request deletion of their child's personal information</li>
                  <li>Refuse to allow further collection of their child's information</li>
                  <li>24/7 access to privacy controls and settings</li>
                </ul>
              </div>
            </section>

            <section className="bg-gradient-secondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About COPPA?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're committed to transparency and compliance. If you have any questions about our COPPA practices 
                or how we protect your child's privacy, please don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cta"
                  onClick={() => window.location.href = 'mailto:privacy@allgiggs.com?subject=COPPA Inquiry'}
                >
                  Contact Privacy Team
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('/coppa-guide.pdf', '_blank')}
                >
                  Download COPPA Guide
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COPPACompliance;