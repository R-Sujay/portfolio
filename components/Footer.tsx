"use client";

import { onSubmitAction } from "@/utils/formAction";
import { FormState, FormData, HeroType } from "@/typings";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface Props {
  hero: HeroType;
}

function Footer({ hero }: Props) {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submit = async (data: FormData) => {
    setLoading(true);

    const loginToast = toast.loading("Submitting...", {
      style: {
        background: "#333",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      },
    });

    const submit = await onSubmitAction(data).then((res) => {
      if (res.status === 200) {
        toast.success(res.message, {
          id: loginToast,
        });
      } else {
        toast.error(res.message, {
          id: loginToast,
        });
      }
    });

    reset();
    setLoading(false);
  };

  return (
    <div className="container mt-0 !h-max max-h-none max-w-full snap-none bg-indigo-100/40 px-2 dark:bg-[#19223c] md:px-10 lg:px-5">
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col justify-center space-y-2 text-center md:text-left">
          <h1 className="text-center font-code text-3xl font-bold text-indigo-500 md:hidden">
            Let's Talk.
          </h1>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-500">
              Location
            </h1>
            <h1>{hero.location}</h1>
          </div>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-500">
              Email Address
            </h1>
            <h1>{hero.email}</h1>
          </div>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-500">
              Status
            </h1>
            <h1>{hero.status}</h1>
          </div>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-500">
              Location
            </h1>
            <h1>{hero.location}</h1>
          </div>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-500">
              Email Address
            </h1>
            <h1>{hero.email}</h1>
          </div>

          <div className="hidden pt-5 md:block">
            <Link
              href={hero.resumePdf}
              target="_blank"
              className="slide-btn group flex h-14 w-3/4 items-center justify-center rounded-xl text-xl font-semibold text-indigo-500"
            >
              View Resume
              <span className="slide-main" />
            </Link>
          </div>
        </div>

        <form
          className={`h-full space-y-3 pb-10 pt-5 md:w-[55%] lg:w-1/2 ${loading && "animate-pulse opacity-80"}`}
          onSubmit={handleSubmit(submit)}
        >
          <h1 className="hidden text-center font-code text-3xl font-bold text-indigo-500 md:block">
            Let's Talk.
          </h1>
          <div className="flex h-16 space-x-3">
            <input
              type="text"
              placeholder="Name / Company"
              className={`input fd h-full ${errors.company && "inputError"}`}
              {...register("company", { required: true })}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email"
              className={`input h-full ${errors.email && "inputError"}`}
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "",
                },
              })}
              disabled={loading}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={`input h-16 ${errors.subject && "inputError"}`}
            {...register("subject", { required: true })}
            disabled={loading}
          />
          <textarea
            className={`input h-52 py-4 ${errors.message && "inputError"}`}
            placeholder="Message"
            {...register("message", { required: true })}
            disabled={loading}
          />

          <div className="flex w-full items-center justify-between space-x-1 xs:space-x-2 sm:space-x-4">
            <button
              className="w-1/2 rounded-2xl bg-indigo-700 py-3 text-xl font-semibold text-white md:w-full"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>
            <Link
              href={hero.resumePdf}
              target="_blank"
              className="w-1/2 rounded-2xl border border-indigo-500 py-3 text-center text-xl font-semibold text-indigo-500 md:hidden"
            >
              View Resume
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
