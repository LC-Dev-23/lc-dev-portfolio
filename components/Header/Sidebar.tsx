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
                <Button variant="link" size={'icon'} className='h-10 w-10 lg:hidden dark:text-primaryBlack text-primaryWhite text-4xl bg-transparent'>{!isOpen && <RiMenu2Line />}</Button>
            </SheetTrigger>
            <SheetContent>
                <nav>
                    <ul className="flex flex-col items-center gap-5 justify-center min-h-[25rem] text-accentSoftGray font-semibold">
                        {navLinks.map((link) => (
                            <li className={`${pathname === link.href ? 'text-primaryBlack dark:text-primaryWhite font-bold scale-110 relative after:absolute after:block after:w-full after:h-0.5 after:bg-primaryRed after:bottom-[-.5rem] after:left-0 after:transition-transform after:duration-300 hover:after:transform hover:after:scale-x-100' : 'hover:text-accentBrightRed hover:scale-110'}`}><Link onClick={handleClick} href={link.href} >{link.text}</Link></li>
                        ))}
                        <li><ModeToggle style={"text-black dark:text-white"} /></li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default Sidebar