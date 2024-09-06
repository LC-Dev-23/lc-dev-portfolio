import React, { useState } from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { RiMenu2Line } from 'react-icons/ri'
import { NavLinkType } from '../Header/Navbar'
import { ModeToggle } from '../ModeToggle'
import { usePathname } from 'next/navigation'

interface SidebarProps {
    navLinks: NavLinkType[];
}
const Sidebar = ({ navLinks }: SidebarProps) => {
    const pathname = usePathname();

    const [isOpen, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button aria-label="Hamburger Menu" variant="link" size={'icon'} className='h-10 w-10 lg:hidden dark:text-primaryBlack text-primaryWhite text-4xl bg-transparent'>{!isOpen && <RiMenu2Line />}</Button>
            </SheetTrigger>
            <SheetContent>
                <nav>
                    <ul className="flex flex-col items-center gap-5 md:gap-10 justify-center min-h-[30rem] md:min-h-[35rem] dark:text-primaryWhite/80 text-primaryBlack/80 font-heading font-semibold">
                        {navLinks.map((link) => (
                            <li key={link.text} className={`${pathname === link.href ? 'text-primaryBlack dark:text-primaryWhite font-bold scale-110 relative after:absolute after:block after:w-full after:h-0.5 after:bg-primaryRed after:bottom-[-.5rem] after:left-0 after:transition-transform after:duration-300 hover:after:transform hover:after:scale-x-100' : 'hover:text-accentBrightRed hover:scale-110'}`}><Link onClick={handleClick} href={link.href} >{link.text}</Link></li>
                        ))}
                        <li><ModeToggle style={"text-black dark:text-white"} /></li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default Sidebar
