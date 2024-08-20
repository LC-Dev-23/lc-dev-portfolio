import AreasofExpertiseSection from '@/components/Layouts/HomeLayout/AreasofExpertiseSection'
import HeroSection from '@/components/Layouts/HomeLayout/HeroSection'
import PersonalProficienciesSection from '@/components/Layouts/HomeLayout/PersonalProficienciesSection'
import TechArsenalSection from '@/components/Layouts/HomeLayout/TechArsenalSection'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
      <HeroSection />
      <AreasofExpertiseSection />
      <TechArsenalSection />
      <PersonalProficienciesSection />
    </main>
  )
}

export default HomePage
