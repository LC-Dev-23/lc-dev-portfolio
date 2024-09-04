import HeroAnimationSection from '@/components/Layouts/ProjectLayout/HeroAnimationSection'
import ProjectSection from '@/components/Layouts/ProjectLayout/ProjectSection'

export const metadata = {
  title: 'Project',
  description: 'Projects by Lord Christian Agra - Showcasing Innovative Web Development & Front-End Solutions',
  openGraph: {
    title: 'Projects by Lord Christian Agra - Showcasing Innovative Web Development & Front-End Solutions',
    description: 'Explore the portfolio of Lord Christian Agra, featuring a diverse range of web development projects, including client websites, company sites, and mobile app conversions. Discover how his expertise in modern front-end technologies like React.js, responsive design, and performance optimization has delivered reliable and user-friendly solutions. Browse through his work to see the impact of his skills in action and how he continues to push the boundaries of web development.',
  }
}

const ProjectPage = () => {
  return (
    <main>
      <HeroAnimationSection />
      <ProjectSection />
    </main>
  )
}

export default ProjectPage