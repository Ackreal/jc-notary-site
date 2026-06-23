import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";

function renderBlock(block, i) {
  switch (block.type) {
    case "h":
      return <h2 key={i} className="h-display text-3xl md:text-[34px] text-[var(--navy-deep)] mt-12 mb-4 leading-tight">{block.text}</h2>;
    case "p":
      return <p key={i} className="text-[var(--ink)] text-[17px] leading-[1.75] mt-5">{block.text}</p>;
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5 pl-0">
          {block.items.map((it, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[17px] leading-[1.7] text-[var(--ink)]">
              <span className="font-mono-ui text-[var(--gold-deep)] text-sm mt-1.5 flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="my-8 border-l-2 border-[var(--gold)] bg-white px-6 py-5">
          <div className="font-mono-ui text-[11px] tracking-[0.22em] uppercase text-[var(--gold-deep)] mb-2">Heads Up</div>
          <p className="text-[var(--ink)] text-[16px] leading-relaxed">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(slug, 2);

  return (
    <div data-testid="blog-post-page">
      {/* Hero */}
      <section className="border-b border-[var(--line)] bg-[var(--offwhite)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <Link to="/blog" data-testid="post-back-link" className="inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--ink-soft)] hover:text-[var(--navy)] mb-8 fade-up">
            <ArrowLeft size={14} /> All Posts
          </Link>
          <div className="flex items-center gap-3 flex-wrap mb-6 fade-up">
            <span className="zone-badge">{post.tag}</span>
            {post.comingSoon && (
              <span className="zone-badge bg-[var(--gold)] text-[var(--navy-deep)]">Service Coming Soon</span>
            )}
            <span className="font-mono-ui text-[11px] tracking-[0.18em] uppercase text-[var(--ink-soft)] flex items-center gap-1.5">
              <Calendar size={11} /> {post.date}
            </span>
            <span className="font-mono-ui text-[11px] tracking-[0.18em] uppercase text-[var(--ink-soft)] flex items-center gap-1.5">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
          <h1 className="h-display text-4xl sm:text-5xl lg:text-[58px] text-[var(--navy-deep)] leading-[1.05] fade-up-d1">
            {post.title}
          </h1>
          <p className="mt-6 text-[var(--ink-soft)] text-lg md:text-xl leading-relaxed fade-up-d2">{post.dek}</p>
          <div className="divider-gold mt-10 fade-up-d3" />
        </div>
      </section>

      {/* Body */}
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {post.body.map((b, i) => renderBlock(b, i))}

          <div className="mt-16 pt-10 border-t border-[var(--line)]">
            <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-[var(--ink-soft)] mb-3">Written by</div>
            <div className="font-display text-2xl text-[var(--navy-deep)]">JC Sullivan</div>
            <div className="text-sm text-[var(--ink-soft)] mt-1">
              California Notary Public <span className="text-[var(--gold)] mx-1.5">|</span> Certified Loan Signing Agent
            </div>
            <Link to="/contact" data-testid="post-cta-book" className="btn-gold mt-6 text-sm">
              Book an Appointment <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white border-t border-[var(--line)] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="section-label mb-3">Keep Reading</div>
            <h2 className="h-display text-3xl md:text-4xl text-[var(--navy-deep)] mb-10">More from the blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  data-testid={`related-post-${r.slug}`}
                  className="card-surface card-surface-hover overflow-hidden flex flex-col group"
                >
                  <div className="bg-[var(--navy-deep)] text-[var(--gold)] px-5 py-2.5 font-mono-ui text-[11px] tracking-[0.2em] uppercase">
                    {r.tag}
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="font-display text-[26px] text-[var(--navy-deep)] leading-tight">{r.title}</div>
                    <p className="text-[15px] text-[var(--ink-soft)] mt-3 leading-relaxed flex-1">{r.dek}</p>
                    <span className="mt-5 font-mono-ui text-[11px] tracking-[0.18em] uppercase text-[var(--gold-deep)] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read post <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
