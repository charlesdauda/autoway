import heroImage from '../assets/images/autohero.png';

const Hero = () => {
    return (
        <section className="relative h-svh overflow-hidden bg-slate-950">
            <img
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/55" aria-hidden="true" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
                <div className="max-w-2xl">
                    <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                        Your whole car journey, in one marketplace.
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
                        Browse verified listings, rent for the weekend, or track down the
                        exact part your car needs. Buying, selling and renting handled all
                        in one place.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#shop"
                            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                            Browse Cars
                        </a>
                        <a
                            href="#sell"
                            className="rounded-lg border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition hover:text-accent focus-visible:outline-offset-2"
                        >
                            Buy Parts
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;