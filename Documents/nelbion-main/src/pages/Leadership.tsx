import { PageLayout } from "@/components/PageLayout";
import { Users, Clock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Leadership() {
  return (
    <PageLayout
      title="Leadership"
      subtitle="Faith-driven visionaries building Nigeria's future"
    >
      <div className="max-w-4xl mx-auto">
        <section className="text-center py-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Clock className="h-16 w-16 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">Coming Soon</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're assembling a world-class leadership team of Nigerian innovators, 
            technologists, and faith-driven visionaries to lead Africa's transformation.
          </p>

          <Card className="p-8 bg-gradient-subtle border-border/50 text-left mt-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gold/10 flex-shrink-0">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">The Visionary Founder</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nelbion Group was founded by a faith-driven Nigerian entrepreneur with a divine 
                  calling to solve Nigeria's systemic challenges through technology and innovation. 
                  Starting from Nigeria, the vision extends to transform Africa and impact the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our founder believes in servant leadership, ethical excellence, and the power 
                  of technology to uplift communities while maintaining transparency and accountability 
                  through blockchain innovation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-subtle border-border/50 text-left mt-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Building Our Team</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're actively recruiting exceptional Nigerian talent across all disciplines:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technology Leaders: Engineers, AI Specialists, Blockchain Developers</li>
                  <li>• Business Leaders: Operations, Finance, Strategy Experts</li>
                  <li>• Impact Leaders: Community Development, Education, Healthcare</li>
                  <li>• Innovation Leaders: Research Scientists, Product Designers, UX Experts</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-12">
          <div className="p-12 rounded-lg gradient-hero text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Leadership</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              If you're a faith-driven Nigerian leader passionate about transforming our nation 
              through innovation, we want to hear from you.
            </p>
            <a 
              href="mailto:nelbiongroup@gmail.com"
              className="inline-block mt-6 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
