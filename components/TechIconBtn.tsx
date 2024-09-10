import React, { lazy } from 'react'
import Image from "next/image";

interface ArsenalProps {
    title: string;
    srcImg: string;
    style?: string;
}

const TechIconBtn = ({ title, srcImg, style }: ArsenalProps) => {
    return (
        <div className="cursor-pointer">
            <Image
                className={`${style} dark:drop-shadow-none drop-shadow-md object-contain hover:scale-110`}
                src={srcImg}
                width={700}
                height={700}
                alt={`${title} logo`}
                priority={false}
                loading={"lazy"}
            />
            <h3 className="text-center pt-5 font-body text-xs md:text-sm">{title}</h3>
        </div>
    )
}

export default TechIconBtn
