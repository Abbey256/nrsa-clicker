import { PageLayout } from "@/components/PageLayout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Connect with Nelbion Group and join Nigeria's transformation journey"
    >
      <div className="grid gap-8 max-w-4xl mx-auto">
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're building the future of Nigeria through faith-driven innovation. Whether you're 
            an investor, partner, or supporter of our mission, we'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover-scale">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:nelbiongroup@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    nelbiongroup@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-scale">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <Phone className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/2348130256286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success hover:text-success/80 transition-colors"
                  >
                    +234 813 025 6286
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-8">
          <Card className="p-8 bg-gradient-subtle border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gold/10">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission Base</h3>
                <p className="text-muted-foreground">
                  Starting from Nigeria, expanding across Africa, impacting the world
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nelbion Group is headquartered in Nigeria, where we're developing and testing 
              all our solutions before scaling across Africa and globally. Our Nigeria-first 
              approach ensures our innovations are grounded in real African challenges and solutions.
            </p>
          </Card>
        </section>

        <section className="mt-8">
          <div className="p-12 rounded-lg gradient-hero text-center">
            <Send className="h-12 w-12 text-white/90 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Join the Vision</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
              Be part of Nigeria's technological revolution and Africa's transformation story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:nelbiongroup@gmail.com"
                className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="https://wa.me/2348130256286"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-success text-white font-bold rounded-lg hover:bg-success/90 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
