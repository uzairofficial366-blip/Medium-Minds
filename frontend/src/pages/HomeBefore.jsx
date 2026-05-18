export default function HomeBefore() {
  return (
<div>
  {/* About Section */}
  <section id="about" className="py-20 bg-light-card dark:bg-dark-card border-y border-light-border dark:border-dark-border">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Meaning Behind <br /><span className="text-primary">MediumMinds</span></h2>
          <p className="text-light-muted dark:text-dark-muted mb-6 leading-relaxed">
            <strong>Medium</strong> represents our diverse domains—software development, AI automation,
            digital marketing, and creative production. We serve as the vital conduit bringing these
            disparate disciplines together.
          </p>
          <p className="text-light-muted dark:text-dark-muted leading-relaxed">
            <strong>Minds</strong> signifies the intelligence, human creativity, and relentless innovation
            driving our solutions. Together, we are architects of the digital tomorrow, creating impactful
            experiences that resonate.
          </p>
        </div>
        <div className="reveal delay-100 relative">
          <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg flex items-center justify-center p-8">
            <img src="./public/mediumminds/1.png" alt="MediumMinds Presentation 1" className="absolute inset-0 w-full h-full object-cover slide1" />
            <img src="./public/mediumminds/2.png" alt="MediumMinds Presentation 2" className="absolute inset-0 w-full h-full object-cover slide2" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Divisions Section */}
  <section id="divisions" className="py-24">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Divisions</h2>
        <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">Discover the four pillars of
          MediumMinds that drive our comprehensive digital solutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="division-card reveal" style={{animationDelay: '0.1s'}}>
          <div className="card-icon"><i className="fas fa-palette" /></div>
          <h3 className="text-xl font-bold mb-3">MediumMinds Studio</h3>
          <p className="text-sm text-light-muted dark:text-dark-muted">Creative production, branding, UI/UX
            design, and visual storytelling.</p>
        </div>
        {/* Card 2 */}
        <div className="division-card reveal" style={{animationDelay: '0.2s'}}>
          <div className="card-icon"><i className="fas fa-lightbulb" /></div>
          <h3 className="text-xl font-bold mb-3">MediumMinds Solutions</h3>
          <p className="text-sm text-light-muted dark:text-dark-muted">Strategic consulting, digital marketing,
            and business problem-solving.</p>
        </div>
        {/* Card 3 */}
        <div className="division-card reveal" style={{animationDelay: '0.3s'}}>
          <div className="card-icon"><i className="fas fa-code" /></div>
          <h3 className="text-xl font-bold mb-3">MediumMinds Technologies</h3>
          <p className="text-sm text-light-muted dark:text-dark-muted">Software development, AI, automation, and
            robust web/mobile architectures.</p>
        </div>
        {/* Card 4 */}
        <div className="division-card reveal" style={{animationDelay: '0.4s'}}>
          <div className="card-icon"><i className="fas fa-flask" /></div>
          <h3 className="text-xl font-bold mb-3">MediumMinds Creative Lab</h3>
          <p className="text-sm text-light-muted dark:text-dark-muted">Experimental projects, R&amp;D, and
            cutting-edge interactive experiences.</p>
        </div>
        {/* Card 5 (New) */}
        <div className="division-card reveal" style={{animationDelay: '0.5s'}}>
          <div className="card-icon"><i className="fas fa-graduation-cap" /></div>
          <h3 className="text-xl font-bold mb-3">MediumMinds for Trainings</h3>
          <p className="text-sm text-light-muted dark:text-dark-muted">Professional courses, interactive
            workshops,
            and comprehensive skill-building training programs.</p>
        </div>
      </div>
      <div className="text-center mt-12 reveal" style={{animationDelay: '0.6s'}}>
        <a href="/divisions" className="btn-secondary px-8 py-3">View Detailed Divisions</a>
      </div>
    </div>
  </section>
  {/* Team Section */}
  <section id="team" className="py-24 bg-[#0d0d0f] border-y border-dark-border">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Leadership</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Meet the minds behind MediumMinds.</p>
      </div>
      {/* Responsive Grid up to 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {/* Team Member 1 */}
        <div className="bg-[#141416] rounded-2xl p-8 text-center group reveal transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,87,34,0.1)]">
          <div className="relative w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#ff5722] transition-colors duration-300">
            <img src="./public/team/umar.jpeg" alt="Umar Farooq - CEO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            {/* Social Icons Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-3 flex justify-center gap-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-linkedin text-lg" /></a>
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-twitter text-lg" /></a>
            </div>
          </div>
          <p className="text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-2">Executive Director</p>
          <h3 className="text-white text-2xl font-bold">Umar Farooq</h3>
        </div>
        {/* Team Member 2 */}
        <div className="bg-[#141416] rounded-2xl p-8 text-center group reveal transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,87,34,0.1)]" style={{animationDelay: '0.1s'}}>
          <div className="relative w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#ff5722] transition-colors duration-300">
            <img src="./public/team/abdullah.jpeg" alt="Abdullah - Director" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            {/* Social Icons Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-3 flex justify-center gap-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-linkedin text-lg" /></a>
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-twitter text-lg" /></a>
            </div>
          </div>
          <p className="text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-2">Director</p>
          <h3 className="text-white text-2xl font-bold">Abdullah Orakzai</h3>
        </div>
        {/* Team Member 3 */}
        <div className="bg-[#141416] rounded-2xl p-8 text-center group reveal transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,87,34,0.1)]" style={{animationDelay: '0.2s'}}>
          <div className="relative w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#ff5722] transition-colors duration-300">
            <img src="./public/team/uzair.jpeg" alt="Muhammad Uzair - MERN Stack Developer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            {/* Social Icons Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-3 flex justify-center gap-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-linkedin text-lg" /></a>
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-twitter text-lg" /></a>
            </div>
          </div>
          <p className="text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-2">MERN Stack Developer</p>
          <h3 className="text-white text-2xl font-bold">Muhammad Uzair</h3>
        </div>
        {/* Team Member 4 */}
        <div className="bg-[#141416] rounded-2xl p-8 text-center group reveal transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,87,34,0.1)]" style={{animationDelay: '0.3s'}}>
          <div className="relative w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#ff5722] transition-colors duration-300">
            <img src="./public/team/social_media_manager.jpeg" alt="Ihtashal Ul Haq - Social Media Manager" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            {/* Social Icons Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-3 flex justify-center gap-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-linkedin text-lg" /></a>
              <a href="#" className="text-white hover:text-[#ff5722] transition-colors"><i className="fab fa-twitter text-lg" /></a>
            </div>
          </div>
          <p className="text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-2">Social Media Manager</p>
          <h3 className="text-white text-2xl font-bold">Ihtashal Ul Haq</h3>
        </div>
      </div>
    </div>
  </section>
  {/* Work Section */}
  <section id="work" className="py-24">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Previous Work &amp; Projects</h2>
        <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">Explore our portfolio of successful
          collaborations and innovative solutions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="project-card reveal">
          <div className="aspect-video w-full overflow-hidden">
            <img src="./public/projects/caripd.png" alt="Collective Alliance for the Rights of Indigenous Persons with Disabilities" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="project-overlay">
            <h3 className="text-xl font-bold text-white mb-2">Collective Alliance for the Rights of Indigenous
              Persons with Disabilities</h3>
            <p className="text-sm text-gray-300">Web Development</p>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card reveal" style={{animationDelay: '0.1s'}}>
          <div className="aspect-video w-full overflow-hidden">
            <img src="./public/projects/yado.png" alt="Youth Awareness and Development Organization (YADO)" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="project-overlay">
            <h3 className="text-xl font-bold text-white mb-2">Youth Awareness and Development Organization
              (YADO)</h3>
            <p className="text-sm text-gray-300">Digital Solutions</p>
          </div>
        </div>
        {/* Project 3 */}
        <div className="project-card reveal" style={{animationDelay: '0.2s'}}>
          <div className="aspect-video w-full overflow-hidden">
            <img src="./public/projects/pdmission.png" alt="Pak Development Mission (PDM)" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="project-overlay">
            <h3 className="text-xl font-bold text-white mb-2">Pak Development Mission (PDM)</h3>
            <p className="text-sm text-gray-300">Web &amp; Tech Partnership</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  );
}
