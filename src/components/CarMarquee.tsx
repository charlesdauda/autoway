const CARS = ["BMW", "CADILLAC", "FORD", "TOYOTA", "MERCEDES", "TESLA"];

export default function CarMarquee() {
  return (
    <section
      aria-label="Car brands"
      className="w-full overflow-hidden bg-white py-12"
    >
      <style>{`
        @keyframes car-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .car-marquee-group { animation: none !important; }
        }
      `}</style>

      <div
        className="group flex w-full select-none overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="car-marquee-group flex min-w-full shrink-0 items-center justify-around gap-16 pr-16 md:gap-24 md:pr-24"
            style={{ animation: "car-marquee 30s linear infinite" }}
          >
            {CARS.map((car) => (
              <li key={car}>
                <span className="cursor-pointer text-2xl font-bold uppercase tracking-tight text-slate-300 transition-colors duration-300 hover:text-slate-800 md:text-3xl">
                  {car}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}