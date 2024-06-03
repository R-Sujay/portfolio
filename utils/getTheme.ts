"use server";

import { cookies } from "next/headers";
import { setTheme } from "./setTheme";

export async function getTheme(): Promise<string> {
  const cookieStore = cookies();
  let theme = cookieStore.get("theme")?.value;

  if (!theme) {
    theme = await setTheme(); // Set to default 'light' if not defined
  }

  return theme;
}
