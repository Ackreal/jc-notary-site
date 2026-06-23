import { Link } from "react-router-dom";
import {
  Landmark, ClipboardCheck, ShieldCheck, Clock, ArrowUpRight,
  PenTool, Home as HomeIcon, ScrollText, Globe2, Fingerprint, MapPin, Quote, ArrowRight
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";

const trustBadges = [
  { icon: Landmark, title: "California Notary Public", detail: "Commissioned & bonded in the State of California" },
  { icon: ClipboardCheck, title: "Certified Loan Signing Agent", detail: "NNA certified — purchase, refi, HELOC, reverse mortgage" },
  { icon: ShieldCheck, title: "E&O Insured", detail: "Errors & omissions insurance carried on all appointments" },
  { icon: Clock, title: "7 Days · Days, Evenings & Weekends", detail: "Available when you need us — not just 9 to 5" },
];

const services = [
  { icon: PenTool, title: "General Notary", desc: "Acknowledgments, jurats, oaths, POAs, affidavits, deeds, DMV docs, and more." },
  { icon: HomeIcon, title: "Loan Signing Agent", desc: "Purchase, refi, HELOC, reverse mortgage. Prepared, accurate, on time." },
  { icon: ScrollText, title: "Estate & Family Docs", desc: "Wills, trusts, healthcare directives. Handled with patience and care." },
  { icon: Globe2, title: "Apostille Services", desc: "Document authentication for international use. We walk you through it." },
  { icon: Fingerprint, title: "Live Scan / Fingerprinting", desc: "Mobile fingerprinting for employment, licensing & government applications.", soon: true },
];

const credentials = [
  { icon: Landmark, label: "California Notary Public Commission" },
  { icon: ClipboardCheck, label: "NNA Certified Loan Signing Agent" },
  { icon: ShieldCheck, label: "E&O Insured" },
  { icon: MapPin, label: "Based in Alameda, CA" },
  { icon: HomeIcon, label: "Real estate investor — personally closed dozens of transactions" },
  { icon: PenTool, label: "Background in pastoral care & life coaching" },
  { icon: ScrollText, label: "10+ Years Notary Experience (Georgia & California)" },
  { icon: Clock, label: "Available 7 Days · Days, Evenings & Weekends" },
];

const zones = [
  { z: "Zone 1", cities: "City of Alameda", fee: "$35" },
  { z: "Zone 2", cities: "Oakland · Berkeley · Emeryville · Piedmont", fee: "$45" },
  { z: "Zone 3", cities: "San Leandro · Hayward · Richmond · Castro Valley", fee: "$60" },
  { z: "Zone 4", cities: "Fremont · Union City · Walnut Creek · San Ramon", fee: "$75" },
  { z: "Zone 5", cities: "San Francisco", fee: "$95+" },
  { z: "Zone 6", cities: "Sacramento · South Bay · Special Delivery", fee: "Quote" },
];

const teaserFaqs = [
  { q: "What is a mobile notary?", a: "A mobile notary travels to you — your home, office, hospital, care facility, or any location that works for you — rather than requiring you to come to a fixed location. You pay a travel fee in addition to the standard notary fee, but you gain the convenience of not having to leave during an already complicated moment." },
  { q: "How much does a mobile notary cost in California?", a: "California law sets the maximum notary fee at $15 per notarized signature. That fee is fixed by the state — no notary can legally charge more for the notarization itself. Mobile notaries also charge a travel fee, which varies by distance and time of day." },
  { q: "What ID do I need to bring?", a: "California requires a current, government-issued photo ID — driver's license, state ID, U.S. passport, military ID, or other equivalent. See our Acceptable ID page for the complete list." },
  { q: "What's the difference between an acknowledgment and a jurat?", a: "An acknowledgment confirms that you appeared before the notary and acknowledged that you signed the document willingly. A jurat requires you to sign in the notary's presence and swear under oath that the contents are true. Your document will indicate which is required." },
];

const blogTeasers = [
  { slug: "what-to-expect-at-a-loan-signing-appointment", tag: "Loan Signing", title: "What to Expect at a Loan Signing Appointment", desc: "What's in the package, how long it takes, why you can take your time, and what happens after you sign." },
  { slug: "mobile-notary-vs-signing-agent", tag: "General Notary", title: "When You Need a Mobile Notary vs. a Signing Agent", desc: "The difference between the two, when each applies, and why it matters for real estate transactions." },
  { slug: "apostille-process-california", tag: "International Docs", title: "How the Apostille Process Works in California", desc: "What an apostille is, who needs one, the step-by-step process, timelines, and common mistakes." },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6 fade-up">Alameda · East Bay · San Francisco</div>
              <h1 className="h-display text-[var(--navy-deep)] text-5xl sm:text-6xl lg:text-7xl fade-up-d1">
                The Notary Who's Been on <em className="text-[var(--gold-deep)] not-italic font-display" style={{ fontStyle: 'italic' }}>Your Side</em> of the Table
              </h1>
              <p className="mt-8 text-[var(--ink-soft)] text-lg md:text-xl leading-relaxed max-w-2xl fade-up-d2">
                Real estate investor. Estate planning client. California Notary Public.
                <br className="hidden md:block" />
                I understand what you're signing because I've signed it too.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 fade-up-d3">
                <Link to="/contact" data-testid="hero-book-btn" className="btn-gold">
                  Book an Appointment <ArrowUpRight size={18} />
                </Link>
                <Link to="/services" data-testid="hero-services-btn" className="btn-outline-navy">
                  View Services <ArrowRight size={18} />
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 text-[var(--ink-soft)] fade-up-d3">
                <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase">Trusted by clients across</div>
                <div className="h-px flex-1 bg-[var(--line)]" />
              </div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono-ui text-[12px] text-[var(--navy)] tracking-wide">
                <span>ALAMEDA</span><span className="text-[var(--gold)]">·</span>
                <span>OAKLAND</span><span className="text-[var(--gold)]">·</span>
                <span>BERKELEY</span><span className="text-[var(--gold)]">·</span>
                <span>EMERYVILLE</span><span className="text-[var(--gold)]">·</span>
                <span>RICHMOND</span><span className="text-[var(--gold)]">·</span>
                <span>SAN LEANDRO</span><span className="text-[var(--gold)]">·</span>
                <span>HAYWARD</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 fade-up-d2">
              {trustBadges.map(({ icon: Icon, title, detail }, i) => (
                <div key={title} data-testid={`hero-trust-card-${i}`} className="card-surface card-surface-hover p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-[var(--navy-deep)] leading-tight">{title}</div>
                    <div className="text-sm text-[var(--ink-soft)] mt-1">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section data-testid="home-services-strip" className="bg-white border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="section-label mb-3">What I Do</div>
              <h2 className="h-display text-4xl md:text-5xl text-[var(--navy-deep)]">Services at a glance</h2>
            </div>
            <Link to="/services" className="font-mono-ui text-[12px] tracking-[0.18em] uppercase text-[var(--navy)] hover:text-[var(--gold-deep)] flex items-center gap-2">
              Full Services <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map(({ icon: Icon, title, desc, soon }, idx) => (
              <div key={title} data-testid={`home-service-card-${idx}`} className="card-surface card-surface-hover p-6 flex flex-col h-full relative">
                {soon && <span className="absolute top-3 right-3 zone-badge bg-[var(--gold)] text-[var(--navy-deep)]">Coming Soon</span>}
                <Icon size={28} className="text-[var(--gold-deep)] mb-5" />
                <div className="font-display text-xl text-[var(--navy-deep)] leading-tight">{title}</div>
                <div className="text-sm text-[var(--ink-soft)] mt-2 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section data-testid="home-about-teaser" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="section-label mb-3">About JC Sullivan</div>
              <h2 className="h-display text-4xl md:text-5xl text-[var(--navy-deep)] leading-[1.05]">
                California Notary Public &amp; Certified Signing Agent
              </h2>
              <div className="mt-8 space-y-1">
                {credentials.map(({ icon: Icon, label }) => (
                  <div key={label} className="cred-item">
                    <Icon size={16} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
                Some people find their way into notary work through a job posting. I found mine through life.
              </p>
              <p className="mt-5 text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
                I've been on the other side of these documents more times than I can count — as a real estate investor managing acquisitions, property operations, and closings for years, as a business owner navigating contracts and entity paperwork, and as a son sitting in a hospital room watching my mother sign a power of attorney, a will, and an advance healthcare directive while we didn't yet know what the outcome would be.
              </p>
              <div className="mt-10">
                <Quote size={22} className="text-[var(--gold)] mb-3" />
                <div className="pullquote">
                  That last one changed how I think about this work entirely.
                </div>
              </div>
              <Link to="/about" data-testid="about-read-more" className="mt-10 inline-flex items-center gap-2 font-mono-ui text-[12px] tracking-[0.18em] uppercase text-[var(--navy)] hover:text-[var(--gold-deep)]">
                Read My Full Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section data-testid="home-service-area" className="bg-white border-y border-[var(--line)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="section-label mb-3">Service Area</div>
              <h2 className="h-display text-4xl md:text-5xl text-[var(--navy-deep)]">We Come to You</h2>
              <p className="mt-5 text-[var(--ink-soft)] text-base md:text-lg max-w-xl">
                Based in Alameda. Serving the East Bay and beyond — days, evenings, and weekends.
              </p>

              <div className="mt-10 table-wrap">
                <table className="fee-table">
                  <thead>
                    <tr><th>Zone</th><th>Cities</th><th>Fee</th></tr>
                  </thead>
                  <tbody>
                    {zones.map(z => (
                      <tr key={z.z}>
                        <td><span className="zone-badge">{z.z}</span></td>
                        <td className="text-[var(--ink)]">{z.cities}</td>
                        <td>{z.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card-surface p-2 overflow-hidden h-full min-h-[360px]">
                <iframe
                  data-testid="home-map-iframe"
                  title="Service area map — Alameda, CA"
                  src="https://www.google.com/maps?q=Alameda,CA&output=embed"
                  className="w-full h-full min-h-[360px] grayscale contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section data-testid="home-faq-teaser" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="section-label mb-3">FAQ</div>
              <h2 className="h-display text-4xl md:text-5xl text-[var(--navy-deep)] leading-[1.05]">
                Common questions, answered straight
              </h2>
              <Link to="/faq" data-testid="faq-see-all" className="mt-8 inline-flex items-center gap-2 font-mono-ui text-[12px] tracking-[0.18em] uppercase text-[var(--navy)] hover:text-[var(--gold-deep)]">
                See All FAQs <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="space-y-3">
                {teaserFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="card-surface px-5 border-[var(--line)]">
                    <AccordionTrigger data-testid={`home-faq-trigger-${i}`} className="font-display text-lg md:text-xl text-[var(--navy-deep)] hover:no-underline text-left">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--ink-soft)] text-[15px] leading-relaxed pb-4">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section data-testid="home-blog-teaser" className="bg-white border-y border-[var(--line)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="section-label mb-3">Resources &amp; Education</div>
              <h2 className="h-display text-4xl md:text-5xl text-[var(--navy-deep)]">From the Blog</h2>
              <p className="mt-3 text-[var(--ink-soft)]">Because knowing what you're signing matters.</p>
            </div>
            <Link to="/blog" className="font-mono-ui text-[12px] tracking-[0.18em] uppercase text-[var(--navy)] hover:text-[var(--gold-deep)] flex items-center gap-2">
              View All Posts <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogTeasers.map((b, i) => (
              <Link key={i} to={`/blog/${b.slug}`} data-testid={`home-blog-card-${i}`} className="card-surface card-surface-hover p-7 flex flex-col h-full group">
                <span className="zone-badge w-fit">{b.tag}</span>
                <div className="font-display text-2xl text-[var(--navy-deep)] mt-5 leading-tight">{b.title}</div>
                <p className="text-sm text-[var(--ink-soft)] mt-3 flex-1 leading-relaxed">{b.desc}</p>
                <span className="mt-6 font-mono-ui text-[11px] tracking-[0.18em] uppercase text-[var(--gold-deep)] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read post <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section data-testid="home-cta-banner" className="bg-[var(--navy-deep)] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 md:py-24 text-center">
          <h2 className="h-display text-4xl md:text-6xl">Book Your Appointment Today</h2>
          <div className="divider-gold mx-auto mt-8" />
          <p className="mt-8 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Available days, evenings, and weekends throughout Alameda and the East Bay. We come to you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" data-testid="cta-banner-book" className="btn-gold">
              Book an Appointment <ArrowUpRight size={18} />
            </Link>
            <a href="mailto:info@jcnotaryandsigning.com" data-testid="cta-banner-email" className="btn-outline-light">
              info@jcnotaryandsigning.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
