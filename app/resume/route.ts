import getData from "@/lib/getData";
import { redirect } from "next/navigation";

export async function GET() {
  const { resume } = await getData();
  redirect(resume.url);
}
