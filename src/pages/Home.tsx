import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fleet.jpg";
import flexibleLeasingIcon from "@/assets/icon-flexible-leasing.png";
import fleetManagementIcon from "@/assets/icon-fleet-management.png";
import partnershipImage from "@/assets/partnership-values.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Commercial fleet vehicles" 
            className="w-full h-full object-cover opacity-90"
          />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-accent/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Fleet Leasing & Management Built for Businesses Like Yours
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white drop-shadow-md">
              Flexible. Transparent. Uncomplicated.
            </p>
            <p className="text-base md:text-lg mb-8 text-white/95 drop-shadow-md max-w-3xl mx-auto">
              At First Ring Fleet, we specialize in commercial fleet leasing and management solutions 
              tailored to the unique needs of small and midsize businesses — especially those with 
              distributed teams on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-black bg-accent hover:bg-[hsl(var(--accent-hover))] ">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <img src={flexibleLeasingIcon} alt="Flexible Leasing" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-foreground text-center">Flexible Leasing Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  We help you source the right vehicles with straightforward terms — no hidden fees, 
                  no one-size-fits-all contracts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <img src={fleetManagementIcon} alt="Fleet Management" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-foreground text-center">Fleet Management Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  From registration and maintenance coordination to fuel programs and roadside assistance, 
                  we provide essential services that keep your team moving.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why First Ring Fleet */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={partnershipImage} 
            alt="Business partnership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why First Ring Fleet?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are here to serve businesses that are often overlooked in a market built for large 
              enterprise fleets. Our approach is different: tailored solutions, clear communication, 
              and a commitment to making fleet leasing and management more efficient, more accessible, 
              and more aligned with your business goals.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Talk?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you are acquiring your next vehicle or navigating a fleet transition, 
            we're here to support you. Let's discuss your needs and explore how First Ring Fleet 
            can be a trusted partner every mile of the way.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
