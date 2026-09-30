import { CarFront, Wrench } from 'lucide-react';

const services = [
    {
        icon: CarFront,
        title: 'Buy & Rent Cars',
        description: 'Explore verified listings to buy outright, or rent flexibly by the day, week or season.',
        isDark: false,
    },
    {
        icon: Wrench,
        title: 'Spare Parts',
        description: 'Source dependable parts to keep the car you already own running strong.',
        isDark: true,
    },
];

const Services = () => {
    return (
        <section className="relative z-10 px-6 sm:px-8 lg:px-10">
            <div className="mx-auto -mt-20 grid max-w-6xl overflow-hidden-sm shadow-2xl sm:-mt-24 sm:grid-cols-2">
                {services.map(({ icon: Icon, title, description, isDark }) => (
                    <article
                        key={title}
                        className={`p-8 sm:p-10 lg:p-12 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
                    >
                        <span
                            className={`flex h-14 w-14 items-center justify-center rounded-full ${
                                isDark ? 'bg-white/10' : 'bg-accent/10'
                            }`}
                        >
                            <Icon className={`h-6 w-6 ${isDark ? 'text-accent' : 'text-accent'}`} aria-hidden="true" />
                        </span>

                        <h3 className={`mt-6 text-xl font-bold sm:text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {title}
                        </h3>
                        <p className={`mt-3 max-w-sm text-sm leading-relaxed ${isDark ? 'text-white' : 'text-slate-700'}`}>
                            {description}
                        </p>

                        <a
                            href="#"
                            className={`mt-6 inline-block text-xs font-bold uppercase tracking-wide ${
                                isDark ? 'text-accent hover:text-accent-dark' : 'text-accent hover:text-accent-dark'
                            }`}
                        >
                             Read More 
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;