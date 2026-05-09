export const dynamic = 'force-static';

import Link from 'next/link';

const team = [
  { name: 'Alex Carter', role: 'Co-founder & CEO', avatar: 'AC', color: 'from-violet-500 to-purple-600' },
  { name: 'Sam Rivera', role: 'Co-founder & CTO', avatar: 'SR', color: 'from-cyan-500 to-blue-600' },
  { name: 'Jordan Lee', role: 'Head of Design', avatar: 'JL', color: 'from-pink-500 to-rose-600' },
  { name: 'Morgan Kim', role: 'Lead Engineer', avatar: 'MK', color: 'from-emerald-500 to-teal-600' },
  { name: 'Taylor Patel', role: 'Growth & Marketing', avatar: 'TP', color: 'from-orange-500 to-amber-600' },
  { name: 'Casey Nguyen', role: 'Customer Success', avatar: 'CN', color: 'from-violet-500 to-indigo-600' },
];

const values = [
  { icon: '🚀', title: 'Speed First', desc: 'We obsess over performance. Every millisecond saved on a redirect matters.' },
  { icon: '🔓', title: 'Radical Transparency', desc: 'No dark patterns. No hidden fees. No selling your data. Ever.' },
  { icon: '♻️', title: 'Built to Last', desc: "We're in it for the long run — links you shorten today should work in 10 years." },
  { icon: '🤝', title: 'Developer Love', desc: 'We build for developers first. Great DX is non-negotiable.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="glow-orb w-96 h-96 bg-violet-600/15 top-0 left-1/2 -translate-x-1/2 -translate-y-1/3" />
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 relative z-10">
            We believe links should be<br />
            <span className="gradient-text">fast, clean, and trackable</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto relative z-10">
            TrimURL was born in 2024 out of frustration with link shorteners that were either too slow,
            too expensive, or too complicated. We set out to build something better.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card p-10 mb-16 bg-gradient-to-br from-violet-500/5 to-cyan-500/5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-4">From side project to <span className="gradient-text">85k users</span></h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Alex and Sam built the first version of TrimURL over a weekend in early 2024. What started
                as a personal tool to track links in marketing campaigns quickly grew into something other
                developers and marketers wanted to use too.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today, TrimURL processes over 500 million redirects per month for users in 140+ countries,
                with 99.9% uptime and an average redirect time of under 50ms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2024', label: 'Founded' },
                { value: '85K+', label: 'Active users' },
                { value: '500M+', label: 'Monthly redirects' },
                { value: '140+', label: 'Countries served' },
              ].map((s) => (
                <div key={s.label} className="glass-card p-5 text-center">
                  <div className="stat-number text-3xl mb-1">{s.value}</div>
                  <div className="text-slate-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white text-center mb-10">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 flex gap-4">
                <span className="text-3xl">{v.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white text-center mb-10">Meet the team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glass-card p-5 text-center hover:border-violet-500/30 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}>
                  {member.avatar}
                </div>
                <h3 className="text-white font-semibold text-sm">{member.name}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-10">
          <h2 className="text-3xl font-black text-white mb-3">Come build with us</h2>
          <p className="text-slate-400 mb-6">We&apos;re a small, remote-first team. Always looking for great people.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/register" className="btn-gradient px-7 py-3 rounded-xl font-semibold"><span>Start using TrimURL</span></Link>
            <a href="mailto:jobs@trimurl.io" className="px-7 py-3 rounded-xl font-semibold border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all">View open roles</a>
          </div>
        </div>
      </div>
    </div>
  );
}
