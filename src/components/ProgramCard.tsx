import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgramCardProps {
  title: string;
  description: string;
  level: string;
  icon: string;
  features: string[];
  paystackLink: string;
}

const ProgramCard = ({ title, description, level, icon, features, paystackLink }: ProgramCardProps) => {
  return (
    <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105">
      <CardHeader className="text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-primary font-semibold">{level}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-card-foreground/80 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button 
          className="w-full bg-gradient-accent hover:opacity-90" 
          onClick={() => window.open(paystackLink, '_blank')}
        >
          Pay & Enroll
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <a href="/admissions">Learn More</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;