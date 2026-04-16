import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, MessageSquare, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamHeroImage from "@/assets/team-hero.jpg";
import veraImage from "@/assets/team-vera.jpg";
import robertImage from "@/assets/team-Hennessy.png";
import marcImage from "@/assets/team-Marc.jpg";
import michaelImage from "@/assets/team-Michael.png";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-36">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamHeroImage} 
            alt="First Ring Fleet team" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/95 drop-shadow-md">
              At First Ring Fleet, we're a team of builders, operators, and problem-solvers with a 
              shared mission: to take the stress out of fleet leasing and management for small and 
              midsize businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We bring together experience from the automotive, mobility, and commercial services 
              industries — but more importantly, we share a hands-on approach to solving real challenges 
              our customers face every day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it is sourcing the right vehicle, navigating lease options, or managing maintenance 
              across a distributed team, we are here to make it easier.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              What You Can Expect From Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border bg-card text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[hsl(var(--accent-light))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">Responsiveness</CardTitle>
                </CardHeader>
                <CardContent>
                   <CardDescription className="text-base">
                    When you need help, you'll get a person — not a call center.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[hsl(var(--accent-light))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We will always tell you what something costs, why, and what your options are.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[hsl(var(--accent-light))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">Follow-Through</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We don't make promises we can't keep, and we don't leave things half done.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Leadership
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vera Krause */}
              <Card className="border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <img
                      src={veraImage}
                      alt="Vera Krause"
                      className="w-full h-full object-cover"
                      />
                  </div>
                  <CardTitle className="text-center text-foreground text-2xl">Vera Krause</CardTitle>
                  <CardDescription className="text-center text-lg font-medium text-accent">
                     Divisional President
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Vera leads First Ring Fleet with a focus on operational clarity, scalable structure, 
                    and a deep commitment to serving customers with complex fleet needs. With a strong 
                    track record across strategy, go-to-market, and execution in both corporate and 
                    entrepreneurial settings, she is responsible for building and growing the business 
                    from day one.
                  </p>
                  {/* <div className="flex justify-center">
                    <Button variant="outline" size="sm" className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
                  </div> */}
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open('https://www.linkedin.com/in/vera-krause-417b0810/', '_blank')}
                      >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Robert Hennessy */}
              <Card className="border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <img
                      src={robertImage}
                      alt="Robert Hennessy"
                      className="w-full h-full object-cover"
                      />
                  </div>
                  <CardTitle className="text-center text-foreground text-2xl">Robert Hennessy</CardTitle>
                  <CardDescription className="text-center text-lg font-medium text-accent">
                     Founder
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As the visionary behind First Ring Fleet's creation, Robert brings decades of 
                    leadership in the automotive industry and a forward-looking vision for how mobility 
                    can better serve businesses of all sizes. His passion for innovation, customer 
                    experience, and long-term partnerships is foundational to the company's mission.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open('https://www.linkedin.com/in/robert-hennessy-b431014/', '_blank')}
                      >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Marc Schmidt */}
              <Card className="border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <img
                      src={marcImage}
                      alt="Marc Schmidt"
                      className="w-full h-full object-cover"
                      />
                  </div>
                  <CardTitle className="text-center text-foreground text-2xl">Marc Schmidt</CardTitle>
                  <CardDescription className="text-center text-lg font-medium text-accent">
                     Fleet Development Executive 
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Marc supports First Ring Fleet by guiding customers through complex transportation
                    decisions, drawing from more than 16 years of experience in equipment leasing and
                    fleet management. Known for his consultative approach, he builds trusted partnerships
                    with customers, manufacturers, suppliers, and outfitters to create thoughtful, scalable
                    solutions that drive long-term value.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open('https://www.linkedin.com/in/marc-schmidt-8748737/', '_blank')}
                      >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
 
              {/* Michael Hein */}
              <Card className="border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <img
                      src={michaelImage}
                      alt="Michael Hein"
                      className="w-full h-full object-cover"
                      />
                  </div>
                  <CardTitle className="text-center text-foreground text-2xl">Michael Hein</CardTitle>
                  <CardDescription className="text-center text-lg font-medium text-accent">
                     Fleet Account Executive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                   Michael brings 13 years of industry experience to First Ring Fleet, supporting our
                   customers across a wide range of fleet sizes, needs, and operating environments. 
                   His broad problem-solving background, paired with a strong customer-focused mindset,
                   aligns seamlessly with our consultative approach to serving clients.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open('https://www.linkedin.com/in/michael-hein-9a92458b/', '_blank')}
                      >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
                  </div>
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
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our team can support your fleet needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
