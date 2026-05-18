export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Connecting Ideas, Technology <br className="hidden md:block" /> and{" "}
          <span className="text-primary">Creative Minds</span>
        </h1>
        <p
          className="text-lg md:text-xl text-light-muted dark:text-dark-muted max-w-3xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          We are a multi-division digital company bridging the gap between innovation and reality. From AI solutions to
          creative production, we build the future.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="#divisions" className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
            Explore Solutions
          </a>
          <a href="#work" className="btn-secondary px-8 py-4 text-lg w-full sm:w-auto">
            Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
