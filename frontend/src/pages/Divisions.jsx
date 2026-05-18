export default function Divisions() {
  return (
<div>
  {/* Page Hero */}
  <section className="relative pt-32 pb-20 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border">
    <div className="container mx-auto px-6 md:px-12 text-center reveal">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Detailed Divisions</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted max-w-3xl mx-auto">
        Explore the five pillars that make up MediumMinds. From creative design to advanced AI, and professional
        training, we cover the full spectrum of digital innovation.
      </p>
    </div>
  </section>
  {/* Divisions Detail Content */}
  {/* 1. Studio */}
  <section className="py-20">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 reveal">
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
            <i className="fas fa-palette" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MediumMinds Studio</h2>
          <p className="text-light-muted dark:text-dark-muted mb-6 text-lg">
            Our creative powerhouse where aesthetics meet strategy. We craft compelling visual identities
            and design seamless user experiences that capture attention and drive engagement.
          </p>
          <div className="space-y-4">
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Brand Identity &amp; Logo Design</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">UI/UX Interface Design</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Video Production &amp; Animation</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Graphic Design &amp; Illustration</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 reveal" style={{animationDelay: '0.2s'}}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border aspect-video md:aspect-[4/3] lg:h-[400px] w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,94,44,0.15)]">
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="Creative Studio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 2. Solutions */}
  <section className="py-20 bg-light-card dark:bg-dark-card border-y border-light-border dark:border-dark-border">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="lg:w-1/2 reveal">
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
            <i className="fas fa-lightbulb" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MediumMinds Solutions</h2>
          <p className="text-light-muted dark:text-dark-muted mb-6 text-lg">
            We provide data-driven strategies and comprehensive marketing campaigns that help businesses
            scale, reach their target audiences, and optimize their conversion rates.
          </p>
          <div className="space-y-4">
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Digital Marketing &amp; SEO</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Social Media Management</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Strategic Business Consulting</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Content Strategy &amp; Copywriting</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 reveal" style={{animationDelay: '0.2s'}}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border aspect-video md:aspect-[4/3] lg:h-[400px] w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,94,44,0.15)]">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Business Solutions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 3. Technologies */}
  <section className="py-20">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 reveal">
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
            <i className="fas fa-code" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MediumMinds Technologies</h2>
          <p className="text-light-muted dark:text-dark-muted mb-6 text-lg">
            Our core engineering division builds robust, scalable software, dynamic websites, and advanced
            mobile applications using the latest tech stacks and industry best practices.
          </p>
          <div className="space-y-4">
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Custom Web Application Development</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">iOS &amp; Android App Development</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">AI &amp; Process Automation</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Cloud Infrastructure &amp; DevOps</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 reveal" style={{animationDelay: '0.2s'}}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border aspect-video md:aspect-[4/3] lg:h-[400px] w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,94,44,0.15)]">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Technology Development" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 4. Creative Lab */}
  <section className="py-20 bg-light-card dark:bg-dark-card border-y border-light-border dark:border-dark-border">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="lg:w-1/2 reveal">
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
            <i className="fas fa-flask" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MediumMinds Creative Lab</h2>
          <p className="text-light-muted dark:text-dark-muted mb-6 text-lg">
            The innovation hub where we test boundaries. We experiment with emerging technologies like
            AR/VR, Web3, and interactive installations to find the next big breakthrough.
          </p>
          <div className="space-y-4">
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Research &amp; Development (R&amp;D)</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">AR/VR Experiences</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Prototyping Emerging Tech</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Interactive Installations</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 reveal" style={{animationDelay: '0.2s'}}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border aspect-video md:aspect-[4/3] lg:h-[400px] w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,94,44,0.15)]">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Creative Innovation Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 5. Trainings */}
  <section className="py-20">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 reveal">
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
            <i className="fas fa-graduation-cap" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MediumMinds for Trainings</h2>
          <p className="text-light-muted dark:text-dark-muted mb-6 text-lg">
            Empowering the next generation of tech leaders. We offer comprehensive courses and workshops on
            the latest technologies, designed to upskill individuals and corporate teams.
          </p>
          <div className="space-y-4">
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Full-Stack Web Development Bootcamp</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Corporate Tech Training</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">UI/UX Design Masterclasses</span>
            </div>
            <div className="division-feature">
              <i className="fas fa-check-circle division-feature-icon" />
              <span className="font-medium">Digital Marketing &amp; SEO Workshops</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 reveal" style={{animationDelay: '0.2s'}}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border aspect-video md:aspect-[4/3] lg:h-[400px] w-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,94,44,0.15)]">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Tech Trainings and Workshops" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="py-24 bg-primary text-white text-center">
    <div className="container mx-auto px-6 md:px-12 reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to grow with MediumMinds?</h2>
      <a href="/#contact" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
        Contact Us Today
      </a>
    </div>
  </section>
  {/* Footer */}
</div>


  );
}
