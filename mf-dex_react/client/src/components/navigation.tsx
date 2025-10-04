import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="text-primary-foreground text-lg" />
              </div>
              <span className="text-xl font-bold text-foreground">MostlyFutures</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/stats" data-testid="link-stats">
                <span className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Stats
                </span>
              </Link>
              <Link href="/docs" data-testid="link-docs">
                <span className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Docs
                </span>
              </Link>
              <Link href="/ecosystem" data-testid="link-ecosystem">
                <span className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Ecosystem
                </span>
              </Link>
              <Link href="/launch-app" data-testid="link-launch-app">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
                  Launch App
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="text-muted-foreground hover:text-primary" />
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/stats" data-testid="link-mobile-stats">
                <span className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Stats
                </span>
              </Link>
              <Link href="/docs" data-testid="link-mobile-docs">
                <span className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Docs
                </span>
              </Link>
              <Link href="/ecosystem" data-testid="link-mobile-ecosystem">
                <span className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Ecosystem
                </span>
              </Link>
              <Link href="/launch-app" data-testid="link-mobile-launch-app">
                <Button className="mx-3 mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Launch App
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
