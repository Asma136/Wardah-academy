import ProgramCard from "@/components/ProgramCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      title: "Qur'an Memorization (Hifz)",
      description: "Comprehensive Qur'an memorization program with proven techniques and systematic approach.",
      level: "All Levels: Bud  | Bloom  | Blossom ",
      icon: "",
      features: [
        "Structured memorization schedule",
        "Daily revision techniques",
        "Progress tracking and assessments",
        "Individual teacher guidance",
        "Memory strengthening exercises",
        "Regular review sessions"
      ],
      paystackLink: "https://paystack.com" // Replace with actual Paystack link
    },
    {
      title: "Tajweed & Recitation",
      description: "Master the beautiful art of Qur'anic recitation with proper tajweed rules and pronunciation.",
      level: "All Levels: Bud  | Bloom | Blossom ",
      icon: "",
      features: [
        "Makharij (articulation points)",
        "Sifaat (characteristics of letters)",
        "Qira'at (different recitation styles)",
        "Audio practice sessions",
        "Correction and feedback",
        "Beautiful recitation training"
      ],
      paystackLink: "https://paystack.com" // Replace with actual Paystack link
    },
    {
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering essential Islamic sciences and contemporary issues.",
      level: "All Levels: Bud | Bloom  | Blossom ",
      icon: "",
      features: [
        "Fiqh (Islamic jurisprudence)",
        "Aqeedah (Islamic creed)",
        "Seerah (Prophet's biography)",
        "Islamic history and civilization",
        "Contemporary Islamic issues",
        "Islamic ethics and morals"
      ],
      paystackLink: "https://paystack.com/pay/wardahacademy" // Replace with actual Paystack link
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Programs
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive Islamic education programs designed to nurture spiritual 
            growth and academic excellence at every level of learning.
          </p>
        </div>

        {/* Learning Levels Explanation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Learning Levels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2"></div>
                <CardTitle className="text-xl text-primary">Bud Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80">
                  <strong>Beginner Level</strong><br />
                  Perfect for those starting their Islamic learning journey. 
                  Foundation building with basic concepts and fundamentals.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2"></div>
                <CardTitle className="text-xl text-primary">Bloom Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80">
                  <strong>Intermediate Level</strong><br />
                  For students with basic knowledge seeking to deepen their 
                  understanding and develop stronger skills.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2"></div>
                <CardTitle className="text-xl text-primary">Blossom Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80">
                  <strong>Advanced Level</strong><br />
                  Advanced studies for experienced learners ready for 
                  in-depth exploration and mastery of Islamic sciences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        {/* Program Features */}
        <div className="bg-muted/20 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            What's Included in Every Program
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-3">
              <div className="text-3xl"></div>
              <h3 className="font-semibold">Expert Teachers</h3>
              <p className="text-sm text-foreground/80">Qualified Islamic scholars and educators</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl"></div>
              <h3 className="font-semibold">Study Materials</h3>
              <p className="text-sm text-foreground/80">Comprehensive learning resources and books</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl"></div>
              <h3 className="font-semibold">Progress Tracking</h3>
              <p className="text-sm text-foreground/80">Regular assessments and feedback</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl"></div>
              <h3 className="font-semibold">Community Support</h3>
              <p className="text-sm text-foreground/80">Access to student community and discussions</p>
            </div>
          </div>
        </div>

        {/* Class Schedule Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Class Schedule & Format</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Class Times</h3>
                <ul className="space-y-2 text-card-foreground/80">
                  <li>• Morning Sessions</li>
                  <li>• Afternoon Sessions</li>
                  <li>• Evening Sessions</li>
                  <li>• Weekend Special Classes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Class Format</h3>
                <ul className="space-y-2 text-card-foreground/80">
                  <li>• Live online interactive sessions</li>
                  <li>• Small group classes</li>
                  <li>• One-on-one tutoring available</li>
                  <li>• Recorded sessions for review</li>
                  <li>• Webinars</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Choose the program that best fits your learning goals and current level. 
            Our admissions team will help you find the perfect starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-gradient-accent hover:opacity-90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              onClick={() => window.location.href = '/admissions'}
            >
              Apply for Admission
            </button>
            <button 
              className="border border-foreground text-foreground hover:bg-foreground/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Contact for Guidance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;