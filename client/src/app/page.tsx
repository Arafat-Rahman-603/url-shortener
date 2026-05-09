import ShortenForm from '@/componentes/ShortenForm';
import FeaturesSection from '@/componentes/FeaturesSection';
import StatsSection from '@/componentes/StatsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 pt-20 overflow-hidden">
        {/* Background glow orbs */}
        <div className="glow-orb w-[600px] h-[600px] bg-violet-600/20 -top-32 -left-32 animate-pulse-glow" />
        <div className="glow-orb w-[400px] h-[400px] bg-cyan-500/15 top-1/2 -right-24 animate-pulse-glow delay-300" />
        <div className="glow-orb w-[300px] h-[300px] bg-pink-500/10 bottom-0 left-1/3 animate-pulse-glow delay-500" />

        {/* Floating grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-300 text-xs font-semibold tracking-wider mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            FREE · NO SIGNUP REQUIRED
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100">
            Shorten Links,<br />
            <span className="gradient-text">Amplify Reach</span>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Transform long, ugly URLs into sleek, trackable short links in seconds.
            No account needed — just paste and trim.
          </p>

          {/* Shorten Form */}
          <div className="animate-fade-up delay-300">
            <ShortenForm />
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap animate-fade-up delay-400">
            {[
              { icon: '⚡', text: 'Instant results' },
              { icon: '🔒', text: 'SSL secured' },
              { icon: '📊', text: 'Click analytics' },
            ].map(badge => (
              <div key={badge.text} className="flex items-center gap-1.5 text-slate-400 text-sm">
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 text-slate-600 animate-fade-up delay-500">
            <span className="text-xs uppercase tracking-widest">Explore features</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Features */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="glow-orb w-64 h-64 bg-violet-600/20 -top-16 -right-16" />
            <div className="glow-orb w-48 h-48 bg-cyan-500/15 -bottom-12 -left-12" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Ready to <span className="gradient-text">get started?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Create a free account and unlock analytics, custom aliases, and more.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link href="/register" id="cta-register-btn" className="btn-gradient px-8 py-3.5 rounded-xl font-semibold text-base">
                  <span>Create free account</span>
                </Link>
                <Link href="/login" id="cta-login-btn" className="px-8 py-3.5 rounded-xl font-semibold text-base border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
