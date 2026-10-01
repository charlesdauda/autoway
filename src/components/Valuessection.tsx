
import { CarFront, ShieldCheck, Handshake, type LucideIcon } from "lucide-react";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const VALUES: Value[] = [
  {
    icon: CarFront,
    title: "Verified Vehicles",
    description:
      "Browse carefully selected cars with clear details, honest condition notes, and the information you need before booking or buying.",
  },
  {
    icon: Handshake,
    title: "Simple, Transparent Booking",
    description:
      "See straightforward prices, flexible rental options, and clear booking details from the moment you choose a vehicle to the moment you hit the road.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Parts & Support",
    description:
      "Find dependable spare parts and get practical support that helps keep your vehicle safe, capable, and ready for every journey.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              What We <span className="text-accent">Stand For</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The principles behind a better automotive experience, from
              finding the right vehicle to booking a drive and sourcing the
              parts that keep it moving.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              tabIndex={0}
              className="group flex min-h-105 flex-col border-b-4 border-accent bg-white p-12 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-brand focus-visible:-translate-y-2 focus-visible:bg-[#032b3c] focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Icon
                className="h-12 w-12 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />

              <h3 className="mt-10 text-3xl font-bold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                {title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-700 transition-colors duration-300 group-hover:text-white group-focus-visible:text-slate-200">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}