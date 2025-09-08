import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Wardah Academy
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Dedicated to nurturing the hearts and minds of women and children through 
            authentic Islamic education and Qur'anic studies.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-card-foreground/80">
                To provide high-quality Islamic education that empowers women and children 
                with knowledge of the Qur'an, Islamic principles, and spiritual growth.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-card-foreground/80">
                To be a leading online Islamic academy that nurtures confident, 
                knowledgeable Muslim women and children who contribute positively to society.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-card-foreground/80">
                Excellence in education, compassionate teaching, authenticity in Islamic 
                knowledge, and creating a supportive learning community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder's Welcome */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Founder's Welcome</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center mb-8">
              <div className=" flex items-center justify-center">
                <span className="text-4xl text-primary-foreground"></span>
              </div>
              <h3 className="text-xl font-semibold">Ustaadha Asmau Umm Mus'ab</h3>
              <p className="text-background">Founder & Director</p>
            </div>
            
            <div className="space-y-4 text-card-foreground/80 leading-relaxed">
              <p>
                <strong>Assalamu Alaykum wa Rahmatulloohi wa Barakaatuh,</strong>
              </p>
              
              <p>
                It is with immense gratitude to Allah (SWT) that I welcome you to Wardah Academy. 
                Our academy was born from a deep desire to provide authentic, comprehensive Islamic 
                education for women and children in a nurturing, accessible environment.
              </p>
              
              <p>
                Having spent over 5 years in Islamic education and Qur'anic studies, I recognized 
                the need for a specialized academy that caters specifically to the learning needs 
                of women and children. At Wardah Academy, we believe that every student has the 
                potential to excel in their Islamic studies when provided with the right guidance, 
                support, and environment.
              </p>
              
              <p>
                Our programs are carefully designed to accommodate different learning levels and 
                styles, ensuring that whether you are just beginning your journey with the Qur'an 
                or seeking to deepen your existing knowledge, you will find a place here.
              </p>
              
              <p>
                We are committed to maintaining the highest standards of Islamic education while 
                embracing modern teaching methods that make learning engaging and effective. 
                Our dedicated team shares this vision and works tirelessly 
                to ensure every student receives personalized attention and support.
              </p>
              
              <p>
                I invite you to join our growing community of learners and embark on a 
                transformative journey of Islamic knowledge and spiritual growth.
              </p>
              
              <p className="text-primary font-semibold">
                Barakallahu alaykunna,<br />
                Ustaadha Asmau
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Why Choose Wardah Academy?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Qualified Instructors</h4>
                  <p className="text-foreground/80 text-sm">Learn from certified Islamic scholars and Qur'an teachers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Flexible Learning</h4>
                  <p className="text-foreground/80 text-sm">Online classes that fit your schedule and lifestyle</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Small Class Sizes</h4>
                  <p className="text-foreground/80 text-sm">Personalized attention with limited students per class</p>
                </div>
              </div>
            </div>
            
            <div className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Progressive Learning</h4>
                  <p className="text-foreground/80 text-sm">Structured levels from Bud to Blossom for systematic growth</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Supportive Community</h4>
                  <p className="text-foreground/80 text-sm">Join a caring community of like-minded learners</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Authentic Curriculum</h4>
                  <p className="text-foreground/80 text-sm">Based on traditional Islamic teachings and modern pedagogy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;