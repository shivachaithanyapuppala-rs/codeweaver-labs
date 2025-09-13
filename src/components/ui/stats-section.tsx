import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, Code } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Learners",
    description: "Students worldwide using our platform"
  },
  {
    icon: Code,
    value: "1M+",
    label: "Code Reviews",
    description: "AI-powered code analyses completed"
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Interactive Lessons",
    description: "Hands-on coding tutorials available"
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Students who complete our courses"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white mb-6">
            Trusted by Developers
            <span className="block text-accent">
              Around the World
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of developers who have accelerated their coding journey with our platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-accent/20 text-accent group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-accent font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};