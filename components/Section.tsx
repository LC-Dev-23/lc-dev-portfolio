import React, { FC, HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
}
const Section: FC<SectionProps> = ({ children, ...props }) => {
    return (
        <section {...props} className={`relative min-h-screen h-auto px-[10%] ${props.className || ""}`}>
            {children}
        </section>
    )
}

export default Section
