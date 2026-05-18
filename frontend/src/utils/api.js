const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
    throw new Error("The MediumMinds backend URL is not configured.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export function submitContact(payload) {
  return request("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function submitCareer(payload) {
  return request("/api/careers", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
