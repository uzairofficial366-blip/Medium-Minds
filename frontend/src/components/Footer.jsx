export default function Footer() {
  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img id="footer-logo-img" src="/public/logos/darklogo.png" alt="MediumMinds Logo" className="h-8" />
              <span className="font-bold text-xl tracking-tight">MediumMinds</span>
            </div>
            <p className="text-light-muted dark:text-dark-muted max-w-sm">
              Connecting Ideas, Technology and Creative Minds to build the digital future.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-light-muted dark:text-dark-muted">
              <li><a href="/#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/divisions" className="hover:text-primary transition-colors">Divisions</a></li>
              <li><a href="/#work" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-light-muted dark:text-dark-muted">
              <li><a href="mailto:info@mediumminds.com">info@mediumminds.com</a></li>
              <li>+92 312 9424445</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="text-xl hover:text-primary transition-colors"><i className="fab fa-twitter" /></a>
                <a href="https://www.linkedin.com/company/mediumminds/" target="_blank" rel="noreferrer" className="text-xl hover:text-primary transition-colors"><i className="fab fa-linkedin" /></a>
                <a href="https://www.instagram.com/medium.minds?igsh=OHZqdnRiYXBmMjlx&utm_source" target="_blank" rel="noreferrer" className="text-xl hover:text-primary transition-colors"><i className="fab fa-instagram" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-light-muted dark:text-dark-muted text-sm pt-8 border-t border-light-border dark:border-dark-border">
          &copy; {new Date().getFullYear()} MediumMinds. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
