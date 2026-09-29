import { CarFront, Handshake, Wrench } from 'lucide-react';

const services = [
    {
        icon: CarFront,
        title: 'Find your next car',
        description: 'Explore quality vehicles from trusted sellers, ready for the road ahead.',
    },
    {
        icon: Handshake,
        title: 'Move on your terms',
        description: 'Rent for a day or a season, with flexible options that fit your plans.',
    },
    {
        icon: Wrench,
        title: 'Keep it moving',
        description: 'Source dependable spare parts to maintain the car you already love.',
    },
];

const AboutUs = () => {
    return (
        <section id="about" className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                    We Have the Right Way <br className="hidden sm:block" />
                    for You to Move Forward
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    {services.map(({ icon: Icon, title, description }, index) => {
                        const isFeatured = index === 0;
                        return (
                            <article
                                key={title}
                                className={`rounded-2xl p-7 transition hover:-translate-y-1 ${
                                    isFeatured
                                        ? 'bg-brand text-white shadow-lg'
                                        : 'border border-slate-100 bg-white text-slate-900 shadow-sm'
                                }`}
                            >
                                <span
                                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                                            isFeatured ? 'bg-white/15' : 'bg-blue-50'
                                    }`}
                                >
                                    <Icon
                                        className={`h-6 w-6 ${isFeatured ? 'text-white' : 'text-accent'}`}
                                        aria-hidden="true"
                                    />
                                </span>

                                <h3 className={`mt-6 text-lg font-bold ${isFeatured ? 'text-white' : 'text-brand'}`}>
                                    {title}
                                </h3>
                                <p
                                    className={`mt-3 text-sm leading-relaxed ${
                                        isFeatured ? 'text-white' : 'text-slate-500'
                                    }`}
                                >
                                    {description}
                                </p>

                                <a
                                    href="#"
                                    className={`mt-6 inline-block text-sm font-bold ${
                                            isFeatured ? 'text-white' : 'text-accent'
                                    }`}
                                >
                                    Read More
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;