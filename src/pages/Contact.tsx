import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneInput from "react-phone-input-2";
import FreshworksContactForm from "@/components/FreshworksContactForm";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Thank you for reaching out!",
  //     description: "We typically respond within one business day.",
  //   });
  //   // Reset form
  //   setFormData({
  //     name: "",
  //     company: "",
  //     email: "",
  //     phone: "",
  //     inquiry: "",
  //     message: ""
  //   });
  // };
  //
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Build Form Data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("company", formData.company);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("inquiry", formData.inquiry);
    data.append("message", formData.message);

    // Add FormSubmit specific parameters to disable activation
    data.append("_captcha", "false"); // Disable captcha
    data.append("_subject", " New Inquiry from Website");
    data.append("_template", "table");
    data.append(
      "_autoresponse",
      "Thank you for your message! We'll get back to you soon."
    ); // Auto-response

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@firstringfleet.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We typically respond within one business day.",
        });

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          inquiry: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground"> */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90">
              Let's talk fleet and how we can support yours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-center text-muted-foreground">
              Whether you are exploring options for vehicle leasing, looking for
              a fleet management partner, or simply have a question, we are
              happy to connect. Submit the form below or reach out directly. You
              will hear from a real person promptly — no call centers, no
              runaround.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    General Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:info@firstringfleet.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[hsl(var(--accent-light))] rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Email
                      </div>
                      <div className="text-sm">info@firstringfleet.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:4044216427"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[hsl(var(--accent-light))] rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Phone
                      </div>
                      <div className="text-sm">(678) 400-3750</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-[hsl(var(--accent-light))] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Location
                      </div>
                      <div className="text-sm">Based in Atlanta, GA</div>
                      <div className="text-sm">
                        Serving customers across the region
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-secondary shadow-md">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within one business day.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            {/* <Card className="border-border bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <PhoneInput
                      // Set default country to United States ('us')
                      country={"us"} 
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      
                      // FIX: Prevents the country from changing when typing the number
                      countryCodeEditable={false}

                      // Custom styles (including increased padding for placeholder visibility)
                      inputClass="!w-full !p-3 !h-10 !text-sm !border !border-input !rounded-md !shadow-sm !bg-background !ring-offset-background placeholder:!text-muted-foreground focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-ring focus-visible:!ring-offset-2 disabled:!cursor-not-allowed disabled:!opacity-50 !pl-[52px]" 
                      containerClass="w-full"
                      buttonClass="!border-y !border-l !border-input !rounded-l-md !bg-background hover:!bg-accent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">How can we help you? *</Label>
                    <Select 
                      required
                      value={formData.inquiry}
                      onValueChange={(value) => setFormData({ ...formData, inquiry: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leasing">I'm interested in leasing vehicles</SelectItem>
                        <SelectItem value="management">I'm interested in fleet management services</SelectItem>
                        <SelectItem value="question">I have a general question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your needs..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-[hsl(var(--accent-hover))] text-accent-foreground"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>  */}
            <div>
            <FreshworksContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
