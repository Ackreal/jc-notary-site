import PageHero from "@/components/PageHero";
import { Mail, Phone, Clock, MapPin, CreditCard } from "lucide-react";

const zones = [
  { z: "Zone 1", cities: "City of Alameda", fee: "$35" },
  { z: "Zone 2", cities: "Oakland · Berkeley · Emeryville · Piedmont", fee: "$45" },
  { z: "Zone 3", cities: "San Leandro · Hayward · Richmond · Castro Valley", fee: "$60" },
  { z: "Zone 4", cities: "Fremont · Union City · Walnut Creek · San Ramon", fee: "$75" },
  { z: "Zone 5", cities: "San Francisco", fee: "$95+" },
  { z: "Zone 6", cities: "Sacramento · South Bay · Special Delivery", fee: "Quote" },
];

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <PageHero
        eyebrow="Page 08 — Contact"
        title="Book an Appointment"
        subhead="Available days, evenings, and weekends throughout Alameda and the East Bay. We respond to all inquiries within 2 hours during business hours and within 4 hours after hours."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Scheduling widget */}
            <div className="lg:col-span-7">
              <div className="section-label mb-4">Schedule</div>
              <h2 className="h-display text-3xl md:text-4xl text-[var(--navy-deep)] mb-6">
                Pick a time that works for you
              </h2>
              <div data-testid="cal-widget" className="card-surface overflow-hidden">
                <div className="bg-[var(--navy-deep)] text-white px-5 py-3 flex items-center justify-between">
                  <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold)]">Cal.com Scheduling</div>
                  <div className="font-mono-ui text-[10px] tracking-[0.16em] uppercase text-white/60">Placeholder</div>
                </div>
                <iframe
                  title="Cal.com scheduling — JC Notary & Signing"
                  src="https://cal.com/jcnotary?embed=true&theme=light"
                  className="w-full"
                  style={{ height: '700px', border: 0, background: '#fff' }}
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xs text-[var(--ink-soft)] font-mono-ui tracking-wide">
                Powered by Cal.com · cal.com/jcnotary
              </p>
            </div>

            {/* Contact details */}
            <aside className="lg:col-span-5">
              <div className="section-label mb-4">Direct Contact</div>
              <h2 className="h-display text-3xl md:text-4xl text-[var(--navy-deep)] mb-6">
                Prefer to reach out directly?
              </h2>

              <div className="card-surface p-7 space-y-5">
                <a href="mailto:info@jcnotaryandsigning.com" data-testid="contact-email" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/15 transition-colors">
                    <Mail size={18} className="text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)]">Email</div>
                    <div className="text-[var(--navy-deep)] font-medium group-hover:text-[var(--gold-deep)] transition-colors break-all">info@jcnotaryandsigning.com</div>
                  </div>
                </a>

                <a href="tel:+15105452304" data-testid="contact-phone" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/15 transition-colors">
                    <Phone size={18} className="text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)]">Phone / Text</div>
                    <div className="text-[var(--navy-deep)] font-medium group-hover:text-[var(--gold-deep)] transition-colors">(510) 545-2304</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)]">Hours</div>
                    <div className="text-[var(--ink)]">Monday–Sunday <span className="text-[var(--gold)] mx-1">|</span> Days, Evenings &amp; Weekends</div>
                    <div className="text-sm text-[var(--ink-soft)] mt-0.5">After-hours appointments available — contact us to schedule.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)]">Service Area</div>
                    <div className="text-[15px] text-[var(--ink)] leading-relaxed">
                      Based in Alameda, CA. Serving Alameda, Oakland, Berkeley, Emeryville, Richmond, San Leandro, Hayward, and surrounding East Bay communities. Extended service to San Francisco and beyond available upon request.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[var(--navy)]/5 flex items-center justify-center flex-shrink-0">
                    <CreditCard size={18} className="text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-soft)]">Payment Accepted</div>
                    <div className="text-[var(--ink)]">Cash · Zelle · Venmo · Cash App · Credit/Debit Card</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Area Map + Zones */}
      <section data-testid="service-area-section" className="bg-white border-t border-[var(--line)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="section-label mb-3">Service Zones</div>
              <h2 className="h-display text-4xl text-[var(--navy-deep)] leading-[1.05]">We come to you across the East Bay</h2>
              <p className="mt-5 text-[var(--ink-soft)]">Travel fees are disclosed before every appointment.</p>
              <div className="mt-8 table-wrap">
                <table className="fee-table">
                  <thead><tr><th>Zone</th><th>Cities</th><th>Fee</th></tr></thead>
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
            <div className="lg:col-span-7">
              <div className="card-surface p-2 overflow-hidden h-full min-h-[440px]">
                <iframe
                  data-testid="contact-map-iframe"
                  title="Alameda service area map"
                  src="https://www.google.com/maps?q=Alameda,CA&z=11&output=embed"
                  className="w-full h-full min-h-[440px] grayscale contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
