import Section from '@/components/Section'
import Card3D from '@/components/Card3D';
import H2 from '@/components/H2';
import { Button } from '@/components/ui/moving-border';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export const cardData = [
    {
        title: 'Website Development & SEO',
        description: 'Building functional websites with a focus on improving search engine visibility.',
        listItems: [
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">Landing Page Implementation:</span> Converting designs into effective landing pages.`,
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">SEO Best Practices:</span> Enhancing site visibility on search engines.`,
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">Maintenance & Updates:</span> Keeping websites up-to-date and running smoothly.`,
        ],
    },
    {
        title: 'Front-End Web Development',
        description: 'Creating reusable components and user-friendly interfaces for web-based systems.',
        listItems: [
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">HTML, CSS, JavaScript:</span> Building the visual and interactive parts of websites.`,
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">React.js Applications:</span> Developing dynamic single-page applications.`,
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">User Interface Implementation:</span> Converting UI/UX designs into functional websites.`,
        ],
    },
    // {
    //     title: 'Mobile Development',
    //     description: 'Developing cross-platform apps with a focus on user-friendly interfaces.',
    //     listItems: [
    //         `<span class="dark:text-primaryWhite text-primaryBlack font-bold">PWA:</span> Web apps that work offline, load quickly, and feel like native apps in a browser.`,
    //         `<span class="dark:text-primaryWhite text-primaryBlack font-bold">Ionic React:</span> Creating hybrid mobile applications based on design specs.`,
    //         `<span class="dark:text-primaryWhite text-primaryBlack font-bold">Mobile Optimization:</span> Ensuring apps perform well on both iOS and Android.`,
    //     ],
    // },
];

const AreasofExpertiseSection = () => {

    return (
        <Section className="py-20 lg:py-40  flex flex-col justify-center items-center dark:bg-grad-black bg-grad-white bg-cover">
            <H2 borderStyle="after:w-[125%] md:after:w-[120%]">Areas of Expertise</H2>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                {cardData.map((card) => (
                    <Card3D key={card.title} title={card.title} description={card.description} cardData={card.listItems} />
                ))}
            </div>
            <div className="mt-10">
                <Link href={'/project'}><Button className="dark:bg-white bg-primaryBlack dark:hover:bg-black flex hover:bg-white font-semibold font-heading text-primaryWhite dark:text-primaryBlack  dark:text-primaryBlack/80 text-primaryWhite/80 hover:text-primaryBlack dark:hover:text-primaryWhite rounded-none border-[3px] hover:border-accentRed px-5 py-2 border-primaryWhite dark:border-primaryBlack gap-2">See It in Action<FaArrowRight /></Button></Link>
            </div>



        </Section>
    )
}

export default AreasofExpertiseSection
