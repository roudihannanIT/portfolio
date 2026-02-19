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
              href="https://www.linkedin.com/in/roudi-hannan-6243a5366/" 
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:roudihannan7@gmail.com"
              className="hover:text-blue-600 transition"
            >
              Email
            </a>
             <a 
              href="https://www.instagram.com/roudihannan8?igsh=Y3pxaXM2ZHdpcXJk"
              className="hover:text-blue-600 transition"
            >
              Instagram
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