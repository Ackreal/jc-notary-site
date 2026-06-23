import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Canonical domain for absolute URLs in JSON-LD / OG tags.
// At runtime, we use whatever origin the site is currently served from
// — that way the same code works on preview, on mobile-notary-pro-1.emergent.host,
// and on jcnotaryandsigning.com once the custom domain is connected.
const CANONICAL_DOMAIN = "https://jcnotaryandsigning.com";
const SITE_URL =
  (typeof window !== "undefined" && window.location && window.location.origin)
    ? window.location.origin
    : CANONICAL_DOMAIN;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "JC Notary & Signing",
  alternateName: "JC Notary and Signing",
  description:
    "Mobile notary and certified loan signing agent serving Alameda and the East Bay. California Notary Public, NNA Certified Loan Signing Agent, E&O Insured. Available 7 days a week — days, evenings, and weekends.",
  url: SITE_URL,
  telephone: "+1-510-545-2304",
  email: "info@jcnotaryandsigning.com",
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "JC Sullivan",
    jobTitle: "California Notary Public, Certified Loan Signing Agent",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alameda",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 37.7652, longitude: -122.2416 },
  areaServed: [
    "Alameda", "Oakland", "Berkeley", "Emeryville", "Piedmont", "Richmond",
    "San Leandro", "Hayward", "Castro Valley", "Fremont", "Union City",
    "Walnut Creek", "San Ramon", "San Francisco",
  ].map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  paymentAccepted: "Cash, Zelle, Venmo, Cash App, Credit Card, Debit Card",
  knowsAbout: [
    "Mobile Notary Services", "Loan Signing Agent", "Acknowledgments", "Jurats",
    "Apostille Services", "Estate Planning Documents", "Power of Attorney",
    "Advance Healthcare Directive", "Refinance Signing", "Reverse Mortgage Signing", "HELOC Signing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Notary & Signing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Notary Services", description: "Acknowledgments, jurats, oaths, POAs, affidavits, deeds, DMV docs, and more." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loan Signing Agent", description: "Purchase, refinance, HELOC, reverse mortgage loan document signings." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estate & Family Document Signings", description: "Wills, trusts, healthcare directives, durable powers of attorney." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apostille Document Services", description: "California Secretary of State apostille handling for international document authentication." } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "JC Notary & Signing",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#business` },
};

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// Update meta description / og tags
function upsertMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

const PAGE_META = {
  "/": {
    title: "JC Notary & Signing — Mobile Notary in Alameda & the East Bay",
    description: "Mobile notary and certified loan signing agent based in Alameda, CA. Serving the East Bay 7 days a week — days, evenings, and weekends. E&O Insured.",
  },
  "/services": {
    title: "Mobile Notary & Loan Signing Services — JC Notary & Signing",
    description: "General notary, loan signing agent, estate documents, and apostille services across Alameda and the East Bay. NNA Certified, E&O Insured.",
  },
  "/fees": {
    title: "Fee Schedule — JC Notary & Signing, Alameda",
    description: "California notarial fees, mobile travel zones, loan signing rates, and apostille pricing. All disclosed upfront — no surprises.",
  },
  "/about": {
    title: "About JC Sullivan — California Notary Public & Loan Signing Agent",
    description: "Real estate investor, certified loan signing agent, and California Notary Public based in Alameda. 10+ years of notary experience.",
  },
  "/faq": {
    title: "FAQ — Mobile Notary Questions Answered | JC Notary & Signing",
    description: "Answers about mobile notary services, fees, ID requirements, jurats vs. acknowledgments, loan signings, and apostilles in California.",
  },
  "/acceptable-id": {
    title: "Acceptable Forms of ID for Notarization in California",
    description: "California-approved IDs for notary appointments: driver's license, passport, military ID, consular ID, tribal ID, and more.",
  },
  "/blog": {
    title: "Blog — Notary & Loan Signing Resources | JC Notary & Signing",
    description: "Plain-English articles on loan signings, apostille, estate planning notarizations, mobile notary vs. signing agent, and live scan fingerprinting.",
  },
  "/contact": {
    title: "Book a Mobile Notary — Contact JC Notary & Signing",
    description: "Schedule a mobile notary or loan signing in Alameda, Oakland, Berkeley, and the East Bay. Available 7 days a week. (510) 545-2304.",
  },
};

export default function SeoSchema() {
  const { pathname } = useLocation();

  // Inject schema once on mount
  useEffect(() => {
    upsertJsonLd("ld-local-business", localBusinessSchema);
    upsertJsonLd("ld-website", websiteSchema);
  }, []);

  // Update title + meta description per route
  useEffect(() => {
    const key = pathname.startsWith("/blog/") ? "/blog" : pathname;
    const meta = PAGE_META[key] || PAGE_META["/"];
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", `${SITE_URL}${pathname}`);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "JC Notary & Signing");
    upsertMeta("property", "og:image", `${SITE_URL}/og-image.jpg`);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", "JC Notary & Signing — JC Sullivan, California Notary Public, Alameda & East Bay");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", `${SITE_URL}/og-image.jpg`);

    // Canonical link
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${pathname}`;
  }, [pathname]);

  return null;
}
