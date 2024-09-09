import Image from 'next/image'
import Section from '@/components/Section'
import H2 from '@/components/H2'
import { Timeline } from '@/components/ui/timeline'


export const data = [
    {
        title: "Oct 2022",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I started my career as a web developer at MNLeistung Inc., where I was responsible for developing and maintaining the company&apos;s and clients' websites.
                    As a fresh graduate, I was familiar with basic technologies like HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, and cPanel hosting on free providers.
                    Within a few weeks, I began learning Laravel so I could assist with the hospital system development when I didn&apos;t have tasks related to the websites I handled.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    A few months into my role, while maintaining our company website, I proposed migrating the site to Laravel.
                    This migration would allow me to deepen my understanding of Laravel&apos;s folder structure, clean up the existing spaghetti code,
                    and implement a proper folder structure and code splitting to make the codebase more readable and maintainable. Additionally,
                    an upcoming website refresh aligned perfectly with my suggestions, making it the ideal time to implement these improvements.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-4">
                    <div>
                        <Image
                            src="/images/project-assets/timeline/mnl-head-before.jpg"
                            alt="MNLeistung home before"
                            width={780}
                            height={403}
                            className="object-contain h-auto w-full"
                        />
                        <p>Before</p>
                    </div>
                    <div>
                        <Image
                            src="/images/project-assets/timeline/mnl-head-after.jpg"
                            alt="MNLeistung home after"
                            width={780}
                            height={403}
                            className="object-contain h-auto w-full"
                        />
                        <p>After</p>
                    </div>
                </div>
                <div className="hidden lg:flex justify-around">


                </div>
                <p className="mt-5">Issue Solved: I addressed the issue of slow and sometimes infinite loading of the preloader during the initial load by removing unnecessary animations.
                    This optimization significantly improved the website’s performance, ensuring a smoother and faster user experience right from the start.</p>
            </div>
        ),
    },
    {
        title: "Dec 2022",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I successfully migrated and deployed our company website using Laravel,
                    introducing new features like dynamic job postings. Throughout this process,
                    I learned valuable skills, such as integrating third-party APIs and using
                    Git for version control with repositories like GitLab.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/careers-before.jpg"
                        alt="Careers hero section"
                        width={780}
                        height={405}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/career-joblist.jpg"
                        alt="Careers job listing section"
                        width={780}
                        height={405}
                        className="object-contain h-auto w-full"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Jan 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Thanks to my friendly nature, I built a strong connection with the mobile team.
                    Their team lead eventually invited me to join and assist with their front-end tasks.
                    This was when I was introduced to React.js. In just two weeks, I learned the basics of React Router,
                    Ionic Framework with Capacitor, and how styling works in React.
                </p>
                <div>
                    <Image
                        src="/images/project-assets/timeline/team-building.jpg"
                        alt="Careers job listing section"
                        width={1000}
                        height={667}
                        className="object-contain h-auto w-[80%] mx-auto"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "May 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    A few months later, I was tasked with redesigning the company website to make it unique and appealing to potential developer applicants.
                    As the sole developer on the project, I collaborated closely with a Graphic Designer to bring the vision to life. To achieve a modern and
                    efficient development process, I chose to use React.js with Vite.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    With the release of Next.js 13.4, I was excited to explore its new features, such as the App Router, Image component,
                    and built-in support for SSG, SSR, and SEO enhancements. Since my ongoing project was built with React,
                    I saw the opportunity to migrate it to Next.js. However, we lacked a Node server, limiting the full potential of Next.js.
                    I found a workaround by building the project statically using the next export command and successfully deploying it on shared hosting.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    During this project, I learned a lot, including using Tailwind CSS, which was easy to pick up due to my solid understanding of vanilla CSS.
                    I also tackled browser compatibility issues for transparent animated videos, learned Framer Motion for animations, and honed my front-end skills,
                    such as responsive design techniques and design best practices like contrast and spacing.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/home-before.jpg"
                        alt="hero template"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/about-before.jpg"
                        alt="hero template"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/products-before.jpg"
                        alt="hero template"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/services-before.jpg"
                        alt="hero template"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Aug 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I was assigned a new project: creating a German version of our company website with the unique feature of instant content translation.
                    Although I initially wanted to use Internationalization (i18n), the absence of a Node server led me to implement a custom solution using
                    React's useContext. I also attended German lessons and collaborated with a German instructor to accurately translate the website content.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Throughout this project, I learned a lot, including introducing myself in German, counting, and understanding cultural do's and don'ts.
                    I also gained knowledge in GDPR compliance and best practices by working closely with the content creator on developing the privacy policy.
                    Additionally, I learned about managing cookies and local storage.</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/home-de.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/partners-de.jpg"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="object-cover h-auto w-full"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Sep 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    My boss envisioned offering a free website service for clients who avail of our hospital system and affordable website services for small German businesses.
                    To meet this goal, I conducted several weeks of research, testing various page builders. The challenge was to create websites within 1-3 days,
                    as my boss noted that in Germany, websites could be built within a few hours, setting a high standard of at least one day for completion.</p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">Through this project, I learned about different website builders,
                    including their limitations—like which ones are self-hosted and cannot be exported. I gained experience using platforms like Wix, Nicepage, WordPress, and
                    other drag-and-drop builders. However, after evaluating the options, the decision was made to focus on the Philippine market instead.</p>
            </div>
        ),
    },
    {
        title: "Oct 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    With no ongoing projects at the time, I decided to assist the mobile team in developing a Patient's Portal app.
                    This allowed me to stay engaged and continue honing my skills while contributing to a critical part of our company's offerings.</p>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/login.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/dashboard.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/menu.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/doctors.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-1.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-2.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-3.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-4.png"
                        alt="hero template"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Feb 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    A new project came in with the challenge of delivering four websites within a month.
                    The project was complicated by a lack of planning, an inexperienced designer,
                    and a client who requested unlimited revisions despite the absence of a formal contract.
                    Despite these hurdles, I remained committed to meeting the deadline. I continued working even after working hours,
                    driven by my passion for web development. While my colleagues were playing games at night,
                    I focused on completing the designs provided by the Graphic Designer.
                    The hard work was challenging but fulfilling, as it felt like pursuing a hobby I truly enjoy.</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/websites/starkfest.jpg"
                        alt="Careers hero section"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/websites/zeta.jpg"
                        alt="Careers hero section"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/websites/prime.jpg"
                        alt="Careers hero section"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/websites/juantahanan-before.jpg"
                        alt="Careers hero section"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Apr 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    During the project, we faced an additional challenge when one of the four websites needed to be redone due to the client’s
                    dissatisfaction with the previously approved design. Amidst this, a significant new project emerged: a government housing initiative.
                    I was assigned to this project because three of the websites I managed needed to integrate an application form submission for beneficiaries.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I collaborated closely with the C# team to develop the necessary API for this integration, ensuring seamless functionality between the application
                    form and the websites I handled. This added responsibility was demanding but allowed me to contribute to a high-impact project while managing multiple tasks.</p>
                <div className="grid grid-cols-1 gap-4">
                    <Image
                        src="/images/project-assets/websites/juantahanan.jpg"
                        alt="Careers hero section"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-[80%] mx-auto"
                    />
                    <Image
                        src="/images/project-assets/timeline/juantahanan-application-form.jpg"
                        alt="Careers hero section"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-[80%] mx-auto"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Jul 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    After completing all my pending projects, my final task was to integrate all sales and marketing suggestions into the websites.
                    This included implementing Google Ads, conversion tracking, creating booking systems, setting up call-to-action (CTA) elements,
                    and ensuring form submissions were directed to the company's CRM via API. I also created dedicated pages for each of the company's systems,
                    optimized them for SEO, and made them searchable on Google. Lastly, I compiled comprehensive documentation for all the websites I managed,
                    detailing the work completed and the integrations applied.</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/home-after.jpg"
                        alt="Careers hero section"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/services-after.jpg"
                        alt="Careers hero section"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/home-products-section.jpg"
                        alt="Careers hero section"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full"
                    />
                    <Image
                        src="/images/project-assets/timeline/contact-after.jpg"
                        alt="Careers hero section"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full"
                    />

                </div>
            </div>
        ),
    }
];

const ProjectSection = () => {
    return (
        <Section className="py-20 lg:py-40">
            <H2 borderStyle="after:w-[125%] md:after:w-[120%]">Project Details</H2>
            <Timeline data={data} />
        </Section>
    )
}

export default ProjectSection
