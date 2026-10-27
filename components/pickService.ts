import type { Service } from '@/lib/data';

// Any button can call pickService() to pre-select a service in the contact form
// and scroll the visitor to it. The form listens for this event.
export const PICK_EVENT = 'lawgically:pick-service';

export function pickService(service: Service) {
  window.dispatchEvent(new CustomEvent<Service>(PICK_EVENT, { detail: service }));
  const el = document.getElementById('contact');
  if (el) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
}
