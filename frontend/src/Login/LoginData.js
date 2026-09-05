const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

export const API = {
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
};

export async function apiRequest(
  url,
  options = {}
) {
  const response = await fetch(url, {
    ...options,

    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      "Invalid server response"
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        `Request failed (${response.status})`
    );
  }

  return data;
}

export default API;