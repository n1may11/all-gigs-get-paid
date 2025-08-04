import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-purple max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using All Giggs, you agree to these Terms of Service. If you are under 18, your parent or guardian must also agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Users must be between 10-17 years old</li>
                <li>Parental consent is required for users under 13</li>
                <li>Parent/guardian supervision is required for all users under 16</li>
                <li>All job activities must comply with local child labor laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Safety Requirements</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All job posters undergo background verification</li>
                <li>Jobs must be age-appropriate and safe</li>
                <li>Parent/guardian must approve all job opportunities</li>
                <li>Users must follow all safety guidelines provided</li>
                <li>Dangerous or inappropriate jobs are strictly prohibited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Payments are processed securely through Stripe</li>
                <li>All earnings belong to the teen user</li>
                <li>Parent/guardian oversight of earnings is encouraged</li>
                <li>All Giggs takes a small service fee from completed jobs</li>
                <li>Dispute resolution is available through our support system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate information during registration</li>
                <li>Complete jobs professionally and safely</li>
                <li>Communicate respectfully with job posters</li>
                <li>Report any safety concerns immediately</li>
                <li>Follow all platform guidelines and local laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Activities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Creating fake accounts or providing false information</li>
                <li>Attempting to circumvent safety measures</li>
                <li>Sharing personal contact information outside the platform</li>
                <li>Engaging in inappropriate or unsafe job activities</li>
                <li>Using the platform for anything other than legitimate job opportunities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these terms? Contact us at legal@allgiggs.com or through our support system.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;