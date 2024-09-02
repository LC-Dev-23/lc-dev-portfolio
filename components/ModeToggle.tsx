"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

import { useEffect, useState } from "react"
import { LuMoon, LuSun } from "react-icons/lu"
interface style {
    style: string;
}
export function ModeToggle({ style }: style) {

    const links = [
        { href: '/', text: 'HOME' },
        { href: '/about', text: 'ABOUT' },
        { href: '/portfolio', text: 'PORTFOLIO' },
        { href: '/experience', text: 'EXPERIENCE' },
        { href: '/contact', text: 'CONTACT', className: 'block lg:hidden' },
    ];

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


    return (
        <Button onClick={toggleDarkMode} className={`${style}`} variant="link" size="icon" aria-label="Click to change theme">
            {theme === 'dark' ? <LuSun className="h-[1.2rem] w-[1.2rem]" /> : <LuMoon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
    )
}