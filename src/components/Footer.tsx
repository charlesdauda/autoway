import type { FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "../assets/images/autowaylogo.png";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Cars", href: "#cars" },
  { label: "Spare Parts", href: "#parts" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

/** Heading with the short accent underline from the design. */
const FooterHeading = ({ children }: { children: string }) => (
  <div>
    <h3 className="text-2xl font-bold text-white">{children}</h3>
    <span className="mt-3 block h-1 w-14 bg-accent" aria-hidden="true" />
  </div>
);

const Footer = () => {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the email to your newsletter service here.
  };

  return (
    <footer className="bg-brand">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} alt="Autoway" className="h-12 w-auto" />
            <p className="mt-6 text-lg leading-8 text-white">
              AUTOWAY delivering integrated solutions for buying and renting
              cars and sourcing genuine spare parts, all in one place.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-8 list-disc space-y-4 pl-5 text-lg text-white marker:text-white">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="mt-8 space-y-6 text-lg text-white">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <address className="not-italic leading-7">
                 AutoWay
                  <br />
                  Accra, Ghana
                </address>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <a href="tel:+233000000000">+233 00 000 0000</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:hello@autoway.com" className="break-all">
                  hello@autoway.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <FooterHeading>Newsletter</FooterHeading>
            <p className="mt-8 text-lg leading-7 text-white">
              Subscribe to get the latest cars, parts and offers.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 space-y-4">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Your Email Address"
                className="w-full border border-white/15 bg-white/5 px-5 py-5 text-lg text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-accent px-6 py-5 text-sm font-bold uppercase tracking-widest text-black"
              >
                Subscribe now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-white md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Autoway. All Rights Reserved.
          </p>
          <ul className="flex gap-8">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;