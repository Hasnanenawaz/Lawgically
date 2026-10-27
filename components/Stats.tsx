'use client';
import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let done = false;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting || done) return;
      done = true;
      let start: number | null = null;
      const tick = (t: number) => {
        if (start === null) start = t;
        const x = Math.min(1, (t - start) / 1600);
        setP(1 - Math.pow(1 - x, 3));
        if (x < 1) raf = requestAnimationFrame(tick);
      };
      setP(0);
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="proof reveal" ref={ref}>
      <div className="pstat"><span className="pnum">{Math.round(50 * p)}<small>k+</small></span><span className="plabel">Community members grown in 4 months<em>Budding Mariners</em></span></div>
      <div className="pstat"><span className="pnum">₹3.1<small>L</small></span><span className="plabel">Monthly revenue, up from ₹40k<em>Budding Mariners</em></span></div>
      <div className="pstat"><span className="pnum">{Math.round(300 * p)}<small>%</small></span><span className="plabel">Community growth in 2 months<em>The Jus Anima</em></span></div>
      <div className="pstat"><span className="pnum">+{Math.round(20 * p)}<small>%</small></span><span className="plabel">Revenue growth from B2B marketing<em>Stamp2Fly</em></span></div>
    </div>
  );
}
