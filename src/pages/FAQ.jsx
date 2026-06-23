import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a mobile notary?",
    a: "A mobile notary travels to you — your home, office, hospital, care facility, or any location that works for you — rather than requiring you to come to a fixed location. You pay a travel fee in addition to the standard notary fee, but you gain the convenience of not having to leave during an already complicated moment.",
  },
  {
    q: "How much does a mobile notary cost in California?",
    a: "California law sets the maximum notary fee at $15 per notarized signature. That fee is fixed by the state — no notary can legally charge more for the notarization itself. Mobile notaries also charge a travel fee, which varies by distance and time of day. Contact us for a quote based on your location and the number of signatures required.",
  },
  {
    q: "What ID do I need to bring to a notary appointment?",
    list: {
      intro: "California requires one of the following current, government-issued photo IDs:",
      items: [
        "California driver's license or state ID",
        "U.S. passport or passport card",
        "U.S. military ID",
        "Driver's license issued by another state, Canada, or Mexico",
        "Valid passport from your country of citizenship",
        "Consular ID card",
        "Federally recognized tribal government ID card",
        "Senior ID issued by a state or government office",
      ],
      outro: "All IDs must include a photo, physical description, signature, ID number, and issue or expiration date. IDs must be current and issued within the past five years. If you don't have qualifying ID, two credible witnesses who personally know you and hold valid ID may be used. Contact us in advance if this applies.",
    },
  },
  {
    q: "What's the difference between an acknowledgment and a jurat?",
    a: "An acknowledgment confirms that you appeared before the notary, were positively identified, and acknowledged that you signed the document willingly. You do not have to sign the document in front of the notary.\n\nA jurat requires you to sign the document in the notary's presence and swear or affirm under oath that the contents of the document are true. Jurats are common on affidavits and sworn statements. Your document will indicate which is required — look for the notarial certificate block at the bottom of the signature page.",
  },
  {
    q: "Do I need to be present when my document is notarized?",
    a: "Yes. California law requires the signer to appear in person before the notary at the time of notarization. A notary cannot notarize a document based on a phone call, video call, or a previously signed document brought in by someone else. California's Remote Online Notarization (RON) program is still in development — in-person appearance is currently required.",
  },
  {
    q: "Can a notary explain what my documents mean?",
    a: "A notary can explain the notarization process — but cannot provide legal advice, interpret the legal meaning of your documents, or tell you whether you should sign. If you have questions about the content of your documents, contact the attorney, lender, or institution that prepared them before your appointment. A knowledgeable notary with real estate and estate planning experience can answer process questions without crossing into legal advice.",
  },
  {
    q: "What should I do if I'm not sure whether my document needs to be notarized?",
    a: "Look for a notary certificate block on the document — typically at the bottom of the signature page with language like \"State of California, County of ___.\" If that block is present, notarization is required. If you're unsure, contact the institution or attorney who issued the document before scheduling.",
  },
  {
    q: "Can a notary notarize a will in California?",
    a: "California allows for a notarized will as an alternative to a witnessed will under certain conditions. The requirements depend on how the will was drafted. Confirm with the drafting attorney which execution method applies before scheduling your appointment.",
  },
  {
    q: "What is an apostille and do I need one?",
    a: "An apostille is a form of authentication issued by the California Secretary of State that validates a notarized document for use in another country. You may need one for dual citizenship, international adoption, teaching abroad, or overseas business. The process: notarize the document first, then submit to the SOS for the apostille. We can handle the notarization and assist with submission or courier service.",
  },
  {
    q: "What is the difference between a notary and a loan signing agent?",
    a: "A notary public is commissioned by the state to verify identity and witness signatures. A loan signing agent is a notary with additional training and certification to handle complex mortgage loan packages with specific lender requirements. Not all notaries are certified signing agents. JC Notary & Signing holds both.",
  },
  {
    q: "Are you available evenings and weekends?",
    a: "Yes — available 7 days a week, including evenings and weekends. Life doesn't schedule itself around business hours, and neither do we. After-hours appointments carry an additional convenience fee. Contact us for availability and current pricing.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Alameda and primarily serve Alameda, Oakland, Berkeley, Emeryville, Richmond, San Leandro, and Hayward. Extended service is available to San Francisco depending on service type and scheduling. Contact us to confirm availability for your location.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, Zelle, Venmo, Cash App, and Credit/Debit Card. Payment is due at time of service for general notary work. Signing service and direct escrow accounts are invoiced within 24 hours of appointment completion.",
  },
];

export default function FAQ() {
  return (
    <div data-testid="faq-page">
      <PageHero
        eyebrow="Page 05 — FAQ"
        title="Frequently Asked Questions"
        subhead="Answers to the most common questions about mobile notary services, loan signings, and what to expect at your appointment."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Accordion type="multiple" className="grid md:grid-cols-2 gap-x-6 gap-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="card-surface px-5 border-[var(--line)]" data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="font-display text-lg md:text-xl text-[var(--navy-deep)] hover:no-underline text-left">
                  <span className="flex items-start gap-3">
                    <span className="font-mono-ui text-[11px] tracking-[0.18em] text-[var(--gold-deep)] mt-2 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[var(--ink-soft)] text-[15px] leading-relaxed pb-5 pt-2">
                  {f.list ? (
                    <>
                      <p>{f.list.intro}</p>
                      <ul className="my-3 space-y-1.5 pl-5 list-disc">
                        {f.list.items.map(it => <li key={it}>{it}</li>)}
                      </ul>
                      <p>{f.list.outro}</p>
                    </>
                  ) : (
                    f.a.split('\n\n').map((p, idx) => <p key={idx} className={idx > 0 ? "mt-3" : ""}>{p}</p>)
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
