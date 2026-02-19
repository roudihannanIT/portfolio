export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a 
              href="https://github.com/roudihannanIT" 
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/roudihannan" 
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:roudihannan@email.com"
              className="hover:text-blue-600 transition"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Roudi Hannan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}