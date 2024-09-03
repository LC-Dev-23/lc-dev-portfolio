import H2 from '@/components/H2'
import Section from '@/components/Section'
import Image from 'next/image'

const IntroductionSection = () => {
    return (
        <Section className="py-20 lg:py-40 flex flex-col justify-center">
            <H2 borderStyle="after:w-[135%] lg:after:w-[125%]">Introduction</H2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 ">
                <Image className="w-[10rem] lg:w-[15rem] h-auto object-contain drop-shadow-2xl"
                    src="/images/about-assets/formal-pic.png"
                    width={644}
                    height={751}
                    alt="formal picture of LC Dev"
                    priority={true} />
                <article className='text-primaryBlack dark:text-accentSoftGray lg:max-w-[30rem] xl:max-w-[50rem] border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-5 lg:p-10'>
                    <p className="text-base lg:text-lg font-normal font-sans">
                        <span className="text-accentBrightRed">Lord Christian Agra</span> is a web developer with <span className="text-accentBrightRed">2 years of experience</span> in creating and
                        maintaining responsive, user-friendly websites. He has a <span className="text-accentBrightRed">solid understanding of
                            design principles</span>, combined with <span className="text-accentBrightRed">expertise in modern front-end web technologies</span>,
                        and a passion for building reliable websites that solve problems and
                        provide practical solutions for users.</p>
                </article>
            </div>
        </Section>
    )
}

export default IntroductionSection
