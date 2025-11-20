import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Brain, Sparkles, GraduationCap, Building2, Languages, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AI() {
  return (
    <PageLayout
      title="Nelbion AI"
      subtitle="Building Nigeria's Most Advanced AI First, Then Transforming Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nigeria-First, Africa-Centered Artificial Intelligence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion AI is developing artificial intelligence systems specifically designed for Nigerian and African contexts, 
            languages, and challenges. Starting in Nigeria, we're building AI that understands Nigerian culture, solves Nigerian problems first, 
            then empowers African innovation across education, business, governance, and healthcare.
          </p>
        </section>

        {/* Core Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">AI Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Languages}
              title="Multilingual AI"
              description="Natural language processing supporting Nigerian languages first, then expanding to all major African languages, enabling voice assistants and translation services."
              impact="2,000+ languages supported"
            />
            <SubsidiaryCard
              icon={Brain}
              title="Business Intelligence"
              description="AI-powered analytics, forecasting, and decision support helping Nigerian businesses first, then African businesses compete globally."
              impact="10x productivity gains"
            />
            <SubsidiaryCard
              icon={GraduationCap}
              title="Education AI"
              description="Personalized learning assistants adapting to each student's pace, learning style, and language preferences."
              impact="Democratizing education"
            />
            <SubsidiaryCard
              icon={Building2}
              title="Government AI"
              description="AI systems for policy analysis, resource optimization, and citizen service delivery improving governance efficiency."
              impact="Data-driven decisions"
            />
          </div>
        </section>

        {/* Research Focus */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Research Focus Areas</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">African Language Models</h3>
                <p className="text-muted-foreground">
                  Training large language models on African languages, dialects, and cultural contexts for accurate, 
                  culturally-aware AI systems.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Computer Vision for Africa</h3>
                <p className="text-muted-foreground">
                  Image recognition trained on African faces, landscapes, crops, and infrastructure for applications 
                  in agriculture, healthcare, and security.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ethical AI Development</h3>
                <p className="text-muted-foreground">
                  Ensuring AI systems respect African values, protect privacy, and avoid bias - building trust 
                  through transparency and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">AI Applications</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent tutoring systems providing personalized instruction in students' native languages, 
                adapting to learning pace and style while tracking progress.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare Diagnostics</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI analyzing medical images, symptoms, and patient histories to support doctors with accurate 
                diagnoses and treatment recommendations.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Agricultural Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer vision and machine learning predicting crop yields, detecting diseases, and optimizing 
                farming practices for maximum productivity.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Business Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI assistants handling customer service, data analysis, inventory management, and financial 
                forecasting for African businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Development Center */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Nelbion AI Research Center</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            World-class AI research facility in Africa, attracting top global talent while training the next 
            generation of African AI researchers, engineers, and innovators.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">Coming Soon</div>
              <p className="text-sm text-muted-foreground">AI Researchers</p>
            </div>
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <div className="text-3xl font-bold text-gold mb-2">Coming Soon</div>
              <p className="text-sm text-muted-foreground">Research Projects</p>
            </div>
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <div className="text-3xl font-bold text-success mb-2">Coming Soon</div>
              <p className="text-sm text-muted-foreground">Partner Universities</p>
            </div>
          </div>
        </section>

        {/* Impact Vision */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4 text-center">AI Impact Vision</h2>
          <p className="text-xl mb-8 text-center opacity-90">
            Making Africa the global leader in ethical, culturally-aware artificial intelligence
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100M+</div>
              <p className="opacity-90">AI-Powered Services Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <p className="opacity-90">Languages Supported</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Join Our AI Revolution
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
