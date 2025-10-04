import { Card, CardContent } from "@/components/ui/card";

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-block-time">
                0.07
              </div>
              <div className="text-muted-foreground">Block time (seconds)</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-users">
                932,361
              </div>
              <div className="text-muted-foreground">Users</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-max-tps">
                200,000
              </div>
              <div className="text-muted-foreground">Max TPS</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-daily-volume">
                $13B
              </div>
              <div className="text-muted-foreground">Daily volume</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
