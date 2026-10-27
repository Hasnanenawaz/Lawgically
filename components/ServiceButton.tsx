'use client';
import type { Service } from '@/lib/data';
import { pickService } from './pickService';

export default function ServiceButton({ service, children, small }: { service: Service; children: React.ReactNode; small?: boolean }) {
  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => pickService(service)}
      style={small ? { minHeight: 48, padding: '0 20px', fontSize: 15 } : undefined}
    >
      {children} <span className="arr">→</span>
    </button>
  );
}
