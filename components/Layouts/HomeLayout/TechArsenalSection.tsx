import H2 from '@/components/H2'
import Section from '@/components/Section'
import TechIconBtn from '@/components/TechIconBtn'

export const arsenalData = [
    {
        title: "HTML5",
        srcImg: "/images/home-assets/tech-logo/html5-logo.png",
        style: ""
    },
    {
        title: "CSS3",
        srcImg: "/images/home-assets/tech-logo/css3-logo.png",
        style: ""
    },
    {
        title: "JavaScript(es6)",
        srcImg: "/images/home-assets/tech-logo/js-logo.png",
        style: ""
    },
    {
        title: "TypeSript",
        srcImg: "/images/home-assets/tech-logo/typescript-logo.png",
        style: ""
    },
    {
        title: "React Js",
        srcImg: "/images/home-assets/tech-logo/react-logo.png",
        style: ""
    },
    {
        title: "Next Js",
        srcImg: "/images/home-assets/tech-logo/nextjs-logo.png",
        style: "dark:invert"
    },

    {
        title: "Tailwind CSS",
        srcImg: "/images/home-assets/tech-logo/tailwind-logo.png",
        style: ""
    },
    {
        title: "Styled Components",
        srcImg: "/images/home-assets/tech-logo/styled-components-logo.png",
        style: ""
    },
    {
        title: "SASS",
        srcImg: "/images/home-assets/tech-logo/sass-logo.png",
        style: ""
    },
    {
        title: "Framer Motion",
        srcImg: "/images/home-assets/tech-logo/framer-motion-logo.png",
        style: ""
    },
    {
        title: "Shadcn Ui",
        srcImg: "/images/home-assets/tech-logo/shadcnui-logo.png",
        style: "dark:invert"
    },
    {
        title: "Bootstrap",
        srcImg: "/images/home-assets/tech-logo/bootstrap-logo.png",
        style: ""
    },
    {
        title: "PHP",
        srcImg: "/images/home-assets/tech-logo/php-logo.png",
        style: ""
    },
    {
        title: "WordPress",
        srcImg: "/images/home-assets/tech-logo/wordpress-logo.png",
        style: ""
    },
    {
        title: "Laravel",
        srcImg: "/images/home-assets/tech-logo/laravel-logo.png",
        style: ""
    },
    {
        title: "Cpanel",
        srcImg: "/images/home-assets/tech-logo/cpanel-logo.png",
        style: ""
    },
    {
        title: "GitHub",
        srcImg: "/images/home-assets/tech-logo/github-logo.png",
        style: "dark:invert"
    },
    {
        title: "GitLab",
        srcImg: "/images/home-assets/tech-logo/gitlab-logo.png",
        style: ""
    },
    {
        title: "MySQL",
        srcImg: "/images/home-assets/tech-logo/mysql-logo.png",
        style: ""
    },
    {
        title: "JQuery",
        srcImg: "/images/home-assets/tech-logo/jquery-logo.png",
        style: ""
    },
    {
        title: "Redux",
        srcImg: "/images/home-assets/tech-logo/redux-logo.png",
        style: ""
    },
    {
        title: "Jest",
        srcImg: "/images/home-assets/tech-logo/jest-logo.png",
        style: ""
    },
    {
        title: "TansStack Query",
        srcImg: "/images/home-assets/tech-logo/react-query-logo.png",
        style: ""
    },
    {
        title: "Ionic",
        srcImg: "/images/home-assets/tech-logo/ionic-logo.png",
        style: "dark:invert"
    }
]

const TechArsenalSection = () => {

    return (
        <Section className="py-20 flex flex-col justify-center dark:bg-grad-black bg-grad-white bg-cover">
            <H2 borderStyle="after:w-[135%] md:after:w-[125%]">Tech Arsenal</H2>
            <div className="flex flex-col gap-10 justify-center items-center w-full">
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
