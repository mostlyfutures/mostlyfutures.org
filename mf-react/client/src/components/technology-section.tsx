export default function TechnologySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The <span className="text-primary">MostlyFutures</span> Stack
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Perps and spot order books are two flagship applications built on MostlyCore. But they are just the tip of the iceberg. 
            User-built applications on the MostlyEVM interact seamlessly with MostlyCore to let anyone use apps, launch tokens, and trade, 
            all in one place. High performance applications are built natively. These financial primitives on MostlyCore are accessible 
            to user-built applications on the general-purpose MostlyEVM, which supports familiar Ethereum tooling.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The MostlyEVM and MostlyCore exist as one unified state, unlocking applications that simultaneously require performance, 
            liquidity, and programmability. The foundation of the MostlyFutures blockchain is MostlyBFT consensus, which lets a 
            disparate set of nodes agree on the state of the world.
          </p>
        </div>
      </div>
    </section>
  );
}
