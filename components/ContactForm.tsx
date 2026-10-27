'use client';
import { useEffect, useState } from 'react';
import { SERVICES, type Service, waLink } from '@/lib/data';
import { PICK_EVENT } from './pickService';

const hints: Record<Service, string> = {
  'Website Development': 'What does your business do, and what should the site help with?',
  'Digital Marketing': 'What do you sell, and where do your customers come from today?',
  'IT Support & Maintenance': 'What is the problem? e.g. my website is down, I need a business email',
  'All three / not sure yet': 'Tell us a little about your business and what is not working.',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState<Service>('Website Development');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onPick = (e: Event) => { setService((e as CustomEvent<Service>).detail); setReady(false); };
    window.addEventListener(PICK_EVENT, onPick);
    return () => window.removeEventListener(PICK_EVENT, onPick);
  }, []);

  const text = [
    'Hi Lawgically IT.support, I would like a free consultation.', '',
    `Name: ${name.trim()}`, `Contact: ${contact.trim()}`, `Service: ${service}`,
    ...(msg.trim() ? [`Details: ${msg.trim()}`] : []),
  ].join('\n');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setErr('Please add your name so we know who to reply to.');
    if (!contact.trim()) return setErr('Please add a phone number or email so we can reach you.');
    setErr(''); setCopied(false); setReady(true);
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setCopied(true); } catch { /* clipboard blocked */ }
  };

  return (
    <form className="form reveal" onSubmit={submit} noValidate>
      {!ready ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="two">
            <div className="field"><label htmlFor="f-name">Your name</label><input className="inp" id="f-name" name="name" type="text" autoComplete="name" value={name} onChange={(e) => { setName(e.target.value); setErr(''); }} /></div>
            <div className="field"><label htmlFor="f-contact">Phone or email</label><input className="inp" id="f-contact" name="contact" type="text" autoComplete="tel" inputMode="text" value={contact} onChange={(e) => { setContact(e.target.value); setErr(''); }} /></div>
          </div>
          <div className="field">
            <label htmlFor="f-service">What do you need help with?</label>
            <select className="inp" id="f-service" name="service" value={service} onChange={(e) => setService(e.target.value as Service)}>
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="field"><label htmlFor="f-msg">Tell us a little more <span>(optional)</span></label><textarea className="inp" id="f-msg" name="message" placeholder={hints[service]} value={msg} onChange={(e) => setMsg(e.target.value)} /></div>
          {err && <p className="err" role="alert">{err}</p>}
          <button className="btn btn-primary" type="submit" style={{ alignSelf: 'flex-start' }}>Get a free consultation <span className="arr">→</span></button>
        </div>
      ) : (
        <div className="done" role="status">
          <h3 style={{ fontSize: 24 }}>Your message is ready</h3>
          <p style={{ color: '#4B4763', lineHeight: 1.6 }}>Tap the button to open WhatsApp with this message filled in, then press send.</p>
          <pre>{text}</pre>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={waLink(text)} target="_blank" rel="noopener">Open in WhatsApp <span className="arr">→</span></a>
            <button className="btn btn-quiet" type="button" onClick={copy}>{copied ? 'Copied' : 'Copy message'}</button>
            <button className="btn btn-quiet" type="button" onClick={() => setReady(false)}>Edit</button>
          </div>
        </div>
      )}
    </form>
  );
}
