import { Button } from "@/components/ui/button";

export default function CommunitySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          No investors. No paid market makers. No fees to any company.
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
          Community first.
        </h3>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Anyone can own, govern, and secure MostlyFutures through MOSTLY, the network's native token.
        </p>
        
        <p className="text-xl font-semibold text-foreground mb-8">
          Own a piece of MostlyFutures today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            data-testid="button-community-start-trading"
          >
            Start Trading
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-105"
            data-testid="button-community-start-building"
          >
            Start Building
          </Button>
        </div>
      </div>
    </section>
  );
}
