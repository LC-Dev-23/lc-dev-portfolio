import CarouselImg from '@/components/CarouselImg';
import H2 from '@/components/H2';
import Section from '@/components/Section'

export const carouselImages = [
  {
    image: {
      src: "/images/about-assets/metrics/mnl-de-speedtest.png",
      alt: "MNLeistung DE PageSpeed Insight Result"
    }
  },
  {
    image: {
      src: "/images/about-assets/metrics/mnl-ph-speedtest.png",
      alt: "MNLeistung PH PageSpeed Insight Result"
    }
  },
  {
    image: {
      src: "/images/about-assets/metrics/zeta-world-speedtest.png",
      alt: "ZETA World PH PageSpeed Insight Result"
    }
  },
];
const CareerSection = () => {
  return (
    <Section className="py-20 flex flex-col justify-center items-center dark:bg-grad-black bg-grad-white">
      <H2 borderStyle="after:w-[130%] md:after:w-[120%]">Career Highlights</H2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 ">
        <CarouselImg imgData={carouselImages} />
        <article className='text-primaryBlack/80 dark:text-primaryWhite/80 text-base lg:text-lg font-normal font-body lg:max-w-[30rem]  border dark:border-white/[0.2] border-black/[0.2] dark:shadow-none shadow-md rounded-xl p-5 lg:p-10'>
          <p>
            Over the past two years, <span className="text-primaryBlack dark:text-primaryWhite font-bold">Lord Christian Agra</span> developed and maintained a total of <span className="text-primaryBlack dark:text-primaryWhite font-bold">10 client websites</span> and <span className="text-primaryBlack dark:text-primaryWhite font-bold">2 company websites</span> while
            assisting the mobile team in converting Figma designs into functional mobile apps using <span className="text-primaryBlack dark:text-primaryWhite font-bold">Ionic with React js</span>.
          </p>
          <br />
          <p>This experience introduced him to <span className="text-primaryBlack dark:text-primaryWhite font-bold">React Js</span> and its capabilities,
            leading him to implement it in his company’s website. His work <span className="text-primaryBlack dark:text-primaryWhite font-bold">significantly improved the website’s performance and SEO</span>,
            achieving a perfect Pagespeed Insights score and reducing <span className="text-primaryBlack dark:text-primaryWhite font-bold">load times to 1 second or less</span>, greatly enhancing the user experience.</p>
        </article>
      </div>
    </Section>
  )
}

export default CareerSection

