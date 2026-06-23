import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div data-testid="blog-page">
      <PageHero
        eyebrow="Page 07 — Blog"
        title="From the Blog"
        subhead="Resources and education for anyone who needs a notary — whether you're closing on a home, planning your estate, or navigating the apostille process for the first time."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                data-testid={`blog-card-${i}`}
                className="card-surface card-surface-hover overflow-hidden flex flex-col group"
              >
                <div className="bg-[var(--navy-deep)] text-[var(--gold)] px-5 py-2.5 font-mono-ui text-[11px] tracking-[0.2em] uppercase flex items-center justify-between">
                  <span>{p.tag}</span>
                  {p.comingSoon && (
                    <span className="text-[10px] tracking-[0.16em] text-white/70">Service Soon</span>
                  )}
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="font-display text-[26px] text-[var(--navy-deep)] leading-tight group-hover:text-[var(--navy)] transition-colors">
                    {p.title}
                  </div>
                  <p className="text-[15px] text-[var(--ink-soft)] mt-4 leading-relaxed flex-1">{p.dek}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4">
                    <div className="flex items-center gap-4 text-[var(--ink-soft)]">
                      <span className="font-mono-ui text-[10px] tracking-[0.16em] uppercase flex items-center gap-1.5">
                        <Calendar size={10} /> {p.date}
                      </span>
                      <span className="font-mono-ui text-[10px] tracking-[0.16em] uppercase flex items-center gap-1.5">
                        <Clock size={10} /> {p.readTime}
                      </span>
                    </div>
                    <span className="font-mono-ui text-[11px] tracking-[0.18em] uppercase text-[var(--gold-deep)] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
