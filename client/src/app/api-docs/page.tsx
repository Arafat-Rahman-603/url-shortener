export const dynamic = 'force-static';

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/shorten',
    desc: 'Shorten a URL',
    color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    body: `{
  "url": "https://example.com/very/long/url",
  "alias": "my-link",       // optional
  "expires_at": "2026-12-31" // optional
}`,
    response: `{
  "id": "clx1a2b3c",
  "short_url": "https://trimurl.io/my-link",
  "original_url": "https://example.com/very/long/url",
  "clicks": 0,
  "created_at": "2026-05-09T12:00:00Z"
}`,
  },
  {
    method: 'GET',
    path: '/api/v1/links',
    desc: 'List all links',
    color: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    body: null,
    response: `{
  "data": [ { "id": "...", "short_url": "...", "clicks": 42 } ],
  "total": 100,
  "page": 1
}`,
  },
  {
    method: 'GET',
    path: '/api/v1/links/:id/analytics',
    desc: 'Get link analytics',
    color: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    body: null,
    response: `{
  "total_clicks": 1482,
  "unique_clicks": 994,
  "top_countries": [{ "country": "US", "clicks": 540 }],
  "referrers": [{ "referrer": "twitter.com", "clicks": 200 }]
}`,
  },
  {
    method: 'DELETE',
    path: '/api/v1/links/:id',
    desc: 'Delete a link',
    color: 'bg-red-500/15 text-red-400 border-red-500/30',
    body: null,
    response: `{ "message": "Link deleted successfully" }`,
  },
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            API Reference
          </span>
          <h1 className="text-5xl font-black text-white mb-4">
            <span className="gradient-text">REST API</span> Docs
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Integrate TrimURL into your apps, workflows, and automations using our simple REST API.
            All endpoints return JSON and require an API key.
          </p>
        </div>

        {/* Authentication */}
        <div className="glass-card p-6 mb-8 border-violet-500/20">
          <h2 className="text-white font-bold text-lg mb-3">Authentication</h2>
          <p className="text-slate-400 text-sm mb-4">
            Pass your API key in the <code className="text-violet-300 bg-violet-500/10 px-1.5 py-0.5 rounded">Authorization</code> header on every request.
          </p>
          <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-slate-300 border border-white/5">
            <span className="text-slate-500">curl</span> https://api.trimurl.io/v1/links \<br />
            {'  '}<span className="text-yellow-400">-H</span> <span className="text-emerald-400">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span>
          </div>
        </div>

        {/* Base URL */}
        <div className="glass-card p-5 mb-10 flex items-center gap-4">
          <span className="text-slate-400 text-sm font-medium flex-shrink-0">Base URL</span>
          <code className="text-violet-300 font-mono text-sm bg-violet-500/10 px-3 py-1.5 rounded-lg">
            https://api.trimurl.io/v1
          </code>
        </div>

        {/* Endpoints */}
        <h2 className="text-xl font-bold text-white mb-5">Endpoints</h2>
        <div className="space-y-6">
          {endpoints.map((ep) => (
            <div key={ep.path} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border font-mono ${ep.color}`}>
                  {ep.method}
                </span>
                <code className="text-slate-200 font-mono text-sm">{ep.path}</code>
                <span className="text-slate-500 text-sm">— {ep.desc}</span>
              </div>

              {ep.body && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Request body</p>
                  <pre className="bg-black/40 rounded-xl p-4 text-sm text-slate-300 font-mono overflow-x-auto border border-white/5">{ep.body}</pre>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Response</p>
                <pre className="bg-black/40 rounded-xl p-4 text-sm text-slate-300 font-mono overflow-x-auto border border-white/5">{ep.response}</pre>
              </div>
            </div>
          ))}
        </div>

        {/* Rate limits */}
        <div className="glass-card p-6 mt-8">
          <h2 className="text-white font-bold mb-3">Rate Limits</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b border-white/5">
                  <th className="pb-3 font-medium">Plan</th>
                  <th className="pb-3 font-medium">Requests / month</th>
                  <th className="pb-3 font-medium">Burst limit</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  ['Free', '1,000', '10 / min'],
                  ['Pro', '10,000', '100 / min'],
                  ['Business', 'Unlimited', '1,000 / min'],
                ].map(([plan, req, burst]) => (
                  <tr key={plan} className="border-b border-white/5">
                    <td className="py-3">{plan}</td>
                    <td className="py-3">{req}</td>
                    <td className="py-3">{burst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
