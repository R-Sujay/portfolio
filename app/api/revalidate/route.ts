import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function GET() {
  const headersList = headers();
  const secret = headersList.get("secret");

  if (secret !== process.env.WEBHOOK_TOKEN) {
    return new Response("Invalid token", {
      status: 401,
    });
  }

  try {
    await revalidatePath("/");
    return new Response("Data updated and path revalidated", {
      status: 200,
    });
  } catch (err) {
    return new Response("Internal server error", {
      status: 500,
    });
  }
}
