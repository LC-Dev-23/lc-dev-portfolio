import React, { FC, HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
}
const Section: FC<SectionProps> = ({ children, ...props }) => {
    return (
        <section {...props} className={`min-h-screen mx-auto h-auto max-w-[80%] ${props.className || ""}`}>
            {children}
        </section>
    )
}

export default Section
