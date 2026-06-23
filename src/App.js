import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Fees from "@/pages/Fees";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import AcceptableID from "@/pages/AcceptableID";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/acceptable-id" element={<AcceptableID />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
