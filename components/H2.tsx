import React from 'react'

interface H2Type {
    children: string;
    borderStyle?: string
}

const H2 = ({ children, borderStyle }: H2Type) => {
    return (
        <h2 className="text-xl md:text-2xl lg:text-3xl font-heading text-center py-10 pb-16">
            <span className={`font-heading font-bold relative after:absolute after:block after:h-14 md:after:h-16 after:bg-transparent dark:after:shadow-none after:shadow-md after:border-4  after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 z-10  ${borderStyle}`}>
                {children}
            </span>
        </h2>
    )
}

export default H2
