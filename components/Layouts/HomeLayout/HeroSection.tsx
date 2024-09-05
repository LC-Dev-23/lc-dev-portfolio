import Section from '@/components/Section'
import Image from 'next/image'
import ResumeBtn from '@/components/ResumeBtn'
import SocmedIcons from '@/components/SocmedIcons'

const HeroSection = () => {
  return (
    <Section className="flex flex-col-reverse items-center justify-end lg:flex-row lg:justify-center md:gap-5 lg:gap-40 pt-28 pb-20 md:pt-40 lg:py-0">
      <article className='lg:max-w-[30rem] xl:max-w-[40rem]'>
        <h1 className="text-3xl md:text-4xl font-semibold font-display"><span className="text-lg md:text-xl font-normal drop-shadow-2xl">Hi, Im</span><br />Lord Christian Agra</h1>
        <h2 className="text-xl md:text-2xl font-bold font-special italic pb-2 text-accentBrightRed">Web Developer</h2>
        <p className="text-base lg:text-lg font-normal font-sans mb-5 lg:mb-10">
          With 2 years of experience in building and maintaining responsive, user-friendly websites,
          I’ve gained a solid understanding of design principles and front-end technologies.
          I look forward to sharing how I create reliable, effective websites.</p>
        <div className="flex gap-4 items-center">
          <ResumeBtn />
          <SocmedIcons className="text-xl lg:text-3xl flex gap-2 md:gap-4" />
        </div>
      </article>
      <Image className="w-[10rem] md:w-[20rem] lg:w-[25rem] h-auto object-contain drop-shadow-2xl transform scale-x-[-1]"
        src="/images/home-assets/picture-of-me.png"
        width={1200}
        height={1469}
        alt="picture of LC Dev"
        priority={true} />
    </Section>
  )
}

export default HeroSection
