import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Landmark, ClipboardCheck, ShieldCheck, MapPin, Home as HomeIcon, Heart, ScrollText, Clock, Quote, ArrowUpRight } from "lucide-react";

const credentials = [
  { icon: Landmark, label: "California Notary Public Commission" },
  { icon: ClipboardCheck, label: "NNA Certified Loan Signing Agent" },
  { icon: ShieldCheck, label: "E&O Insured" },
  { icon: MapPin, label: "Based in Alameda, CA" },
  { icon: HomeIcon, label: "Real estate investor — personally closed dozens of transactions" },
  { icon: Heart, label: "Background in pastoral care & life coaching" },
  { icon: ScrollText, label: "10+ Years Notary Experience (Georgia & California)" },
  { icon: Clock, label: "Available 7 Days · Days, Evenings & Weekends" },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="Page 04 — About"
        title="About JC Sullivan"
        subhead="California Notary Public · Certified Loan Signing Agent · Alameda, CA"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="card-surface p-7">
                  <div className="section-label mb-4">Credentials</div>
                  <div className="space-y-1">
                    {credentials.map(({ icon: Icon, label }) => (
                      <div key={label} className="cred-item">
                        <Icon size={16} />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" data-testid="about-book-btn" className="btn-gold mt-8 w-full justify-center text-sm">
                    Book an Appointment <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8 space-y-7 text-[var(--ink)] text-base md:text-lg leading-relaxed">
              <p>Some people find their way into notary work through a job posting. I found mine through life.</p>
              <p>
                I've been on the other side of these documents more times than I can count — as a real estate investor managing acquisitions, property operations, and closings for years, as a business owner navigating contracts and entity paperwork, and as a son sitting in a hospital room watching my mother sign a power of attorney, a will, and an advance healthcare directive while we didn't yet know what the outcome would be.
              </p>

              <div className="py-3">
                <Quote size={22} className="text-[var(--gold)] mb-3" />
                <div className="pullquote">That last one changed how I think about this work entirely.</div>
              </div>

              <p>
                In that moment, the notary wasn't just a credential in the room. They were a presence. And presence matters — how calm you are, how patient, how clearly you explain what's happening without overstepping, how much you understand that the person across the table isn't just signing a document. They're making a decision about their life, their family, or their future.
              </p>
              <p>That's the standard I hold myself to at every appointment.</p>

              <p>
                I bring over a decade of experience as a licensed notary — most recently in Georgia, now commissioned in California — combined with hands-on exposure to real estate transactions, estate planning documents, business contracts, and loan packages from the client side. I know what these documents mean to the people signing them, not just how to notarize them.
              </p>
              <p>
                My background in pastoral care and life coaching shaped something that no certification teaches: the ability to read a room, meet people where they are, and make a process that can feel overwhelming feel manageable. I've spent years helping people navigate significant life decisions — which means I understand that a signing appointment isn't just paperwork. It's a milestone. Whether you're a first-time homebuyer at a loan signing table, a family coordinating an estate plan, or an escrow officer who needs a signing agent who shows up prepared and on time — I show up for all of it.
              </p>
              <p>
                I'm based in Alameda and serve the broader East Bay including Oakland, Berkeley, Emeryville, Richmond, San Leandro, and Hayward, with extended service available to San Francisco and beyond when the situation calls for it.
              </p>
              <p>I am available days, evenings, and weekends — because the moments that require a notary don't always happen between 9 and 5.</p>

              <div className="mt-12 pt-10 border-t border-[var(--line)]">
                <div className="font-display text-3xl text-[var(--navy-deep)]">JC Sullivan</div>
                <div className="font-mono-ui text-[12px] tracking-[0.18em] uppercase text-[var(--ink-soft)] mt-2">
                  California Notary Public <span className="text-[var(--gold)] mx-2">|</span> Certified Loan Signing Agent
                </div>
                <div className="font-mono-ui text-[12px] tracking-[0.18em] uppercase text-[var(--ink-soft)] mt-1">
                  JC Notary &amp; Signing
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
