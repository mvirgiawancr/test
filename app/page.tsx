import Contact from "@/components/Contact.jsx";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Cursor from "@/components/Cursor.jsx";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section className="lg:hidden"></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <div className="mt-4"></div>
    </main>
  );
}
