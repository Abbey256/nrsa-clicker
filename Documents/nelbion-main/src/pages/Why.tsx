import { PageLayout } from "@/components/PageLayout";
import { AlertCircle, TrendingUp } from "lucide-react";

export default function Why() {
  return (
    <PageLayout
      title="Our Why"
      subtitle="Understanding Nigeria's challenges and Nelbion's Nigeria-first, Africa-wide, globally-impactful solutions"
    >
      <div className="prose prose-lg max-w-none">
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 mt-0">Nigeria's Challenges</h2>
              <p className="text-muted-foreground leading-relaxed">
                Despite abundant natural resources and human potential, Nigeria faces persistent 
                systemic challenges that prevent the nation from reaching its full potential. 
                These are not isolated problems—they are interconnected crises requiring 
                comprehensive, technology-driven solutions. By solving Nigeria's challenges first, 
                we create proven models that can transform all of Africa and impact the world.
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-12">
            <div className="p-8 rounded-lg bg-destructive/5 border-l-4 border-destructive">
              <h3 className="text-2xl font-bold text-foreground mb-4">Energy Crisis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Millions of Nigerians without consistent access to electricity</li>
                <li>• Unreliable power grids causing billions in annual economic losses</li>
                <li>• Over-reliance on expensive diesel generators by businesses and homes</li>
                <li>• Limited reach of traditional grid infrastructure to rural communities</li>
                <li>• High cost of energy stifling SME growth and industrial development</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-destructive/5 border-l-4 border-destructive">
              <h3 className="text-2xl font-bold text-foreground mb-4">Food Insecurity</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 30-40% post-harvest food loss in Nigeria due to poor storage</li>
                <li>• Nigerian farmers receiving only 20% of final retail price</li>
                <li>• Climate change threatening traditional Nigerian farming methods</li>
                <li>• Limited access to fair markets and transparent pricing</li>
                <li>• Millions of Nigerians facing food insecurity despite rich agricultural land</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-destructive/5 border-l-4 border-destructive">
              <h3 className="text-2xl font-bold text-foreground mb-4">Corruption & Opacity</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Billions lost annually to corruption and illicit financial flows in Nigeria</li>
                <li>• Lack of transparency in government spending and public contracts</li>
                <li>• Weak accountability mechanisms in public and private institutions</li>
                <li>• Widespread public mistrust in governance and business transactions</li>
                <li>• Difficulty tracking development funds and aid distribution</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-destructive/5 border-l-4 border-destructive">
              <h3 className="text-2xl font-bold text-foreground mb-4">Healthcare Access</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Severe shortage of doctors and healthcare workers in Nigeria</li>
                <li>• Limited diagnostic and treatment facilities outside major cities</li>
                <li>• Poor health record keeping and fragmented patient data systems</li>
                <li>• High maternal and infant mortality rates, especially in rural areas</li>
                <li>• Preventable diseases causing massive health and economic burden</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-destructive/5 border-l-4 border-destructive">
              <h3 className="text-2xl font-bold text-foreground mb-4">Financial Exclusion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Millions of Nigerians remain unbanked or underbanked</li>
                <li>• Limited access to credit for Nigerian small businesses and entrepreneurs</li>
                <li>• High transaction costs for remittances and digital payments</li>
                <li>• Lack of financial literacy and inadequate digital payment infrastructure</li>
                <li>• Women and rural Nigerian communities most affected by exclusion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp className="h-8 w-8 text-success flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 mt-0">Nelbion's System-Based Solutions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nelbion Group doesn't address these challenges in isolation. We've built an 
                integrated ecosystem of technological solutions that work together to create 
                lasting, systemic change in Nigeria first, then scaling across Africa and 
                impacting the world.
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-12">
            <div className="p-8 rounded-lg bg-success/5 border-l-4 border-success">
              <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Technology Platform</h3>
              <p className="text-muted-foreground mb-4">
                All Nelbion subsidiaries operate on a unified technological foundation:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Blockchain backbone</strong> ensuring transparency across all operations</li>
                <li>• <strong>NEL Coin</strong> as native currency for seamless transactions</li>
                <li>• <strong>AI integration</strong> for predictive analytics and optimization</li>
                <li>• <strong>Cloud infrastructure</strong> enabling scalability and reliability</li>
                <li>• <strong>Mobile-first design</strong> reaching users where they are</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-success/5 border-l-4 border-success">
              <h3 className="text-2xl font-bold text-foreground mb-4">Circular Value Creation</h3>
              <p className="text-muted-foreground mb-4">
                Our subsidiaries create synergistic value loops:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Nelbion Energy powers Nelbion Infrastructure smart buildings</li>
                <li>• Nelbion AgriTech farmers use Nelbion FinTech for payments and loans</li>
                <li>• Nelbion Blockchain verifies all subsidiary transactions</li>
                <li>• Nelbion Academy trains workers for all subsidiary operations</li>
                <li>• Nelbion Foundation channels profits back to community development</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-success/5 border-l-4 border-success">
              <h3 className="text-2xl font-bold text-foreground mb-4">Nigeria-First Scalable Impact Model</h3>
              <p className="text-muted-foreground mb-4">
                Start in Nigeria, prove the model, then scale across Africa and globally:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Phase 1:</strong> Develop and deploy all solutions in Nigeria first</li>
                <li>• <strong>Phase 2:</strong> Prove model success across Nigerian states</li>
                <li>• <strong>Phase 3:</strong> Expand to West African countries (ECOWAS)</li>
                <li>• <strong>Phase 4:</strong> Continental rollout across Africa</li>
                <li>• <strong>Phase 5:</strong> Global expansion as proven African innovation leaders</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-success/5 border-l-4 border-success">
              <h3 className="text-2xl font-bold text-foreground mb-4">Faith-Driven Excellence</h3>
              <p className="text-muted-foreground mb-4">
                Our faith foundation ensures:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ethical decision-making at every level</li>
                <li>• Long-term thinking over short-term profits</li>
                <li>• Servant leadership prioritizing stakeholder welfare</li>
                <li>• Stewardship of resources with accountability to God and community</li>
                <li>• Hope and perseverance through challenges</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="p-12 rounded-lg gradient-hero text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Result</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              A transformed Nigeria first, leading to a transformed Africa, and ultimately impacting 
              the world—where technology serves humanity, transparency replaces corruption, and every 
              person has access to the tools they need to thrive. Where faith and innovation work hand 
              in hand to create lasting prosperity for current and future generations, starting from 
              Nigeria.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
