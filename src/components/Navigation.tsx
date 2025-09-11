import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/99a9b344-753e-445c-a0c8-1ccfe1f93589.png" 
              alt="Wardah Academy Logo" 
              className="h-13 w-20"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Wardah Academy</span>
              <span className="text-sm opacity-90">Qur'an & Knowledge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary-foreground/80 ${
                  location.pathname === item.path
                    ? "border-b-2 border-primary-foreground/80"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="secondary" size="sm" className="ml-4">
              <Link to="/admissions">Enroll Now</Link>
            </Button>

            <Button asChild variant="secondary" size="sm" className="ml-4">
              <Link to="https://portal.wardahacademy.com/">Portal</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium py-2 hover:text-primary-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="secondary" size="sm" className="mt-4">
                <Link to="/admissions" onClick={() => setIsOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;