"use server";

import { client } from "@/sanity/lib/client";
import { ContactType, FormData, FormState } from "@/typings";

export async function onSubmitAction(data: FormData): Promise<FormState> {
  if (!data) return { message: "Incomplete fields", status: 500 };

  try {
    const res = await client
      .create({
        _type: "contact",
        time: new Date().toISOString(),
        ...data,
      })
      .then((res) => {
        return res;
      });

    return {
      message: "Form Submitted. I will get back to you as soon as possible!",
      status: 200,
      res,
    };
  } catch (err) {
    console.log(err);

    return { message: `Couldn't submit form`, status: 500 };
  }
}
