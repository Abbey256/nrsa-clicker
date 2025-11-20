import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Building, Car, Home, Zap, MapPin, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Infrastructure() {
  return (
    <PageLayout
      title="Nelbion Infrastructure"
      subtitle="Building Nigeria's Smart Cities First, Then Transforming Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Smart Cities, Bright Future</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion Infrastructure is reimagining Nigeria's urban landscape first through intelligent design, sustainable 
            technology, and wireless power. We're building smart Nigerian cities that combine modern infrastructure with 
            Nigerian values, creating proven models that will transform Africa's urban future.
          </p>
        </section>

        {/* Core Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Infrastructure Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Building}
              title="Smart Buildings"
              description="Wireless-powered structures with AI-controlled energy management, integrated security, and blockchain-based property management."
              impact="80% energy savings"
            />
            <SubsidiaryCard
              icon={Car}
              title="AI Transport Systems"
              description="Intelligent traffic management, autonomous vehicle readiness, and integrated public transport networks reducing congestion."
              impact="60% faster commutes"
            />
            <SubsidiaryCard
              icon={MapPin}
              title="Blockchain Land Registry"
              description="Immutable property records preventing disputes, securing ownership rights, and enabling transparent urban planning."
              impact="Zero land disputes"
            />
            <SubsidiaryCard
              icon={Zap}
              title="Wireless City Power"
              description="District-wide wireless electricity networks eliminating power cables, reducing theft, and ensuring 24/7 reliable power."
              impact="100% uptime guaranteed"
            />
          </div>
        </section>

        {/* Smart City Features */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Smart City Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">IoT Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                City-wide sensor network monitoring everything from air quality to traffic flow.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Smart Grids</h3>
              <p className="text-sm text-muted-foreground">
                AI-optimized power distribution adapting to real-time demand.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Home className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Green Spaces</h3>
              <p className="text-sm text-muted-foreground">
                Integrated parks and urban forests with smart irrigation systems.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">EV Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Wireless charging stations and autonomous vehicle lanes.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Building className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Digital Twins</h3>
              <p className="text-sm text-muted-foreground">
                Virtual city replicas for planning, simulation, and optimization.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Public Services</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain-based citizen services with transparent delivery tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Flagship Projects</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Nelbion Smart City Prototype</h3>
              <p className="text-muted-foreground leading-relaxed">
                A fully integrated smart city development demonstrating wireless power, AI transport, blockchain 
                governance, and sustainable living - Africa's model city for the 21st century.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Urban Retrofit Program</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transforming existing African cities with smart technology overlays - traffic AI, wireless power 
                zones, and digital service platforms without complete rebuilding.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Affordable Smart Housing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mass housing developments with integrated technology, wireless power, and community facilities - 
                making modern living accessible to middle-income Africans.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Infrastructure Impact by 2035</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10</div>
              <p className="opacity-90">Smart Cities Built</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5M</div>
              <p className="opacity-90">Housing Units</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="opacity-90">Wireless Powered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M</div>
              <p className="opacity-90">Residents Served</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Build the Future With Us
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
