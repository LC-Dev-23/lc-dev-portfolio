import Section from '@/components/Section'
import SoftSkillCarousel from '@/components/SoftSkillCarousel'

const PersonalProficienciesSection = () => {
    return (
        <Section className="!min-h-[50vh] py-20">
            <h2 className="text-2xl md:text-3xl font-semibold font-display text-center py-10 lg:pt-20"><span className="font-special relative after:absolute after:block after:w-[110%] after:h-16 after:bg-transparent after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-4 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 after:rotate-1">Personal Proficiencies</span></h2>
            <SoftSkillCarousel />
        </Section>
    )
}

export default PersonalProficienciesSection
