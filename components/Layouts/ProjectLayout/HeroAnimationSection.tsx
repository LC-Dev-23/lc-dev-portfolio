"use client";
import Section from '@/components/Section'
import { HeroParallax } from "@/components/ui/hero-parallax";

export const websites = [
    {
        title: "Prime Option Trading Corporation",
        link: "#",
        thumbnail:
            "/images/project-assets/websites/prime.jpg",
    },
    {
        title: "MNLeistung Inc.",
        link: "https://mnl-alpha-nextjs.vercel.app/",
        thumbnail:
            "/images/project-assets/websites/mnl-ph.jpg",
    },
    {
        title: "WRS Holding Incorporated",
        link: "#",
        thumbnail:
            "/images/project-assets/websites/wrs.jpg",
    },
    {
        title: "One Kalayaan Residences",
        link: "https://1kalayaan.ph/",
        thumbnail:
            "/images/project-assets/websites/1kalayaan.jpg",
    },
    {
        title: "MNLeistung GmbH.",
        link: "https://mnleistung-de-nextjs-alpha-test.vercel.app",
        thumbnail:
            "/images/project-assets/websites/mnl-de.jpg",
    },
    {
        title: "MNLeistung Inc. Services",
        link: "https://mnl-alpha-nextjs.vercel.app/services/",
        thumbnail:
            "/images/project-assets/websites/mnl-ph-services.jpg",
    },

    {
        title: "ZETA World Realty Inc.",
        link: "https://zetaworld.ph/",
        thumbnail:
            "/images/project-assets/websites/zeta.jpg",
    },
    {
        title: "MNLeistung GmbH",
        link: "https://mnleistung-de-nextjs-alpha-test.vercel.app/",
        thumbnail:
            "/images/project-assets/websites/mnl-de.jpg",
    },
    {
        title: "One University Residences",
        link: "https://1university.ph/",
        thumbnail:
            "/images/project-assets/websites/1university.jpg",
    },
    {
        title: "MNLeistung DE",
        link: "https://mnleistung-de-nextjs-alpha-test.vercel.app/",
        thumbnail:
            "/images/project-assets/websites/mnl-de.jpg",
    },

    {
        title: "Juantahanan PH",
        link: "https://juantahanan.ph/",
        thumbnail:
            "/images/project-assets/websites/juantahanan.jpg",
    },
    {
        title: "Starkfest Concrete Incorporated",
        link: "#",
        thumbnail:
            "/images/project-assets/websites/starkfest.jpg",
    },
    {
        title: "RS Realty Concepts Developer Inc.",
        link: "https://rsrealty.ph/",
        thumbnail:
            "/images/project-assets/websites/rs.jpg",
    },
    {
        title: "Travellers Insurance Surety Corp.",
        link: "https://www.triscoph.com/",
        thumbnail:
            "/images/project-assets/websites/trisco.jpg",
    },
];

const HeroAnimationSection = () => {
    return (
        <Section className="py-20 lg:pb-0 lg:pt-20">
            <HeroParallax websites={websites} />
        </Section>
    )
}

export default HeroAnimationSection
