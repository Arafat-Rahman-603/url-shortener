export const dynamic = 'force-static';

export default function PrivacyPage() {
  const lastUpdated = 'May 9, 2026';

  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Legal
          </span>
          <h1 className="text-5xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="glass-card p-8 prose-invert space-y-8 text-slate-300 leading-relaxed">

          <div>
            <p className="text-slate-400">
              At TrimURL (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), your privacy is our priority. This Privacy Policy explains what
              information we collect, how we use it, and your rights regarding your data when you use
              our URL shortening platform at trimurl.io.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              content: `We collect the following categories of data:

**Account information:** When you register, we collect your name, email address, and a hashed password. If you sign up via Google OAuth, we receive your name, email, and profile photo from Google.

**Link data:** URLs you submit for shortening, any custom alias you choose, and optional expiry settings.

**Usage analytics:** When someone clicks your short link, we record the timestamp, approximate geographic location (country/city level), device type, browser, and referrer URL. We do not collect or store IP addresses beyond a 24-hour window used for abuse prevention.

**Log data:** Standard server access logs (request time, response code, bytes transferred). Retained for 30 days.`,
            },
            {
              title: '2. How We Use Your Information',
              content: `We use collected information to:

- Provide, operate, and improve the TrimURL platform
- Deliver real-time and historical click analytics to you
- Send transactional emails (password resets, billing receipts)
- Detect and prevent abuse, spam, and malicious link sharing
- Comply with applicable legal obligations

We do **not** sell your personal data to third parties. We do not use your data to serve you advertising.`,
            },
            {
              title: '3. Data Sharing',
              content: `We share data only in the following limited circumstances:

**Service providers:** We use trusted third-party services (cloud hosting, email delivery, payment processing) who process data solely on our behalf and are bound by data processing agreements.

**Legal requirements:** We may disclose data if required by law, court order, or to protect our rights, property, or the safety of our users.

**Business transfers:** In the event of a merger or acquisition, user data may be transferred, subject to the same privacy protections.`,
            },
            {
              title: '4. Data Retention',
              content: `We retain your account data for as long as your account is active. Link click analytics are retained for 24 months for Pro and Business plans, and 3 months for Free plans. You may request deletion of your data at any time by contacting privacy@trimurl.io.`,
            },
            {
              title: '5. Cookies',
              content: `We use essential cookies to maintain your authenticated session and to prevent CSRF attacks. We do not use advertising or tracking cookies. We use one analytics cookie (privacy-preserving, no cross-site tracking) to understand aggregate platform usage.`,
            },
            {
              title: '6. Your Rights',
              content: `Depending on your location, you may have the right to:

- **Access** the personal data we hold about you
- **Correct** inaccurate data
- **Delete** your account and associated data
- **Export** your data in a machine-readable format
- **Opt out** of any non-essential data processing

To exercise these rights, email us at privacy@trimurl.io. We will respond within 30 days.`,
            },
            {
              title: '7. Security',
              content: `We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, bcrypt password hashing, and regular third-party security audits. No system is 100% secure, and we encourage you to use a strong, unique password.`,
            },
            {
              title: '8. Changes to This Policy',
              content: `We may update this policy periodically. We will notify you of significant changes via email or a prominent notice on our platform. Continued use after changes constitutes acceptance.`,
            },
            {
              title: '9. Contact Us',
              content: `For privacy inquiries, contact us at:\n\nTrimURL Privacy Team\nprivacy@trimurl.io\n123 Tech Street, San Francisco, CA 94105, USA`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold text-slate-300 mt-3">{line.replace(/\*\*/g, '')}</p>;
                  }
                  if (line.startsWith('**') && line.includes('**')) {
                    const parts = line.split('**');
                    return (
                      <p key={i} className="mt-2">
                        {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-slate-300">{p}</strong> : p)}
                      </p>
                    );
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="ml-4 mt-1 list-disc">{line.slice(2)}</li>;
                  }
                  return line ? <p key={i} className="mt-2">{line}</p> : <br key={i} />;
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
