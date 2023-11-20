"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Title from "../../components/title";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status !== 200) {
          throw new Error("Something went wrong");
        }
      }),
      {
        loading: "Sending...",
        success: "Message sent!",
        error: "Something went wrong",
      },
      {
        style: {
          backgroundColor: "#222",
          color: "#fff",
        },
      }
    );

    setIsSending(false);
    reset();
  };

  let [isSending, setIsSending] = useState(false);

  return (
    <main className="flex-grow">
      <div className="mx-auto flex max-w-5xl flex-col items-start px-8">
        <Title>Contact</Title>
        <p className="mb-4">
          If you would like to contact me, send a message to{" "}
          <a
            href="mailto:contact@ivirtex.dev"
            className="text-sky-500 hover:text-pink-500 transition font-bold"
          >
            contact@ivirtex.dev
          </a>{" "}
          or use this contact form.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <label className="flex flex-col mb-4">
            <span>Your name</span>
            <input
              type="text"
              placeholder="John"
              {...register("name", { required: true })}
              className="mt-1 transition px-2 py-1 rounded-lg bg-neutral-800 border-2 border-transparent focus:border-neutral-600 focus:bg-neutral-700 focus:ring-0"
            />
            {errors.name && (
              <span className="text-red-500 mt-1">
                This field is required
              </span>
            )}
          </label>
          <label className="flex flex-col mb-4">
            <span>Your email</span>
            <input
              type="email"
              placeholder="john@example.com"
              {...register("email", { required: true })}
              className="mt-1 transition px-2 py-1 rounded-lg bg-neutral-800 border-2 border-transparent focus:border-neutral-600 focus:bg-neutral-700 focus:ring-0"
            />
            {errors.email && (
              <span className="text-red-500 mt-1">
                This field is required
              </span>
            )}
          </label>
          <label className="flex flex-col mb-4">
            <span>Message</span>
            <textarea
              placeholder="Hi, I have a question about..."
              {...register("message", { required: true })}
              className="mt-1 transition px-2 py-1 rounded-lg bg-neutral-800 border-2 border-transparent focus:border-neutral-600 focus:bg-neutral-700 focus:ring-0"
            />
            {errors.message && (
              <span className="text-red-500 mt-1">
                This field is required
              </span>
            )}
          </label>
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0 || isSending}
            className="mt-2 transition sm:w-min px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 disabled:bg-neutral-900"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
