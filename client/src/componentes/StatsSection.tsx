'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { id: 'stat-links', value: 2400000, label: 'Links Shortened', suffix: '+' },
  { id: 'stat-users', value: 85000, label: 'Active Users', suffix: '+' },
  { id: 'stat-clicks', value: 500000000, label: 'Clicks Tracked', suffix: '+' },
  { id: 'stat-uptime', value: 99.9, label: 'Uptime SLA', suffix: '%' },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, start]);

  return count;
}

function formatNum(n: number, end: number) {
  if (end >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (end >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toFixed(end % 1 !== 0 ? 1 : 0);
}

function StatItem({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(stat.value, 2200, animate);
  return (
    <div id={stat.id} className="text-center group">
      <div className="stat-number mb-1">
        {formatNum(count, stat.value)}{stat.suffix}
      </div>
      <p className="text-slate-400 text-sm font-medium tracking-wide">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-10 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map(s => (
              <StatItem key={s.id} stat={s} animate={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
