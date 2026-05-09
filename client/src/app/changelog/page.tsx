export const dynamic = 'force-static';

const releases = [
  {
    version: 'v2.4.0',
    date: 'May 9, 2026',
    type: 'Feature',
    typeColor: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    changes: [
      { tag: 'NEW', desc: 'Dashboard analytics with geographic click heatmaps' },
      { tag: 'NEW', desc: 'QR code generation for every shortened link' },
      { tag: 'NEW', desc: 'Custom alias support on Free plan (3/month)' },
      { tag: 'IMPROVED', desc: 'Link redirect speed reduced to sub-50ms globally' },
    ],
  },
  {
    version: 'v2.3.0',
    date: 'April 22, 2026',
    type: 'Feature',
    typeColor: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    changes: [
      { tag: 'NEW', desc: 'Password-protected links for Pro users' },
      { tag: 'NEW', desc: 'Link expiry by date or click count' },
      { tag: 'NEW', desc: 'Bulk import via CSV (up to 10,000 URLs)' },
      { tag: 'FIXED', desc: 'UTM parameters being stripped on certain redirects' },
    ],
  },
  {
    version: 'v2.2.1',
    date: 'April 10, 2026',
    type: 'Patch',
    typeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    changes: [
      { tag: 'FIXED', desc: 'API rate limit headers not returned correctly' },
      { tag: 'FIXED', desc: 'Mobile navbar closing after external link clicks' },
      { tag: 'IMPROVED', desc: 'Faster dashboard load time (p99 down from 1.2s to 380ms)' },
    ],
  },
  {
    version: 'v2.2.0',
    date: 'March 28, 2026',
    type: 'Feature',
    typeColor: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    changes: [
      { tag: 'NEW', desc: 'REST API v1 released publicly with full documentation' },
      { tag: 'NEW', desc: 'Zapier integration (official app in Zapier marketplace)' },
      { tag: 'NEW', desc: 'Chrome and Firefox browser extensions' },
      { tag: 'IMPROVED', desc: 'Redesigned dashboard with real-time click updates' },
    ],
  },
  {
    version: 'v2.0.0',
    date: 'March 1, 2026',
    type: 'Major',
    typeColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    changes: [
      { tag: 'NEW', desc: 'Complete platform rewrite with Next.js 16 and Tailwind CSS v4' },
      { tag: 'NEW', desc: 'Business plan with team workspaces and custom domains' },
      { tag: 'NEW', desc: 'SSO / SAML support for enterprise customers' },
      { tag: 'IMPROVED', desc: 'New dark-mode UI with glassmorphism design system' },
      { tag: 'REMOVED', desc: 'Legacy v1 dashboard (migrated automatically)' },
    ],
  },
];

const tagColors: Record<string, string> = {
  NEW: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  IMPROVED: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  FIXED: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  REMOVED: 'bg-red-500/15 text-red-400 border-red-500/30',
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Changelog
          </span>
          <h1 className="text-5xl font-black text-white mb-4">
            What&apos;s <span className="gradient-text">new</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Every update, improvement, and fix — in one place.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent" />

          <div className="space-y-10">
            {releases.map((release) => (
              <div key={release.version} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#070b14] border border-violet-500/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <span className="text-white font-black text-xl">{release.version}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${release.typeColor}`}>
                      {release.type}
                    </span>
                    <span className="text-slate-500 text-sm ml-auto">{release.date}</span>
                  </div>

                  <div className="space-y-3">
                    {release.changes.map((change, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold border flex-shrink-0 mt-0.5 ${tagColors[change.tag]}`}>
                          {change.tag}
                        </span>
                        <span className="text-slate-300 text-sm leading-relaxed">{change.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
