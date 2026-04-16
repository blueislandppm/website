"use client";

import { useState, useTransition } from "react";

export default function ContactModal() {
  const [isPending, startTransition] = useTransition();
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          setToast({ type: "success", message: "Message sent! We'll get back to you as soon as possible." });
          (document.getElementById("contact_modal") as HTMLDialogElement | null)?.close();
          (document.getElementById("contact_form") as HTMLFormElement | null)?.reset();
        } else {
          setToast({ type: "error", message: "Something went wrong. Please try again." });
        }
      } catch {
        setToast({ type: "error", message: "Something went wrong. Please try again." });
      }
    });
  }

  return (
    <>
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}>
            <span>{toast.message}</span>
            <button className="btn btn-sm btn-ghost" onClick={() => setToast(null)}>✕</button>
          </div>
        </div>
      )}

      <dialog id="contact_modal" className="modal modal-middle">
        <div className="modal-box bg-base-100 max-w-lg">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="text-2xl font-bold text-base-content">
            Get in Touch
          </h3>
          <p className="mt-1 mb-6 text-sm text-base-content/70">
            Fill out the form below or reach us directly.
          </p>

          <form id="contact_form" action={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value="004e40e4-a23f-44d3-b32d-8139e7d6de3b" />

            <div>
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label" htmlFor="phone">
                <span className="label-text">Phone</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(239) 555-1234"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your pool or spa..."
                className="textarea textarea-bordered w-full"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="btn btn-primary btn-block"
            >
              {isPending ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <div className="divider my-8 text-base-content/50">or contact us directly</div>

          <div className="flex flex-col gap-2 text-center text-sm">
            <a
              href="mailto:blueislandpro1@gmail.com"
              className="link link-hover link-primary"
            >
              blueislandpro1@gmail.com
            </a>
            <a
              href="tel:+12394406024"
              className="link link-hover link-primary"
            >
              (239) 440-6024
            </a>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
