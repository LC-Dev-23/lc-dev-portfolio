import CarouselImg from '@/components/CarouselImg';
import Section from '@/components/Section'

export const carouselImages = [
  {
    image: {
      src: "/images/about-assets/certificates/udemy-reactjs-cert.png",
      alt: "MNLeistung DE PageSpeed Insight Result"
    }
  },
  {
    image: {
      src: "/images/about-assets/certificates/js-essentials-1-cert.png",
      alt: "MNLeistung PH PageSpeed Insight Result"
    }
  },
  {
    image: {
      src: "/images/about-assets/certificates/legacy-free-code-camp-cert.png",
      alt: "ZETA World PH PageSpeed Insight Result"
    }
  },
];

const PersonalSection = () => {
  return (
    <Section className="py-20 !min-h-[50vh]">
      <h2 className="text-2xl md:text-3xl font-semibold font-display text-center py-10"><span className="font-special relative after:absolute after:block after:w-[115%] after:h-16 after:bg-transparent after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 after:rotate-1">Personal Enjoyments</span></h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 ">
        <CarouselImg imgData={carouselImages} />
        <article className='text-primaryBlack dark:text-accentSoftGray text-base lg:text-lg font-normal font-sans lg:max-w-[30rem] border dark:border-white/[0.2] border-black/[0.2] rounded-xl p-5 lg:p-10'>
          <p>
            Lord Christian Agra <span className="text-accentBrightRed">finds joy in learning</span> and actively pursues online courses on platforms like  <span className="text-accentBrightRed">Udemy</span> to deepen his knowledge.
            He also <span className="text-accentBrightRed">keeps up with tech trends</span> through YouTube channels and <span className="text-accentBrightRed">works on personal side projects</span> to reinforce his web development skills and try out new ideas.
          </p>
          <br />
          <p>
            <span className="text-accentBrightRed">Outside of coding</span>, LC enjoys <span className="text-accentBrightRed">reading</span> Manhwa and Manhua and <span className="text-accentBrightRed">Outside of coding</span>, LC enjoys <span className="text-accentBrightRed">watching</span> anime, particularly stories about <span className="text-accentBrightRed">underdogs who become heroes</span>.
            He relates to these characters, as he started with little experience and is <span className="text-accentBrightRed">driven to continually improve and grow</span>.
          </p>
        </article>
      </div>
    </Section>
  )
}

export default PersonalSection
