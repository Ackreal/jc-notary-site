import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { CheckCircle2, Users, AlertTriangle, ArrowRight } from "lucide-react";

const acceptedIds = [
  "California Driver's License or State ID (DMV issued)",
  "U.S. Passport or Passport Card",
  "U.S. Military Identification Card",
  "Driver's License issued by another U.S. state",
  "Driver's License issued by a Canadian or Mexican agency authorized to issue DLs",
  "Valid Passport from applicant's country of citizenship",
  "Valid Consular ID document issued by a consulate from applicant's country of citizenship",
  "ID Card issued by a federally recognized tribal government",
  "Senior ID Card issued by a state or government office",
  "Employee Identification Card issued by a state or government agency",
];

export default function AcceptableID() {
  return (
    <div data-testid="acceptable-id-page">
      <PageHero
        eyebrow="Page 06 — Reference"
        title="Acceptable Forms of ID"
        subhead="California law requires the signer to appear in person with valid, current, government-issued photo identification. Please review what's accepted before your appointment."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="border-l-2 border-[var(--gold)] bg-white px-5 py-4 mb-10">
                <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-1">Requirements</div>
                <p className="text-sm text-[var(--ink-soft)]">
                  All IDs must contain a photo, physical description, signature, identification number, and issue or expiration date. Must be current and issued within the past 5 years.
                </p>
              </div>

              <div className="section-label mb-5">Accepted IDs</div>
              <ul className="space-y-3" data-testid="accepted-id-list">
                {acceptedIds.map((id, i) => (
                  <li key={i} className="card-surface px-5 py-4 flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[var(--ink)]">{id}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div data-testid="no-id-box" className="bg-[var(--navy-deep)] text-white p-7 rounded-sm">
                <Users size={24} className="text-[var(--gold)] mb-4" />
                <div className="font-display text-2xl mb-3">No qualifying ID?</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Two credible witnesses who personally know you and hold valid, current ID may appear in person and swear by oath that you are the person required to sign. Witnesses cannot be named in or have an interest in the document being notarized. Contact us in advance to make this arrangement.
                </p>
              </div>

              <div data-testid="disclaimer-box" className="card-surface p-7 border-l-4 border-l-[var(--gold)]">
                <AlertTriangle size={20} className="text-[var(--gold-deep)] mb-3" />
                <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--navy)] mb-3">Disclaimer</div>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  I am not an attorney. I cannot explain or interpret the contents of any document. If you have questions about your documents, please contact the attorney or institution that prepared them.
                </p>
              </div>

              <Link
                to="/blog/acceptable-id-california-complete-guide"
                className="card-surface card-surface-hover p-7 flex flex-col group"
              >
                <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-3">From the Blog</div>
                <div className="font-display text-lg text-[var(--navy-deep)] leading-snug">The Complete Guide to Acceptable IDs for Notarization in California</div>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mt-2">The five-year rule, common gotchas, the credible witness option, and more.</p>
                <span className="mt-4 font-mono-ui text-[11px] tracking-[0.18em] uppercase text-[var(--gold-deep)] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read the guide <ArrowRight size={12} />
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
