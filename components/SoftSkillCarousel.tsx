"use client"
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const cardData = [
    {
        title: 'Problem-Solving Skills',
        listItems: [
            "Ability to diagnose issues and find effective solutions.",
            "Logical thinking and analytical skills."
        ],
    },
    {
        title: 'Attention to Detail',
        listItems: [
            "Precision in coding and design.",
            "Ability to spot and correct errors."
        ],
    },
    {
        title: 'Adaptability',
        listItems: [
            "Quickly learning new technologies and frameworks.",
            "Adjusting to changing project requirements."
        ],
    },
    {
        title: 'Self-Motivation',
        listItems: [
            "Driven to continuously improve and learn",
            "Taking initiative in projects and tasks."
        ],
    },
    {
        title: 'Collaboration',
        listItems: [
            "Open to feedback and able to give constructive feedback.",
            "Working well within a team"
        ],
    },
    {
        title: 'Customer Focus',
        listItems: [
            "Understanding client needs and requirements.",
            "Delivering solutions that meet user expectations."
        ],
    },
    {
        title: 'Organizational Skills',
        listItems: [
            "Keeping projects and files well-organized.",
            "Documenting code and processes clearly."
        ],
    },
    {
        title: 'Ethical Standards',
        listItems: [
            "Commitment to honest and transparent practices.",
            "Respecting privacy and confidentiality."
        ],
    },
    {
        title: 'Technical Curiosity',
        listItems: [
            "Enthusiasm for exploring new technologies and trends.",
            "Engaging in ongoing learning and professional development."
        ],
    },
    {
        title: 'Patience',
        listItems: [
            "Persistence in troubleshooting and debugging.",
            "Calm under pressure and in challenging situations."
        ],
    }
];

const SoftSkillCarousel = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
            }}
            className="w-full px-2 md:px-5 mt-5"
        >
            <CarouselContent>
                {cardData.map((personality, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="dark:bg-primaryBlack bg-primaryWhite">
                            <CardHeader>
                                <CardTitle>{personality.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="min-h-20 md:min-h-24 text-sm md:text-base">
                                    {personality.listItems.map((listItem, index) => (
                                        <li className="marker:text-primaryRed pl-4 list-disc list-inside" key={index}>{listItem}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="translate-x-3 md:translate-x-0"/>
            <CarouselNext className="-translate-x-3 md:translate-x-0"/>
        </Carousel>
    )
}

export default SoftSkillCarousel
