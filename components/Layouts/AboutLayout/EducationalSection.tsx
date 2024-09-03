import H2 from '@/components/H2'
import Section from '@/components/Section'
import Image from 'next/image'

const EducationalSection = () => {
  return (
    <Section className="py-20 flex flex-col justify-center">
      <H2 borderStyle="after:w-[120%] md:after:w-[115%]"> Educational Background</H2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-10">
        <article className="text-primaryBlack dark:text-accentSoftGray text-base lg:text-lg font-normal font-sans lg:max-w-[30rem] xl:max-w-[50rem] border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-5 lg:p-10">
          <p>
            <span className="text-accentBrightRed">Lord Christian Agra</span> earned his <span className="text-accentBrightRed">Bachelor of Science in Information Technology</span> from Philippine Best Training System Colleges,
            where he built a strong understanding of computer science and web development.
          </p>
          <br />
          <p>
            As part of the <span className="text-accentBrightRed">Philippines&apos; first K-12 graduating batch</span>, he faced the challenges of a significant educational shift during a global pandemic.
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
