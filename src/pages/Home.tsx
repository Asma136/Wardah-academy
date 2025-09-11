import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProgramCard from "@/components/ProgramCard";
import { BookOpen, Heart, Star } from "lucide-react";

const Home = () => {
  const programs = [
    {
      title: "Qur'an Memorization",
      description: "Master the art of Quranic memorization with structured guidance and support.",
      level: "Bud  | Bloom  | Blossom ",
      icon: "",
      features: [
        "Systematic memorization techniques",
        "Regular revision schedules",
        "Progress tracking",
        "Individual guidance"
      ],
      paystackLink: "https://paystack.shop/pay/wardah1" // Replace with actual Paystack link
    },
    {
      title: "Tajweed",
      description: "Perfect your recitation with proper pronunciation and beautiful tajweed rules.",
      level: "Bud  | Bloom  | Blossom ",
      icon: "",
      features: [
        "Proper pronunciation rules",
        "Makharij (articulation points)",
        "Beautiful recitation styles",
        "Audio practice sessions"
      ],
      paystackLink: "https://paystack.shop/pay/wardah1" // Replace with actual Paystack link
    },
    {
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering Fiqh, Aqeedah, and Islamic history.",
      level: "Bud  | Bloom  | Blossom ",
      icon: "",
      features: [
        "Fiqh and Islamic jurisprudence",
        "Aqeedah (Islamic belief)",
        "Islamic history and biography",
        "Contemporary Islamic issues"
      ],
      paystackLink: "https://paystack.shop/pay/wardah1" // Replace with actual Paystack link
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Wardah Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Nurturing Women & Children with Qur'an & Knowledge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3"
              asChild
            >
              <a href="/admissions">Enroll Now</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-foreground text-foreground hover:bg-foreground/10"
              asChild
            >
              <a href="/programs">View Programs</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Welcome to Wardah Academy
            </h2>
            <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
              At Wardah Academy, we are dedicated to providing exceptional Islamic education 
              for women and children. Our academy offers comprehensive programs in Qur'an 
              memorization, Tajweed, and Islamic studies, designed to nurture both spiritual 
              growth and academic excellence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Expert Teaching</h3>
                  <p className="text-card-foreground/80">
                    Learn from qualified and experienced Islamic scholars and teachers
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Nurturing Environment</h3>
                  <p className="text-card-foreground/80">
                    A supportive and caring learning environment for all students
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-card-foreground/80">
                    Committed to achieving the highest standards in Islamic education
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Programs
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Choose from our comprehensive programs designed for different learning stages
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90"
              asChild
            >
              <a href="/admissions">Start Your Journey Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Begin Your Islamic Learning Journey?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our academy and experience quality Islamic education in a nurturing environment.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:opacity-90 text-lg px-8 py-3"
            asChild
          >
            <a href="/admissions">Enroll Now</a>
          </Button>

         
        </div>
      </section>
    </div>
  );
};

export default Home;