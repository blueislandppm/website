"use client";

export default function ContactButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={className}
      onClick={() =>
        (
          document.getElementById("contact_modal") as HTMLDialogElement | null
        )?.showModal()
      }
    >
      {children}
    </button>
  );
}
