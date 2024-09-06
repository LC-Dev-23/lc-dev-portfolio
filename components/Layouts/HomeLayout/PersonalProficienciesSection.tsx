import H2 from '@/components/H2'
import Section from '@/components/Section'
import SoftSkillCarousel from '@/components/SoftSkillCarousel'
import { Button } from '@/components/ui/moving-border'

const PersonalProficienciesSection = () => {
    return (
        <Section className="py-20 flex flex-col justify-center">
            <div className="absolute h-screen w-full min-h-[49rem] -z-20 dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center" />
            <div className="absolute h-screen w-full min-h-[49rem] -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <H2 borderStyle="after:w-[120%] md:after:w-[115%]">Personal Proficiencies</H2>
            <SoftSkillCarousel />
        </Section>
    )
}

export default PersonalProficienciesSection
