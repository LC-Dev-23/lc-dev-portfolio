"use client"
import Section from "@/components/Section"
import Image from 'next/image'
import Link from 'next/link'


const Error = () => {
    return (
        <Section className="min-h-[80vh] flex flex-col-reverse lg:flex-row justify-center items-center">
            <div>
                <h1 className="font-heading font-bold text-lg md:text-2xl lg:text-4xl"><span className="block">Oops...</span> An Error Occurred!</h1>
                <p className="text-base md:text-lg lg:text-xl mt-2">Please <span className="text-accentDarkRed dark:text-accentLightRed"><Link href="/">try again</Link></span> later.</p>
            </div>
            <Image className="w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] h-auto object-contain dark:drop-shadow-none drop-shadow-md transform  pt-28 lg:pt-0"
                src="/images/page-not-found.png"
                width={1200}
                height={1469}
                alt="404 Cat error"
                priority={true} />
        </Section>
    )
}

export default Error
