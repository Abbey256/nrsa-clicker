import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Link, Shield, Coins, FileCheck, Vote, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blockchain() {
  return (
    <PageLayout
      title="Nelbion Blockchain"
      subtitle="Building Trust and Transparency in Nigeria First, Then Across Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion Blockchain is pioneering the use of distributed ledger technology to solve Nigeria's most 
            pressing challenges: corruption, lack of transparency, and financial exclusion. Through blockchain 
            innovation and NEL Coin, we're creating a foundation of trust for Nigeria's digital future and Africa's transformation.
          </p>
        </section>

        {/* Core Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Core Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Shield}
              title="Transparency Platform"
              description="Immutable record-keeping for government spending, public projects, and resource allocation, ensuring accountability."
              impact="Zero-tolerance for corruption"
            />
            <SubsidiaryCard
              icon={Coins}
              title="NEL Coin Ecosystem"
              description="Native cryptocurrency powering all Nelbion services in Nigeria first, enabling fast, low-cost transactions that will scale across Africa."
              impact="10M+ users targeted by 2045"
            />
            <SubsidiaryCard
              icon={FileCheck}
              title="Smart Contracts"
              description="Automated, trustless agreements for business, agriculture, real estate, and government services."
              impact="Reducing fraud by 95%"
            />
            <SubsidiaryCard
              icon={Vote}
              title="Digital Governance"
              description="Blockchain-based voting systems, citizen verification, and transparent public service delivery."
              impact="Democratic accountability"
            />
          </div>
        </section>

        {/* NEL Coin */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">NEL Coin: Nigeria's Currency of Trust, Africa's Future</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              NEL Coin is the native digital currency of the Nelbion ecosystem, designed specifically for Nigerian and African 
              economic realities. Starting in Nigeria, it powers payments across all Nelbion services while providing a stable, secure 
              store of value that will expand across Africa.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-6 bg-gradient-subtle rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">Instant</div>
                <p className="text-sm">Transaction Speed</p>
              </div>
              <div className="text-center p-6 bg-gradient-subtle rounded-lg">
                <div className="text-3xl font-bold text-gold mb-2">Low Cost</div>
                <p className="text-sm">Transaction Fees</p>
              </div>
              <div className="text-center p-6 bg-gradient-subtle rounded-lg">
                <div className="text-3xl font-bold text-success mb-2">Secure</div>
                <p className="text-sm">Blockchain Protected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Real-World Applications</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Government Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every government transaction recorded on-chain, accessible to citizens in real-time. Budget 
                allocations, contract awards, and public spending become fully transparent and auditable.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Supply Chain Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track agricultural products, pharmaceuticals, and goods from source to consumer, eliminating 
                counterfeits and ensuring quality standards.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Financial Inclusion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Providing banking services to the unbanked through blockchain-based digital wallets, accessible 
                via basic mobile phones.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Land Registry</h3>
              <p className="text-muted-foreground leading-relaxed">
                Immutable property records preventing land grabbing and disputes, securing inheritance rights 
                and enabling property-backed lending.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-hero text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Blockchain Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of Africa's transparent, trusted digital future
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Learn More About NEL Coin
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
