type P = { size?: number };
const base = (size: number) => ({
  width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true,
});

export const Monitor = ({ size = 26 }: P) => (<svg {...base(size)}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></svg>);
export const Growth = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>);
export const Headset = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M4 12a8 8 0 0 1 16 0" /><rect x="2" y="12" width="4" height="7" rx="1.5" /><rect x="18" y="12" width="4" height="7" rx="1.5" /></svg>);
export const Layers = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>);
export const Wrench = ({ size = 18 }: P) => (<svg {...base(size)}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" /></svg>);
export const Chat = ({ size = 18 }: P) => (<svg {...base(size)}><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21z" /></svg>);
export const Bubble = ({ size = 20 }: P) => (<svg {...base(size)}><path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l.9-5.3A8 8 0 1 1 21 12z" /></svg>);
export const Doc = ({ size = 20 }: P) => (<svg {...base(size)}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></svg>);
export const Code = ({ size = 20 }: P) => (<svg {...base(size)}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>);
export const Mail = ({ size = 18 }: P) => (<svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
export const Pin = ({ size = 18 }: P) => (<svg {...base(size)}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
export const Clock = ({ size = 18 }: P) => (<svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const Camera = ({ size = 28 }: P) => (<svg {...base(size)} strokeWidth={1.6}><rect x="3" y="6" width="18" height="14" rx="2" /><circle cx="12" cy="13" r="3.5" /><path d="M8 6l1.5-2h5L16 6" /></svg>);
export const Menu = ({ size = 22 }: P) => (<svg {...base(size)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const Close = ({ size = 22 }: P) => (<svg {...base(size)}><path d="M6 6l12 12M18 6L6 18" /></svg>);
