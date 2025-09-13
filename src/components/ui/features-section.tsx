import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bug, 
  Brain, 
  Lightbulb, 
  Target, 
  Code2, 
  Gauge,
  BookOpen,
  Users,
  Zap,
  Play,
  Star,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Bug,
    title: "Smart Error Detection",
    description: "Real-time code analysis that catches errors before you even run your code, with contextual explanations.",
    badge: "AI-Powered",
    color: "text-destructive",
    demo: "Live error detection as you type"
  },
  {
    icon: Brain,
    title: "Intelligent Debugging",
    description: "Get personalized debugging suggestions and learn problem-solving strategies from AI mentors.",
    badge: "Advanced",
    color: "text-primary",
    demo: "AI-powered debugging assistant"
  },
  {
    icon: Target,
    title: "Adaptive Exercises",
    description: "Dynamically generated coding challenges that adjust difficulty based on your progress and skills.",
    badge: "Personalized",
    color: "text-accent",
    demo: "Personalized learning paths"
  },
  {
    icon: BookOpen,
    title: "Interactive Tutorials",
    description: "Step-by-step coding tutorials with live code editing and instant feedback loops.",
    badge: "Hands-on",
    color: "text-warning",
    demo: "Live coding environment"
  },
  {
    icon: Gauge,
    title: "Performance Analytics",
    description: "Track your coding progress with detailed metrics on speed, accuracy, and problem-solving patterns.",
    badge: "Insights",
    color: "text-primary",
    demo: "Real-time performance tracking"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Code review sessions, peer programming, and community challenges to accelerate learning.",
    badge: "Social",
    color: "text-accent",
    demo: "Live collaboration tools"
  }
];

const tutorialSteps = [
  {
    title: "Choose Your Language",
    description: "Start with JavaScript, Python, or any of our 12+ supported languages",
    time: "2 min",
    icon: Code2
  },
  {
    title: "Interactive Lessons",
    description: "Follow guided tutorials with real-time code execution and feedback",
    time: "15 min",
    icon: BookOpen
  },
  {
    title: "Practice Challenges",
    description: "Solve progressively difficult coding challenges tailored to your skill level",
    time: "30 min",
    icon: Target
  },
  {
    title: "Get AI Feedback",
    description: "Receive personalized suggestions and optimization tips from our AI mentor",
    time: "5 min",
    icon: Brain
  }
];

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-20 bg-gradient-card animate-on-scroll">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 animate-float">
            <Zap className="mr-2 h-4 w-4" />
            Platform Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              Master Programming
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines AI-powered analysis with interactive learning 
            to provide the most effective coding education experience.
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full animate-slide-up">
          <TabsList className="grid w-full grid-cols-2 mb-8 animate-scale-in">
            <TabsTrigger 
              value="features" 
              className="transition-all duration-300 data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
            >
              Core Features
            </TabsTrigger>
            <TabsTrigger 
              value="tutorial" 
              className="transition-all duration-300 data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
            >
              Learning Process
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 cursor-pointer animate-on-scroll ${
                    activeFeature === index ? 'ring-2 ring-primary animate-pulse-glow' : ''
                  }`}
                  onClick={() => setActiveFeature(index)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-background shadow-sm ${feature.color} group-hover:animate-float`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-xs animate-scale-in">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Play className="h-4 w-4" />
                      <span>{feature.demo}</span>
                    </div>
                  </CardContent>
                  
                  {activeFeature === index && (
                    <div className="absolute inset-0 border-2 border-primary rounded-lg animate-pulse" />
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tutorial" className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">How Learning Works</h3>
                <p className="text-muted-foreground">
                  Follow our structured approach to master programming concepts effectively
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {tutorialSteps.map((step, index) => (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-lg animate-float">
                          {index + 1}
                        </div>
                        <div className="p-3 rounded-lg bg-background shadow-sm text-primary group-hover:animate-float">
                          <step.icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.time}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};