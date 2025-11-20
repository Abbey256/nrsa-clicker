import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Shield, Lock, Eye, AlertTriangle, Fingerprint, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Security() {
  return (
    <PageLayout
      title="Nelbion Security"
      subtitle="Protecting Nigeria's Digital Future First, Then Africa's"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Securing Nigeria's Digital Transformation First</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion Security provides comprehensive cybersecurity and physical security solutions protecting 
            Nigerian individuals, businesses, and government first, then expanding across Africa. Using AI, blockchain, and advanced threat 
            detection, we're building a secure foundation for Nigeria's digital economy and Africa's future.
          </p>
        </section>

        {/* Core Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Security Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Shield}
              title="Cybersecurity Platform"
              description="AI-powered threat detection, real-time monitoring, and automated response protecting networks, applications, and data."
              impact="99.9% threat prevention"
            />
            <SubsidiaryCard
              icon={Lock}
              title="Blockchain Security"
              description="Immutable audit trails, smart contract security analysis, and decentralized identity verification preventing fraud."
              impact="Zero unauthorized access"
            />
            <SubsidiaryCard
              icon={Fingerprint}
              title="Biometric Authentication"
              description="Facial recognition, fingerprint, and voice authentication providing secure, convenient access control."
              impact="Passwordless security"
            />
            <SubsidiaryCard
              icon={Network}
              title="Infrastructure Protection"
              description="Securing critical infrastructure including power grids, communication networks, and financial systems."
              impact="National security enabled"
            />
          </div>
        </section>

        {/* Security Services */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Security Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">24/7 Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Security operations center monitoring threats across Nigeria first, then Africa in real-time
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Incident Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Rapid response teams addressing security breaches and minimizing damage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="h-4 w-4 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Penetration Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Ethical hackers testing systems to identify vulnerabilities before attackers do
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Security Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Educating employees and users about cybersecurity best practices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Fingerprint className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Identity Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Blockchain-based digital identity preventing impersonation and fraud
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Network className="h-4 w-4 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Compliance Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring organizations meet African and international security standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Detection */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">AI-Powered Threat Detection</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Predictive Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Machine learning algorithms analyzing patterns across Africa to predict and prevent cyber attacks 
                before they occur, staying ahead of evolving threats.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Automated Response</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI systems automatically isolating threats, blocking attacks, and initiating countermeasures 
                within milliseconds of detection.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Threat Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sharing security intelligence across the Nelbion network, creating a collective defense against 
                cyber threats targeting African organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Physical Security */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Physical Security Integration</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Beyond cybersecurity, we provide integrated physical security solutions for Nelbion infrastructure, 
            smart cities, and partner organizations using AI surveillance and blockchain access control.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Smart Surveillance</h3>
              <p className="text-sm text-muted-foreground">AI-powered cameras with facial recognition and behavior analysis</p>
            </div>
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Access Control</h3>
              <p className="text-sm text-muted-foreground">Blockchain-verified credentials and biometric authentication</p>
            </div>
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Emergency Response</h3>
              <p className="text-sm text-muted-foreground">Rapid alert systems and coordinated security response</p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Impact by 2030</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="opacity-90">Organizations Protected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100M</div>
              <p className="opacity-90">Users Secured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="opacity-90">Threat Prevention Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Security Monitoring</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Secure Your Infrastructure
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
