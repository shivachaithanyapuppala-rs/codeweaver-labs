import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Zap, Users, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 animate-slide-up">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 hover-scale">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary animate-glow-pulse">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CodeMaster
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium story-link transition-smooth">
            Features
          </a>
          <a href="#courses" className="text-sm font-medium story-link transition-smooth">
            Courses
          </a>
          <a href="#community" className="text-sm font-medium story-link transition-smooth">
            Community
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover-scale hover-glow"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            ) : (
              <Moon className="h-4 w-4 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="sm" className="hover-scale">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-elegant hover-scale animate-pulse-glow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};