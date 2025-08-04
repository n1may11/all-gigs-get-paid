import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-purple max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At All Giggs, we are committed to protecting your privacy and your child's privacy. We collect only the information necessary to provide our services safely and effectively.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Account information (name, email, age verification)</li>
                <li>Parent/guardian contact information and consent</li>
                <li>Location data (city/region only, not precise location)</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Job completion and review data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To connect teens with safe, verified job opportunities</li>
                <li>To ensure COPPA compliance and child safety</li>
                <li>To process payments securely</li>
                <li>To provide customer support</li>
                <li>To improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Child Privacy (COPPA)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We comply with the Children's Online Privacy Protection Act (COPPA). For users under 13:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Verifiable parental consent is required before account creation</li>
                <li>We collect minimal information necessary for service provision</li>
                <li>Parents can review, modify, or delete their child's information at any time</li>
                <li>We do not sell or share children's personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data, including SSL encryption, secure payment processing through Stripe, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@allgiggs.com or through our support system.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;