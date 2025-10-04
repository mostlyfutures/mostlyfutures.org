import { Card, CardContent } from "@/components/ui/card";
import { Coins, TrendingUp, Eye, Zap, BarChart3 } from "lucide-react";

export default function ExchangeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The flagship application: the premier
          </h2>
          <div className="text-4xl sm:text-5xl font-bold text-primary tracking-wider">
            DECENTRALISED
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            exchange
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-card border border-border hover:bg-accent/50 transition-colors duration-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coins className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Low fees</h3>
              <p className="text-muted-foreground text-sm">Zero gas and low fees on all orders.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border hover:bg-accent/50 transition-colors duration-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Up to 40x leverage</h3>
              <p className="text-muted-foreground text-sm">Trade with conviction to maximize capital efficiency.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border hover:bg-accent/50 transition-colors duration-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Transparent</h3>
              <p className="text-muted-foreground text-sm">Fully onchain order book. All trades happen on the MostlyFutures L1.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border hover:bg-accent/50 transition-colors duration-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Seamless</h3>
              <p className="text-muted-foreground text-sm">One-click trading. No wallet approvals to interrupt your flow.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-muted/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-muted-foreground">
                  <BarChart3 className="text-6xl mb-4 mx-auto" />
                  <p className="text-lg">Trading Interface Preview</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
