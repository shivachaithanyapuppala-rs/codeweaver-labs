import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Zap, Users } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CodeMaster
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-smooth">
            Features
          </a>
          <a href="#courses" className="text-sm font-medium hover:text-primary transition-smooth">
            Courses
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-smooth">
            Community
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};