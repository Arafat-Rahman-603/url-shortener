export const dynamic = 'force-static';

export default function TermsPage() {
  const lastUpdated = 'May 9, 2026';

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using TrimURL (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service. These Terms apply to all users, including visitors, registered users, and paying customers.',
    },
    {
      title: '2. Description of Service',
      content: 'TrimURL is a URL shortening platform that allows users to shorten long URLs, generate QR codes, and track click analytics. We offer Free, Pro, and Business subscription tiers. Features vary by plan as described on our Pricing page.',
    },
    {
      title: '3. User Accounts',
      content: `You must be at least 13 years old to create an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.

You agree to provide accurate and complete information when creating your account and to update it promptly if it changes.

You may not share your account credentials or allow others to access your account. Each account is for use by a single individual, unless you are on a Business plan with multiple seats.`,
    },
    {
      title: '4. Acceptable Use',
      content: `You agree NOT to use TrimURL to shorten URLs that:

- Distribute malware, spyware, ransomware, or any malicious code
- Facilitate phishing, identity theft, or social engineering attacks
- Contain or distribute child sexual abuse material (CSAM)
- Promote, facilitate, or engage in illegal activities
- Violate any applicable local, national, or international law
- Spam users, including through unsolicited bulk messaging
- Infringe on the intellectual property rights of others

We actively scan destination URLs for malware and reserve the right to deactivate any link that violates these terms without notice.`,
    },
    {
      title: '5. Intellectual Property',
      content: 'The TrimURL platform, including its design, code, trademarks, and content, is owned by TrimURL Inc. and protected by copyright and trademark laws. You retain ownership of the URLs and content you submit. By using the Service, you grant us a limited, non-exclusive license to process your URLs solely to provide the Service.',
    },
    {
      title: '6. Subscriptions and Billing',
      content: `Paid plans are billed monthly or annually in advance. You authorize us to charge your payment method on the billing date. All fees are non-refundable except where required by law or our 14-day money-back guarantee.

If your payment fails, we will attempt to retry 3 times over 7 days. After that, your account will be downgraded to the Free plan and paid features will be disabled.

Prices may change with 30 days' notice. Continued use after the notice period constitutes acceptance.`,
    },
    {
      title: '7. Disclaimer of Warranties',
      content: 'The Service is provided "as is" and "as available" without warranty of any kind. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
    },
    {
      title: '8. Limitation of Liability',
      content: 'To the maximum extent permitted by law, TrimURL shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business, arising from your use of the Service. Our total liability to you for any claim shall not exceed the amount you paid us in the 3 months preceding the claim.',
    },
    {
      title: '9. Termination',
      content: 'You may delete your account at any time from your account settings. We may suspend or terminate your account if you violate these Terms, with or without notice. Upon termination, your links will be deactivated and your data will be deleted within 30 days.',
    },
    {
      title: '10. Governing Law',
      content: 'These Terms are governed by and construed in accordance with the laws of the State of California, USA, without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in San Francisco County, California.',
    },
    {
      title: '11. Changes to Terms',
      content: 'We may modify these Terms at any time. We will provide at least 14 days\' notice of material changes via email or prominent platform notice. Your continued use after the notice period constitutes acceptance of the updated Terms.',
    },
    {
      title: '12. Contact',
      content: 'For questions about these Terms, contact us at legal@trimurl.io or:\n\nTrimURL Inc.\n123 Tech Street\nSan Francisco, CA 94105, USA',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Legal
          </span>
          <h1 className="text-5xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Quick nav */}
        <div className="glass-card p-5 mb-8">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">Quick navigation</p>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.title}
                href={`#${s.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="px-3 py-1 rounded-lg text-xs text-slate-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 space-y-8">
          <p className="text-slate-400 text-sm leading-relaxed">
            Please read these Terms of Service carefully before using TrimURL. By using TrimURL,
            you agree to these terms. If you have questions, contact us at legal@trimurl.io.
          </p>

          <div className="h-px bg-white/5" />

          {sections.map((section) => (
            <div key={section.title} id={section.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <div className="text-slate-400 text-sm leading-relaxed space-y-2">
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('- ')) {
                    return <li key={i} className="ml-4 list-disc">{line.slice(2)}</li>;
                  }
                  return line ? <p key={i}>{line}</p> : null;
                })}
              </div>
              <div className="mt-6 h-px bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
