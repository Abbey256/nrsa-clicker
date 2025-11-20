import { PageLayout } from "@/components/PageLayout";

export default function About() {
  return (
    <PageLayout
      title="About Nelbion Group"
      subtitle="Faith-driven innovation solving Nigeria's challenges, transforming Africa, impacting the world"
    >
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Origin</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nelbion Group was born from a divine calling—a vision to transform Nigeria first, 
            then Africa, and ultimately impact the world through faith-guided innovation. Founded 
            by a visionary Nigerian entrepreneur who witnessed firsthand the devastating impact of 
            systemic failures in Nigeria, Nelbion represents more than a business venture; it's a 
            movement of hope, restoration, and sustainable development starting from home.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that Nigeria's transformation requires more than good intentions—it demands 
            systematic, technology-driven solutions rooted in integrity, transparency, and faith. 
            Nelbion Group exists to be that catalyst for change, starting from Nigeria and 
            expanding globally.
          </p>
        </section>

        <section className="mb-12 p-8 rounded-lg bg-earth-light border border-earth/20">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-foreground font-semibold mb-4">
            To leverage cutting-edge technology—blockchain, AI, renewable energy, and digital 
            infrastructure—to solve Nigeria's most critical challenges first, creating proven 
            solutions that will transform Africa and impact the world.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are building an ecosystem of interconnected solutions that address energy poverty, 
            food insecurity, healthcare gaps, educational barriers, financial exclusion, and 
            governance challenges—all while maintaining the highest standards of ethical conduct 
            and spiritual integrity, starting from our homeland Nigeria.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Nelbion Was Created</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-3">Lack of Transparency</h3>
              <p className="text-muted-foreground">
                Africa suffers from endemic corruption and opacity in governance, business, and 
                institutions. Nelbion Blockchain brings radical transparency through distributed 
                ledger technology, making every transaction traceable and accountable.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-3">Energy Poverty</h3>
              <p className="text-muted-foreground">
                600 million Africans lack access to electricity. Nelbion Energy is pioneering 
                wireless electricity and sustainable power solutions that can reach even the most 
                remote communities without expensive grid infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-3">Food Insecurity</h3>
              <p className="text-muted-foreground">
                Post-harvest losses reach 40% in some African regions. Nelbion AgriTech provides 
                smart storage, blockchain-verified supply chains, and direct farmer-to-consumer 
                markets that reduce waste and increase farmer income.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-3">Poor Governance</h3>
              <p className="text-muted-foreground">
                Weak institutions and lack of accountability plague many African nations. Our 
                blockchain-based governance solutions create immutable records of decisions, 
                resource allocation, and public spending.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-3">Healthcare Gaps</h3>
              <p className="text-muted-foreground">
                Limited access to quality healthcare costs countless lives. Nelbion HealthTech 
                brings AI-powered diagnostics, telemedicine, and digital health records to 
                underserved populations.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-3">Financial Exclusion</h3>
              <p className="text-muted-foreground">
                Millions remain unbanked and unable to access credit. Nelbion FinTech provides 
                mobile money, smart lending, and digital wallets that bring financial services to 
                everyone with a phone.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-primary/5 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Faith</h3>
              <p className="text-muted-foreground">
                We acknowledge God as our guide and source of wisdom in all endeavors.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Absolute honesty and transparency in every transaction and relationship.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging cutting-edge technology to solve Africa's toughest challenges.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Measuring success by the lives improved and communities transformed.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision for Africa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We envision an Africa where every person has access to clean energy, nutritious food, 
            quality healthcare, excellent education, and economic opportunity. An Africa where 
            governance is transparent, business is ethical, and innovation flourishes. An Africa 
            that leads the world in sustainable development and technological advancement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This vision is ambitious, but with faith, dedication, and the right partnerships, 
            it is achievable. Nelbion Group is building the infrastructure—both technological 
            and social—to make this vision a reality within our generation.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
