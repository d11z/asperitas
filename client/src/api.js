const baseUrl = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/api' : `https://${window.location.hostname}/api`;

async function post (endpoint, body) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  const response = await fetch(`${baseUrl}/${endpoint}`, options);
  const json = await response.json();

  if (!response.ok) {
    if (response.status === 422) {
      json.errors.forEach(error => {
        throw Error(`${error.param} ${error.msg}`);
      });
    }

    throw Error(json.message);
  }

  return json;
}

export async function login (username, password) {
  const json = await post('login', { username, password });
  return json.token;
}

export async function signup (username, password) {
  const json = await post('register', { username, password });
  return json.token;
}

export async function getPosts (category) {
  const response = await fetch(`${baseUrl}/posts/${category}`);
  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json;
}
