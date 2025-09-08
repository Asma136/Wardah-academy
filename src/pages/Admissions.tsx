import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, CreditCard, CheckCircle } from "lucide-react";

const Admissions = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Admissions
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Join Wardah Academy and begin your journey of Islamic learning. 
            Our admission process is simple and designed to help you get started quickly.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Simple 3-Step Admission Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">1. Fill Application</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80 mb-4">
                  Complete our simple registration form with your basic information 
                  and program preferences.
                </p>
                <Button 
                  className="w-full bg-gradient-accent hover:opacity-90"
                  onClick={() => window.open('https://forms.gle/GnsGQpYy9dwzxV9N6', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Fill Application Form
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">2. Make Payment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80 mb-4">
                  Secure your spot by completing payment through our trusted 
                  Paystack payment gateway.
                </p>
                <Button 
                  className="w-full bg-gradient-accent hover:opacity-90"
                  onClick={() => window.open('https://paystack.shop/pay/wardah1', '_blank')}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay & Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">3. Confirmation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80 mb-4">
                  Receive enrollment confirmation and class details via email 
                  within 24 hours of payment.
                </p>
                <div className="w-full bg-muted text-muted-foreground py-3 px-4 rounded-lg text-sm">
                  Enrollment Confirmed!
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Registration Form</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-card-foreground/80">
              Please fill out our comprehensive registration form to begin your admission process. 
              The form includes sections for personal information, program selection, and learning preferences.
            </p>
            
            <div className="bg-muted/20 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-background">What You'll Need:</h3>
              <ul className="text-left space-y-2 text-card-foreground/80">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Personal information (name, age, contact details)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Program selection and preferred learning level
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Previous Islamic education background (if any)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Preferred class timings and schedule
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Emergency contact information
                </li>
              </ul>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3"
              onClick={() => window.open('https://forms.gle/GnsGQpYy9dwzxV9N6', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Access Registration Form
            </Button>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Payment & Enrollment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-card-foreground/80">
                <strong>Important:</strong> Enrollment is confirmed only after successful payment through Paystack.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Payment Options</h3>
                <ul className="space-y-2 text-card-foreground/80">
                  <li>• Debit/Credit Cards (Visa, Mastercard)</li>
                  <li>• Bank Transfer</li>
                  <li>• Mobile Money (MTN, Airtel, etc.)</li>
                  <li>• USSD Banking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Security & Trust</h3>
                <ul className="space-y-2 text-card-foreground/80">
                  <li>• SSL encrypted transactions</li>
                  <li>• PCI DSS compliant platform</li>
                  <li>• Instant payment confirmation</li>
                  <li>• 24/7 payment support</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3"
                onClick={() => window.open('https://paystack.shop/pay/wardah1', '_blank')}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Pay & Enroll Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Program Fees */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Program Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-background">Qur'an Memorization</h3>
                <div className="text-2xl font-bold mb-2">₦15,000</div>
                <p className="text-sm text-card-foreground/80">per month</p>
              </div>
              
              <div className="text-center p-6 bg-muted/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-background">Tajweed & Recitation</h3>
                <div className="text-2xl font-bold mb-2">₦15,000</div>
                <p className="text-sm text-card-foreground/80">per month</p>
              </div>
              
              <div className="text-center p-6 bg-muted/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-background">Islamic Studies</h3>
                <div className="text-2xl font-bold mb-2">₦10,000</div>
                <p className="text-sm text-card-foreground/80">per month</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-card-foreground/80">
                * Special discounts available for multiple programs and siblings
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Need Help with Admission?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-card-foreground/80">
              Our admissions team is here to help you with any questions about the enrollment process, 
              program selection, or payment options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/2348060576829', '_blank')}
              >
                WhatsApp Support
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admissions;