import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Heart, Zap, GraduationCap, Users, Home, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Foundation() {
  return (
    <PageLayout
      title="Nelbion Foundation"
      subtitle="Empowering Nigerian Communities First, Then Transforming Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion Foundation is the social impact arm of Nelbion Group, dedicated to transforming Nigerian lives first, 
            with proven models that will scale across Africa. We believe that access to electricity, education, clean water, and 
            community empowerment are fundamental rights that drive Nigeria's progress and Africa's future.
          </p>
        </section>

        {/* Core Focus Areas */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Core Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Zap}
              title="Energy Access"
              description="Providing wireless electricity solutions to underserved communities, enabling economic growth and improved quality of life."
              impact="Target: 100,000 households by 2045"
            />
            <SubsidiaryCard
              icon={GraduationCap}
              title="Education Empowerment"
              description="Building digital learning centers and providing free access to quality education through Nelbion Academy partnerships."
              impact="50+ learning centers planned"
            />
            <SubsidiaryCard
              icon={Droplets}
              title="Clean Water Access"
              description="Implementing solar-powered water purification systems and sustainable water management solutions."
              impact="Clean water for 200+ communities"
            />
            <SubsidiaryCard
              icon={Home}
              title="Community Development"
              description="Supporting local entrepreneurship, healthcare access, and infrastructure development in rural areas."
              impact="Empowering 500+ local businesses"
            />
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Projected Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Coming Soon</div>
              <p className="text-muted-foreground">Lives Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">Coming Soon</div>
              <p className="text-muted-foreground">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">100%</div>
              <p className="text-muted-foreground">Faith-Driven Impact</p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Programs</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Light Up Africa Initiative</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploying wireless electricity systems to off-grid communities, enabling children to study after dark, 
                powering small businesses, and improving healthcare delivery.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Digital Education Centers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Establishing tech-enabled learning hubs in rural areas, providing free internet access, computers, 
                and online courses to bridge the digital divide.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Youth Empowerment Program</h3>
              <p className="text-muted-foreground leading-relaxed">
                Training young Africans in technology, entrepreneurship, and leadership, creating opportunities 
                for sustainable livelihoods and community development.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-hero text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to create lasting impact across Africa
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Support Our Work
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
