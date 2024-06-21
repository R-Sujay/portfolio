import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  const data: FormData = await request.json();

  if (!data) {
    return new Response("Incomplete fields", {
      status: 500,
    });
  }

  try {
    const res = await client
      .create({
        _type: "contact",
        time: new Date().toISOString(),
        ...data,
      })
      .then((data) => {
        return data;
      });

    return Response.json(
      {
        text: "Form Submitted. I will get back to you as soon as possible!",
        ...res,
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return new Response("Couldn't submit form", {
      status: 500,
    });
  }
}
