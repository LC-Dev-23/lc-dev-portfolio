import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import React from 'react'
import { RiDownloadLine } from 'react-icons/ri'

const HeroSection = () => {
  return (
    <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative -z-10 flex items-center justify-center">
      <div className="absolute -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <Section className={"py-32 md:py-40 lg:py-0 flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-center gap-10 md:gap-20 lg:gap-40"}>
        <article className='max-w-[37rem]'>
          <h1 className="text-3xl md:text-4xl font-semibold font-display"><span className="text-xl md:text-2xl font-normal font-special">Hi, <span className="text-primaryRed">Im</span> </span><br />Lord Christian Agra</h1>
          <h2 className="text-xl md:text-2xl font-normal italic font-special pb-2 text-primaryRed">Web Developer</h2>
          <p className="text-base md:text-xl font-normal font-sans">
            With 2 years of experience in building and maintaining responsive, user-friendly websites,
            I’ve gained a solid understanding of design principles and front-end technologies.
            I look forward to sharing how I create reliable, effective websites.</p>
          <Button className="mt-4 flex gap-1"><RiDownloadLine />Resume</Button>
        </article>
        <div className="min-w-60 h-60 md:min-w-[20rem] md:h-[20rem] bg-red-600"></div>
      </Section>
    </div>
  )
}

export default HeroSection
