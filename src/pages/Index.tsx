import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { CodeEditorDemo } from "@/components/ui/code-editor-demo";
import { LearningPaths } from "@/components/ui/learning-paths";
import { StatsSection } from "@/components/ui/stats-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CodeEditorDemo />
      <LearningPaths />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
