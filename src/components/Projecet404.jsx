import Link from 'next/link';
import { Home, ArrowRight, AlertTriangle, Search } from 'lucide-react';

function Projecet404() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Animated Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-card border-2 border-primary rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-mono">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Oops! It looks like you've ventured into uncharted territory. The project you're looking for doesn't exist or has been moved.
          </p>

          {/* Search Suggestion */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground mb-3">
              <Search className="w-5 h-5" />
              <p className="text-sm">Here's what you can do:</p>
            </div>
            <ul className="text-left text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Go back to the homepage and explore from there</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Check out the about section to learn more about me</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Browse my projects and skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Get in touch if you have any questions</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Home
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Fun Easter Egg Message */}
        <div className="text-center mt-12 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 <span className="text-primary font-semibold">Fun Fact:</span> Every bug is a feature in disguise. This 404 is no exception!
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
    </main>
  )
}

export default Projecet404
