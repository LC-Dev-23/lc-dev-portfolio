import H2 from '@/components/H2'
import Section from '@/components/Section'
import TechIconBtn from '@/components/TechIconBtn'

export const arsenalData = [
    {
        title: "HTML5",
        srcImg: "/images/home-assets/tech-logo/html5-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "CSS3",
        srcImg: "/images/home-assets/tech-logo/css3-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "JavaScript(es6)",
        srcImg: "/images/home-assets/tech-logo/js-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "TypeSript",
        srcImg: "/images/home-assets/tech-logo/typescript-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "React Js",
        srcImg: "/images/home-assets/tech-logo/react-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Next Js",
        srcImg: "/images/home-assets/tech-logo/nextjs-logo.png",
        style: "dark:invert h-[3rem] lg:h-[5rem] w-full"
    },

    {
        title: "Tailwind CSS",
        srcImg: "/images/home-assets/tech-logo/tailwind-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Styled Components",
        srcImg: "/images/home-assets/tech-logo/styled-components-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "SASS",
        srcImg: "/images/home-assets/tech-logo/sass-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Framer Motion",
        srcImg: "/images/home-assets/tech-logo/framer-motion-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Shadcn Ui",
        srcImg: "/images/home-assets/tech-logo/shadcnui-logo.png",
        style: "dark:invert h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Bootstrap",
        srcImg: "/images/home-assets/tech-logo/bootstrap-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "PHP",
        srcImg: "/images/home-assets/tech-logo/php-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "WordPress",
        srcImg: "/images/home-assets/tech-logo/wordpress-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Laravel",
        srcImg: "/images/home-assets/tech-logo/laravel-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Cpanel",
        srcImg: "/images/home-assets/tech-logo/cpanel-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "GitHub",
        srcImg: "/images/home-assets/tech-logo/github-logo.png",
        style: "dark:invert h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "GitLab",
        srcImg: "/images/home-assets/tech-logo/gitlab-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "MySQL",
        srcImg: "/images/home-assets/tech-logo/mysql-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "JQuery",
        srcImg: "/images/home-assets/tech-logo/jquery-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Redux",
        srcImg: "/images/home-assets/tech-logo/redux-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Jest",
        srcImg: "/images/home-assets/tech-logo/jest-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "TansStack Query",
        srcImg: "/images/home-assets/tech-logo/react-query-logo.png",
        style: "h-[3rem] lg:h-[5rem] w-full"
    },
    {
        title: "Ionic",
        srcImg: "/images/home-assets/tech-logo/ionic-logo.png",
        style: "dark:invert h-[3rem] lg:h-[5rem] w-full"
    }
]

const TechArsenalSection = () => {

    return (
        <Section className="py-20 flex flex-col justify-center dark:bg-grad-black bg-grad-white bg-cover">
            <H2 borderStyle="after:w-[135%] md:after:w-[125%]">Tech Arsenal</H2>
            <div className="flex flex-col gap-10 justify-center items-center w-full mt-5">
                <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 lg:gap-20 place-content-center lg:p-10 h-auto">
                    {arsenalData.map((arsenalItem, index) => (
                        <TechIconBtn key={index} {...arsenalItem} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default TechArsenalSection
