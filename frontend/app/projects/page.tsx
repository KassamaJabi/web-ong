import { getProjects } from "@/lib/keystone"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Proyectos</h1>

      {projects.length === 0 && (
        <p className="text-gray-500">No hay proyectos todavía.</p>
      )}

      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            {project.shortDescription && (
              <p className="text-gray-600">
                {project.shortDescription}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
