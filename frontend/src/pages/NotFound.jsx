export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Page Not Found</h1>
        <p className="text-light-muted dark:text-dark-muted mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="btn-primary">Back Home</a>
      </div>
    </section>
  );
}
