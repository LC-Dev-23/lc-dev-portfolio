"use client"
import React from 'react';
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


interface ImageType {
    src: string;
    alt: string;
}

interface ImgType {
    imgData: Array<{ image: ImageType }>;
}

export default function CarouselImg({ imgData }: ImgType) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )


    return (
        <Carousel
            plugins={[plugin.current]}
            orientation="horizontal"
            className="w-full lg:h-[28rem] flex items-center mx-auto my-5 max-w-xl">
            <CarouselContent>
                {imgData.map(({ image }) => (
                    <CarouselItem key={image.alt}>
                        <div className="">
                            <Image
                                className="object-cover drop-shadow-logo-shadow"
                                src={image.src}
                                width={1000}
                                height={445}
                                alt={image.alt}
                                priority={false}
                                loading={"lazy"}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="translate-x-3 md:translate-x-0"/>
            <CarouselNext className="-translate-x-3 md:translate-x-0"/>
        </Carousel>
    )
}
