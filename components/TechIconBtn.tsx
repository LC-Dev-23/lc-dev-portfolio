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
                className={`${style} drop-shadow-logo-shadow h-[3rem] lg:h-[4rem] w-full object-contain rounded-xl group-hover/card:shadow-xl hover:scale-110`}
                src={srcImg}
                width={700}
                height={700}
                alt={`${title} logo`}
                priority={false}
                loading={"lazy"}
            />
            <h3 className="text-center pt-5 font-sans text-xs md:text-sm">{title}</h3>
        </div>
    )
}

export default TechIconBtn
