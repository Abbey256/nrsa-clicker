import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-nelbion.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 47, 89, 0.85), rgba(21, 47, 89, 0.75)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-gold/20 border border-gold rounded-full">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Building Africa's Future
            </span>
          </div>
          
          <h1 className="text-white mb-6 leading-tight">
            Rooted in Faith, Rising in Greatness
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Solving Nigeria's Challenges First, Then Transforming Africa and the World
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-gold-foreground shadow-large group px-8 py-6 text-lg"
              asChild
            >
              <Link to="/investment">
                <Download className="mr-2 h-5 w-5" />
                Investment Proposal
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
              asChild
            >
              <Link to="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 px-6 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-foreground mb-6">A Divine Vision for Africa</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nelbion Group is more than a company—it's a faith-driven movement to transform Africa 
            through innovation, integrity, and impact. We believe in a future where technology serves 
            humanity, where transparency replaces corruption, and where every African has access to 
            opportunity and prosperity.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-16">Our Impact Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/energy" className="group">
              <div className="p-8 rounded-lg border border-border bg-card shadow-soft hover:shadow-medium transition-smooth">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  Sustainable Energy
                </h3>
                <p className="text-muted-foreground">
                  Wireless electricity and renewable power solutions for all of Africa
                </p>
              </div>
            </Link>

            <Link to="/blockchain" className="group">
              <div className="p-8 rounded-lg border border-border bg-card shadow-soft hover:shadow-medium transition-smooth">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <span className="text-3xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  Transparency
                </h3>
                <p className="text-muted-foreground">
                  Blockchain technology ensuring accountability and trust
                </p>
              </div>
            </Link>

            <Link to="/foundation" className="group">
              <div className="p-8 rounded-lg border border-border bg-card shadow-soft hover:shadow-medium transition-smooth">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  Social Impact
                </h3>
                <p className="text-muted-foreground">
                  Education, healthcare, and sustainable development for communities
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Join the Vision</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Be part of a faith-driven movement transforming Africa. Invest in solutions that create 
            lasting impact and prosperity for millions.
          </p>
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-primary shadow-large px-8 py-6 text-lg"
            asChild
          >
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Investor Relations
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
