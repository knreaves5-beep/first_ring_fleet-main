import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Wrench, 
  CreditCard, 
  Car, 
  Phone, 
  Shield, 
  MapPin, 
  FileText, 
  Receipt, 
  ClipboardCheck,
  DollarSign,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import servicesHeroImage from "@/assets/services-hero.png";

const Services = () => {
  const leasingServices = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "New or Used Vehicles, Ready to Work",
      description: "Choose from a range of commercial-ready trucks, vans, SUVs, and sedans — with both new and pre-owned options available to meet your operational needs and budget considerations."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Flexible Lease Terms",
      description: "We provide both open- and closed-ended lease options, structured around your business goals and vehicle usage. No rigid rules or hidden fees — just terms that work for you."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Upfitting Coordination",
      description: "We help you get the exact equipment and layout you need, from racks to wraps, before the vehicle hits the road."
    }
  ];

  const managementServices = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Maintenance & Repair Management",
      description: "Full coordination of preventive maintenance, wear-and-tear repairs, and unexpected mechanical issues."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Fuel Card Programs",
      description: "Simplified fuel purchases, expense controls, and consolidated reporting."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Collision Repair Service & Subrogation",
      description: "Streamlined support for accident repair, insurance recovery, and claim management."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Emergency Roadside Service",
      description: "24/7 access to roadside assistance to minimize downtime and disruption."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Glass Repair & Replacement",
      description: "Fast, convenient scheduling of windshield and window repair or replacement."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Telematics (GPS) & Fleet Insights",
      description: "Real-time data on vehicle location, usage, and driver behavior to improve accountability and decision-making."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Mileage Reporting",
      description: "Accurate mileage tracking to support maintenance, compliance, and planning."
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      title: "Toll & Violations Services",
      description: "Simplified processing and resolution of toll charges and vehicle violations."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Registration & Compliance",
      description: "End-to-end handling of tags, titles, renewals, and inspections."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesHeroImage} 
            alt="Commercial fleet services" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md">
              Smart Solutions for Managing and Growing Your Fleet
            </p>
            <p className="text-lg mt-4 text-white/95 drop-shadow-md">
              Whether you are just getting started or managing a sizable operation, First Ring Fleet 
              gives you flexible, transparent options to lease and manage your commercial vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Leasing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Fleet Leasing Made Simple
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We offer straightforward, no-surprise commercial leasing designed for small and 
              mid-sized businesses.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {leasingServices.map((service, index) => (
                <Card key={index} className="border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[hsl(var(--accent-light))] rounded-lg flex items-center justify-center mb-4 text-accent">
                      {service.icon}
                    </div>
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Fleet Management That Works for You
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Keeping your vehicles moving shouldn't slow you down. That's why we offer essential 
              fleet services, handled through trusted partners and tailored to your needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {managementServices.map((service, index) => (
                <Card key={index} className="border-border shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[hsl(var(--accent-light))] rounded-lg flex items-center justify-center mb-4 text-accent">
                      {service.icon}
                    </div>
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              A Transparent Partnership
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              We are not just a vendor. We are your fleet partner. That means:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Clear Pricing</h3>
                <p className="text-muted-foreground">No fine print, no surprise fees.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Personal Support</h3>
                <p className="text-muted-foreground">One point of contact. One phone number. No endless phone trees.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Custom Solutions</h3>
                <p className="text-muted-foreground">Whether you have 5 or 50 vehicles, we help you design a fleet setup that grows with your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Roll?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's take the busywork off your plate so you can focus on running your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground">
              Contact Us to Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
