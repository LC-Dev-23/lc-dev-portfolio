import H2 from '@/components/H2'
import Section from '@/components/Section'
import SoftSkillCarousel from '@/components/SoftSkillCarousel'

const PersonalProficienciesSection = () => {
    return (
        <Section className="py-20 flex flex-col justify-center items-center">
            <div className="absolute w-full h-full top-0 left-0 object-cover -z-20 dark:bg-grid-white/[0.1] bg-grid-black/[0.1]" />
            <div className="absolute w-full h-full top-0 left-0 object-cover -z-10 pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <H2 borderStyle="after:w-[120%] md:after:w-[115%]">Personal Proficiencies</H2>
            <SoftSkillCarousel />
        </Section>
    )
}

export default PersonalProficienciesSection
