import Image from "next/image";
import { BadgeCheck } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="border-b px-5 overflow-hidden">
      <div className="border-x w-full p-6 md:p-10 lg:p-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Profile Row */}
        <div className="flex gap-4 items-start mb-6 pb-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-muted md:h-24 md:w-24 shadow-sm">
            <Image
              src="/abiasa.png"
              alt="Rehan Abiasa"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>
          <div className="pt-1">
            <h1 className="text-xl font-bold flex items-center gap-2 md:text-2xl tracking-tight">
              Rehan Abiasa <BadgeCheck size={16} color="blue" />
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              Software Engineer
            </p>
            <div className="mt-3 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 w-fit px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-base leading-relaxed text-muted-foreground max-w-lg mb-6">
          I&apos;m a developer passionate about crafting clean, functional, and
          beautiful digital experiences. Focused on frontend development with
          React &amp; Next.js, always exploring new technologies.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
            (tech, i) => (
              <span
                key={tech}
                className="inline-block rounded-lg border bg-secondary/50 px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
