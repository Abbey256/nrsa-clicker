import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Users, Target } from "lucide-react";

export default function Investment() {
  return (
    <PageLayout
      title="Investment Opportunity"
      subtitle="Join us in building Nigeria's future and transforming Africa"
    >
      <div className="prose prose-lg max-w-none">
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-lg bg-primary text-primary-foreground text-center shadow-medium">
              <DollarSign className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">2000</div>
              <div className="text-lg opacity-90">Seed Capital Goal</div>
            </div>

            <div className="p-8 rounded-lg bg-gold text-gold-foreground text-center shadow-medium">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">20%</div>
              <div className="text-lg opacity-90">Equity Offered</div>
            </div>

            <div className="p-8 rounded-lg bg-success text-success-foreground text-center shadow-medium">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">36 States in Nigeria</div>
              <div className="text-lg opacity-90">Target Market</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6">Investment Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nelbion Group represents a once-in-a-generation opportunity to invest in Nigeria's 
            technological transformation, which will ripple across Africa and impact the world. 
            We're not just building companies—we're building the infrastructure for Nigeria's 
            digital future and Africa's prosperity.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are seeking seed capital of <strong>$2000</strong> in exchange for 
            <strong> 20% equity</strong> in the parent company. This investment will enable us to:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>• Complete formal company registration and legal structure in Nigeria</li>
            <li>• Secure www.nelbion.org domain and establish digital presence</li>
            <li>• Develop and test prototypes across all subsidiary verticals</li>
            <li>• Launch pilot programs across Nigerian states</li>
            <li>• Build core technology infrastructure (blockchain, AI, cloud)</li>
            <li>• Hire initial Nigerian management team and technical staff</li>
            <li>• Execute go-to-market strategy and brand awareness campaigns in Nigeria</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Use of Funds</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Company Registration & Legal (10%)</h3>
                <span className="text-2xl font-bold text-primary">$200</span>
              </div>
              <p className="text-muted-foreground">
                Complete company registration in Nigeria, establish legal entities for subsidiaries, 
                intellectual property protection, and Nigerian compliance framework.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Branding & Digital Presence (8%)</h3>
                <span className="text-2xl font-bold text-primary">$160</span>
              </div>
              <p className="text-muted-foreground">
                Secure domain, professional website development, brand identity, 
                marketing materials, and social media infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Technology Development (40%)</h3>
                <span className="text-2xl font-bold text-primary">$800</span>
              </div>
              <p className="text-muted-foreground">
                Build core blockchain infrastructure, develop NEL Coin, create mobile applications 
                for each subsidiary, AI system development, and cloud infrastructure setup.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Prototype Development (20%)</h3>
                <span className="text-2xl font-bold text-primary">$400</span>
              </div>
              <p className="text-muted-foreground">
                Build working prototypes for wireless electricity, smart farming systems, 
                telemedicine platform, and other key subsidiary offerings.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Operations & Team (15%)</h3>
                <span className="text-2xl font-bold text-primary">$300</span>
              </div>
              <p className="text-muted-foreground">
                Hire core management team, recruit technical staff, establish office space, 
                operational systems, and 6-month runway.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Marketing & Partnerships (7%)</h3>
                <span className="text-2xl font-bold text-primary">$140</span>
              </div>
              <p className="text-muted-foreground">
                Launch marketing campaigns, establish government and NGO partnerships, 
                investor relations, and community engagement programs.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Investment Returns</h2>
          
          <div className="p-8 rounded-lg bg-gradient-subtle border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Multiple Revenue Streams</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nelbion Group offers diversified revenue potential across 11 subsidiaries:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-foreground mb-3">Immediate Revenue (Year 1-5)</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Nelbion FinTech transaction fees</li>
                  <li>• Nelbion Academy course subscriptions</li>
                  <li>• Nelbion Labs consulting services</li>
                  <li>• Nelbion Security contracts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground mb-3">Growth Revenue (Year 5-10)</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Nelbion Energy installations & subscriptions</li>
                  <li>• Nelbion AgriTech marketplace commissions</li>
                  <li>• Nelbion HealthTech telemedicine fees</li>
                  <li>• Nelbion Blockchain licensing</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                10-Year Projections
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Year 1:</strong> Break-even with pilot deployments</li>
                <li>• <strong>Year 2:</strong> $100k revenue across multiple subsidiaries</li>
                <li>• <strong>Year 3:</strong> $1M revenue, expansion to 3 additional countries</li>
                <li>• <strong>Year 4:</strong> $10M revenue, continental presence</li>
                <li>• <strong>Year 5:</strong> $50M revenue, market leadership position</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Invest in Nelbion?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Massive Market Opportunity</h3>
              <p className="text-muted-foreground">
                1.4 billion people across 54 African countries represent an untapped market with 
                growing digital adoption, rising middle class, and urgent need for infrastructure 
                and services.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">First-Mover Advantage</h3>
              <p className="text-muted-foreground">
                Integrated blockchain-based solution ecosystem is unprecedented in Africa. 
                We're not just building products—we're creating a new standard for how 
                African businesses operate.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Diversified Risk</h3>
              <p className="text-muted-foreground">
                11 subsidiaries across multiple sectors means if one vertical faces challenges, 
                others continue generating revenue. We're not betting on one product—we're 
                building an ecosystem.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Ethical Foundation</h3>
              <p className="text-muted-foreground">
                Faith-driven leadership ensures long-term thinking, ethical practices, and 
                stakeholder value over short-term exploitation. This builds trust and lasting 
                partnerships.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Government & NGO Support</h3>
              <p className="text-muted-foreground">
                Our solutions align with UN Sustainable Development Goals and African Union 
                Agenda 2070, positioning us for grants, partnerships, and policy support.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">Social Impact + Profit</h3>
              <p className="text-muted-foreground">
                Investors earn financial returns while transforming lives. Every dollar invested 
                creates jobs, improves communities, and builds Africa's future.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="p-12 rounded-lg gradient-hero text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Vision?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download our comprehensive investment proposal or contact our investor relations 
              team to discuss this opportunity further.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white hover:bg-white/90 text-primary shadow-large px-8"
              >
                Download Full Proposal
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
