import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bug, 
  Brain, 
  Lightbulb, 
  Target, 
  Code2, 
  Gauge,
  BookOpen,
  Users,
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Bug,
    title: "Smart Error Detection",
    description: "Real-time code analysis that catches errors before you even run your code, with contextual explanations.",
    badge: "AI-Powered",
    color: "text-destructive"
  },
  {
    icon: Brain,
    title: "Intelligent Debugging",
    description: "Get personalized debugging suggestions and learn problem-solving strategies from AI mentors.",
    badge: "Advanced",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Adaptive Exercises",
    description: "Dynamically generated coding challenges that adjust difficulty based on your progress and skills.",
    badge: "Personalized",
    color: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Interactive Tutorials",
    description: "Step-by-step coding tutorials with live code editing and instant feedback loops.",
    badge: "Hands-on",
    color: "text-warning"
  },
  {
    icon: Gauge,
    title: "Performance Analytics",
    description: "Track your coding progress with detailed metrics on speed, accuracy, and problem-solving patterns.",
    badge: "Insights",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Code review sessions, peer programming, and community challenges to accelerate learning.",
    badge: "Social",
    color: "text-accent"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="mr-2 h-4 w-4" />
            Platform Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Master Programming
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines AI-powered analysis with interactive learning 
            to provide the most effective coding education experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-background shadow-sm ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};