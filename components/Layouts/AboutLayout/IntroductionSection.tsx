import H2 from '@/components/H2'
import Section from '@/components/Section'
import Image from 'next/image'

const IntroductionSection = () => {
    return (
        <Section className="py-20 lg:py-40 flex flex-col justify-center items-center">
            <div className="absolute w-full h-full top-0 left-0 object-cover -z-20 dark:bg-dot-white/[0.3] bg-dot-black/[0.3]" />
            <div className="absolute w-full h-full top-0 left-0 object-cover -z-10 pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <span className='block pt-5 lg:hidden' />
            <H2 borderStyle="after:w-[135%] lg:after:w-[125%]">Introduction</H2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 ">
                <Image className="w-[10rem] lg:w-[15rem] h-auto object-contain dark:drop-shadow-none drop-shadow-md"
                    src="/images/about-assets/formal-pic.png"
                    width={644}
                    height={751}
                    alt="formal picture of LC Dev"
                    priority={true} />
                <article className='text-primaryBlack/80 dark:text-primaryWhite/80 lg:max-w-[30rem] xl:max-w-[50rem] dark:bg-primaryBlack bg-primaryWhite border dark:border-white/[0.2] border-black/[0.2] dark:shadow-none shadow-md rounded-xl p-5 lg:p-10'>
                    <p className="text-base lg:text-lg font-normal font-body">
                        <span className="text-primaryBlack dark:text-primaryWhite font-bold">Lord Christian Agra</span> is a web developer with <span className="text-primaryBlack dark:text-primaryWhite font-bold">2 years of experience</span> in creating and
                        maintaining responsive, user-friendly websites. He has a <span className="text-primaryBlack dark:text-primaryWhite font-bold">solid understanding of
                            design principles</span>, combined with <span className="text-primaryBlack dark:text-primaryWhite font-bold">expertise in modern front-end web technologies</span>,
                        and a passion for building reliable websites that solve problems and
                        provide practical solutions for users.</p>
                </article>
            </div>
        </Section>
    )
}

export default IntroductionSection
