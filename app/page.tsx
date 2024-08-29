import HeroSection from '@/components/Layouts/HomeLayout/HeroSection'
import AreasofExpertiseSection from '@/components/Layouts/HomeLayout/AreasofExpertiseSection'
import PersonalProficienciesSection from '@/components/Layouts/HomeLayout/PersonalProficienciesSection'
import TechArsenalSection from '@/components/Layouts/HomeLayout/TechArsenalSection'
import Attribution from '@/components/Attribution'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AreasofExpertiseSection />
      <PersonalProficienciesSection />
      <TechArsenalSection />
      <Attribution />
    </main>
  )
}

export default HomePage
