import React from 'react';

const features = [
  {
    id: 'feat-fast',
    icon: (
      <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    glow: 'icon-glow-purple',
    title: 'Blazing Fast',
    desc: 'Sub-millisecond redirects powered by edge infrastructure across 100+ global locations.',
    color: 'from-violet-500/10 to-violet-500/5',
    border: 'hover:border-violet-500/30',
  },
  {
    id: 'feat-analytics',
    icon: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    glow: 'icon-glow-cyan',
    title: 'Rich Analytics',
    desc: 'Track clicks, geographic data, devices, and referrers for every link you shorten.',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'hover:border-cyan-500/30',
  },
  {
    id: 'feat-custom',
    icon: (
      <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 012-2z" />
      </svg>
    ),
    glow: 'icon-glow-pink',
    title: 'Custom Aliases',
    desc: 'Create memorable branded links with your own custom slugs and vanity URLs.',
    color: 'from-pink-500/10 to-pink-500/5',
    border: 'hover:border-pink-500/30',
  },
  {
    id: 'feat-secure',
    icon: (
      <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    glow: 'icon-glow-purple',
    title: 'Safe & Secure',
    desc: 'Every link is scanned for malware. HTTPS everywhere. Your data stays private.',
    color: 'from-violet-500/10 to-violet-500/5',
    border: 'hover:border-violet-500/30',
  },
  {
    id: 'feat-qr',
    icon: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    glow: 'icon-glow-cyan',
    title: 'QR Codes',
    desc: 'Generate beautiful QR codes for every link, perfect for print and offline campaigns.',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'hover:border-cyan-500/30',
  },
  {
    id: 'feat-api',
    icon: (
      <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    glow: 'icon-glow-pink',
    title: 'REST API',
    desc: 'Full-featured API to integrate link shortening directly into your apps and workflows.',
    color: 'from-pink-500/10 to-pink-500/5',
    border: 'hover:border-pink-500/30',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Everything you need
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful features,<br />
            <span className="gradient-text">simple interface</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            TrimURL gives you all the tools to manage, track and optimize your links at scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.id}
              id={f.id}
              className={`glass-card p-6 bg-gradient-to-br ${f.color} ${f.border} transition-all duration-300 group`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${f.glow}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
