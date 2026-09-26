import { useEffect, useState } from 'react';
import navlogo from '../assets/images/autowaylogo.png';
import { Mail, Phone } from 'lucide-react';
interface NavList {
    name: string;
    link: string;
}

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const navList : NavList[] = [
        {name: "Home", link: "home"},
        {name: "About", link: "#about"},
        {name: "Shop", link: "shop"}
    ]

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="bg-black px-4 py-3.5 text-center text-xs font-medium text-white sm:px-6 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-between">
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                        <a className="inline-flex items-center gap-2 transition hover:text-slate-400 font-semibold" href="tel:+23356723390">
                            <Phone size={15} aria-hidden="true" />
                            <span>+23356723390</span>
                        </a>
                        <a className="inline-flex items-center gap-2 transition hover:text-slate-400 font-semibold" href="mailto:info@autoway.com">
                            <Mail size={15} aria-hidden="true" />
                            <span>info@autoway.com</span>
                        </a>
                    </div>
                    <span className="text-white space-x-4 font-semibold">
                        <a href="register" className="transition hover:text-slate-400">Register</a>
                        <a href="login" className="transition hover:text-slate-400">Login</a>
                    </span>
                </div>
            </div>

            <div className={`flex min-h-16 items-center border-b bg-white px-4 py-3 sm:px-6 lg:px-10 ${isScrolled ? 'border-slate-200' : 'border-transparent'}`}>
                <div className="ml-15 h-8 w-20">
                    <img src={navlogo} alt="autoway-logo" loading="lazy" />
                </div>

                <nav className="absolute left-1/2 -translate-x-1/2 translate-y-0.5">
                    <ul className="flex space-x-4">
                        {navList.map(({ name, link }) => (
                            <li key={link}>
                                <a className="text-black transition hover:text-brand" href={link}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;