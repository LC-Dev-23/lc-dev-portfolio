import H2 from '@/components/H2'
import Section from '@/components/Section'
import SoftSkillCarousel from '@/components/SoftSkillCarousel'

const PersonalProficienciesSection = () => {
    return (
        <Section className="py-20 flex flex-col justify-center">
            <H2 borderStyle="after:w-[120%] md:after:w-[115%]">Personal Proficiencies</H2>
            <SoftSkillCarousel />
        </Section>
    )
}

export default PersonalProficienciesSection
