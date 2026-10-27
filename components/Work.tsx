'use client';
import { useEffect, useRef, useState } from 'react';
import { projects, type Project } from '@/lib/data';

const pad = (n: number) => (n < 10 ? '0' + n : String(n));

/** A drawn preview of the site, shown while the live site loads (or when embedding is off). */
function MockSite({ p }: { p: Project }) {
  return (
    <div className="wmock" style={{ background: p.siteBg, color: p.siteFg }}>
      <div className="wbody">
        <div className="wnav"><b>{p.name}</b><span className="wlinks"><i /><i /><i /><i /></span><span className="wpill" style={{ background: p.accent }} /></div>
        <p className="wtag" style={{ color: p.accent }}>{p.tag}</p>
        <p className="whead">{p.head}</p>
        <p className="wsub">{p.sub}</p>
        <div className="wbtns"><span style={{ background: p.accent, color: p.ctaFg }}>{p.cta}</span><span className="wghost">Learn more</span></div>
        <div className="wtiles">{p.tiles?.map((t) => <div className="wtile" key={t.v + t.l}><b>{t.v}</b><span>{t.l}</span></div>)}</div>
      </div>
    </div>
  );
}

/** The real website, shown live inside a browser frame and scaled down to fit. */
function LiveScreen({ p, load }: { p: Project; load: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1280));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="screen" ref={ref}>
      <MockSite p={p} />
      {load && (
        <div className="livewrap" style={{ opacity: loaded ? 1 : 0, transition: 'opacity .5s' }}>
          <iframe
            src={p.url}
            title={`Live preview of ${p.name}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      )}
    </div>
  );
}

function Preview({ p, load }: { p: Project; load: boolean }) {
  if (p.type === 'social') {
    return (
      <div className="smock">
        <div className="post">
          <div className="phead"><span className="pav" style={{ background: p.accent }}>{p.initials}</span><span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}><b>{p.handle}</b><span>{p.channel}</span></span></div>
          <div className="pimg" style={{ background: p.accent }}><span>{p.head}</span></div>
          <div className="pfoot"><span className="pline" /><span className="pline short" /></div>
        </div>
        <div className="insight"><span className="ilabel">{p.chipLabel}</span><span className="ival">{p.chip}</span></div>
      </div>
    );
  }
  return (
    <div className="browser">
      <div className="wbar"><i /><i /><i /><span>{p.domain}</span></div>
      {p.embed && p.url ? <LiveScreen p={p} load={load} /> : <div className="screen"><MockSite p={p} /></div>}
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(0);
  const [near, setNear] = useState<boolean[]>(() => projects.map(() => false));
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Which project is in the middle of the screen
    const centre = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) setActive(Number((en.target as HTMLElement).dataset.i));
      });
    }, { rootMargin: '-42% 0px -48% 0px' });
    // Start loading a live site shortly before it scrolls into view
    const soon = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const i = Number((en.target as HTMLElement).dataset.i);
          setNear((prev) => (prev[i] ? prev : prev.map((v, j) => (j === i ? true : v))));
        }
      });
    }, { rootMargin: '600px 0px' });
    panels.current.forEach((el) => { if (el) { centre.observe(el); soon.observe(el); } });
    return () => { centre.disconnect(); soon.disconnect(); };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panels.current[i]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  };

  return (
    <div className="files">
      <aside className="index" aria-label="Project list">
        <div className="idxhead"><span>Project</span><span className="idxcount">{pad(active + 1)} <span style={{ color: '#A7A3BA' }}>/ {pad(projects.length)}</span></span></div>
        <div className="idxprog"><i style={{ width: `${Math.round(((active + 1) / projects.length) * 100)}%` }} /></div>
        {projects.map((p, i) => (
          <div className={i === active ? 'row on' : 'row'} key={p.name}>
            <button className="rowbtn" type="button" onClick={() => goTo(i)} aria-current={i === active}>
              <span className="rname">{p.name}</span>
              <span className="rkind">{p.kind}</span>
            </button>
            {i === active && (
              <div className="rbody">
                <p>{p.desc}</p>
                {p.url ? <a className="rlink" href={p.url} target="_blank" rel="noopener">Visit live site ↗</a> : <span className="rnote">{p.note}</span>}
              </div>
            )}
          </div>
        ))}
      </aside>

      <div className="panels">
        {projects.map((p, i) => (
          <div className={i === active ? 'panel on' : 'panel'} key={p.name} data-i={i} ref={(el) => { panels.current[i] = el; }}>
            <div className="frame" style={{ background: p.frame }}>
              <span className="fnum" aria-hidden="true">{pad(i + 1)}</span>
              <Preview p={p} load={near[i]} />
              {p.embed && p.url && <span className="livebadge" aria-hidden="true"><i />Live site</span>}
              {p.url && (
                <a className="framelink" href={p.url} target="_blank" rel="noopener" aria-label={`Open the live ${p.name} site in a new tab`}>
                  <span className="flpill">Visit live site <span aria-hidden="true">↗</span></span>
                </a>
              )}
            </div>
            <div className="mcap">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
                <b style={{ fontFamily: 'var(--head)', fontSize: 20 }}>{p.name}</b><span className="rkind">{p.kind}</span>
              </div>
              <p>{p.desc}</p>
              {p.url ? <a className="rlink" href={p.url} target="_blank" rel="noopener">Visit live site ↗</a> : <span className="rnote">{p.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
