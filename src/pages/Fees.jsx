import PageHero from "@/components/PageHero";
import { Stamp, MapPinned, Sparkles, FileSignature, Globe2, FileText, CreditCard } from "lucide-react";

const feeBlocks = [
  {
    icon: Stamp, title: "Notarial Acts — State Maximum",
    rows: [
      ["Acknowledgment", "$15 / signature"],
      ["Jurat", "$15 / signature"],
      ["Oath or Affirmation", "$15 / person"],
      ["Certified Copy of POA", "$15 / copy"],
      ["Deposition", "$30 + $7 charges"],
      ["Voting / Veteran documents", "$0 by law"],
    ],
    note: "Set by California Government Code §8211. No notary may charge more.",
  },
  {
    icon: MapPinned, title: "Mobile Travel Fees by Zone",
    headers: ["Zone", "Coverage Area", "Fee"],
    rows: [
      ["Zone 1", "City of Alameda", "$35"],
      ["Zone 2", "Oakland / Berkeley / Emeryville / Piedmont", "$45"],
      ["Zone 3", "San Leandro / Hayward / Richmond / Castro Valley", "$60"],
      ["Zone 4", "Fremont / Walnut Creek / Union City / San Ramon", "$75"],
      ["Zone 5", "San Francisco", "$95+"],
      ["Zone 6", "Sacramento / South Bay / Special Delivery", "Quote"],
    ],
    note: "Disclosed before every appointment. Billed separately from notarial fees.",
  },
  {
    icon: Sparkles, title: "Convenience & Specialty Fees",
    rows: [
      ["Same-day (under 2 hrs notice)", "+$35"],
      ["Evening (6pm–9pm)", "+$25"],
      ["Late night (9pm–midnight)", "+$50"],
      ["Weekend appointment", "+$25"],
      ["Holiday appointment", "+$75"],
      ["Hospital / care facility visit", "From $125"],
      ["Jail / detention facility", "From $200"],
      ["Waiting fee (after 15 min)", "$25 / 15 min"],
      ["Cancellation (under 1 hr notice)", "$25"],
      ["No-show", "Full travel fee"],
    ],
  },
  {
    icon: FileSignature, title: "Loan Signing Agent Fees",
    rows: [
      ["Signing service assignment", "$100–$125"],
      ["Refinance / seller package", "$125–$150"],
      ["Purchase package", "$150–$175"],
      ["Reverse mortgage / complex", "$175–$250+"],
      ["Direct escrow / title client", "$150–$200"],
      ["Scanbacks", "+$25–$50"],
      ["Large print package (150+ pages)", "+$25"],
      ["Extra trip / re-sign (borrower error)", "$50–$100+"],
      ["Extra trip / re-sign (lender/title error)", "Billed to requesting party"],
    ],
    note: "Includes Zone 1–2 travel. Extended zones billed separately.",
  },
  {
    icon: Globe2, title: "Apostille Document Services",
    rows: [
      ["Standard apostille handling", "$125 + $20 state fee"],
      ["Expedited handling", "$200 + $20 state fee"],
      ["Rush / same-day", "$350+ + $20 state fee"],
      ["Additional document, same order", "$75 each"],
      ["Shipping / courier", "Pass-through + $15"],
    ],
    note: "California SOS apostille fee is $20/document, paid separately to the state.",
  },
  {
    icon: FileText, title: "Document Handling",
    rows: [
      ["Printing (per page)", "$0.25"],
      ["Scan & email", "$10 flat"],
      ["FedEx / UPS drop-off", "$15 + carrier cost"],
    ],
  },
];

export default function Fees() {
  return (
    <div data-testid="fees-page">
      <PageHero
        eyebrow="Page 03 — Fees"
        title="Fee Schedule"
        subhead="California notarial fees are set by state law (Government Code §8211). Mobile, travel, printing, and convenience fees are separate service charges and are always disclosed before your appointment. No surprises."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {feeBlocks.map((b, idx) => (
              <div key={b.title} data-testid={`fee-block-${idx}`} className="card-surface overflow-hidden">
                <div className="bg-[var(--navy-deep)] text-white px-5 py-4 flex items-center gap-3">
                  <b.icon size={18} className="text-[var(--gold)]" />
                  <div className="font-display text-xl">{b.title}</div>
                </div>
                <div className="table-wrap">
                  <table className="fee-table">
                    {b.headers && (
                      <thead>
                        <tr>{b.headers.map(h => <th key={h}>{h}</th>)}</tr>
                      </thead>
                    )}
                    <tbody>
                      {b.rows.map((r, i) => (
                        <tr key={i}>
                          {r.map((cell, ci) => (
                            <td key={ci} className={ci === 0 ? "text-[var(--ink)]" : ""}>
                              {b.headers && ci === 0 ? <span className="zone-badge">{cell}</span> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note && (
                  <div className="bg-[var(--line-soft)] px-5 py-3 text-xs text-[var(--ink-soft)] border-t border-[var(--line)]">
                    {b.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="payment-bar" className="bg-[var(--navy-deep)] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard size={18} className="text-[var(--gold)]" />
            <div className="font-mono-ui text-[11px] tracking-[0.22em] uppercase text-[var(--gold)]">Payment Accepted</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Cash", "Zelle", "Venmo", "Cash App", "Credit / Debit Card"].map(p => (
              <span key={p} className="border border-white/20 px-4 py-2 font-mono-ui text-xs tracking-wider rounded-sm">{p}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70 max-w-3xl">
            Payment due at time of service. Signing service and direct escrow accounts invoiced within 24 hours of completion.
          </p>
        </div>
      </section>
    </div>
  );
}
