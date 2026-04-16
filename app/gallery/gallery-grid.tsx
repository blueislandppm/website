"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <p className="text-center text-base-content/50">
        No images yet. Add photos to <code>public/gallery/</code> to populate
        this page.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setImageSrc(src);
              setIsOpen(true);
            }}
            className="group relative aspect-square overflow-hidden rounded-box bg-base-300 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <dialog
        className={`modal ${isOpen ? "modal-open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="modal-box max-w-5xl w-full p-2 bg-base-300"
          onClick={(e) => e.stopPropagation()}
        >
          {imageSrc && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={imageSrc}
                alt="Gallery image enlarged"
                fill
                className="rounded-box object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={() => setIsOpen(false)}>
            close
          </button>
        </form>
      </dialog>
    </>
  );
}
