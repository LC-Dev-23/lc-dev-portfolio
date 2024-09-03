import Section from '@/components/Section'
import Card3D from '@/components/Card3D';
import H2 from '@/components/H2';

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
    {
        title: 'Mobile Development',
        description: 'Developing cross-platform apps with a focus on user-friendly interfaces.',
        listItems: [
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">PWA:</span> Web apps that work offline, load quickly, and feel like native apps in a browser.`,
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">Ionic React:</span> Creating hybrid mobile applications based on design specs.`,
            `<span class="dark:text-primaryWhite text-primaryBlack font-bold">Mobile Optimization:</span> Ensuring apps perform well on both iOS and Android.`,
        ],
    },
];

const AreasofExpertiseSection = () => {

    return (
        <Section className="py-20 lg:py-40  flex flex-col justify-center">
            <H2 borderStyle="after:w-[125%] md:after:w-[120%]">Areas of Expertise</H2>
            <div className="flex flex-col lg:flex-row  gap-10 justify-center items-center basis-full md:basis-1/2 lg:basis-1/3">
                {cardData.map((card) => (
                    <Card3D key={card.title} title={card.title} description={card.description} cardData={card.listItems} />
                ))}
            </div>
        </Section>
    )
}

export default AreasofExpertiseSection
