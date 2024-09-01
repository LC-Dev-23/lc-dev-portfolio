import CarouselImg from '@/components/CarouselImg';
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
    <Section className="py-20 !min-h-[50vh]">
      <h2 className="text-2xl md:text-3xl font-semibold font-display text-center py-10"><span className="font-special relative after:absolute after:block after:w-[115%] after:h-16 after:bg-transparent after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 after:rotate-1">Career Highlights</span></h2>
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

