
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-carbon text-brand-steel font-sans">

      {/* Navigation */}
      <nav className="border-b border-brand-grid/30 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter text-white">
          THE DAILY SUTRA
        </h1>
        <div className="space-x-4 text-sm font-mono uppercase tracking-widest">
          <Link href="#" className="hover:text-brand-laser">About</Link>
          <Link href="/dashboard" className="text-brand-laser hover:text-white">Agent Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 px-6 border-b border-brand-grid/30 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-brand-laser font-mono text-sm tracking-[0.2em] mb-6 uppercase">
            Tech Made Simple
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            WHERE COMPLEX <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-laser to-white">BECOMES CLEAR</span>
          </h2>
          <p className="text-xl text-brand-steel/80 max-w-2xl mx-auto leading-relaxed">
            A place where confusion turns into understanding. We explain AI, cloud, web dev, and emerging tech in a way that respects your intelligence—no condescension, just clarity.
          </p>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      </header>

      {/* Featured Articles Grid */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-xs uppercase tracking-widest text-brand-steel/40 font-bold mb-12 text-center">
          Latest Guides
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Article 1 */}
          <article className="group cursor-pointer">
            <div className="aspect-video bg-brand-surface border border-brand-grid/30 mb-6 group-hover:border-brand-laser/50 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-carbon/50 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs bg-brand-carbon px-2 py-1 border border-brand-grid">AI & ML</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-laser transition-colors">
              Understanding LLMs Without the Hype
            </h3>
            <p className="text-brand-steel/60 leading-relaxed text-sm">
              What are Large Language Models really doing? A beginner-friendly breakdown of transformers, tokens, and training.
            </p>
          </article>

          {/* Article 2 */}
          <article className="group cursor-pointer">
            <div className="aspect-video bg-brand-surface border border-brand-grid/30 mb-6 group-hover:border-brand-laser/50 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-carbon/50 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs bg-brand-carbon px-2 py-1 border border-brand-grid">WEB DEV</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-laser transition-colors">
              React vs. Next.js: Which Should You Learn?
            </h3>
            <p className="text-brand-steel/60 leading-relaxed text-sm">
              Confused about the React ecosystem? Here's a practical guide to choosing the right framework for your first project.
            </p>
          </article>

          {/* Article 3 */}
          <article className="group cursor-pointer">
            <div className="aspect-video bg-brand-surface border border-brand-grid/30 mb-6 group-hover:border-brand-laser/50 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-carbon/50 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs bg-brand-carbon px-2 py-1 border border-brand-grid">CLOUD</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-laser transition-colors">
              What is "The Cloud" Actually?
            </h3>
            <p className="text-brand-steel/60 leading-relaxed text-sm">
              Beyond the buzzword: how cloud computing works, why it matters, and when you actually need it.
            </p>
          </article>

        </div>

        {/* Mission Statement */}
        <div className="mt-24 max-w-3xl mx-auto text-center border-t border-brand-grid/30 pt-16">
          <h4 className="text-2xl font-bold text-white mb-6">Our Promise</h4>
          <div className="space-y-4 text-brand-steel/70 leading-relaxed">
            <p>✦ Complex tech feels simple</p>
            <p>✦ Confusion turns into understanding</p>
            <p>✦ Beginners, learners, and builders feel respected—not talked down to</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-brand-grid/30 py-12 text-center text-brand-steel/40 text-sm font-mono uppercase">
        © 2026 The Daily Sutra. Powered by YANTRA OS.
      </footer>
    </div>
  );
}
