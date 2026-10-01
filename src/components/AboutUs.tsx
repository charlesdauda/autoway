import AboutImg from "../assets/images/aboutcar.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 md:py-24 mt-30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-20">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            About <span className="text-accent">Autoway</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Autoway is a modern automotive platform designed to make buying and
            renting vehicles easier, faster, and more convenient. We bring
            essential automotive services into one seamless digital experience,
            allowing users to discover vehicles, explore detailed information,
            compare options, make bookings, and manage their transactions with
            ease.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our goal is to simplify the way people access automotive services
            through technology, convenience, and transparency. Whether you are
            looking for a vehicle to rent for a short trip or searching for your
            next car to purchase, Autoway provides a reliable and user-friendly
            platform that connects customers with the vehicles and services they
            need.
          </p>

          <a
            href="#"
            className="mt-10 inline-block bg-accent px-10 py-5 text-sm font-bold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-accent-dark focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            More Info
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutImg}
            alt="A car from the Autoway collection"
            loading="lazy"
            className="min-h-80 w-full object-cover md:min-h-130"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;