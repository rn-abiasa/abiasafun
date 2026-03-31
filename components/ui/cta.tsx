import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section id="cta" className="border-b px-5">
      <div className="border-x w-full p-4 md:p-6 lg:p-8">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-lg border bg-foreground text-background p-6 md:p-8">
          {/* Dot pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "12px 12px",
            }}
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-3">
              Open to Opportunities
            </p>
            <h2 className="text-xl md:text-2xl font-semibold leading-tight mb-3">
              Let&apos;s build something
              <br />
              great together.
            </h2>
            <p className="text-sm opacity-70 leading-relaxed mb-6 max-w-md">
              I&apos;m currently available for freelance projects, internships,
              and collaborations. Feel free to reach out — I&apos;d love to
              chat.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="rounded-lg border-background/20 bg-background text-foreground hover:bg-background/90"
              >
                <a href="mailto:rnabiasa@gmail.com">
                  Say Hello
                  <ArrowUpRight className="size-3.5" data-icon="inline-end" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-lg border-background/30 bg-transparent text-background hover:bg-background/10"
              >
                <a
                  href="https://github.com/rn-abiasa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
