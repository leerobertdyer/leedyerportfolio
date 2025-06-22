"use client";
import InputField from "@/components/InputField/InputField";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const [success, setSuccess] = useState(false);

  async function submitForm(data: FormData) {
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      if (resp.ok) setSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <>
    <Link className="absolute left-0 right-0 top-0 text-center pt-2" href="/">Back</Link>
      <div className="flex justify-center w-screen h-fit py-[3rem]">
        {success ? (
          <div
            className="
            border-2 border-leePink-base
            w-fit h-[15rem] 
            p-4 rounded-xl 
            text-leeWhite-dark 
            text-2xl relative 
            flex  flex-col gap-4
            justify-center items-center"
          >
            <p
              className="
              text-leePink-lighter
              text-bold text-lg 
              hover:cursor-pointer"
              onClick={() => setSuccess(false)}
            >
              (close)
            </p>
            <p>Form Successfully Sent!</p>
            <p>Lee will get back to you shortly at {getValues("email")}.</p>
            <p>
              In the meanwhile check out{" "}
              <Link
                className="text-blue-700 hover:text-leePink-light"
                href="/coding/projects"
              >
                some of his projects!
              </Link>
            </p>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={handleSubmit(submitForm)}
            className="
        flex flex-col 
        items-center justify-center
        w-[90%] h-fit max-w-[30rem]
        mx-auto "
          >
            <h2 className="text-3xl text-center w-full text-leeWhite-light">
              Contact Lee
            </h2>
            <InputField
              labelName="Name*"
              id="name"
              required
              register={register}
            />
            {errors.name && (
              <p className="text-leePink-lighter">{errors.name.message}</p>
            )}
            <InputField
              labelName="Email*"
              id="email"
              required
              register={register}
            />
            {errors.email && (
              <p className="text-leePink-lighter">{errors.email.message}</p>
            )}
            <label
              htmlFor="message"
              className="text-leeWhite-light w-[90%] mt-2"
            >
              Message*
            </label>
            <textarea
              required
              placeholder="Your Message..."
              className="
              text-leeBlack-base
            w-[90%] rounded-lg p-2 h-[13rem] 
            mb-2 focus:outline-leePink-dark"
              {...register("message")}
            />
            <button
              className="
            bg-leePink-base text-leeBlack-base 
            p-2 border-[1px] border-leeWhite-light 
            rounded-lg w-[10rem]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="text-leeWhite-light w-full text-center">
        <p>{`Don't wanna use the form?`}</p>
        <a
          className="text-blue-700 hover:cursor-pointer"
          href="mailto:lee.dyer.dev@gmail.com?subject=Lee%20Dyer%20Portfolio%20Inquiry"
        >
          lee.dyer.dev@gmail.com
        </a>
      </div>
    </>
  );
}
