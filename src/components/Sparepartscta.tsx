import { ArrowRight } from "lucide-react";
import BannerImg from "../assets/images/autohero.png";

const SparePartsCta = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      <img
        src={BannerImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-slate-900/85" />
      <div
        className="absolute inset-0 -z-10 bg-brand-dark md:[clip-path:polygon(0_0,58%_0,50%_100%,0_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Need the Right <span className="text-accent">Spare Parts?</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Genuine, quality-checked parts for your car, from brake pads and
            filters to batteries and body panels. Tell us what you need and we
            will find it.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-accent px-10 py-5 text-sm font-bold uppercase tracking-widest text-black shadow-lg shadow-black/30"
          >
            Request a part
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-white"
          >
            Contact us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SparePartsCta;