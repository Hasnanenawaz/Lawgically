import Image from 'next/image';
import Nav from '@/components/Nav';
import Work from '@/components/Work';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import ServiceButton from '@/components/ServiceButton';
import { Monitor, Growth, Headset, Layers, Wrench, Chat, Bubble, Doc, Code, Mail, Pin, Clock, Camera } from '@/components/Icons';
import { site, waLink, experience } from '@/lib/data';

const Tick = () => <span className="tick">✓</span>;

export default function Home() {
  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section className="hero dark" id="top">
        <div className="heroglow" aria-hidden="true" />
        <div className="wrap herogrid">
          <div className="herocopy">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Web &amp; AI engineering agency · Raipur, India</span>
            <h1 className="h1">Your business deserves <span>better digital support.</span></h1>
            <p className="lede" style={{ fontSize: 19, color: '#CFCBDD' }}>From building your website to reaching new customers and keeping your technology running, get the digital help you need in one place.</p>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="btn btn-primary" href="#contact">Get a free consultation <span className="arr">→</span></a>
              <a className="textlink heroquiet" href="#services" style={{ color: '#F7F5F0' }}>Explore services <span aria-hidden="true">↓</span></a>
            </div>
            <div className="promises">
              <div className="promise"><span className="pico"><Monitor size={18} /></span>We build your digital presence</div>
              <div className="promise"><span className="pico"><Wrench /></span>We keep your technology working</div>
              <div className="promise"><span className="pico"><Growth size={18} /></span>We help you attract more customers</div>
            </div>
          </div>

          <div className="heroart" aria-hidden="true">
            <div className="shot a">
              <div className="shotbar"><i /><i /><i /><span>hasnanenawaz.in</span></div>
              <div style={{ background: '#0D0D12', color: '#F2EFE8', padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#9A97A6', letterSpacing: '.1em' }}>GROWTH STRATEGIST</span>
                <span style={{ fontFamily: 'var(--head)', fontWeight: 700, fontSize: 30, lineHeight: 0.95 }}>Hasnane<br />Nawaz</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 6, marginTop: 6 }}>
                  {['50k+', '300%', '7x+'].map((v) => <span key={v} style={{ border: '1px solid #2A2A35', borderRadius: 6, padding: 8, fontSize: 13, fontWeight: 700 }}>{v}</span>)}
                </div>
              </div>
            </div>
            <div className="shot b">
              <div className="shotbar"><i /><i /><i /><span>yogaforcure.in</span></div>
              <div style={{ background: '#F7F3EC', color: '#1E2B22', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b style={{ fontSize: 13 }}>Yoga For Cure</b><span style={{ width: 60, height: 18, borderRadius: 99, background: '#3E7A55' }} /></div>
                <span style={{ fontFamily: 'var(--head)', fontWeight: 700, fontSize: 28, lineHeight: 1.05, letterSpacing: '-.02em' }}>Build strength. Improve flexibility.</span>
                <span style={{ fontSize: 12, opacity: 0.7, lineHeight: 1.5 }}>Live classes, private sessions and a self-paced library.</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ background: '#3E7A55', color: '#fff', fontSize: 11, fontWeight: 600, padding: '7px 12px', borderRadius: 99 }}>Join class</span>
                  <span style={{ border: '1.5px solid #1E2B22', opacity: 0.5, fontSize: 11, fontWeight: 600, padding: '6px 12px', borderRadius: 99 }}>Programs</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8, marginTop: 4 }}>
                  {[0, 1, 2].map((k) => <span key={k} style={{ height: 46, borderRadius: 8, background: '#E5EDE5' }} />)}
                </div>
              </div>
            </div>
            <div className="chip" style={{ right: '4%', top: 0, animationDelay: '-1s' }}>
              <span className="live" /><span><small>Website</small><b>Your new site is live</b></span>
            </div>
            <div className="chip" style={{ left: '-2%', bottom: 36, animationDelay: '-3s' }}>
              <span className="cico" style={{ background: 'rgba(31,157,85,.12)', color: '#1F9D55' }}><Chat /></span>
              <span><small>Marketing</small><b>New WhatsApp enquiry from your ad</b></span>
            </div>
            <div className="chip c3" style={{ right: '-2%', bottom: 120, animationDelay: '-5s' }}>
              <span className="cico" style={{ background: 'rgba(255,87,61,.12)', color: '#E84428' }}><Headset size={18} /></span>
              <span><small>IT support</small><b>Business email set up</b></span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>What we do</span>
            <h2 className="h2">Three services. <span>Pick the one you need,</span> or all of them.</h2>
            <p className="lede">Tell us what&apos;s holding your business back online. We&apos;ll point you to the right service and explain it in plain words.</p>
          </div>
          <div className="svcgrid">
            <article className="svc reveal">
              <span className="sico"><Monitor /></span>
              <h3>Website Development</h3>
              <p className="for">For businesses that need a professional website, landing page, portfolio or online store.</p>
              <ul>
                <li><Tick />Designed for your business, not copied from a template</li>
                <li><Tick />Fast and easy to use on phones</li>
                <li><Tick />Set up to be found on Google</li>
                <li><Tick />WhatsApp and enquiry buttons where people decide</li>
                <li><Tick />AI features, like a trip planner or a chat assistant</li>
              </ul>
              <ServiceButton service="Website Development" small>Build my website</ServiceButton>
            </article>
            <article className="svc reveal">
              <span className="sico"><Growth /></span>
              <h3>Digital Marketing</h3>
              <p className="for">For businesses that want more enquiries through search, content, social media and paid ads.</p>
              <ul>
                <li><Tick />Meta Ads on Facebook and Instagram</li>
                <li><Tick />A planned content calendar, not random posts</li>
                <li><Tick />SEO so customers find you on Google</li>
                <li><Tick />WhatsApp and Telegram community growth</li>
              </ul>
              <ServiceButton service="Digital Marketing" small>Grow my business</ServiceButton>
            </article>
            <article className="svc reveal">
              <span className="sico"><Headset /></span>
              <h3>IT Support &amp; Maintenance</h3>
              <p className="for">For people and businesses who need their website looked after, a technical problem fixed, or someone to call when things break.</p>
              <ul>
                <li><Tick />Website updates, fixes and backups</li>
                <li><Tick />Domain, hosting and business email setup</li>
                <li><Tick />Help with the tools your business runs on</li>
                <li><Tick />Ongoing help after your project goes live</li>
              </ul>
              <ServiceButton service="IT Support & Maintenance" small>Get technical support</ServiceButton>
            </article>
            <article className="svc allone reveal">
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', minWidth: 0, flex: '1 1 420px' }}>
                <span className="sico" style={{ background: 'rgba(255,87,61,.18)', color: '#FF8A73', flex: 'none' }}><Layers /></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                  <h3 style={{ color: '#F7F5F0' }}>All-in-one: one team for all three</h3>
                  <p className="for">No need to hire a web designer, a marketing agency and a tech person separately. We plan it together and you deal with one team.</p>
                </div>
              </div>
              <ServiceButton service="All three / not sure yet">Get a free consultation</ServiceButton>
            </article>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="sec" id="about" style={{ background: '#FFFFFF', borderBlock: '1px solid #E4E0D8' }}>
        <div className="wrap">
          <div className="sechead reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Who we help</span>
            <h2 className="h2">Built for people running <span>real businesses.</span></h2>
            <p className="lede">You don&apos;t need to know the technical words. You need someone who understands what you&apos;re trying to do and gets it done.</p>
          </div>
          <div className="whogrid">
            {[
              { t: 'Local businesses', photo: 'Add photo: a real local business owner, e.g. a café or shop counter', p: 'Shops, clinics, cafés, coaching centres and service providers who want people nearby to find them first.', l: ['Show up when people search nearby', 'Get enquiries straight on WhatsApp'] },
              { t: 'Startups', photo: 'Add photo: a small founding team at work', p: 'New products that need a site, a launch campaign and someone to keep the tech running while the team builds.', l: ['Launch with a site that explains the product', 'Ads and content from the first week'] },
              { t: 'Individuals & professionals', photo: 'Add photo: an independent professional, e.g. a doctor, coach or consultant', p: 'Doctors, coaches, consultants and freelancers who want a personal site that builds trust and brings bookings.', l: ['A portfolio or booking site that looks the part', 'Someone to call when something breaks'] },
            ].map((w) => (
              <article className="who reveal" key={w.t}>
                {/* Replace this block with <Image src="/your-photo.jpg" alt="..." width={800} height={600} /> */}
                <div className="photo"><Camera /><span>{w.photo}</span></div>
                <div className="whobody">
                  <h3>{w.t}</h3>
                  <p>{w.p}</p>
                  <ul>{w.l.map((x) => <li key={x}><Tick /> {x}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="sec" id="team">
        <div className="wrap team">
          <div className="founder reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>The person behind it</span>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <span className="fav" aria-hidden="true">HN</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h2 style={{ fontSize: 30, letterSpacing: '-.02em' }}>Hasnane Nawaz</h2>
                <span style={{ color: '#4B4763', fontSize: 15 }}>Founder · Growth strategist · BA LLB</span>
              </div>
            </div>
            <p className="lede" style={{ fontSize: 17 }}>A social media marketer and growth strategist who also studies law. He turns scattered attention into communities, qualified leads and revenue you can see on a dashboard, not just likes.</p>
            <p className="lede" style={{ fontSize: 17 }}>The law training shows up in the work: research before writing, clear arguments, and an eye for what makes people trust a business.</p>
            <div className="flinks">
              <a className="textlink" href="https://www.hasnanenawaz.in" target="_blank" rel="noopener">Marketing portfolio ↗</a>
              <a className="textlink" href="https://lawyer.hasnanenawaz.in" target="_blank" rel="noopener">Legal portfolio ↗</a>
              <a className="textlink" href={site.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
          <div className="tl reveal">
            <p className="tlhead">Experience</p>
            {experience.map((x) => (
              <div className="tlrow" key={x.org}>
                <div><b>{x.org}</b><span>{x.role}</span></div>
                <p>{x.text} {x.strong && <strong>{x.strong}</strong>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec dark" id="work">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Our work</span>
            <h2 className="h2">Real projects. <span>Real results.</span></h2>
            <p className="lede">Ten projects, from business websites and an AI travel planner to campaigns that grew communities. Each preview shows the real site. Click it to visit.</p>
          </div>
          <Work />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" id="process">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>How it works</span>
            <h2 className="h2">What happens after you <span>contact us.</span></h2>
            <p className="lede">No surprises. Here&apos;s each step, and what we&apos;ll need from you at each one.</p>
          </div>
          <div className="steps">
            {[
              { n: 1, icon: <Bubble />, t: 'Discuss', p: 'A free call or WhatsApp chat. We listen to what you sell, who buys it and what isn’t working.', y: 'About 20 minutes and your honest answers.' },
              { n: 2, icon: <Doc />, t: 'Plan', p: 'We send a written plan with what we’ll do, how long it takes and what it costs, before any work starts.', y: 'Read it, ask questions, say yes or no.' },
              { n: 3, icon: <Code />, t: 'Build', p: 'We design and build your site, set up your campaigns or fix your tech, and show you progress as we go.', y: 'Your logo, photos and quick feedback.' },
              { n: 4, icon: <Headset size={20} />, t: 'Support', p: 'After launch we keep things updated, fix what breaks and send you simple reports on how it’s doing.', y: 'Message us whenever you need something.' },
            ].map((s) => (
              <div className="step reveal" key={s.n}>
                <div className="snum"><b>Step {s.n}</b><span className="sico" style={{ width: 44, height: 44 }}>{s.icon}</span></div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
                <p className="you"><b>From you</b>{s.y}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="sec" id="trust" style={{ background: '#FFFFFF', borderBlock: '1px solid #E4E0D8' }}>
        <div className="wrap">
          <div className="sechead reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Why trust us</span>
            <h2 className="h2">Numbers you can check. <span>Promises we keep.</span></h2>
          </div>
          <Stats />
          <div className="tgrid">
            <figure className="tcard reveal" style={{ margin: 0 }}>
              <blockquote>“He&apos;s a quick learner who consistently stepped up, adapted fast, and took ownership beyond his role.”</blockquote>
              <figcaption className="who-said"><span className="av">SS</span><span><b>Dr. Swetanshu Subhrajit</b>CMO, Budding Mariners</span></figcaption>
            </figure>
            {/* Replace these two placeholders with real client quotes */}
            <figure className="tcard empty reveal" style={{ margin: 0 }}>
              <blockquote>[Add a real client quote here: what you built or fixed for them and what changed.]</blockquote>
              <figcaption className="who-said"><span className="av" style={{ background: '#E4E0D8', color: '#4B4763' }}>?</span><span><b>[Client name]</b>[Business, city]</span></figcaption>
            </figure>
            <figure className="tcard empty reveal" style={{ margin: 0 }}>
              <blockquote>[Add a second real client quote, ideally from an IT support or marketing client.]</blockquote>
              <figcaption className="who-said"><span className="av" style={{ background: '#E4E0D8', color: '#4B4763' }}>?</span><span><b>[Client name]</b>[Business, city]</span></figcaption>
            </figure>
          </div>
          <div className="commit">
            <div className="cm reveal"><b>A written quote first</b><p>You see the price and the plan before we start. No hidden charges.</p></div>
            <div className="cm reveal"><b>Plain-language updates</b><p>Reports in simple words, with the numbers that matter to your business.</p></div>
            <div className="cm reveal"><b>Clear support hours</b><p>{site.hours}. We reply within {site.replyTime} in those hours.</p></div>
            <div className="cm reveal"><b>You own your work</b><p>[Confirm: your website, domain and ad accounts stay in your name.]</p></div>
          </div>
          <div className="logos reveal">
            <small>We&apos;ve worked with</small>
            {['Stamp2Fly', 'Yoga For Cure', 'Budding Mariners', 'The Jus Anima', 'Voodaz', 'Cureable'].map((n) => <span key={n}>{n}</span>)}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="sec dark" id="pricing">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Pricing</span>
            <h2 className="h2">Clear starting prices. <span>Tailored quotes</span> for bigger work.</h2>
            <p className="lede">Choose a service to see what&apos;s included. Every project gets a written quote before we start.</p>
          </div>
          <Pricing />
          <p className="pnote">Prices are starting points. Larger or custom work, like online stores or full campaigns, is quoted after a free consultation.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact">
        <div className="wrap contactgrid">
          <div className="side reveal">
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Get a free consultation</span>
            <h2 className="h2">Tell us what you need. <span>We&apos;ll take it from there.</span></h2>
            <p className="lede">Four quick questions. Your message opens in WhatsApp, ready to send to our team.</p>
            <div className="cline"><span className="cico" style={{ background: 'rgba(31,157,85,.12)', color: '#1F9D55' }}><Chat /></span><div><b>WhatsApp</b><span><a href={waLink()} target="_blank" rel="noopener" style={{ color: 'inherit' }}>{site.phoneDisplay}</a></span></div></div>
            <div className="cline"><span className="cico" style={{ background: 'rgba(255,87,61,.1)', color: '#E84428' }}><Mail /></span><div><b>Email</b><span><a href={`mailto:${site.email}`} style={{ color: 'inherit' }}>{site.email}</a></span></div></div>
            <div className="cline"><span className="cico" style={{ background: 'rgba(16,14,36,.07)', color: '#100E24' }}><Pin /></span><div><b>Where we are</b><span>{site.location}. Working with clients across India online.</span></div></div>
            <div className="cline"><span className="cico" style={{ background: 'rgba(16,14,36,.07)', color: '#100E24' }}><Clock /></span><div><b>When we reply</b><span>{site.hours}. Usually within {site.replyTime}.</span></div></div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <div className="sechead reveal" style={{ marginBottom: 32 }}>
            <span className="tag" style={{ alignSelf: 'flex-start' }}>Questions</span>
            <h2 className="h2">Common questions, <span>straight answers.</span></h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ paddingBottom: 96 }}>
        <div className="wrap">
          <div className="final reveal">
            <h2>Tell us what&apos;s not working. <span>We&apos;ll show you how we&apos;d fix it.</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', position: 'relative' }}>
              <a className="btn btn-primary" href="#contact">Get a free consultation <span className="arr">→</span></a>
              <span style={{ fontSize: 14, color: '#A7A3BA' }}>No obligation. Just a conversation.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="dark">
        <div className="wrap">
          <div className="fgrid">
            <div className="fcol" style={{ gap: 16 }}>
              <a className="logo" href="#top" aria-label="Lawgically IT.support home" style={{ alignItems: 'flex-end', gap: 16 }}>
                <Image src="/logo-full.png" alt="Lawgically logo" width={110} height={117} style={{ borderRadius: 12, height: 'auto' }} />
                <span className="wm" style={{ paddingBottom: 6 }}><i style={{ fontSize: 20 }}>IT.support</i></span>
              </a>
              <p style={{ color: '#A7A3BA', lineHeight: 1.6, maxWidth: '34ch' }}>{site.tagline} A web and AI engineering agency in Raipur, part of Lawgically Group.</p>
            </div>
            <div className="fcol"><h4>Services</h4><a href="#services">Website Development</a><a href="#services">Digital Marketing</a><a href="#services">IT Support &amp; Maintenance</a><a href="#services">All-in-one</a></div>
            <div className="fcol"><h4>Company</h4><a href="#work">Our Work</a><a href="#pricing">Pricing</a><a href="#team">About</a><a href="#faq">Resources</a></div>
            <div className="fcol">
              <h4>Contact</h4>
              <a href={waLink()} target="_blank" rel="noopener">WhatsApp: {site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.location}</span>
              <span>{site.hours}</span>
              <a href={site.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
          <div className="fbottom">
            <span>© {new Date().getFullYear()} Lawgically IT.support</span>
            {/* Add Privacy policy and Terms links here once those pages exist */}
          </div>
        </div>
      </footer>

      <a className="wa" href={waLink()} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
        <span className="wadot" style={{ color: '#fff' }}><Chat size={16} /></span>
        <span className="walabel">Chat with us</span>
      </a>
    </div>
  );
}
