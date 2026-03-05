"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveRoute } from "@/hooks/useActiveRoute";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const pathname = useActiveRoute();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 backdrop-blur-md border-b",
          "transition-[background-color,border-color,box-shadow] duration-300 ease-in-out",
          isScrolled
            ? "bg-background/90 border-border/50 dark:border-border shadow-lg dark:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-accent hover:opacity-80 transition-opacity"
            >
              &lt;📁 Khanh Nguyen /&gt;
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile: Theme toggle + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    "absolute w-5 h-0.5 bg-foreground transition-all duration-300",
                    mobileOpen ? "rotate-45" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute w-5 h-0.5 bg-foreground transition-all duration-300",
                    mobileOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute w-5 h-0.5 bg-foreground transition-all duration-300",
                    mobileOpen ? "-rotate-45" : "translate-y-1.5"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
