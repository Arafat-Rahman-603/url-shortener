export const dynamic = 'force-static';

import Link from 'next/link';

const features = [
  {
    category: 'Core',
    icon: '⚡',
    items: [
      { title: 'Instant Shortening', desc: 'Shorten any URL in under 100ms with our globally distributed edge network.' },
      { title: 'Custom Aliases', desc: 'Create memorable branded short links with your own custom slugs.' },
      { title: 'Bulk Shortening', desc: 'Shorten thousands of URLs at once via CSV upload or our API.' },
      { title: 'Link Expiry', desc: 'Set expiration dates and click limits on any link for time-sensitive campaigns.' },
    ],
  },
  {
    category: 'Analytics',
    icon: '📊',
    items: [
      { title: 'Click Tracking', desc: 'See every click in real-time, including timestamp, device, and browser.' },
      { title: 'Geo Analytics', desc: 'Visualize click heatmaps by country, city, and region on an interactive map.' },
      { title: 'Referrer Tracking', desc: 'Know exactly which websites, apps, and campaigns are driving your traffic.' },
      { title: 'UTM Builder', desc: 'Build and append UTM parameters automatically for seamless campaign attribution.' },
    ],
  },
  {
    category: 'Security',
    icon: '🔒',
    items: [
      { title: 'HTTPS Everywhere', desc: 'Every short link is served over HTTPS with automatic TLS certificates.' },
      { title: 'Malware Scanning', desc: 'All destination URLs are scanned against threat databases before activation.' },
      { title: 'Password Protection', desc: 'Lock any link behind a password for private sharing.' },
      { title: 'Link Cloaking', desc: 'Hide your destination URL from preview tools and browser history.' },
    ],
  },
  {
    category: 'Integrations',
    icon: '🔌',
    items: [
      { title: 'REST API', desc: 'Full-featured API with SDKs for JavaScript, Python, PHP, and more.' },
      { title: 'Zapier & Make', desc: 'Automate link creation with 5,000+ apps via no-code integrations.' },
      { title: 'Browser Extension', desc: 'Shorten the current page with one click from Chrome, Firefox, or Edge.' },
      { title: 'Slack & Teams', desc: 'Shorten and share links directly from your team chat tools.' },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="glow-orb w-96 h-96 bg-violet-600/20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Platform Features
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            Everything you need to<br />
            <span className="gradient-text">manage your links</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            {"TrimURL packs enterprise-grade features into a clean, simple interface — whether you're a solo creator or a global team."}
          </p>
          <Link href="/register" className="btn-gradient px-8 py-3.5 rounded-xl font-semibold text-base inline-block">
            <span>Start for free</span>
          </Link>
        </div>

        {/* Feature categories */}
        <div className="space-y-16">
          {features.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-white">{cat.category}</h2>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div key={item.title} className="glass-card p-6 hover:border-violet-500/30 transition-all duration-300">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center glass-card p-12">
          <h2 className="text-3xl font-black text-white mb-3">Ready to get started?</h2>
          <p className="text-slate-400 mb-6">Join 85,000+ users shortening links with TrimURL.</p>
          <Link href="/register" className="btn-gradient px-8 py-3.5 rounded-xl font-semibold inline-block">
            <span>Create free account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
