import IntroductionSection from '@/components/Layouts/AboutLayout/IntroductionSection'
import EducationalSection from '@/components/Layouts/AboutLayout/EducationalSection'
import PersonalSection from '@/components/Layouts/AboutLayout/PersonalSection'
import SummarySection from '@/components/Layouts/AboutLayout/SummarySection'
import React from 'react'
import CareerSection from '@/components/Layouts/AboutLayout/CareerSection'

const AboutPage = () => {
  return (
    <main>
      <IntroductionSection />
      <EducationalSection />
      <CareerSection />
      <PersonalSection />
      <SummarySection />
    </main>
  )
}

export default AboutPage
