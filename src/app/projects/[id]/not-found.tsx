import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-4">Project Not Found!</h2>
      <p className="mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
      <Link 
        href="/projects"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View All Projects
      </Link>
    </div>
  );
}