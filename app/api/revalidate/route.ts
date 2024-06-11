import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";

export async function GET({ url }: Request, res: Request) {
  const { searchParams } = new URL(url);
  const secret = searchParams.get("secret");

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
