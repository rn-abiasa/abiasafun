import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Premium Tumbler Brand",
    description:
      "Full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "TypeScript", "Prisma", "Stripe"],
    image: "/tumbler.webp",
    link: "https://blertum.netlify.app",
  },
  {
    title: "Aura Earbuds Landing Page",
    description:
      "Full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "TypeScript", "Prisma", "Stripe"],
    image: "/budsear.webp",
    link: "https://budsear.netlify.app",
  },
  {
    title: "Premium SaaS Landing Page",
    description:
      "Kanban-style task management app with drag-and-drop, team collaboration, and real-time sync.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/saas.webp",
    link: "https://artificialai.netlify.app",
  },
  {
    title: "WhatsApp Assistant",
    description:
      "Beautiful weather dashboard with 7-day forecasts, location search, and animated weather visuals.",
    tags: ["React", "Open Router", "Framer Motion"],
    image: "/ai.webp",
    link: "https://limorpai.netlify.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-b px-5">
      <div className="border-x w-full p-4 md:p-6 lg:p-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-2 w-2 rounded-full bg-foreground" />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Selected Work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group flex flex-col border rounded-xl overflow-hidden transition-all hover:shadow-xl hover:border-foreground/20 bg-background"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="eager"
                />
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <ArrowUpRight className="size-4 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
