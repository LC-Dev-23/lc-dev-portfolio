import Section from '@/components/Section'
import Image from 'next/image'
import { RiDownloadLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'



const HeroSection = () => {
  return (
    <div className="flex items-center justify-center relative -z-10 dark:bg-black bg-white dark:bg-dot-primaryWhite/[0.3] bg-dot-primaryBlack/[0.3] ">
      <div className="flex items-center justify-center absolute -z-10 dark:bg-black bg-white pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Section className="py-24 md:pt-40 lg:py-0 flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-center gap-5 lg:gap-40">
        <article className='lg:max-w-[30rem] xl:max-w-[40rem]'>
          <h1 className="text-3xl md:text-4xl font-semibold font-display"><span className="text-xl md:text-2xl font-normal drop-shadow-2xl">Hi, <span className="text-primaryRed">Im</span> </span><br />Lord Christian Agra</h1>
          <h2 className="text-xl md:text-2xl font-normal font-special italic pb-2 text-primaryRed ">Web Developer</h2>
          <p className="text-base lg:text-lg font-normal font-sans">
            With 2 years of experience in building and maintaining responsive, user-friendly websites,
            I’ve gained a solid understanding of design principles and front-end technologies.
            I look forward to sharing how I create reliable, effective websites.</p>
          <Button className="mt-4 flex gap-1"><RiDownloadLine />Resume</Button>
        </article>
        <Image className="w-[10rem] md:w-[20rem] lg:w-[25rem] h-auto object-contain drop-shadow-2xl transform scale-x-[-1]"
          src="/images/home-assets/picture-of-me.png"
          width={1200}
          height={1469}
          alt="picture of LC Dev"
          priority={true} />
      </Section>
    </div>
  )
}

export default HeroSection
