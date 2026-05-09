'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ShortenForm from '@/componentes/ShortenForm';

interface LinkItem {
  id: string;
  original: string;
  short: string;
  clicks: number;
  createdAt: string;
  status: 'active' | 'inactive';
}

const mockLinks: LinkItem[] = [
  { id: '1', original: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', short: 'trimurl.io/yt-rick', clicks: 1482, createdAt: '2026-05-01', status: 'active' },
  { id: '2', original: 'https://docs.google.com/spreadsheets/d/very-long-doc-id/edit#gid=0', short: 'trimurl.io/gsheet', clicks: 347, createdAt: '2026-05-03', status: 'active' },
  { id: '3', original: 'https://github.com/your-org/your-very-long-repository-name/blob/main/README.md', short: 'trimurl.io/gh-repo', clicks: 89, createdAt: '2026-05-07', status: 'active' },
  { id: '4', original: 'https://figma.com/file/some-long-design-token-id/My-Design-System', short: 'trimurl.io/figma', clicks: 214, createdAt: '2026-05-08', status: 'inactive' },
];

function LinkRow({ link }: { link: LinkItem }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`https://${link.short}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-violet-500/25 transition-all duration-300">
      {/* Status dot */}
      <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 sm:mt-0 ${link.status === 'active' ? 'bg-emerald-400' : 'bg-slate-600'}`} />

      {/* Link info */}
      <div className="flex-1 min-w-0">
        <a href={`https://${link.short}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold gradient-text hover:opacity-80 transition-opacity">
          {link.short}
        </a>
        <p className="text-xs text-slate-500 truncate mt-0.5">{link.original}</p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-5 text-xs text-slate-500 flex-shrink-0">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-slate-300 font-semibold">{link.clicks.toLocaleString()}</span>
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {link.createdAt}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
            copied ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
        <button
          className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/10 flex items-center justify-center transition-all duration-200"
          aria-label="Delete link"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [search, setSearch] = useState('');
  const filtered = mockLinks.filter(
    l => l.short.includes(search.toLowerCase()) || l.original.includes(search.toLowerCase())
  );

  const totalClicks = mockLinks.reduce((a, l) => a + l.clicks, 0);

  return (
    <div className="max-w-5xl mx-auto px-5 py-12 pt-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white mb-1">Dashboard</h1>
        <p className="text-slate-400">Manage and track all your shortened links</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Links', value: mockLinks.length, icon: '🔗' },
          { label: 'Total Clicks', value: totalClicks.toLocaleString(), icon: '👆' },
          { label: 'Active Links', value: mockLinks.filter(l => l.status === 'active').length, icon: '✅' },
          { label: 'Avg. Clicks', value: Math.round(totalClicks / mockLinks.length), icon: '📊' },
        ].map(s => (
          <div key={s.label} className="glass-card p-4">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* New link form */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Shorten a new link</h2>
        <ShortenForm />
      </div>

      {/* Links table */}
      <div>
        <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
          <h2 className="text-lg font-bold text-white">Your Links</h2>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="dashboard-search"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search links…"
              className="input-dark pl-9 py-2 text-sm w-56"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map(link => <LinkRow key={link.id} link={link} />)
          ) : (
            <div className="glass-card p-12 text-center text-slate-500">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <p>No links found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
