import HeroSection from '@/components/Layouts/HomeLayout/HeroSection'
import AreasOfExpertiseSection from '@/components/Layouts/HomeLayout/AreasofExpertiseSection1'
import PersonalProficienciesSection from '@/components/Layouts/HomeLayout/PersonalProficienciesSection'
import TechArsenalSection from '@/components/Layouts/HomeLayout/TechArsenalSection'
import Attribution from '@/components/Attribution'


const HomePage = () => {
  
  return (
    <main>
      <HeroSection />
      <AreasOfExpertiseSection />
      <PersonalProficienciesSection />
      <TechArsenalSection />
      <Attribution />
    </main>
  )
}

export default HomePage
