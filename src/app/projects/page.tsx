import { projects } from "@/data/projects";
// import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition dark:border-gray-700"
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                🖼️ {project.name}
              </div>
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className={`px-2 py-1 rounded ${
                  project.status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                  project.status === "in-progress" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" :
                  "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                }`}>
                  {project.status === "completed" ? "✅ Completed" :
                   project.status === "in-progress" ? "🟡 In Progress" : "📝 Planned"}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}