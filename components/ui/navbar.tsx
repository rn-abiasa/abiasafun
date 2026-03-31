"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const brand = ">_";

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b px-5">
        <div className="flex justify-between items-center py-3 px-4">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-bold tracking-tighter">
              {brand}
            </a>
          </div>
          <Button size="icon" variant="outline" className="rounded-lg h-9 w-9">
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b px-5">
      <div className="flex justify-between items-center py-3 px-4">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-bold tracking-tighter">
            {brand}
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg gap-2 px-2 h-9"
              >
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : theme === "system" ? (
                  <Laptop className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
                <span className="hidden sm:inline-block text-xs font-medium capitalize">
                  {theme}
                </span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
