'use client';

import React, { useState } from 'react';

interface ShortenedLink {
  original: string;
  short: string;
  clicks: number;
  createdAt: string;
}

export default function ShortenForm() {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ShortenedLink | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const isValidUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    const urlToShorten = url.startsWith('http') ? url : `https://${url}`;

    if (!isValidUrl(urlToShorten)) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);

    // Simulate API call – replace with real endpoint
    await new Promise(r => setTimeout(r, 1200));

    const shortCode = customAlias.trim() || Math.random().toString(36).slice(2, 8);
    setResult({
      original: urlToShorten,
      short: `trimurl.io/${shortCode}`,
      clicks: 0,
      createdAt: new Date().toLocaleDateString(),
    });

    setLoading(false);
    setUrl('');
    setCustomAlias('');
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(`https://${result.short}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up">
      <form onSubmit={handleSubmit} className="glass-card p-6 shadow-2xl">
        {/* Main input row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              id="url-input"
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="input-dark"
              autoFocus
            />
          </div>
          <button
            id="shorten-btn"
            type="submit"
            disabled={loading}
            className="btn-gradient px-7 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-2">
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Trimming…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Shorten
                </>
              )}
            </span>
          </button>
        </div>

        {/* Advanced Options */}
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            <svg className={`w-3 h-3 transition-transform duration-200 ${showAdvanced ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
            Advanced options
          </button>
          {showAdvanced && (
            <div className="mt-3 animate-fade-up">
              <input
                id="custom-alias-input"
                type="text"
                value={customAlias}
                onChange={e => setCustomAlias(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ''))}
                placeholder="Custom alias (e.g. my-link)"
                className="input-dark text-sm"
                maxLength={30}
              />
              <p className="text-xs text-slate-500 mt-1.5 ml-1">trimurl.io/{customAlias || 'your-alias'}</p>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-3 flex items-center gap-2 text-red-400 text-sm animate-fade-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
      </form>

      {/* Result Card */}
      {result && (
        <div className="mt-4 glass-card p-5 border border-violet-500/20 animate-fade-up">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-medium">Your shortened link</p>
              <a
                href={`https://${result.short}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity break-all"
              >
                {result.short}
              </a>
              <p className="text-xs text-slate-500 mt-1 truncate">{result.original}</p>
            </div>
            <button
              id="copy-link-btn"
              onClick={handleCopy}
              className={`btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 flex-shrink-0 transition-all ${copied ? 'copy-success' : ''}`}
            >
              <span className="flex items-center gap-2">
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </span>
            </button>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {result.clicks} clicks
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Created {result.createdAt}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
