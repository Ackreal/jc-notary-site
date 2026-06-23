import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeoSchema from "./SeoSchema";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Defer to next frame so the target section is mounted
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-paper-grain">
      <SeoSchema />
      <Navbar />
      <main className="flex-1" data-testid="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
