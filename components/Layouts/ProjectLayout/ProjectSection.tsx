import Image from 'next/image'
import Section from '@/components/Section'
import H2 from '@/components/H2'
import { Timeline } from '@/components/ui/timeline'
import TechIconBtn from '@/components/TechIconBtn';


export const data = [
    {
        title: "Oct 2022",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I started my career as a web developer at MNLeistung Inc., where I was responsible for developing and maintaining the company&apos;s and clients&apos; websites.
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
                            className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                        />
                        <p className="mt-2">Before</p>
                    </div>
                    <div>
                        <Image
                            src="/images/project-assets/timeline/mnl-head-after.jpg"
                            alt="MNLeistung home after"
                            width={780}
                            height={403}
                            className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                        />
                        <p className="mt-2">After</p>
                    </div>
                </div>
                <p className="mt-5">
                    <span className="font-bold">Issue Solved:</span> I resolved the issue of slow and occasionally infinite loading of
                    the preloader during the initial load by removing unnecessary animations. This optimization significantly enhanced
                    the website&apos;s performance, providing a smoother and faster user experience from the moment users visit the site.
                </p>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="HTML" srcImg="/images/home-assets/tech-logo/html5-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="CSS" srcImg="/images/home-assets/tech-logo/css3-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="JavaScript" srcImg="/images/home-assets/tech-logo/js-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Bootstrap" srcImg="/images/home-assets/tech-logo/bootstrap-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Cpanel" srcImg="/images/home-assets/tech-logo/cpanel-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Dec 2022",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I successfully migrated and deployed our company website to Laravel, adding new features like dynamic job postings.
                    During this process, I learned how to integrate third-party APIs and use Git for version control with GitLab.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/careers-before.jpg"
                        alt="Careers hero section"
                        width={780}
                        height={405}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/career-joblist.jpg"
                        alt="Careers job listing section"
                        width={780}
                        height={405}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="Laravel" srcImg="/images/home-assets/tech-logo/laravel-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="jQuery" srcImg="/images/home-assets/tech-logo/jquery-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Sass" srcImg="/images/home-assets/tech-logo/sass-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Bootstrap" srcImg="/images/home-assets/tech-logo/bootstrap-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Cpanel" srcImg="/images/home-assets/tech-logo/cpanel-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="GitLab" srcImg="/images/home-assets/tech-logo/gitlab-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
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
                        className="object-contain h-auto w-full lg:w-[80%] mx-auto lg:hover:scale-125 transition-transform duration-300"
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
                    A few months later, I was assigned to redesign the company website to make it unique and appealing to
                    potential developer applicants. As the only developer on the project, I worked closely with a Graphic
                    Designer to bring the design to life. I used React.js with Vite to ensure a modern and efficient development process.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    When Next.js 13.4 was released, I was eager to explore its new features like the App Router,
                    Image component, and built-in support for SSG, SSR, and SEO. Since my current project was built
                    with React, I decided to migrate it to Next.js. However, without a Node server,
                    I couldn&apos;t fully utilize Next.js&apos;s capabilities. I found a workaround by building the project
                    statically using the next export command and successfully deployed it on shared hosting.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    During this project, I learned to use Tailwind CSS, which was easy to grasp thanks to my strong background in vanilla CSS.
                    I also addressed browser compatibility issues with transparent animated videos, explored Framer Motion for animations,
                    and improved my front-end skills, focusing on responsive design and best practices like contrast and spacing.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/home-before.jpg"
                        alt="Home page before"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/about-before.jpg"
                        alt="About page before"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/products-before.jpg"
                        alt="Project page before"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/services-before.jpg"
                        alt="Services before"
                        width={780}
                        height={403}
                        className="object-cover h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="Next Js" srcImg="/images/home-assets/tech-logo/nextjs-logo.png" style="dark:invert h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="TypeScript" srcImg="/images/home-assets/tech-logo/typescript-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Tailwind CSS" srcImg="/images/home-assets/tech-logo/tailwind-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Framer Motion" srcImg="/images/home-assets/tech-logo/framer-motion-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Radix UI" srcImg="/images/home-assets/tech-logo/radixui-logo.png" style="dark:invert h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="GitLab" srcImg="/images/home-assets/tech-logo/gitlab-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Aug 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I was tasked with creating a German version of our company website, featuring instant content translation.
                    While I initially planned to use Internationalization (i18n), the lack of a Node server required me to
                    implement a custom solution using React&apos;s useContext. To ensure accurate translations, I attended German
                    lessons and worked closely with a German instructor.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Throughout this project, I learned to introduce myself in German, count, and understand cultural nuances.
                    I also gained knowledge in GDPR compliance and best practices by collaborating with the content creator on
                    the privacy policy. Additionally, I learned about managing cookies and local storage.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/home-de.jpg"
                        alt="Home page DE"
                        width={780}
                        height={402}
                        className="object-cover h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/partners-de.jpg"
                        alt="Partner page DE"
                        width={780}
                        height={402}
                        className="object-cover h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="Next Js" srcImg="/images/home-assets/tech-logo/nextjs-logo.png" style="dark:invert h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="TypeScript" srcImg="/images/home-assets/tech-logo/typescript-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Tailwind CSS" srcImg="/images/home-assets/tech-logo/tailwind-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="GitLab" srcImg="/images/home-assets/tech-logo/gitlab-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Sep 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    My boss aimed to provide a free website service for clients using our hospital system and affordable website solutions for small German businesses.
                    To achieve this, I spent several weeks researching and testing various page builders. The challenge was to create websites within 1-3 days,
                    as my boss mentioned that in Germany, websites can be built in just a few hours, setting a high standard of completing them within one day.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Through this project, I explored various website builders and their limitations, such as which ones are self-hosted and cannot be exported.
                    I gained experience with platforms like Wix, Nicepage, WordPress, and other drag-and-drop builders. Ultimately, we decided to focus on the Philippine market.
                </p>
            </div>
        ),
    },
    {
        title: "Oct 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    With no ongoing projects at the time, I chose to help the mobile team develop a Patient's Portal app.
                    This opportunity allowed me to stay engaged, sharpen my skills, and contribute to an important aspect of our company&apos;s offerings.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Image
                        src="/images/project-assets/timeline/login.png"
                        alt="Login"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full lg:hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/dashboard.png"
                        alt="Dashboard"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full lg:hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/menu.png"
                        alt="Menu"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full lg:hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/doctors.png"
                        alt="Doctors"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full lg:hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-1.png"
                        alt="Booking 1"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full lg:hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-2.png"
                        alt="Booking 2"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-3.png"
                        alt="Booking 3"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full hover:scale-125 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/booking-4.png"
                        alt="Booking 4"
                        width={422}
                        height={856}
                        className="object-cover h-auto w-full hover:scale-125 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="React Js" srcImg="/images/home-assets/tech-logo/react-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Ionic" srcImg="/images/home-assets/tech-logo/ionic-logo.png" style="dark:invert h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="TypeScript" srcImg="/images/home-assets/tech-logo/typescript-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Sass" srcImg="/images/home-assets/tech-logo/sass-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Capacitor" srcImg="/images/home-assets/tech-logo/capacitor-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="GitLab" srcImg="/images/home-assets/tech-logo/gitlab-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/websites/starkfest.jpg"
                        alt="Starkfest home page"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/websites/zeta.jpg"
                        alt="ZETA home page"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/websites/prime.jpg"
                        alt="Prime home page"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/websites/juantahanan-before.jpg"
                        alt="juantahanan home page"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="HTML" srcImg="/images/home-assets/tech-logo/html5-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="CSS" srcImg="/images/home-assets/tech-logo/css3-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="JavaScript" srcImg="/images/home-assets/tech-logo/js-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Php" srcImg="/images/home-assets/tech-logo/php-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Wordpress" srcImg="/images/home-assets/tech-logo/wordpress-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Elementor" srcImg="/images/home-assets/tech-logo/elementor-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Apr 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    During the project, we faced an additional challenge when one of the four websites needed to be redone due to the client&apos;s
                    dissatisfaction with the previously approved design. Amidst this, a significant new project emerged: a government housing initiative.
                    I was assigned to this project because three of the websites I managed needed to integrate an application form submission for beneficiaries.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    I worked closely with the C# team to develop the API needed for integrating the application form with the websites I managed.
                    This ensured smooth functionality and allowed me to contribute to a high-impact project while juggling multiple tasks.
                    Despite the added responsibility, it was a valuable experience.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    <Image
                        src="/images/project-assets/websites/juantahanan.jpg"
                        alt="Juantahanan home page new design"
                        width={1500}
                        height={850}
                        className="object-contain h-auto w-full lg:w-[80%] mx-auto lg:hover:scale-125 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="HTML" srcImg="/images/home-assets/tech-logo/html5-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="CSS" srcImg="/images/home-assets/tech-logo/css3-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="JavaScript" srcImg="/images/home-assets/tech-logo/js-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Php" srcImg="/images/home-assets/tech-logo/php-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Wordpress" srcImg="/images/home-assets/tech-logo/wordpress-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Elementor" srcImg="/images/home-assets/tech-logo/elementor-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Jul 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    After completing all my ongoing projects, my final task was to implement all sales and marketing suggestions into the websites. This involved adding Google Ads,
                    conversion tracking, booking systems, and call-to-action (CTA) elements, as well as ensuring form submissions were routed to the company's CRM via API.
                    I also created dedicated pages for each of the company&apos;s SaaS products, highlighting their unique features, optimizing them for SEO,
                    and making them searchable on Google. Finally, I compiled detailed documentation for all the websites I managed, outlining the work completed and the integrations implemented.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
                    Throughout this journey, I learned a great deal and am very grateful for my time with the company. I had the opportunity to work with many talented and amazing people,
                    which made the experience even more rewarding.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Image
                        src="/images/project-assets/timeline/home-after.jpg"
                        alt="Home page after"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/services-after.jpg"
                        alt="Services after"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/home-products-section.jpg"
                        alt="Home products section"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                    <Image
                        src="/images/project-assets/timeline/contact-after.jpg"
                        alt="Contact page after"
                        width={780}
                        height={403}
                        className="object-contain h-auto w-full lg:hover:scale-150 transition-transform duration-300"
                    />
                </div>
                <div className="my-8 flex-row">
                    <h3 className='font-bold'>Technology used:</h3>
                    <div className="flex flex-wrap mt-5 gap-5 lg:gap-10 justify-center">
                        <TechIconBtn title="Next Js" srcImg="/images/home-assets/tech-logo/nextjs-logo.png" style="dark:invert h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="TypeScript" srcImg="/images/home-assets/tech-logo/typescript-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Tailwind CSS" srcImg="/images/home-assets/tech-logo/tailwind-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Framer Motion" srcImg="/images/home-assets/tech-logo/framer-motion-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="Radix UI" srcImg="/images/home-assets/tech-logo/radixui-logo.png" style="dark:invert h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                        <TechIconBtn title="GitLab" srcImg="/images/home-assets/tech-logo/gitlab-logo.png" style="h-[3rem] lg:h-[4rem] w-auto mx-auto" />
                    </div>
                </div>
            </div>
        ),
    }
];

const ProjectSection = () => {
    return (
        <Section className="py-20 lg:py-40 !px-0">
            <H2 borderStyle="after:w-[125%] md:after:w-[120%]">Project Timeline</H2>
            <Timeline data={data} />
        </Section>
    )
}

export default ProjectSection
