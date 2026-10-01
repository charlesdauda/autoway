import { useState } from "react";
import { Fuel, Settings2, Users } from "lucide-react";

import BMW from "../assets/images/bmw3.png";
import Toyota from "../assets/images/landcruiser.png";
import Tesla from "../assets/images/tesla3.png";

type Listing = "Rent" | "Sale";

type Car = {
  id: number;
  name: string;
  type: string;
  listing: Listing;
  price: string;
  unit?: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  image: string;
};

const CARS: Car[] = [
  {
    id: 1,
    name: "BMW 3 Series",
    type: "Sedan",
    listing: "Rent",
    price: "$85",
    unit: "/ day",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    image: BMW,
  },
  {
    id: 2,
    name: "Toyota Land Cruiser",
    type: "SUV",
    listing: "Sale",
    price: "$62,000",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    image: Toyota,
  },
  {
    id: 3,
    name: "Tesla Model 3",
    type: "Sedan",
    listing: "Rent",
    price: "$110",
    unit: "/ day",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    image: Tesla,
  },
];

const FILTERS = ["All", "Rent", "Buy"] as const;
type Filter = (typeof FILTERS)[number];

const CarShowcase = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All" ? CARS : CARS.filter((car) => car.listing === filter);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Featured <span className="text-accent">Cars</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hand-picked vehicles you can rent for a day or buy outright.
              Compare the details, then book in a few clicks.
            </p>
          </div>

          <a
            href="#"
            className="inline-block w-fit bg-accent hover:bg-accent-dark transition px-10 py-5 text-sm font-bold uppercase tracking-widest text-black"
          >
            View all cars
          </a>
        </div>

        {/* Filter */}
        <div className="mt-12 flex gap-3" role="group" aria-label="Filter cars">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-widest ${
                filter === item
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((car) => (
            <article
              key={car.id}
              className="flex flex-col border border-slate-200 bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden border-b border-slate-300">
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-0 top-6 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-black">
                  For {car.listing}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col p-8">
                <p className="text-sm font-semibold text-slate-600">
                  {car.type}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                  {car.name}
                </h3>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" aria-hidden="true" />
                    {car.seats} seats
                  </li>
                  <li className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-accent" aria-hidden="true" />
                    {car.transmission}
                  </li>
                  <li className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-accent" aria-hidden="true" />
                    {car.fuel}
                  </li>
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <p className="text-3xl font-extrabold text-slate-900">
                    {car.price}
                    {car.unit && (
                      <span className="ml-1 text-base font-medium text-slate-600">
                        {car.unit}
                      </span>
                    )}
                  </p>

                  <a
                    href="#"
                    className="bg-accent hover:bg-accent-dark transition px-6 py-3 text-xs font-bold uppercase tracking-widest text-black"
                  >
                    {car.listing === "Rent" ? "Book now" : "View car"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
