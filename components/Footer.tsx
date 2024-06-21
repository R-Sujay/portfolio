"use client";

import { DetailsType, FormData, HeroType } from "@/typings";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { themeAtom } from "@/atoms/Theme";
import { useRecoilValue } from "recoil";

interface Props {
  hero: HeroType;
  details: DetailsType;
}

function Footer({ hero, details }: Props) {
  const [loading, setLoading] = useState(false);
  const theme = useRecoilValue(themeAtom);

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
        background: theme === "light" ? "#fff" : "#272727",
        color: theme === "light" ? "#000" : "#fff",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
      },
    });

    const mutate = await fetch("/api/mutate-contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (mutate.ok) {
      toast.success(
        await mutate.json().then((res) => {
          return res.text;
        }),
        {
          id: loginToast,
        },
      );
    } else {
      toast.error(await mutate.text(), {
        id: loginToast,
      });
    }

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
            Let&apos;s Talk.
          </h1>

          {details.map((detail, i) => (
            <div key={i}>
              <h1 className="footerHeader">{detail.detailHeader}</h1>
              {detail.isUrl ? (
                <Link
                  target="_blank"
                  href={detail.detailItem}
                  className="footerStatus underline md:text-sm lg:text-base"
                >
                  {detail.detailItem}
                </Link>
              ) : (
                <h1 className="footerStatus">{detail.detailItem}</h1>
              )}
            </div>
          ))}

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
            Let&apos;s Talk.
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
