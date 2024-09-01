"use client"
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { ModeToggle } from '../ModeToggle'
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

interface Link {
    href: string;
    text: string;
    className?: string; // Optional
}

const Navbar = () => {

    const links: Link[] = [
        { href: '/', text: 'HOME' },
        { href: '/about', text: 'ABOUT' },
        { href: '/project', text: 'PROJECT' },
        { href: '/services', text: 'SERVICES' },
        { href: '/contact', text: 'CONTACT', className: 'block lg:hidden' },
    ];

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center min-h-20 text-sm">
            <Link href={"/"} className=''>
                <Image
                    className='w-auto h-16 dark:invert filter-none'
                    src="/images/lc-dev-logo-white.png"
                    width={105}
                    height={100}
                    alt="LC Dev Logo"
                    priority={true}
                />
            </Link>
            <ul className={`text-accentSoftGray font-semibold gap-10 items-center hidden lg:flex`}>
                {links.map(({ href, text, className }: Link) => (
                    <li key={href} className={`${pathname === href ? 'dark:text-primaryBlack text-primaryWhite font-bold scale-110 relative after:absolute after:block after:w-full after:h-0.5 after:bg-primaryRed after:bottom-[-.5rem] after:left-0 after:transition-transform after:duration-300 hover:after:transform hover:after:scale-x-100' : 'hover:text-accentBrightRed hover:scale-110'} ${className}`}>
                        <Link href={href} >
                            {text}
                        </Link>
                    </li>
                ))}
                <li><ModeToggle /></li>
            </ul>
            <Link className='hidden lg:block' href={"/contact"}>
                <Button className={`font-semibold font-display rounded-none border-[3px] hover:border-accentRed hover:bg-inherit px-5 py-2 shadow-2xl border-primaryWhite dark:border-primaryBlack ${"/contact" === pathname ? "text-primaryWhite border-primaryRed dark:border-primaryRed" : "dark:text-accentSoftGray text-accentSoftGray hover:text-accentBrightRed dark:hover:text-accentBrightRed"}`}>CONTACT</Button>
            </Link>
            <Button onClick={toggleMenu} variant="link" size={'icon'} className='h-10 w-10 lg:hidden dark:text-primaryBlack text-primaryWhite text-4xl bg-transparent'>{isOpen ? <RiCloseLine /> : <RiMenu2Line />}</Button>
        </nav>
    )
}

export default Navbar
