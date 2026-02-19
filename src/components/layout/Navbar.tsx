"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Roudi.dev
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Projects
            </Link>
            <Link href="/journey" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Journey
            </Link>
            <Link href="/certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Certifications
            </Link>
            
            {/* Dark Mode */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}