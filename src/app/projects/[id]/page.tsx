import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/projects" 
        className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Projects
      </Link>

      <div className="border rounded-lg p-6 dark:border-gray-700">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg">{project.longDescription || project.description}</p>
        </div>

        <div className="flex gap-4 mb-8">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
          >
            View on GitHub
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>

        <div className="border-t pt-6 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Category:</span> {project.category}
            </div>
            <div>
              <span className="font-medium">Status:</span> {project.status}
            </div>
            <div>
              <span className="font-medium">Started:</span> {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}