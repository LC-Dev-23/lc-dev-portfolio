import IntroductionSection from '@/components/Layouts/AboutLayout/IntroductionSection'
import EducationalSection from '@/components/Layouts/AboutLayout/EducationalSection'
import CareerSection from '@/components/Layouts/AboutLayout/CareerSection'
import PersonalSection from '@/components/Layouts/AboutLayout/PersonalSection'
import SummarySection from '@/components/Layouts/AboutLayout/SummarySection'

export const metadata = {
  title: 'About',
  description: 'About Lord Christian Agra - Web Developer with Proven Expertise in Responsive and User-Friendly Websites',
  openGraph: {
    title: 'About Lord Christian Agra - Web Developer with Proven Expertise in Responsive and User-Friendly Websites',
    description: 'Learn about Lord Christian Agra, a dedicated web developer with 2 years of experience in creating responsive, user-friendly websites. Explore his expertise in modern front-end technologies like React.js, and discover how his passion for problem-solving and practical solutions drives his work. With a solid foundation in Information Technology and a track record of enhancing website performance and SEO, Lord Christian combines design principles and coding skills to deliver exceptional digital experiences.',
  }
}

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
