import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/20 rounded-full animate-float-delayed-2"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
            <Heart className="text-primary text-2xl" fill="currentColor" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          The Blockchain To<br />
          <span className="text-primary">House All Finance</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crypto is fragmented today, but it doesn't need to be.<br />
          For the first time, build projects, create value, and<br />
          exchange assets on the same hyper-performant chain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            data-testid="button-start-trading"
          >
            Start Trading
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-105"
            data-testid="button-start-building"
          >
            Start Building
          </Button>
        </div>
      </div>
    </section>
  );
}
