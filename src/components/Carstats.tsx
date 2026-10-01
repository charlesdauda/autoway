import { useEffect, useRef, useState } from "react";
import { Car, MapPin, Users, Wrench, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  label: string;
  description: string;
};

const STATS: Stat[] = [
  {
    icon: Car,
    value: 500,
    label: "Cars Listed",
    description: "Verified vehicles available to rent or buy across the platform.",
  },
  {
    icon: Wrench,
    value: 10000,
    label: "Spare Parts in Stock",
    description: "Genuine and quality-checked parts for most popular makes.",
  },
  {
    icon: MapPin,
    value: 20,
    label: "Cities Covered",
    description: "Pickup, delivery and support in cities across Africa.",
  },
  {
    icon: Users,
    value: 3000,
    label: "Happy Customers",
    description: "Drivers and businesses who trust Autoway with their journeys.",
  },
];

/** Counts from 0 to `end` once the element scrolls into view. */
function useCountUp(end: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setCount(end);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          setCount(Math.round(end * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return { ref, count };
}

const StatItem = ({ icon: Icon, value, label, description }: Stat) => {
  const { ref, count } = useCountUp(value);

  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="h-12 w-12 text-accent" strokeWidth={1.75} aria-hidden="true" />

      <p className="mt-6 flex items-start text-6xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
        <span ref={ref}>{count.toLocaleString()}</span>
        <span className="mt-1 text-4xl text-accent md:text-5xl">+</span>
      </p>

      <h3 className="mt-4 text-xl font-bold text-brand md:text-2xl">
        {label}
      </h3>
      <p className="mt-3 max-w-[16rem] text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
};

const CarStats = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-brand md:text-6xl">
            Our Goals in <span className="text-accent">Numbers</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Autoway is making it simpler to buy, rent and maintain a car across
            Africa, with trusted vehicles, genuine spare parts and support you
            can count on.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarStats;