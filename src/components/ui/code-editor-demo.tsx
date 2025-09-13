import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Bug, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

export const CodeEditorDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const analyzeCode = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowSuggestions(true);
    }, 2000);
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            See Our
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Smart Analysis in Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI detects issues and provides intelligent suggestions in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-code-bg border-0 shadow-elegant">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-code-foreground flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive" />
                    <div className="h-3 w-3 rounded-full bg-warning" />
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <span className="ml-2">fibonacci.js</span>
                  </CardTitle>
                  <Button 
                    size="sm" 
                    onClick={analyzeCode}
                    disabled={isAnalyzing}
                    className="bg-accent hover:bg-accent/90 text-black"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Analyze Code
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <pre className="text-code-foreground text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-code-keyword">function</span>{" "}
                    <span className="text-code-function">fibonacci</span>
                    <span className="text-code-foreground">(</span>
                    <span className="text-code-variable">n</span>
                    <span className="text-code-foreground">) {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-code-keyword">if</span>
                    <span className="text-code-foreground"> (</span>
                    <span className="text-code-variable">n</span>
                    <span className="text-code-foreground"> {"<="} </span>
                    <span className="text-code-number">1</span>
                    <span className="text-code-foreground">) </span>
                    <span className="text-code-keyword">return</span>
                    <span className="text-code-foreground"> </span>
                    <span className="text-code-variable">n</span>
                    <span className="text-code-foreground">;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-code-keyword">return</span>
                    <span className="text-code-foreground"> </span>
                    <span className="text-code-function">fibonacci</span>
                    <span className="text-code-foreground">(</span>
                    <span className="text-code-variable">n</span>
                    <span className="text-code-foreground"> - </span>
                    <span className="text-code-number">1</span>
                    <span className="text-code-foreground">) + </span>
                    <span className="text-code-function">fibonacci</span>
                    <span className="text-code-foreground">(</span>
                    <span className="text-code-variable">n</span>
                    <span className="text-code-foreground"> - </span>
                    <span className="text-code-number">2</span>
                    <span className="text-code-foreground">);</span>
                    {"\n"}
                    <span className="text-code-foreground">{"}"}</span>
                    {"\n\n"}
                    <span className="text-code-comment">// Bug detected: Inefficient recursion</span>
                    {"\n"}
                    <span className="text-code-variable">console</span>
                    <span className="text-code-foreground">.</span>
                    <span className="text-code-function">log</span>
                    <span className="text-code-foreground">(</span>
                    <span className="text-code-function">fibonacci</span>
                    <span className="text-code-foreground">(</span>
                    <span className="text-code-number">40</span>
                    <span className="text-code-foreground">)); </span>
                    <span className="text-code-comment">// This will be slow!</span>
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" />
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {showSuggestions ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
                        <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                        <div>
                          <div className="font-medium text-warning">Performance Warning</div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Line 5: Exponential time complexity O(2^n) detected. This will be extremely slow for large inputs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <div>
                          <div className="font-medium text-accent">Optimization Suggestion</div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Consider using memoization or dynamic programming to reduce time complexity to O(n).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Code Quality Score</span>
                        <Badge variant="secondary">6/10</Badge>
                      </div>
                      <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-primary rounded-full transition-all duration-1000" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Bug className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Click "Analyze Code" to see our AI in action</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};