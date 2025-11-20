import { PageLayout } from "@/components/PageLayout";
import { Lightbulb, Zap, Battery, Sun } from "lucide-react";

export default function Energy() {
  return (
    <PageLayout
      title="Nelbion Energy"
      subtitle="Powering Nigeria First, Then Africa and the World with Wireless Electricity"
    >
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <div className="p-8 rounded-lg bg-primary/5 border-l-4 border-primary mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3 mt-0">Impact Statement</h2>
            <p className="text-xl text-foreground font-semibold mb-0">
              Bringing clean, affordable, wireless electricity to millions of Nigerians currently 
              without reliable power—proven solutions that will then transform Africa and impact the world.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nigeria faces severe power challenges with millions lacking consistent electricity access. Traditional 
            grid expansion is prohibitively expensive, costing $1,000-$2,000 per household connection. 
            Nigerian businesses lose billions annually due to power outages, and households 
            spend 20-30% of income on dirty, inefficient energy alternatives like generators and candles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-0">Wireless Power Transmission</h3>
              </div>
              <p className="text-muted-foreground">
                Revolutionary wireless electricity technology that transmits power over distances 
                without cables, enabling rapid deployment to remote and underserved areas.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-0">Solar-Hybrid Systems</h3>
              </div>
              <p className="text-muted-foreground">
                Combining solar energy with advanced storage and wireless distribution for 
                24/7 clean power availability regardless of weather conditions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-0">Smart Energy Storage</h3>
              </div>
              <p className="text-muted-foreground">
                Next-generation battery systems with AI-powered load management ensuring 
                optimal energy distribution and zero waste.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-0">Pay-As-You-Go Model</h3>
              </div>
              <p className="text-muted-foreground">
                Affordable mobile money-based payments allowing households to purchase 
                electricity in small increments that fit their budgets.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-success text-xl">✓</span>
              <span><strong>Zero grid infrastructure required</strong> - Deploy power systems in days, not years</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-xl">✓</span>
              <span><strong>70% cheaper than traditional electrification</strong> - Making power accessible to low-income households</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-xl">✓</span>
              <span><strong>100% renewable energy</strong> - Eliminating carbon emissions and fossil fuel dependence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-xl">✓</span>
              <span><strong>Blockchain-verified energy trading</strong> - Transparent pricing and peer-to-peer energy sharing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-xl">✓</span>
              <span><strong>AI-powered demand prediction</strong> - Optimizing energy distribution and reducing waste</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-xl">✓</span>
              <span><strong>Mobile app control</strong> - Users monitor consumption and manage payments from smartphones</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Impact Metrics</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-success/10 border border-success/20 text-center">
              <div className="text-4xl font-bold text-success mb-2">Coming Soon</div>
              <div className="text-muted-foreground">Households Targeted (Year 5)</div>
            </div>
            
            <div className="p-6 rounded-lg bg-success/10 border border-success/20 text-center">
              <div className="text-4xl font-bold text-success mb-2">Coming Soon</div>
              <div className="text-muted-foreground">Lives Transformed</div>
            </div>
            
            <div className="p-6 rounded-lg bg-success/10 border border-success/20 text-center">
              <div className="text-4xl font-bold text-success mb-2">Coming Soon</div>
              <div className="text-muted-foreground">Annual Savings for Communities</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Deployment Strategy</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-3">Phase 1: Pilot (Year 1-5)</h3>
              <p className="text-muted-foreground">
                Deploy 100 wireless power units in 5 rural Sierra Leone communities. Test 
                technology, refine business model, gather user feedback, and demonstrate viability.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-3">Phase 2: Scale (Year 5-7)</h3>
              <p className="text-muted-foreground">
                Expand to 50,000 units across Nigeria and neighboring countries. Establish 
                partnerships with governments and NGOs for subsidized installations.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-3">Phase 3: Continental (Year 7-10)</h3>
              <p className="text-muted-foreground">
                Reach 1 million households across 10 African countries. Become the leading 
                alternative energy provider on the continent.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
