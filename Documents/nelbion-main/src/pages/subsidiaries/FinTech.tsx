import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Wallet, Smartphone, TrendingUp, Users, Shield, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinTech() {
  return (
    <PageLayout
      title="Nelbion FinTech"
      subtitle="Democratizing Financial Services in Nigeria First, Then Across Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Banking for Every Nigerian, Then Every African</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion FinTech is breaking down financial barriers in Nigeria first, creating proven solutions that will scale across Africa. 
            Using blockchain technology and mobile-first solutions, we're bringing banking, payments, lending, and financial education to 
            millions of unbanked Nigerians first, then expanding to create economic opportunity across Africa.
          </p>
        </section>

        {/* Core Services */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Core Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Wallet}
              title="Digital Wallets"
              description="Secure, blockchain-powered mobile wallets accessible via feature phones, enabling instant payments and savings for everyone."
              impact="Zero bank account required"
            />
            <SubsidiaryCard
              icon={TrendingUp}
              title="Smart Lending"
              description="AI-driven credit scoring using alternative data, providing microloans to entrepreneurs and smallholder farmers."
              impact="Financial inclusion for 100M+"
            />
            <SubsidiaryCard
              icon={Coins}
              title="NEL Pay"
              description="Instant, low-cost payment system powered by NEL Coin, enabling peer-to-peer transfers, bill payments, and merchant transactions."
              impact="Transactions in seconds"
            />
            <SubsidiaryCard
              icon={Users}
              title="Youth Financial Literacy"
              description="Free digital courses teaching budgeting, saving, investing, and entrepreneurship to Nigerian youth first, then Africa's youth."
              impact="Empowering next generation"
            />
          </div>
        </section>

        {/* Platform Features */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Platform Features</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Smartphone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">USSD & App Access</h3>
                <p className="text-muted-foreground">
                  Works on any mobile phone - from basic feature phones to smartphones, ensuring universal accessibility.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Blockchain Security</h3>
                <p className="text-muted-foreground">
                  Every transaction secured by blockchain technology, protecting users from fraud and ensuring transparency.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Alternative Credit Scoring</h3>
                <p className="text-muted-foreground">
                  AI analyzes mobile money history, social connections, and business patterns to provide credit to the traditionally excluded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Real-World Impact</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Rural Entrepreneurs</h3>
              <p className="text-muted-foreground leading-relaxed">
                A farmer in rural Kenya uses Nelbion FinTech to receive instant payments for crops, access microloans 
                for seeds, and save for children's education - all from a basic mobile phone.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Youth Digital Banking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Young Africans open their first digital wallet in minutes, learning financial management through 
                gamified education while building credit history.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Cross-Border Remittances</h3>
              <p className="text-muted-foreground leading-relaxed">
                Families receive money from abroad instantly at 1/10th the cost of traditional services, with full 
                blockchain transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Projected Impact by 2030</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100M+</div>
              <p className="opacity-90">Wallet Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$50B</div>
              <p className="opacity-90">Transaction Volume</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5M</div>
              <p className="opacity-90">Loans Disbursed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M</div>
              <p className="opacity-90">Youth Trained</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Start Your Financial Journey
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
