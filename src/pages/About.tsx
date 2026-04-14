import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutPartnershipImage from "@/assets/about-partnership.jpg";
import aboutHeroImage from "@/assets/about-hero.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHeroImage} 
            alt="First Ring Fleet commercial vehicles" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))]/65 to-[hsl(var(--hero-gradient-end))]/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About First Ring Fleet
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Smarter fleet solutions for businesses that can't afford downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Built for Businesses That Move
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  First Ring Fleet was created for companies that rely on vehicles to keep their 
                  operations running but don't have the time or resources to constantly manage repairs, 
                  juggle vendors, or chase down drivers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Whether you're replacing aging vehicles, expanding your team, or simply trying to 
                  get more control over fleet costs, we offer commercial leasing and fleet management 
                  designed to reduce complexity and get your team on the road — reliably and efficiently.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand the pressure of running a business with distributed teams, tight schedules, 
                  and growing service demands. That's why we've built a model that combines simplicity, 
                  transparency, and support — so you can stay focused on your business, not your fleet.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-3"></div>
                  <img 
                    src={aboutPartnershipImage} 
                    alt="Partnership and collaboration in fleet management" 
                    className="relative rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Who We Serve */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  To make fleet leasing and management simple, transparent, and truly aligned with 
                  the needs of growing, service-driven businesses.
                </p>
                <p className="text-base text-muted-foreground">
                  We believe vehicle programs should feel like an asset — not another distraction.
                </p>
              </CardContent>
            </Card>

            {/* Who We Serve Card */}
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[hsl(var(--accent-light))] rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Who We Serve
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  From trades and service companies to distributed teams with mobile field operations, 
                  we work with businesses that rely on vehicles every day and need a partner who 
                  understands the operational, financial, and logistical realities that come with them.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Whether you are running HVAC crews, pest control teams, landscaping operations, 
                  or managing regional service technicians, we make it easier to build, maintain, 
                  and optimize your fleet — without the complexity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/80 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              We start by understanding your goals and the way your team works. Then we create 
              leasing and fleet management solutions that fit your business — not the other way around.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <CardTitle className="text-foreground">Transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Clear pricing, no surprises.</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <CardTitle className="text-foreground">Flexibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Solutions tailored to your needs and growth.</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <CardTitle className="text-foreground">Responsiveness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Direct support, when you need it.</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <CardTitle className="text-foreground">Practicality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We're operators, too — we get things done.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to learn more about how we can support your fleet needs?
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
