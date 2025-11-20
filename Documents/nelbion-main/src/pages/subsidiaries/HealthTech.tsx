import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Activity, Smartphone, Brain, FileText, Zap, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HealthTech() {
  return (
    <PageLayout
      title="Nelbion HealthTech"
      subtitle="Transforming Nigerian Healthcare First, Then Revolutionizing Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Healthcare for All Nigerians, Then All Africans</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion HealthTech leverages AI, blockchain, and wireless power to democratize healthcare in Nigeria first, with proven 
            solutions that will transform Africa. We're building a future where quality medical care is accessible to every Nigerian, 
            regardless of location or economic status, through telemedicine, digital health records, and AI-powered diagnostics.
          </p>
        </section>

        {/* Core Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Healthcare Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Smartphone}
              title="Telemedicine Platform"
              description="Connect patients in remote areas with doctors via video consultations, making specialist care accessible to all."
              impact="Healthcare anywhere, anytime"
            />
            <SubsidiaryCard
              icon={Brain}
              title="AI Diagnosis Assistant"
              description="Machine learning algorithms analyzing symptoms, medical images, and patient history to support accurate, rapid diagnoses."
              impact="95% diagnostic accuracy"
            />
            <SubsidiaryCard
              icon={FileText}
              title="Blockchain Health Records"
              description="Secure, portable medical records accessible to authorized providers across Nigeria first, then Africa, eliminating data silos."
              impact="Patient data sovereignty"
            />
            <SubsidiaryCard
              icon={Zap}
              title="Wireless-Powered Clinics"
              description="Mobile health units and rural clinics powered by Nelbion Energy's wireless electricity, ensuring uninterrupted care."
              impact="24/7 healthcare delivery"
            />
          </div>
        </section>

        {/* Platform Features */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI & Computer Vision</h3>
              <p className="text-muted-foreground">
                Analyzing X-rays, CT scans, and lab results with specialist-level accuracy.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Blockchain Security</h3>
              <p className="text-muted-foreground">
                Immutable, encrypted health records with patient-controlled access.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Hospital className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">IoT Health Monitoring</h3>
              <p className="text-muted-foreground">
                Wearable devices tracking vitals and alerting doctors to emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Programs</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Digital Hospitals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Virtual hospital network connecting rural clinics to urban specialists, enabling complex diagnoses 
                and treatment plans without patient travel.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Health Units</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wireless-powered medical vans bringing healthcare to remote communities, equipped with diagnostic 
                tools and telemedicine capabilities.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Maternal & Child Health</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered monitoring for pregnant mothers and newborns, reducing maternal mortality through 
                early intervention and specialist access.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Pharmacy Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blockchain-verified medication supply chain eliminating counterfeits, with digital prescriptions 
                and home delivery services.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Healthcare Impact by 2030</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M+</div>
              <p className="opacity-90">Patients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000</div>
              <p className="opacity-90">Doctors Connected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="opacity-90">Mobile Clinics</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <p className="opacity-90">Cost Reduction</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Transform Healthcare Access
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
