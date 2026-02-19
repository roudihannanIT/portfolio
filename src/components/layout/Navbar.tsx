import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Roudi.
          </Link>

          {/* Links */}
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
            <Link href="/journey" className="hover:text-blue-600 transition">
              Journey
            </Link>
            <Link href="/certifications" className="hover:text-blue-600 transition">
              Certifications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}