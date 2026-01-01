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
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  async function submitForm(data: FormData) {
    try {
      setIsSendingMessage(true);
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      if (resp.ok) setSuccess(true);
      setIsSendingMessage(false);
    } catch (error) {
      setIsSendingMessage(false);
      console.error("Error submitting form:", error);
    }
  }

  return (
    <>
      <Link className="absolute left-0 right-0 top-0 text-center pt-2" href="/">
        Back
      </Link>
      <div className="flex justify-center w-screen h-screen py-[3rem]">
        {success ? (
          <div
            className="
            border-2 border-myPink-base
            bg-myBlack-dark
            w-fit h-fit 
            p-4 rounded-xl 
            text-myWhite-dark 
            text-2xl relative 
            flex  flex-col gap-4
            justify-center items-center"
          >
            <p
              className="
              text-myPink-lighter
              text-bold text-lg 
              hover:cursor-pointer"
              onClick={() => setSuccess(false)}
            >
              (close)
            </p>
            <p>Message sent!</p>
            <p>Lee will get back to you shortly at {getValues("email")}.</p>
            <p>In the meanwhile check out </p>
            <Link
              className="text-blue-700 hover:text-myPink-light"
              href="/coding/projects"
            >
              Coding Projects
            </Link>
            <Link
              className="text-blue-700 hover:text-myPink-light"
              href="/music"
            >
              Music Projects
            </Link>
          </div>
        ) : isSendingMessage ? (
          <div className="absolute inset-0 bg-myBlue-lighter text-myBlack-dark w-screen h-screen flex justify-center items-center">
            <p className="animate-pulse">...Sending Message</p>
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
            <h2 className="text-3xl text-center w-full text-myWhite-light">
              Contact Lee
            </h2>
            <InputField
              labelName="Name*"
              id="name"
              required
              register={register}
            />
            {errors.name && (
              <p className="text-myPink-lighter">{errors.name.message}</p>
            )}
            <InputField
              labelName="Email*"
              id="email"
              required
              register={register}
            />
            {errors.email && (
              <p className="text-myPink-lighter">{errors.email.message}</p>
            )}
            <label
              htmlFor="message"
              className="text-myWhite-light w-[90%] mt-2"
            >
              Message*
            </label>
            <textarea
              required
              placeholder="Your Message..."
              className="
              text-myBlack-base
            w-[90%] rounded-lg p-2 h-[13rem] 
            mb-2 focus:outline-myPink-dark"
              {...register("message")}
            />
            <button
              className="
            bg-myPink-base text-myBlack-base 
            p-2 border-[1px] border-myWhite-light 
            rounded-lg w-[10rem]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      {!success && (
        <div className="text-myWhite-light w-full text-center">
          <p>{`Don't wanna use the form?`}</p>
          <a
            className="text-blue-700 hover:cursor-pointer"
            href="mailto:lee.dyer.dev@gmail.com?subject=Lee%20Dyer%20Portfolio%20Inquiry"
          >
            lee.dyer.dev@gmail.com
          </a>
        </div>
      )}
    </>
  );
}
