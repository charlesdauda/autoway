import { useEffect, useState } from 'react';
import navlogo from '../assets/images/autowaylogo.png';
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
        <header className={`fixed left-0 top-0 z-50 flex min-h-16 w-full items-center border-b bg-white px-4 py-3 sm:px-6 lg:px-10 ${isScrolled ? 'border-slate-200' : 'border-transparent'}`}>
            <div className='h-8 w-20 ml-15'>
                <img 
                src={navlogo}
                alt='autoway-logo'
                loading='lazy'
                />
            </div>
            <nav className="absolute left-1/2 translate-y-0.5 -translate-x-1/2">
                 <ul className="flex space-x-4">
                {navList.map(({name, link}) =>(
                    <li key={link}>
                        <a 
                        className="text-black transition hover:text-brand" 
                        href={link}>{name}</a>
                    </li>  
                ))}
                </ul>
            </nav>
            <div className="ml-auto mr-30 flex translate-y-0.5 items-center space-x-2">
                <a href="#signup" className="rounded-md font-semibold bg-brand px-6 py-2 text-white transition hover:bg-brand-dark">Sign Up</a>
                <a href="#login" className="px-6 py-2 border font-semibold text-black transition rounded-md">Log In</a>
            </div>
        </header>
    )
}

export default NavBar;