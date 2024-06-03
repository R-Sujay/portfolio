import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Define the expected shape of the request body
interface ThemeRequestBody {
  theme: string;
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  const { theme }: ThemeRequestBody = await request.json();

  if (theme) {
    cookieStore.set("theme", theme);
  }

  return NextResponse.json({ success: true });
}
