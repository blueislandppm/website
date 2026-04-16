import fs from "fs";
import path from "path";
import GalleryGrid from "./gallery-grid";
import { StaticImageData } from "next/image";

export const metadata = {
  title: "Gallery | Blue Island",
  description:
    "Browse our pool and spa maintenance gallery. See our work in Southwest Florida.",
};

interface WebpackRequireContext {
  keys(): string[];
  (id: string): { default: StaticImageData };
}
function importAll(r: WebpackRequireContext): StaticImageData[] {
  const images: StaticImageData[] = [];
  r.keys().forEach((item: string) => { 
    const module = r(item);
    images.push(module.default);
  });
  
  return images;
}
const galleryImages = importAll(
  require.context('../../public/gallery', false, /\.(png|jpe?g|webp|svg)$/)
);


const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];

function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  if (!fs.existsSync(galleryDir)) return [];

  return fs
    .readdirSync(galleryDir)
    .filter((file) =>
      IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
    )
    .sort()
    .map((file) => `/gallery/${file}`);
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="mb-2 text-center text-4xl font-bold text-primary">
          Our Work
        </h1>
        <p className="mb-10 text-center text-lg text-base-content/70">
          A showcase of our pool and spa maintenance projects
        </p>
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
