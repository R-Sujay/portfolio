"use server";

import { cookies } from "next/headers";

// Define the response structure from the API
interface SetThemeResponse {
  success: boolean;
}

export async function getTheme(): Promise<string | undefined> {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;

  if (!theme) {
    const response = await fetch("/api/setTheme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ theme: "light" }),
    });

    if (!response.ok) {
      throw new Error("Failed to set theme cookie");
    }

    const data: SetThemeResponse = await response.json();

    // if (data.success) {
    //   theme = "light"; // Set the theme variable to 'light' as it has been set in the cookie
    // }
  }

  return theme;
}
