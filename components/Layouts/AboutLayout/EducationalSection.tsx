import Section from '@/components/Section'
import Image from 'next/image'

const EducationalSection = () => {
  return (
    <Section className="py-20 !min-h-[50vh]">
      <h2 className="text-2xl md:text-3xl font-semibold font-display text-center py-10"><span className="font-special relative after:absolute after:block after:w-[115%] after:h-16 after:bg-transparent after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 after:rotate-1">Educational Background</span></h2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-10">
        <article className='text-primaryBlack dark:text-accentSoftGray text-base lg:text-lg font-normal font-sans lg:max-w-[30rem] xl:max-w-[50rem] border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-5 lg:p-10'>
          <p>
          <span className="text-accentBrightRed">Lord Christian Agra</span> earned his <span className="text-accentBrightRed">Bachelor of Science in Information Technology</span> from Philippine Best Training System Colleges,
            where he built a strong understanding of computer science and web development.
          </p>
          <br />
          <p>
            As part of the <span className="text-accentBrightRed">Philippines' first K-12 graduating batch</span>, he faced the challenges of a significant educational shift during a global pandemic. 
            This experience taught him <span className="text-accentBrightRed">resilience</span> and the <span className="text-accentBrightRed">ability to adjust quickly</span> to changing circumstances—skills that continue to shape his approach to web development.</p>
        </article>
        <Image className="w-[10rem] lg:w-[15rem] h-auto object-contain drop-shadow-2xl"
          src="/images/about-assets/graduation-pic.png"
          width={644}
          height={751}
          alt="formal picture of LC Dev"
          priority={true} />
      </div>
    </Section>
  )
}

export default EducationalSection
