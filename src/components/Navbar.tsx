import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/first-ring-fleet-logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // return (
  //   <nav className="bg-primary/60 backdrop-blur-md backdrop-saturate-150 text-primary-foreground sticky top-0 z-50 shadow-lg border-b border-white/10">
  //     <div className="container mx-auto px-4">
  //       <div className="flex items-center justify-between h-16">
  //         <Link to="/" className="flex items-center gap-1">
  //           <img src={logo} alt="First Ring Fleet" className="h-12 w-auto" />
  //           <span className="text-xl font-cobe tracking-tight">First Ring Fleet</span>
  //         </Link>
    return (
    // UPDATED: Changed bg-primary/50 to bg-primary (solid)
    // REMOVED: backdrop-blur-xl and backdrop-saturate-150 for solid background
    <nav className="bg-primary/95 text-primary-foreground sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="First Ring Fleet" className="h-12 w-auto" />
            <span className="text-xl font-cobe tracking-tight">First Ring Fleet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
