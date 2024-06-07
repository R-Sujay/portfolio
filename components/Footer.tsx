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
        background: "#fff",
        color: "#000",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
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
    <div
      id="footer"
      className="container mt-0 !h-max max-h-none max-w-full snap-none bg-gray-100 px-2 dark:bg-secondary md:px-5"
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col justify-center space-y-2 text-center md:text-left">
          <h1 className="text-center font-code text-3xl font-bold text-black dark:text-white md:hidden">
            Let's Talk.
          </h1>
          <div className="">
            <h1 className="footerHeader">Location</h1>
            <h1 className="footerStatus">{hero.location}</h1>
          </div>
          <div className="">
            <h1 className="footerHeader">Email Address</h1>
            <h1 className="footerStatus">{hero.email}</h1>
          </div>
          <div className="">
            <h1 className="footerHeader">Status</h1>
            <h1 className="footerStatus">{hero.status}</h1>
          </div>
          <div>
            <h1 className="footerHeader">Linkedin</h1>
            <Link
              target="_blank"
              href={hero.linkedinURL}
              className="footerStatus underline md:text-sm lg:text-base"
            >
              {hero.linkedinURL}
            </Link>
          </div>
          <div className="">
            <h1 className="footerHeader">Date of Birth</h1>
            <h1 className="footerStatus">{hero.dateOfBirth}</h1>
          </div>

          <div className="hidden pt-5 md:block">
            <Link
              href={hero.resumePdf}
              target="_blank"
              className="slide-btn group flex h-14 w-3/4 max-w-52 items-center justify-center rounded-xl text-xl font-semibold"
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
          <h1 className="hidden text-center font-code text-3xl font-bold text-black dark:text-white md:block">
            Let's Talk.
          </h1>
          <div className="flex h-16 space-x-3">
            <input
              type="text"
              placeholder="Name / Company"
              className={`input h-full ${errors.company && "inputError"}`}
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
              className="w-1/2 rounded-2xl bg-black py-3 text-xl font-semibold text-white dark:bg-dark md:w-full"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>
            <Link
              href={hero.resumePdf}
              target="_blank"
              className="w-1/2 rounded-2xl border border-black py-3 text-center text-xl font-semibold dark:border-white dark:text-white md:hidden"
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
