const baseUrl = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/api' : `https://${window.location.hostname}/api`;

async function getPosts (category) {
  const response = await fetch(`${baseUrl}/posts/${category}`);
  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json;
}

export const api = { getPosts };
