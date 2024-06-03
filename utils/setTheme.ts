"use server";

import { cookies } from "next/headers";

// Define the response structure from the API
interface SetThemeResponse {
  success: boolean;
}

export async function setTheme(theme?: string): Promise<string> {
  const selectedTheme = theme ?? "light";
  const cookieStore = cookies();

  const response = await fetch("/api/setTheme", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theme: selectedTheme }),
  });

  if (!response.ok) {
    throw new Error("Failed to set theme cookie");
  }

  const data: SetThemeResponse = await response.json();

  if (data.success) {
    cookieStore.set("theme", selectedTheme); // Ensure the cookie is set
  }

  return selectedTheme;
}
