import H2 from '@/components/H2'
import Section from '@/components/Section'
import SoftSkillCarousel from '@/components/SoftSkillCarousel'
import { Button } from '@/components/ui/moving-border'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const PersonalProficienciesSection = () => {
    return (
        <Section className="py-20 flex flex-col justify-center items-center">
            <div className="absolute w-full h-full top-0 left-0 object-cover -z-20 dark:bg-grid-white/[0.1] bg-grid-black/[0.1]" />
            <div className="absolute w-full h-full top-0 left-0 object-cover -z-10 pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <H2 borderStyle="after:w-[120%] md:after:w-[115%]">Personal Proficiencies</H2>
            <SoftSkillCarousel />
            <div className="mt-10">
                <Link href={'/about'}><Button className="dark:bg-white bg-primaryBlack dark:hover:bg-black flex hover:bg-white font-semibold font-heading text-primaryWhite dark:text-primaryBlack  dark:text-primaryBlack/80 text-primaryWhite/80 hover:text-primaryBlack dark:hover:text-primaryWhite rounded-none border-[3px] hover:border-accentRed px-5 py-2 border-primaryWhite dark:border-primaryBlack gap-2">Get to Know Me<FaArrowRight /></Button></Link>
            </div>
        </Section>
    )
}

export default PersonalProficienciesSection
