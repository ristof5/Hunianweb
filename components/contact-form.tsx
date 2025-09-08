"use client";
import { useActionState } from "react";
import { ContactMessage } from "@/lib/actions";
import clsx from "clsx";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(ContactMessage, null);

  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      {state?.success && (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-md"
          role="alert"
        >
          {state.success}
        </div>
      )}

      {state?.formError && (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md"
          role="alert"
        >
          {state.formError}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              className="bg-gray-50 text-gray-800 p-3 border border-gray-300 
                         rounded-md w-full placeholder-gray-400 focus:outline-none 
                         focus:ring-2 focus:ring-orange-400"
              placeholder="Name"
            />
            <p className="text-sm text-red-500 mt-2">
              {state?.errors?.name?.[0]}
            </p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="bg-gray-50 text-gray-800 p-3 border border-gray-300 
                         rounded-md w-full placeholder-gray-00 focus:outline-none 
                         focus:ring-2 focus:ring-orange-400"
              placeholder="Johndoe123@gmail.com"
            />
            <p className="text-sm text-red-500 mt-2">
              {state?.errors?.email?.[0]}
            </p>
          </div>
        </div>

        <div>
          <input
            type="text"
            name="subject"
            className="bg-gray-50 text-gray-800 p-3 border border-gray-300 
                       rounded-md w-full placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-orange-400"
            placeholder="Subject"
          />
          <p className="text-sm text-red-500 mt-2">
            {state?.errors?.subject?.[0]}
          </p>
        </div>

        <div>
          <textarea
            rows={5}
            name="message"
            className="bg-gray-50 text-gray-800 p-3 border border-gray-300 
                       rounded-md w-full placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-orange-400"
            placeholder="Your Message"
          ></textarea>
          <p className="text-sm text-red-500 mt-2">
            {state?.errors?.message?.[0]}
          </p>
        </div>

        <button
          type="submit"
          className={clsx(
            "px-10 py-4 text-center font-semibold text-white w-full bg-orange-500 rounded-md hover:bg-orange-600 ransition-colors duration-200",
            {
              "opacity-50 cursor-progress animate-pulse": isPending,
            }
          )}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
