export default function HomeAfter() {
  return (
<div>
  {/* FAQ Section */}
  <section className="py-24">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="faq-item reveal bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg overflow-hidden">
          <button className="faq-btn w-full px-6 py-4 text-left flex justify-between items-center font-bold">
            What services does MediumMinds offer?
            <i className="fas fa-chevron-down transition-transform duration-300" />
          </button>
          <div className="faq-content hidden px-6 pb-4 text-light-muted dark:text-dark-muted">
            We offer a comprehensive suite of digital services across four divisions: Studio (design &amp;
            branding), Solutions (marketing &amp; consulting), Technologies (software &amp; AI), and Creative Lab
            (R&amp;D).
          </div>
        </div>
        {/* FAQ Item 2 */}
        <div className="faq-item reveal bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg overflow-hidden" style={{animationDelay: '0.1s'}}>
          <button className="faq-btn w-full px-6 py-4 text-left flex justify-between items-center font-bold">
            Do you work with startups or enterprise clients?
            <i className="fas fa-chevron-down transition-transform duration-300" />
          </button>
          <div className="faq-content hidden px-6 pb-4 text-light-muted dark:text-dark-muted">
            Both! Our scalable team structure allows us to handle specialized rapid-prototyping for startups
            as well as robust, enterprise-grade application development for large organizations.
          </div>
        </div>
        {/* FAQ Item 3 */}
        <div className="faq-item reveal bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg overflow-hidden" style={{animationDelay: '0.2s'}}>
          <button className="faq-btn w-full px-6 py-4 text-left flex justify-between items-center font-bold">
            How can I join MediumMinds?
            <i className="fas fa-chevron-down transition-transform duration-300" />
          </button>
          <div className="faq-content hidden px-6 pb-4 text-light-muted dark:text-dark-muted">
            You can apply via the Registration &amp; Collaboration form in the Contact section above. Select
            "Job / Position" as the type, and we will get back to you.
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="py-24 bg-primary text-white text-center">
    <div className="container mx-auto px-6 md:px-12 reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s turn your ideas into reality.</h2>
      <a href="#contact" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
        Start a Project
      </a>
    </div>
  </section>
  {/* Footer */}
</div>


  );
}
