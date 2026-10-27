'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, Close } from './Icons';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'About' },
  { href: '#faq', label: 'Resources' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap">
        <div className="navin">
          <a className="logo" href="#top" aria-label="Lawgically IT.support home">
            <Image className="mark" src="/logo-mark.png" alt="" width={46} height={46} priority />
            <span className="wm"><b>Lawgically</b><i>IT.support</i></span>
          </a>
          <nav className="links" aria-label="Main">
            {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <a className="btn btn-primary navcta" href="#contact" style={{ minHeight: 46, padding: '0 20px', fontSize: 15 }}>
              Get a free consultation <span className="arr">→</span>
            </a>
            <button className="menubtn" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="mobmenu" aria-label="Mobile">
            {links.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
            <a className="btn btn-primary" href="#contact" onClick={close} style={{ marginTop: 8, justifyContent: 'center' }}>Get a free consultation →</a>
          </nav>
        )}
      </div>
    </header>
  );
}
