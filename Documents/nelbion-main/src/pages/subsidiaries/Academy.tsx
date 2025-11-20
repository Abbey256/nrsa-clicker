import { PageLayout } from "@/components/PageLayout";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";
import { GraduationCap, BookOpen, Video, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Academy() {
  return (
    <PageLayout
      title="Nelbion Academy"
      subtitle="Empowering Nigerian Youth First, Then Africa's Future"
    >
      <div className="space-y-12">
        {/* Impact Statement */}
        <section className="bg-gradient-subtle rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education Without Boundaries</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nelbion Academy is democratizing access to world-class education starting in Nigeria, then expanding across Africa. Through our digital 
            learning platform, we provide free and affordable courses in technology, business, agriculture, and 
            essential skills - empowering Nigerian youth first, then Africa's youth to compete globally and build sustainable futures.
          </p>
        </section>

        {/* Core Offerings */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Learning Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SubsidiaryCard
              icon={BookOpen}
              title="Technology Courses"
              description="Programming, AI, blockchain, cybersecurity, and digital skills training preparing students for tech careers."
              impact="100% practical, job-ready skills"
            />
            <SubsidiaryCard
              icon={Users}
              title="Entrepreneurship Training"
              description="Business fundamentals, startup development, financial management, and leadership skills for Nigerian entrepreneurs first, then African entrepreneurs."
              impact="Launch your own business"
            />
            <SubsidiaryCard
              icon={Video}
              title="Professional Certifications"
              description="Internationally recognized certificates in various fields, enhancing employability and career advancement."
              impact="Global credential recognition"
            />
            <SubsidiaryCard
              icon={Globe}
              title="Multilingual Content"
              description="Courses available in Nigerian languages first, then major African languages, making quality education accessible to all."
              impact="Education in your language"
            />
          </div>
        </section>

        {/* Course Categories */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Course Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Technology & Programming</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web Development</li>
                <li>• Mobile App Development</li>
                <li>• Data Science & AI</li>
                <li>• Blockchain Development</li>
                <li>• Cybersecurity</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Business & Entrepreneurship</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Starting a Business</li>
                <li>• Digital Marketing</li>
                <li>• Financial Management</li>
                <li>• E-commerce</li>
                <li>• Leadership Skills</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Agriculture & Environment</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Smart Farming</li>
                <li>• Sustainable Agriculture</li>
                <li>• Climate Adaptation</li>
                <li>• Agricultural Business</li>
                <li>• Food Security</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Healthcare & Wellness</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Community Health</li>
                <li>• Nutrition & Wellness</li>
                <li>• First Aid</li>
                <li>• Healthcare Management</li>
                <li>• Mental Health Awareness</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Digital Literacy</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Computer Basics</li>
                <li>• Internet & Email</li>
                <li>• Digital Payments</li>
                <li>• Online Safety</li>
                <li>• Social Media</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Creative & Vocational</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Graphic Design</li>
                <li>• Video Production</li>
                <li>• Photography</li>
                <li>• Craftsmanship</li>
                <li>• Fashion & Textiles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Platform */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Platform Features</h2>
          <div className="space-y-6">
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Mobile-First Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access courses from any device - smartphone, tablet, or computer. Download lessons for offline 
                study in areas with limited connectivity.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Interactive Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Video lessons, quizzes, hands-on projects, and peer collaboration ensuring engaging, effective 
                learning experiences.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Personalization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Adaptive learning paths adjusting to your pace, learning style, and career goals for optimized 
                skill development.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Community Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with fellow students, mentors, and industry professionals through forums, study groups, 
                and networking events.
              </p>
            </div>
          </div>
        </section>

        {/* Free Access */}
        <section className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Free Education Initiative</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through Nelbion Foundation partnerships, we provide completely free access to foundational courses 
            for underserved communities, ensuring no African youth is left behind due to financial barriers.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Free Courses</p>
            </div>
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Accessible to All</p>
            </div>
            <div className="text-center p-6 bg-gradient-subtle rounded-lg">
              <div className="text-3xl font-bold text-success mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Learning Available</p>
            </div>
          </div>
        </section>

        {/* Impact Vision */}
        <section className="bg-gradient-hero text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Education Impact by 2050</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M+</div>
              <p className="opacity-90">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="opacity-90">Courses Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="opacity-90">Partner Institutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="opacity-90">Languages Supported</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" className="font-semibold">
            Start Learning Today
          </Button>
        </section>
      </div>
    </PageLayout>
  );
}
