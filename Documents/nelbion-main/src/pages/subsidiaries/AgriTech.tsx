import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { Leaf, Smartphone, TrendingUp, CloudRain, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgriTech() {
  return (
    <PageLayout
      title="Nelbion AgriTech"
      subtitle="Revolutionizing Nigerian Agriculture First, Then Transforming Africa"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Feeding Nigeria, Empowering Farmers, Transforming Africa</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion AgriTech combines artificial intelligence, blockchain technology, and IoT sensors to transform 
            Nigerian agriculture first. We're solving food security challenges while empowering Nigerian smallholder farmers with 
            tools to increase yields, access markets, and build sustainable livelihoods—creating proven models for all of Africa.
          </p>
        </section>

        {/* Core Solutions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Smart Farming Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={Smartphone}
              title="AI Crop Monitoring"
              description="Mobile app providing real-time crop health analysis, pest detection, and farming recommendations using AI-powered image recognition."
              impact="40% yield increase potential"
            />
            <SubsidiaryCard
              icon={CloudRain}
              title="Climate Intelligence"
              description="Predictive weather analytics and climate adaptation strategies helping farmers plan planting and harvesting seasons effectively."
              impact="Weather-smart farming"
            />
            <SubsidiaryCard
              icon={Package}
              title="Smart Storage"
              description="Blockchain-tracked storage facilities with IoT sensors monitoring temperature and humidity, reducing post-harvest losses."
              impact="90% reduction in crop waste"
            />
            <SubsidiaryCard
              icon={TrendingUp}
              title="Market Access Platform"
              description="Digital marketplace connecting farmers directly to buyers, eliminating middlemen and ensuring fair prices through blockchain transparency."
              impact="300% income increase for farmers"
            />
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology Integration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Crop disease detection, yield prediction, and personalized farming recommendations.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Blockchain Traceability</h3>
              <p className="text-muted-foreground">
                Track produce from farm to table, ensuring quality and fair compensation.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <CloudRain className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">IoT Sensors</h3>
              <p className="text-muted-foreground">
                Real-time soil moisture, nutrient levels, and environmental monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Impact Areas</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Food Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Increasing crop yields by 40% through precision agriculture, ensuring Africa can feed itself 
                and reduce dependency on food imports.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Farmer Empowerment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Providing smallholder farmers with access to markets, credit, insurance, and modern farming 
                techniques through our digital platform.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Climate Adaptation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helping farmers adapt to climate change with drought-resistant crops, water management systems, 
                and climate-smart agricultural practices.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Projected Impact by 2030</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5M+</div>
              <p className="opacity-90">Farmers Empowered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M</div>
              <p className="opacity-90">Hectares Monitored</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2B</div>
              <p className="opacity-90">Farmer Income Added</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M</div>
              <p className="opacity-90">People Fed</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Join Our Farming Revolution
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
