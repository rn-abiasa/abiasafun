import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Projects from "@/components/ui/projects";
import Contact from "@/components/ui/contact";
import CTA from "@/components/ui/cta";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="border-b h-32 px-5">
        <div className="border-x w-full h-full p-2">
          <div className="w-full bg-background">
            {/* Noise Texture (Darker Dots) Background */}
            <div
              className="h-28"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--border) 1.5px, transparent 0)",
                backgroundSize: "20px 18px",
              }}
            />
          </div>
        </div>
      </section>
      <Hero />
      <Projects />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
