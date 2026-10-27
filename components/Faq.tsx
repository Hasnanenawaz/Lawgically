'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button className="qbtn" type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}>
              <span>{f.q}</span>
              <span className="pm" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="ans" id={`faq-${i}`}>{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
