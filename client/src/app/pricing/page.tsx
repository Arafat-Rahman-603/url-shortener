export const dynamic = 'force-static';

import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Perfect for individuals and hobbyists getting started.',
    color: 'from-white/5 to-white/2',
    border: 'border-white/10',
    cta: 'Get started free',
    ctaStyle: 'border border-white/10 text-slate-300 hover:text-white hover:bg-white/5',
    href: '/register',
    features: [
      '50 links per month',
      'Basic click analytics',
      'Standard short URLs',
      '30-day link history',
      'Copy to clipboard',
      'QR code generation',
    ],
    missing: ['Custom aliases', 'Password protection', 'API access', 'Team features'],
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    desc: 'For creators, marketers and small teams who need more.',
    color: 'from-violet-500/10 to-cyan-500/5',
    border: 'border-violet-500/40',
    badge: 'Most Popular',
    cta: 'Start Pro free trial',
    ctaStyle: 'btn-gradient',
    href: '/register',
    features: [
      'Unlimited links',
      'Advanced analytics dashboard',
      'Custom aliases',
      'Password-protected links',
      'Link expiry & click limits',
      'UTM builder',
      'API access (10k req/mo)',
      'Browser extension',
    ],
    missing: ['Team collaboration', 'SSO / SAML'],
  },
  {
    name: 'Business',
    price: '$29',
    period: '/month',
    desc: 'For growing teams that need collaboration and scale.',
    color: 'from-cyan-500/10 to-violet-500/5',
    border: 'border-cyan-500/30',
    cta: 'Contact sales',
    ctaStyle: 'border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10',
    href: '/register',
    features: [
      'Everything in Pro',
      'Unlimited API requests',
      'Team workspaces (5 seats)',
      'Custom domains',
      'Priority support',
      'SSO / SAML',
      'Audit logs',
      'SLA guarantee',
    ],
    missing: [],
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-4 h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-5 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-violet-600/15 -top-32 left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Simple, transparent<br />
            <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-7 bg-gradient-to-br ${plan.color} border ${plan.border} relative flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-white mb-1">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>

              <div className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Check />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Cross />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href={plan.href}
                className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.ctaStyle === 'btn-gradient' ? <span>{plan.cta}</span> : plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I cancel at any time?', a: 'Yes, you can cancel or downgrade your plan at any time from your account settings. No lock-in, ever.' },
              { q: 'Is there a free trial for paid plans?', a: 'Yes! Pro comes with a 14-day free trial, no credit card required.' },
              { q: 'What happens to my links if I downgrade?', a: 'Your existing links stay active. New link creation is limited to your plan\'s quota going forward.' },
              { q: 'Do you offer discounts for annual billing?', a: 'Yes — pay annually and save 20% on both Pro and Business plans.' },
            ].map((faq) => (
              <div key={faq.q} className="glass-card p-5">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
