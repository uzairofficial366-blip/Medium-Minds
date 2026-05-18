const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function sendChatMessage(message) {
  if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
    throw new Error("The MediumMinds backend URL is not configured.");
  }

  let response;

  try {
    response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  } catch (error) {
    throw new Error("I cannot reach the MediumMinds backend right now. Please make sure the backend is running.");
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "The MediumMinds assistant is unavailable right now.");
  }

  return data.reply || "I could not find an answer for that yet. Please contact MediumMinds for help.";
}
