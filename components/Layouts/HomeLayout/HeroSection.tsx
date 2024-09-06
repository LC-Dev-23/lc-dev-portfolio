import Image from 'next/image'
import Section from '@/components/Section'
import ResumeBtn from '@/components/ResumeBtn'
import SocmedIcons from '@/components/SocmedIcons'

const HeroSection = () => {
  return (
    <>
      <Section className="flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-center md:gap-5 lg:gap-20 pt-32 pb-20 md:pt-40 lg:py-0 Z-10">
        <div className="absolute h-screen w-full min-h-[49rem] -z-20 dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center" />
        <div className="absolute h-screen w-full min-h-[49rem] -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <article className='lg:max-w-[30rem] xl:max-w-[41rem] font-normal font-body text-base lg:text-lg'>
          <p className="text-lg lg:text-lg font-bold">Hi, Im</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading dark:drop-shadow-none drop-shadow-md">Lord Christian Agra</h1>
          <h2 className="text-xl md:text-2xl pb-5 font-special text-accentBrightRed dark:drop-shadow-none drop-shadow-md">Web Developer</h2>
          <p className=" font-normal font-body mb-5 lg:mb-10">
            With 2 years of experience in building and maintaining responsive, user-friendly websites,
            I&apos;ve gained a solid understanding of design principles and front-end technologies.
            I look forward to sharing how I create reliable, effective websites.</p>
          <div className="flex gap-4 items-center">
            <ResumeBtn />
            <SocmedIcons className="text-xl lg:text-3xl flex gap-2 md:gap-4" />
          </div>
        </article>
        <Image className="w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] h-auto object-contain dark:drop-shadow-none drop-shadow-md transform scale-x-[-1]"
          src="/images/home-assets/picture-of-me.png"
          width={1200}
          height={1469}
          alt="picture of LC Dev"
          priority={true} />
      </Section>
    </>
  )
}

export default HeroSection
