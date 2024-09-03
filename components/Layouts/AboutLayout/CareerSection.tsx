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
    <Section className="py-20 flex flex-col justify-center items-center">
      <H2 borderStyle="after:w-[130%] md:after:w-[120%]">Career Highlights</H2>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-20 ">
        <article className='text-primaryBlack dark:text-accentSoftGray text-base lg:text-lg font-normal font-sans lg:max-w-[30rem]  border dark:border-white/[0.2] border-black/[0.2] rounded-xl shadow-xl p-5 lg:p-10'>
          <p>
            Over the past two years, <span className="text-accentBrightRed">Lord Christian Agra</span> developed and maintained a total of <span className="text-accentBrightRed">10 client websites</span> and <span className="text-accentBrightRed">2 company websites</span> while
            assisting the mobile team in converting Figma designs into functional mobile apps using <span className="text-accentBrightRed">Ionic with React js</span>.
          </p>
          <br />
          <p>This experience introduced him to <span className="text-accentBrightRed">React Js</span> and its capabilities,
            leading him to implement it in his company’s website. His work <span className="text-accentBrightRed">significantly improved the website’s performance and SEO</span>,
            achieving a perfect Pagespeed Insights score and reducing <span className="text-accentBrightRed">load times to 1 second or less</span>, greatly enhancing the user experience.</p>
        </article>
        <CarouselImg imgData={carouselImages} />
      </div>
    </Section>
  )
}

export default CareerSection

