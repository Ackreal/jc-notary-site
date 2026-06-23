import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, Globe, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[var(--navy-deep)] text-[var(--offwhite)] mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <div className="font-display text-2xl mb-3">JC Notary <span className="text-[var(--gold)]">&amp;</span> Signing</div>
            <div className="divider-gold mb-5" />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Mobile notary and certified loan signing agent serving Alameda and the East Bay.
              Available 7 days a week — days, evenings, and weekends.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-white/20 px-3 py-2 rounded-sm">
              <ShieldCheck size={16} className="text-[var(--gold)]" />
              <span className="font-mono-ui text-[11px] tracking-[0.16em] uppercase">E&amp;O Insured</span>
            </div>
          </div>

          <div>
            <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] mb-5">Services</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/services#general" className="hover:text-[var(--gold)] transition-colors">General Notary</Link></li>
              <li><Link to="/services#loan-signing" className="hover:text-[var(--gold)] transition-colors">Loan Signing Agent</Link></li>
              <li><Link to="/services#estate" className="hover:text-[var(--gold)] transition-colors">Estate &amp; Family Docs</Link></li>
              <li><Link to="/services#apostille" className="hover:text-[var(--gold)] transition-colors">Apostille Services</Link></li>
              <li><Link to="/services#live-scan" className="hover:text-[var(--gold)] transition-colors">Live Scan <span className="text-[var(--gold)] font-mono-ui text-[10px] ml-1">COMING SOON</span></Link></li>
            </ul>
            <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] mt-8 mb-4">Navigate</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/fees" className="hover:text-[var(--gold)] transition-colors">Fee Schedule</Link></li>
              <li><Link to="/about" className="hover:text-[var(--gold)] transition-colors">About JC</Link></li>
              <li><Link to="/faq" className="hover:text-[var(--gold)] transition-colors">FAQ</Link></li>
              <li><Link to="/acceptable-id" className="hover:text-[var(--gold)] transition-colors">Acceptable ID</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--gold)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><MapPin size={16} className="text-[var(--gold)] mt-0.5" /> Alameda, CA</li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[var(--gold)] mt-0.5" />
                <a href="mailto:info@jcnotaryandsigning.com" className="hover:text-[var(--gold)] transition-colors break-all">info@jcnotaryandsigning.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[var(--gold)] mt-0.5" />
                <a href="tel:+15105452304" className="hover:text-[var(--gold)] transition-colors">(510) 545-2304</a>
              </li>
              <li className="flex items-start gap-3"><Globe size={16} className="text-[var(--gold)] mt-0.5" /> jcnotaryandsigning.com</li>
              <li className="flex items-start gap-3"><Clock size={16} className="text-[var(--gold)] mt-0.5" /> Mon–Sun · All Hours</li>
            </ul>
            <Link to="/contact" data-testid="footer-book-btn" className="btn-gold mt-8 text-sm" style={{ padding: '11px 20px' }}>
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono-ui text-[11px] tracking-[0.14em] text-white/50">
            © 2026 JC Notary &amp; Signing · JC Sullivan, California Notary Public · Not a law firm · Not a legal advisor
          </p>
          <p className="font-mono-ui text-[11px] tracking-[0.14em] text-white/40">jcnotaryandsigning.com</p>
        </div>
      </div>
    </footer>
  );
}
