import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/fees", label: "Fees" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/acceptable-id", label: "Acceptable ID" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? "bg-white/85 border-b border-[var(--line)]" : "bg-[var(--offwhite)]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-[var(--navy)] flex items-center justify-center">
            <span className="font-display text-[var(--gold)] text-xl leading-none">JC</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-[19px] text-[var(--navy-deep)]">JC Notary <span className="text-[var(--gold-deep)]">&amp;</span> Signing</div>
            <div className="font-mono-ui text-[10px] tracking-[0.18em] uppercase text-[var(--ink-soft)]">Alameda · East Bay</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" data-testid="nav-book-now" className="btn-gold hidden sm:inline-flex text-sm" style={{ padding: '11px 20px' }}>
            Book Now <ArrowUpRight size={16} />
          </Link>
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden p-2 -mr-2 text-[var(--navy)]"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="nav-mobile-menu" className="lg:hidden border-t border-[var(--line)] bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `py-3 border-b border-[var(--line-soft)] font-body text-[15px] ${isActive ? 'text-[var(--navy)] font-medium' : 'text-[var(--ink-soft)]'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4 justify-center" data-testid="nav-mobile-book-btn">
              Book an Appointment <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
