import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Brain, 
  ArrowRight,
  Clock,
  Users,
  Star
} from "lucide-react";

const learningPaths = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Master HTML, CSS, JavaScript, React, and modern web development practices",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    students: "15,420",
    rating: 4.9,
    progress: 65,
    modules: ["HTML & CSS Fundamentals", "JavaScript Mastery", "React & Hooks", "Advanced Patterns"],
    color: "text-accent",
    gradient: "from-accent/20 to-transparent"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Learn Node.js, databases, APIs, and server-side architecture",
    level: "Intermediate",
    duration: "10 weeks", 
    students: "12,340",
    rating: 4.8,
    progress: 40,
    modules: ["Node.js Basics", "Database Design", "RESTful APIs", "Authentication"],
    color: "text-primary",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Build native mobile apps with React Native and modern mobile frameworks",
    level: "Intermediate",
    duration: "8 weeks",
    students: "8,760",
    rating: 4.7,
    progress: 25,
    modules: ["React Native", "Native Components", "State Management", "App Store Deploy"],
    color: "text-warning",
    gradient: "from-warning/20 to-transparent"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Dive into Python, data science, machine learning, and AI applications",
    level: "Advanced",
    duration: "16 weeks",
    students: "6,890",
    rating: 4.9,
    progress: 15,
    modules: ["Python for AI", "Data Analysis", "ML Algorithms", "Deep Learning"],
    color: "text-destructive",
    gradient: "from-destructive/20 to-transparent"
  }
];

export const LearningPaths = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-card animate-on-scroll">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Choose Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths with hands-on projects, real-world applications, 
            and continuous assessment to ensure mastery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-up">
          {learningPaths.map((path, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-background shadow-sm ${path.color} group-hover:animate-float`}>
                    <path.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {path.level}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {path.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {path.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {path.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {path.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    {path.rating}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">{path.progress}%</span>
                  </div>
                  <Progress value={path.progress} className="h-2" />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Course Modules</h4>
                  <div className="space-y-2">
                    {path.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant group hover-scale animate-pulse-glow"
                  size="lg"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};