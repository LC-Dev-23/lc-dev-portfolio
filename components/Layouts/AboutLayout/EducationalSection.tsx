import H2 from '@/components/H2'
import Section from '@/components/Section'
import Image from 'next/image'

const EducationalSection = () => {
  return (
    <Section className="py-20 flex flex-col justify-center items-center">
      <div className="absolute w-full h-full top-0 left-0 object-cover -z-20 dark:bg-dot-white/[0.3] bg-dot-black/[0.3]" />
      <div className="absolute w-full h-full top-0 left-0 object-cover -z-10 pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <H2 borderStyle="after:w-[120%] md:after:w-[115%]"> Educational Background</H2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-10">
        <article className="text-primaryBlack dark:text-accentSoftGray text-base lg:text-lg font-normal font-body lg:max-w-[30rem] xl:max-w-[50rem] dark:bg-primaryBlack bg-primaryWhite border dark:border-white/[0.2] border-black/[0.2] dark:shadow-none shadow-md rounded-xl p-5 lg:p-10">
          <p>
            <span className="text-primaryBlack dark:text-primaryWhite font-bold">Lord Christian Agra</span> earned his <span className="text-primaryBlack dark:text-primaryWhite font-bold">Bachelor of Science in Information Technology</span> from Philippine Best Training System Colleges,
            where he built a strong understanding of computer science and web development.
          </p>
          <br />
          <p>
            As part of the <span className="text-primaryBlack dark:text-primaryWhite font-bold">Philippines&apos; first K-12 graduating batch</span>, he faced the challenges of a significant educational shift during a global pandemic.
            This experience taught him <span className="text-primaryBlack dark:text-primaryWhite font-bold">resilience</span> and the <span className="text-primaryBlack dark:text-primaryWhite font-bold">ability to adjust quickly</span> to changing circumstances—skills that continue to shape his approach to web development.</p>
        </article>
        <Image className="w-[10rem] lg:w-[15rem] h-auto object-contain dark:drop-shadow-none drop-shadow-md"
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
