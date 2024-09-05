import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="z-50 fixed w-full px-[5%] lg:px-[10%] font-heading dark:bg-primaryWhite dark:text-primaryTextDarkGray bg-primaryBlack text-primaryTextWhite rounded-b-xl">
            <Navbar />
        </header>
    )
}

export default Header
