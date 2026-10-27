'use client';
import { useState } from 'react';
import { pricing } from '@/lib/data';
import { pickService } from './pickService';

export default function Pricing() {
  const [tab, setTab] = useState(0);
  const current = pricing[tab];
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Choose a service">
        {pricing.map((t, i) => (
          <button key={t.label} className={i === tab ? 'tabbtn on' : 'tabbtn'} type="button" role="tab" aria-selected={i === tab} onClick={() => setTab(i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="plans" role="tabpanel" key={current.label}>
        {current.plans.map((pl) => {
          const svc = pl.cta === 'Get a free consultation' ? 'All three / not sure yet' : current.service;
          return (
            <article className={pl.rec ? 'plan rec' : 'plan'} key={pl.name}>
              {pl.rec && <span className="recflag">Recommended</span>}
              <h3>{pl.name}</h3>
              <p className="pfor">{pl.for}</p>
              <p className="price">{pl.price}<small>{pl.per}</small></p>
              <ul>{pl.items.map((it) => <li key={it}><span className="tick">✓</span>{it}</li>)}</ul>
              <a className="btn btn-primary" href="#contact" style={{ minHeight: 48 }} onClick={(e) => { e.preventDefault(); pickService(svc); }}>
                {pl.cta} <span className="arr">→</span>
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
}
