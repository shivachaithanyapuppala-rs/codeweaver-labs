import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Code, Zap, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero animate-fade-in">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container relative py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium animate-float">
            <Zap className="mr-2 h-4 w-4" />
            AI-Powered Learning Platform
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl animate-slide-up">
            Master Programming with
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent animate-glow-pulse">
              Smart Code Analysis
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-white/80 md:text-xl lg:text-2xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Learn to code with real-time error detection, intelligent debugging suggestions, 
            and personalized exercises that adapt to your learning pace.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '400ms' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 shadow-glow transition-bounce hover:scale-105 hover-glow animate-pulse-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Learning Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 hover-scale"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative mx-auto max-w-4xl animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl animate-pulse-glow" />
            <img
              src={heroImage}
              alt="Interactive coding environment"
              className="rounded-2xl shadow-2xl border border-white/20 animate-float hover-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};