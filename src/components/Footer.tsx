import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/first-ring-fleet-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <img src={logo} alt="First Ring Fleet" className="h-10 w-auto" />
              <h3 className="text-xl font-cobe">First Ring Fleet</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Flexible, transparent, uncomplicated fleet leasing and management for businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            {/* FIX: Applied flex-col and items-start */}
            <div className="flex flex-col items-start space-y-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/team" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Team
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Info</h4>
            {/* FIX: Applied flex-col and items-start to Contact Info container */}
            <div className="flex flex-col items-start space-y-2">
              <a
                href="mailto:info@firstringfleet.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@firstringfleet.com
              </a>
              <a
                href="tel:4044216427"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                (678) 400-3750
              </a>
              <p className="text-sm text-primary-foreground/80">
                Atlanta, GA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} First Ring Fleet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;