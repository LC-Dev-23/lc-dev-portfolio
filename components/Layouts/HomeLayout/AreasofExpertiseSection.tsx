import Section from '@/components/Section'
import Card3D from '@/components/Card3D';

export const cardData = [
    {
        title: 'Website Development & SEO',
        description: 'Building functional websites with a focus on improving search engine visibility.',
        listItems: [
            `<span class="text-primaryRed font-bold">Landing Page Implementation:</span> Converting designs into effective landing pages.`,
            `<span class="text-primaryRed font-bold">SEO Best Practices:</span> Enhancing site visibility on search engines.`,
            `<span class="text-primaryRed font-bold">Maintenance & Updates:</span> Keeping websites up-to-date and running smoothly.`,
        ],
    },
    {
        title: 'Front-End Web Development',
        description: 'Creating reusable components and user-friendly interfaces for web-based systems.',
        listItems: [
            `<span class="text-primaryRed font-bold">HTML, CSS, JavaScript:</span> Building the visual and interactive parts of websites.`,
            `<span class="text-primaryRed font-bold">React.js Applications:</span> Developing dynamic single-page applications.`,
            `<span class="text-primaryRed font-bold">User Interface Implementation:</span> Converting UI/UX designs into functional websites.`,
        ],
    },
    {
        title: 'Mobile Development',
        description: 'Developing cross-platform apps with a focus on user-friendly interfaces.',
        listItems: [
            `<span class="text-primaryRed font-bold">PWA:</span> Web apps that work offline, load quickly, and feel like native apps in a browser.`,
            `<span class="text-primaryRed font-bold">Ionic React:</span> Creating hybrid mobile applications based on design specs.`,
            `<span class="text-primaryRed font-bold">Mobile Optimization:</span> Ensuring apps perform well on both iOS and Android.`,
        ],
    },
];

const AreasofExpertiseSection = () => {

    return (
        <Section className="py-20 lg:py-40 min-h-[50vh]">
            <h2 className="text-2xl md:text-3xl font-semibold font-display text-center py-10"><span className="font-special relative after:absolute after:block after:w-[120%] after:h-16 after:bg-transparent after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 after:rotate-1">Areas of Expertise</span></h2>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 justify-center items-center">
                {cardData.map((card) => (
                    <Card3D key={card.title} title={card.title} description={card.description} cardData={card.listItems} />
                ))}
            </div>
        </Section>
    )
}

export default AreasofExpertiseSection
