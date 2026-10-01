import { useEffect, useState } from 'react';
import navlogo from '../assets/images/autowaylogo.png';

interface NavList {
    name: string;
    link: string;
}

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const navList: NavList[] = [
        { name: "Home", link: "home" },
        { name: "About", link: "#about" },
        { name: "Shop", link: "#services" },
        { name: "Track Order", link: "track-order" }
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className={`flex h-20 items-center px-4 transition-colors duration-300 sm:px-6 lg:px-10 ${
                    isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                    <a href="home" className="h-8 w-20 shrink-0">
                        <img src={navlogo} alt="autoway-logo" loading="lazy" className="h-full w-full object-contain" />
                    </a>

                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-8 text-sm font-medium">
                            {navList.map(({ name, link }) => (
                                <li key={link}>
                                    <a
                                        className={`transition ${
                                            isScrolled ? 'text-slate-900 hover:text-accent' : 'text-white hover:text-accent'
                                        }`}
                                        href={link}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <a
                            href="login"
                            className={`transition ${
                                isScrolled ? 'text-slate-900 hover:text-accent' : 'text-white hover:text-accent'
                            }`}
                        >
                            Login
                        </a>
                        <a
                            href="register"
                            className="rounded-lg bg-accent px-5 py-2.5 text-slate-950 transition hover:bg-accent-dark"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;