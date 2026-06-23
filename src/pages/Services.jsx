import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { PenTool, Home as HomeIcon, ScrollText, Globe2, Fingerprint, ArrowUpRight, CheckCircle2 } from "lucide-react";

const generalActs = ["Acknowledgments", "Jurats", "Oaths and Affirmations", "Copy Certification (of notary journal entries)", "Subscribing Witness"];
const generalDocs = [
  "Powers of Attorney (financial and healthcare)", "Advance Healthcare Directives",
  "Wills and living trust signature pages",
  "Affidavits (heirship, residency, identity, support, small estate)",
  "Grant deeds, quitclaim deeds, interspousal transfer deeds",
  "Vehicle title transfers and odometer statements",
  "Parental consent for minor travel or medical treatment",
  "School enrollment affidavits", "Immigration affidavits (I-864 and related)",
  "DMV forms", "Business formation documents and resolutions",
  "Lease agreements", "Bank and financial institution documents",
  "Court declarations and civil affidavits",
];
const loanPackages = [
  "Purchase transactions (buyer and seller packages)", "Refinances", "HELOCs",
  "Loan modifications", "Reverse mortgages", "Commercial loans",
  "Seller's packages", "Grant deeds and quitclaim deeds",
];
const estateSpecialties = [
  "Living trusts and pour-over wills", "Last will and testament",
  "Advance healthcare directives", "Durable and medical powers of attorney",
  "Trust certifications", "Affidavits of heirship", "Small estate affidavits",
];
const apostilleNeeds = [
  "Dual citizenship applications", "International adoption", "Teaching abroad",
  "International business", "Overseas property transactions",
];

function ServiceSection({ id, icon: Icon, eyebrow, title, intro, sections, note, body, testId }) {
  return (
    <section id={id} data-testid={testId} className="py-16 md:py-24 border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="w-14 h-14 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center mb-5">
              <Icon size={26} className="text-[var(--navy)]" />
            </div>
            <div className="section-label mb-3">{eyebrow}</div>
            <h2 className="h-display text-3xl md:text-4xl text-[var(--navy-deep)] leading-[1.1]">{title}</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">{intro}</p>
            {sections && sections.map((s, i) => (
              <div key={i} className="mt-8">
                <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-4">{s.title}</div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {s.items.map(it => (
                    <li key={it} className="flex items-start gap-3 text-[15px] text-[var(--ink)]">
                      <CheckCircle2 size={16} className="text-[var(--gold)] flex-shrink-0 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {body && <p className="mt-8 text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">{body}</p>}
            {note && (
              <div className="mt-8 border-l-2 border-[var(--gold)] bg-white px-5 py-4">
                <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-1">Note</div>
                <div className="text-sm text-[var(--ink-soft)]">{note}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div data-testid="services-page">
      <PageHero
        eyebrow="Page 02 — Services"
        title="Mobile Notary & Document Signing Services"
        subhead="JC Notary & Signing provides mobile notary, loan signing, and document authentication services throughout Alameda and the East Bay. Every appointment is handled with the professionalism, preparation, and patience the moment deserves."
      />

      <ServiceSection
        id="general"
        testId="service-general"
        icon={PenTool}
        eyebrow="01 / General"
        title="General Notary Services"
        intro="The foundation of everything we do. If your document requires a notarized signature in California, we can help."
        sections={[
          { title: "Notarial Acts Performed", items: generalActs },
          { title: "Documents Commonly Notarized", items: generalDocs },
        ]}
        note="State fee: $15 per notarized signature. Travel fees apply for mobile appointments."
      />

      <ServiceSection
        id="loan-signing"
        testId="service-loan"
        icon={HomeIcon}
        eyebrow="02 / Loan Signing"
        title="Loan Signing Agent Services"
        intro="As a certified loan signing agent, I work directly with title companies, escrow offices, signing services, and lenders to facilitate accurate, professional loan signing appointments."
        sections={[{ title: "Loan Packages Handled", items: loanPackages }]}
        body="I arrive prepared, I know the documents, and I communicate with all parties before, during, and after the appointment. Borrowers are never rushed — they have the right to read what they're signing, and I make sure that right is respected."
        note="Signing service and direct escrow rates available. Contact for pricing."
      />

      <ServiceSection
        id="estate"
        testId="service-estate"
        icon={ScrollText}
        eyebrow="03 / Estate"
        title="Estate & Family Document Signings"
        intro="These appointments require more than a stamp and a signature. They require presence, patience, and the understanding that what's happening in the room matters to the people in it."
        sections={[{ title: "Specialties", items: estateSpecialties }]}
        body="I regularly serve clients at home, in assisted living facilities, in hospitals, in attorney offices, and anywhere else life requires. I do not provide legal advice or prepare legal documents — but I will make sure every person in the room understands the process, feels comfortable, and is never rushed."
      />

      <ServiceSection
        id="apostille"
        testId="service-apostille"
        icon={Globe2}
        eyebrow="04 / International"
        title="Apostille Document Services"
        intro="Need a California document authenticated for international use? We notarize your document and walk you through the California Secretary of State apostille submission process — or handle the courier service for an additional fee."
        sections={[{ title: "Common Apostille Needs", items: apostilleNeeds }]}
        note="California SOS apostille fee: $20 per document, paid separately to the state."
      />

      <section id="live-scan" data-testid="service-livescan" className="py-16 md:py-24 bg-[var(--navy-deep)] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="w-14 h-14 rounded-sm bg-white/10 flex items-center justify-center mb-5">
                <Fingerprint size={26} className="text-[var(--gold)]" />
              </div>
              <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] mb-3">05 / Coming Soon</div>
              <h2 className="h-display text-3xl md:text-4xl">Mobile Fingerprinting &amp; Live Scan</h2>
              <span className="mt-5 inline-block zone-badge bg-[var(--gold)] text-[var(--navy-deep)] text-[12px]">Coming Soon</span>
            </div>
            <div className="lg:col-span-8">
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Live scan fingerprinting services for employment background checks, professional licensing, real estate and insurance applicants, foster and adoption processes, and more. Mobile service available — we come to your home, office, or facility.
              </p>
              <Link to="/contact" data-testid="livescan-notify-btn" className="btn-gold mt-8">
                Join the Notification List <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
