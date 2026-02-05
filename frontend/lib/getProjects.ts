const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export async function getProjects() {
  const res = await fetch(`${API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          projectItems {
            id
            title
          }
        }
      `,
    }),
    cache: 'no-store',
  });

  const json = await res.json();

  return json.data?.projectItems ?? [];
}
