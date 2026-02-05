const GRAPHQL_ENDPOINT = "http://localhost:3000/api/graphql"

type Project = {
  id: string
  title: string
  shortDescription?: string
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          projectItems {
            id
            title
            shortDescription
          }
        }
      `,
    }),
    cache: "no-store",
  })

  const json = await res.json()
  return json.data.projectItems
}
