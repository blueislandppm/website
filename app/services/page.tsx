import type { Metadata } from "next";
import ServicesContent from "./services-content";
import ContactModal from "@/app/components/ContactModal";

export const metadata: Metadata = {
  title: "Our Services | Blue Island",
  description:
    "Blue Island's services include chemistry balancing, brushing, skimming, equipment monitoring, algae control, and more. Serving Estero, Bonita Springs, Naples, and Fort Myers.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesContent />
      <ContactModal />
    </>
  );
}
