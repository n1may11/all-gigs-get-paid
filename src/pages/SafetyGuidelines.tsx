import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Phone, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const SafetyGuidelines = () => {
  const safetyRules = [
    {
      icon: Users,
      title: "Never Work Alone",
      description: "Always have a parent/guardian nearby or informed of your location",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Public Locations Only",
      description: "Meet and work only in public, well-lit areas with other people around",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Emergency Contact",
      description: "Always carry a charged phone and have emergency contacts ready",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Daytime Hours",
      description: "Work only during daylight hours and reasonable times",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Trust Your Instincts",
      description: "If something feels wrong, leave immediately and tell an adult",
      color: "text-red-500"
    },
    {
      icon: AlertTriangle,
      title: "Report Concerns",
      description: "Immediately report any inappropriate behavior or safety issues",
      color: "text-yellow-500"
    }
  ];

  const prohibitedJobs = [
    "Jobs requiring power tools or dangerous equipment",
    "Work in private homes without parent supervision",
    "Jobs involving chemicals or hazardous materials", 
    "Late night or early morning work",
    "Transportation of strangers or deliveries to unknown locations",
    "Any work that makes you uncomfortable"
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
              Safety Guidelines
            </h1>
            <p className="text-muted-foreground">
              Your safety is our top priority. Follow these guidelines to earn money safely.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Essential Safety Rules</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {safetyRules.map((rule, index) => (
                  <Card key={index} className="border-border/50 hover:shadow-glow-secondary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                          <rule.icon size={24} className={rule.color} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-2">{rule.title}</h3>
                          <p className="text-muted-foreground text-sm">{rule.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
                <AlertTriangle size={28} className="text-red-600" />
                Prohibited Jobs
              </h2>
              <p className="text-red-700 mb-6">
                These types of jobs are never allowed on All Giggs for your safety:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {prohibitedJobs.map((job, index) => (
                  <li key={index} className="flex items-start gap-2 text-red-700">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm">{job}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Before You Start a Job</h2>
              <div className="bg-gradient-secondary rounded-2xl p-6">
                <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                  <li>Show the job posting to your parent/guardian</li>
                  <li>Get permission and discuss the safety plan</li>
                  <li>Verify the job poster's identity through our platform</li>
                  <li>Agree on meeting location (always public)</li>
                  <li>Set clear start and end times</li>
                  <li>Share your location with parents/guardians</li>
                </ol>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">During the Job</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <Shield size={20} />
                      Do
                    </h3>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Stay in public, visible areas</li>
                      <li>• Keep your phone charged and accessible</li>
                      <li>• Check in with parents regularly</li>
                      <li>• Be professional and respectful</li>
                      <li>• Take breaks when needed</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                      <AlertTriangle size={20} />
                      Don't
                    </h3>
                    <ul className="text-red-700 text-sm space-y-2">
                      <li>• Go inside private homes alone</li>
                      <li>• Share personal information</li>
                      <li>• Accept rides from job posters</li>
                      <li>• Work if you feel unsafe</li>
                      <li>• Handle dangerous equipment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">Emergency Contacts</h2>
              <p className="text-primary-foreground/90 mb-6">
                If you ever feel unsafe or need immediate help, contact:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-primary-foreground">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold">Emergency</h3>
                  <p className="text-2xl font-black">911</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold">Parents/Guardian</h3>
                  <p className="text-sm">Always have their number ready</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold">All Giggs Support</h3>
                  <p className="text-sm">Report through the app</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuidelines;