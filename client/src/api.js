const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `https://${window.location.hostname}/api`;

async function post (endpoint, body, token = null) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    },
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

async function get (endpoint) {
  const response = await fetch(`${baseUrl}/${endpoint}`);
  const json = await response.json();

  if (!response.ok) throw Error(json.message);

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
  return await get(`posts/${category}`);
}

export async function getPost (id) {
  return await get(`post/${id}`);
}

export async function createPost (body, token) {
  return await post('posts', body, token);
}

export async function createComment (id, comment, token) {
  return await post(`post/${id}`, comment, token);
}
