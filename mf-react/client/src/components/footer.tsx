import { TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="text-primary-foreground text-xl" />
            </div>
            <span className="text-2xl font-bold text-foreground">MostlyFutures</span>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground mb-8">
          <p className="text-lg mb-4">2025</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#" data-testid="link-terms">
              <span className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </span>
            </Link>
            <Link href="#" data-testid="link-privacy">
              <span className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </span>
            </Link>
            <Link href="#" data-testid="link-genesis">
              <span className="hover:text-primary transition-colors duration-200">
                Genesis Event Terms
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
