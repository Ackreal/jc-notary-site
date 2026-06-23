export default function PageHero({ eyebrow, title, subhead, testId = "page-hero" }) {
  return (
    <section data-testid={testId} className="border-b border-[var(--line)] bg-[var(--offwhite)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
        {eyebrow && <div className="eyebrow mb-5 fade-up">{eyebrow}</div>}
        <h1 className="h-display text-[var(--navy-deep)] text-4xl sm:text-5xl lg:text-6xl max-w-4xl fade-up-d1">{title}</h1>
        {subhead && (
          <p className="mt-6 text-[var(--ink-soft)] max-w-2xl text-base md:text-lg leading-relaxed fade-up-d2">{subhead}</p>
        )}
        <div className="divider-gold mt-10 fade-up-d3" />
      </div>
    </section>
  );
}
