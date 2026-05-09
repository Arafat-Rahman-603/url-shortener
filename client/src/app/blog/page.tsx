export const dynamic = 'force-static';

import Link from 'next/link';

const posts = [
  {
    slug: 'why-link-shorteners-matter',
    tag: 'Product',
    tagColor: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    title: 'Why Link Shorteners Are Still Essential in 2026',
    excerpt: 'With social media algorithms evolving and attention spans shrinking, clean trackable links have never been more important for marketers and developers alike.',
    author: 'Alex Carter',
    authorInitials: 'AC',
    authorColor: 'from-violet-500 to-purple-600',
    readTime: '5 min read',
    date: 'May 7, 2026',
  },
  {
    slug: 'announcing-trimurl-v2',
    tag: 'Announcement',
    tagColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    title: 'Announcing TrimURL v2.0 — Rebuilt from the Ground Up',
    excerpt: 'We rewrote the entire platform to be faster, more reliable, and more beautiful. Here\'s what changed and why we made these decisions.',
    author: 'Sam Rivera',
    authorInitials: 'SR',
    authorColor: 'from-cyan-500 to-blue-600',
    readTime: '8 min read',
    date: 'March 1, 2026',
  },
  {
    slug: 'utm-parameters-guide',
    tag: 'Guide',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    title: 'The Complete Guide to UTM Parameters in 2026',
    excerpt: 'Learn how to structure UTM parameters for Google Analytics 4, how to automate them, and why consistent naming conventions matter for attribution.',
    author: 'Taylor Patel',
    authorInitials: 'TP',
    authorColor: 'from-orange-500 to-amber-600',
    readTime: '12 min read',
    date: 'April 15, 2026',
  },
  {
    slug: 'api-best-practices',
    tag: 'Engineering',
    tagColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    title: 'How We Built a Sub-50ms Redirect API at Global Scale',
    excerpt: 'A deep dive into our edge infrastructure, caching strategy, and database design that allows TrimURL to redirect 500M+ requests per month under 50ms.',
    author: 'Sam Rivera',
    authorInitials: 'SR',
    authorColor: 'from-cyan-500 to-blue-600',
    readTime: '15 min read',
    date: 'April 3, 2026',
  },
  {
    slug: 'link-analytics-for-creators',
    tag: 'Guide',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    title: 'How Creators Use Link Analytics to Grow Their Audience',
    excerpt: 'From understanding which platforms drive the most traffic to A/B testing link copy, here\'s how top creators leverage TrimURL analytics.',
    author: 'Morgan Kim',
    authorInitials: 'MK',
    authorColor: 'from-emerald-500 to-teal-600',
    readTime: '7 min read',
    date: 'March 20, 2026',
  },
  {
    slug: 'zapier-integration-launch',
    tag: 'Announcement',
    tagColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    title: 'TrimURL is Now on Zapier — Automate Your Links',
    excerpt: 'Connect TrimURL to 5,000+ apps with our official Zapier integration. Auto-shorten links from Google Sheets, Notion, Airtable, and more.',
    author: 'Casey Nguyen',
    authorInitials: 'CN',
    authorColor: 'from-violet-500 to-indigo-600',
    readTime: '4 min read',
    date: 'February 28, 2026',
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen pt-24 pb-20 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-violet-500/30 text-violet-400 mb-4">
            Blog
          </span>
          <h1 className="text-5xl font-black text-white mb-4">
            Thoughts, guides &amp; <span className="gradient-text">updates</span>
          </h1>
          <p className="text-slate-400 text-lg">Product news, engineering deep dives, and tips from the TrimURL team.</p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="block glass-card p-8 mb-8 hover:border-violet-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${featured.tagColor}`}>{featured.tag}</span>
            <span className="text-slate-500 text-xs">{featured.readTime}</span>
            <span className="text-slate-500 text-xs">{featured.date}</span>
            <span className="ml-auto text-xs text-violet-400 font-semibold group-hover:underline">Featured →</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:gradient-text transition-all">{featured.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-4">{featured.excerpt}</p>
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${featured.authorColor} flex items-center justify-center text-white text-xs font-bold`}>
              {featured.authorInitials}
            </div>
            <span className="text-slate-400 text-sm">{featured.author}</span>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-6 hover:border-violet-500/30 transition-all duration-300 group flex flex-col">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${post.tagColor}`}>{post.tag}</span>
                <span className="text-slate-500 text-xs">{post.readTime}</span>
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-violet-300 transition-colors leading-snug">{post.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${post.authorColor} flex items-center justify-center text-white text-xs font-bold`}>
                    {post.authorInitials}
                  </div>
                  <span className="text-slate-500 text-xs">{post.author}</span>
                </div>
                <span className="text-slate-600 text-xs">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
