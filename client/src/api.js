const baseUrl = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/api' : `https://${window.location.hostname}/api`;

export async function login (username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  const response = await fetch(`${baseUrl}/login`, options);
  const json = await response.json();

  if (!response.ok) {
    if (response.status === 422) {
      json.errors.forEach(error => {
        throw Error(`${error.param} ${error.msg}`);
      });
    }

    throw Error(json.message);
  }

  return json.token;
}

async function getPosts (category) {
  const response = await fetch(`${baseUrl}/posts/${category}`);
  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json;
}

export const api = { getPosts };
