import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, MapPin, Clock, Instagram, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Us
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            We're here to help you on your Islamic learning journey. Reach out to us 
            for any questions about our programs, admissions, or support.
          </p>
        </div>

        <div className="">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">WhatsApp Chat</h3>
                    <p className="text-card-foreground/80 mb-3">
                      Get instant support and quick answers to your questions
                    </p>
                    <Button 
                      className="bg-gradient-accent hover:opacity-90"
                      onClick={() => window.open('https://wa.me/2348060576829?text=As salamu%20Alaykum,%20I%20would%20like%20to%20know%20more%20about%20Wardah%20Academy', '_blank')}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-card-foreground/80 mb-2">
                    
                    </p>
                    <p className="text-card-foreground/80 mb-2">
                      info@wardahacademy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-card-foreground/80">
                      +2348060576829
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-card-foreground/80">
                      Online Academy<br />
                      Serving Nigeria & Beyond
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <div className="text-card-foreground/80 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 7:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80 mb-4">
                  Stay connected with us on social media for updates, inspiration, and community engagement.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://instagram.com/wardahacademy2025?igsh=ODc2MmExZ2M0OXNk&utm_-source=qr', '_blank')}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://whatsapp.com/channel/0029Vb6X4Gs2P59jzEHv8907', '_blank')}
                  >
                    
                    WhatsApp Channel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I enroll in a program?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Simply fill out our registration form, make payment through Paystack, 
                  and you'll receive confirmation within 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are classes conducted online?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Yes, all our classes are conducted online through live interactive 
                  sessions that you can join from anywhere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I miss a class?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  All group classes will be recorded and available for review and revisiting. 
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer family discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Yes, we offer special discounts for siblings and families enrolling 
                  in multiple programs. Contact us for details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;