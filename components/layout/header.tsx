"use client";

import { Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export function HeaderC() {
  return (
    <header className="w-full border-b bg-background dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left section: Logo / Menu */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300">
            Lyon<span className="text-primary">Coeur</span>
          </div>
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-foreground/70 hover:text-foreground transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Right section: Auth + Mode toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {/* <AuthButton /> */}
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
