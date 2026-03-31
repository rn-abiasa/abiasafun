function Footer() {
  const currentYear = new Date().getFullYear();
  const brand = ">_";

  return (
    <footer className="px-5">
      <div className="border-x w-full p-4 md:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#" className="text-lg font-semibold">
              {brand}
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} Rehan Abiasa. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#projects"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <a
              href="https://github.com/rn-abiasa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Bottom border line */}
      <div className="border-x border-b h-4 mx-0" />
    </footer>
  );
}

export default Footer;
