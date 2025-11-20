import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { FlaskConical, Code, Rocket, Cpu, TestTube, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Labs() {
  return (
    <PageLayout
      title="Nelbion Labs"
      subtitle="The Innovation Engine Building Nigeria's Future, Then Africa's"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Where Innovation Happens</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion Labs is the research and development hub creating the technologies, applications, and systems 
            that power the entire Nelbion ecosystem. From wireless power transmission to blockchain platforms, 
            we turn visionary ideas into working solutions that transform Nigeria first, then Africa and the world.
          </p>
        </section>

        {/* Core Functions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Code}
              title="Software Development"
              description="Building mobile apps, web platforms, and backend systems for all Nelbion subsidiaries with focus on Nigerian user needs first, then African expansion."
              impact="100+ applications planned"
            />
            <SubsidiaryCard
              icon={Cpu}
              title="Hardware Innovation"
              description="Developing wireless power receivers, IoT sensors, and specialized devices for Nigerian infrastructure and agriculture first, then scaling across Africa."
              impact="Patent-pending technologies"
            />
            <SubsidiaryCard
              icon={TestTube}
              title="Research & Prototyping"
              description="Conducting cutting-edge research in energy, AI, blockchain, and sustainable technology, turning concepts into prototypes."
              impact="50+ active research projects"
            />
            <SubsidiaryCard
              icon={Rocket}
              title="Product Launch"
              description="Taking innovations from concept to market, ensuring quality, scalability, and real-world effectiveness."
              impact="Rapid deployment pipeline"
            />
          </div>
        </section>

        {/* Key Projects */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Current Projects</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FlaskConical className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Wireless Power Transmission</h3>
                <p className="text-muted-foreground">
                  Advanced research into long-range wireless electricity transmission, developing transmitters, 
                  receivers, and safety protocols for large-scale deployment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Code className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Nelbion Super App</h3>
                <p className="text-muted-foreground">
                  Unified mobile application integrating all Nelbion services - payments, energy management, 
                  education, healthcare, and agriculture in one seamless platform.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Boxes className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Blockchain Infrastructure</h3>
                <p className="text-muted-foreground">
                  Building the core blockchain platform, NEL Coin cryptocurrency, and smart contract systems 
                  powering transparency across the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Innovation Pipeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TestTube className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">
                Exploring new technologies and solving fundamental challenges
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Prototype</h3>
              <p className="text-sm text-muted-foreground">
                Building working models and testing core functionality
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Develop</h3>
              <p className="text-sm text-muted-foreground">
                Full-scale development and integration with ecosystem
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Deploy</h3>
              <p className="text-sm text-muted-foreground">
                Launch, monitor, and continuously improve products
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Mobile Development</h3>
              <p className="text-sm text-muted-foreground">
                React Native, Flutter, native iOS/Android for cross-platform applications
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Backend Systems</h3>
              <p className="text-sm text-muted-foreground">
                Node.js, Python, blockchain nodes, distributed databases
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">AI & Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                TensorFlow, PyTorch, custom models for African contexts
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Labs Impact by 2030</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="opacity-90">Products Launched</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="opacity-90">Engineers & Scientists</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="opacity-90">Patents Filed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$10M</div>
              <p className="opacity-90">R&D Investment</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Join Our Innovation Team
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
