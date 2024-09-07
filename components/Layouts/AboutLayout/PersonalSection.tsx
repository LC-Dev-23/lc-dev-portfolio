import CarouselImg from '@/components/CarouselImg';
import H2 from '@/components/H2';
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
    <Section className="py-20 flex flex-col justify-center items-center dark:bg-grad-black bg-grad-white">
      <H2 borderStyle="after:w-[120%] lg:after:w-[115%]">Personal Enjoyments</H2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20">
        <CarouselImg imgData={carouselImages} />
        <article className='text-primaryBlack/80 dark:text-primaryWhite/80 text-base lg:text-lg font-normal font-body lg:max-w-[30rem] border dark:border-white/[0.2] border-black/[0.2] dark:shadow-none shadow-md rounded-xl p-5 lg:p-10'>
          <p>
            Lord Christian Agra <span className="text-primaryBlack dark:text-primaryWhite font-bold">finds joy in learning</span> and actively pursues online courses on platforms like  <span className="text-primaryBlack dark:text-primaryWhite font-bold">Udemy</span> to deepen his knowledge.
            He also <span className="text-primaryBlack dark:text-primaryWhite font-bold">keeps up with tech trends</span> through YouTube channels and <span className="text-primaryBlack dark:text-primaryWhite font-bold">works on personal side projects</span> to reinforce his web development skills and try out new ideas.
          </p>
          <br />
          <p>
            <span className="text-primaryBlack dark:text-primaryWhite font-bold">Outside of coding</span>, LC enjoys <span className="text-primaryBlack dark:text-primaryWhite font-bold">reading</span> Manhwa and Manhua and <span className="text-primaryBlack dark:text-primaryWhite font-bold">watching</span> anime, particularly stories about <span className="text-primaryBlack dark:text-primaryWhite font-bold">underdogs who become heroes</span>.
            He relates to these characters, as he started with little experience and is <span className="text-primaryBlack dark:text-primaryWhite font-bold">driven to continually improve and grow</span>.
          </p>
        </article>

      </div>
    </Section>
  )
}

export default PersonalSection
