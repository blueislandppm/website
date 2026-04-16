import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-6xl mx-auto sm:footer-horizontal">
        <nav>
          <h6 className="footer-title text-secondary">Blue Island</h6>
          <p className="max-w-xs text-sm text-neutral-content/70">
            Professional pool and spa maintenance serving Estero, Bonita
            Springs, Naples, and Fort Myers.
          </p>
        </nav>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/services" className="link link-hover">
            Services
          </Link>
          <Link href="/gallery" className="link link-hover">
            Gallery
          </Link>
          <ContactButton className="link link-hover">
            Contact
          </ContactButton>
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <a href="tel:+12394406024" className="link link-hover">
            (239) 440-6024
          </a>
          <a
            href="mailto:blueislandpro1@gmail.com"
            className="link link-hover"
          >
            blueislandpro1@gmail.com
          </a>
          <p className="text-sm text-neutral-content/70">
            Estero, FL 33928
          </p>
        </nav>
      </div>

      <div className="border-t border-neutral-content/10 px-4 py-4 text-center text-sm text-neutral-content/50">
        <p>&copy; {new Date().getFullYear()} Blue Island Professional Pool Maintenance. All rights reserved.</p>
      </div>
    </footer>
  );
}
