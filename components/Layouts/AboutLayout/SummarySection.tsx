"use client"
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export const AboutMe = () => {
  return (
    <div className="flex flex-col text-base lg:text-lg font-normal font-sans h-[20rem] overflow-y-scroll px-5">
      <h3 className="text-2xl md:text-3xl font-semibold font-display dark:text-primaryWhite text-primaryBlack mb-2">About Me</h3>
      <p>I&apos;ve been working as a web developer for two years, and I enjoy it a lot. The field is always evolving, which keeps me motivated to learn and tackle new problems. My curiosity and interest in technology drive my enthusiasm for development. I find it rewarding to turn an idea into a functional, user-friendly website.</p>
      <div>
        <ul className="grid grid-flow-row lg:grid-cols-2 gap-2 mt-2">
          <li>Name: <span className="dark:text-primaryWhite">Lord Christian Agra</span></li>
          <li>Experience: <span className="dark:text-primaryWhite">2 years</span></li>
          <li>Nationality: <span className="dark:text-primaryWhite">Filipino</span></li>
          <li>Address: <span className="dark:text-primaryWhite">Teresa, Rizal, Philippines</span></li>
          <li>Age: <span className="dark:text-primaryWhite">24 years old</span></li>
          <li>Phone: <span className="dark:text-primaryWhite">+63 948 921 4499</span></li>
          <li>Email: <span className="dark:text-primaryWhite">lordchristianagra23@gmail.com</span></li>
          <li>Languages: <span className="dark:text-primaryWhite">Filipino, English</span></li>
        </ul>
      </div>
    </div>
  )
}
export const Experience = () => {
  return (
    <div className="flex flex-col text-base lg:text-lg font-normal font-sans h-[20rem] overflow-y-scroll px-5">
      <h3 className="text-2xl md:text-3xl font-semibold font-display dark:text-primaryWhite text-primaryBlack">My Experience</h3>
      <h4 className="flex justify-between"><span className="text-primaryRed">Web Developer / Mobile Developer</span> <span>10/2022 - 07/2024</span></h4>
      <p className="flex justify-between"><span>MNLeistung Inc.</span> <span>Cainta, Rizal, Philippines</span></p>
      <ul className="marker:text-primaryRed dark:text-accentSoftGray flex flex-col gap-2 pl-4 pt-4 pb-10 list-disc list-inside">
        <li>
          Significantly improved our company website&apos;s performance and
          SEO, achieving a perfect Lighthouse score and reducing load time
          to 1 second or less, resulting in enhanced user experience.
        </li>
        <li>
          Collaborated with the GD and Sales teams to apply their funneling
          techniques, using modern technologies like Next.js and Tailwind.
        </li>
        <li>
          Successfully implemented dynamic job postings and integrated our
          HRIS APIs into the website, resulting in a more efficient job
          application process and beter HR data management.
        </li>
        <li>
          Collaborated with the mobile team to transform Figma designs into
          functional mobile apps using React JS, Ionic, and Sass, while
          integrating third-party APIs.
        </li>
        <li>
          Developed and maintained 10 client websites, utilizing HTML, CSS,
          JavaScript, PHP, and WordPress with Elementor.
        </li>
      </ul>
      <h4 className="flex justify-between"><span className="text-primaryRed">Jr Full Stack Developer (OJT)</span> <span>03/2022 – 07/2022</span></h4>
      <p className="flex justify-between"><span>TEMA Health and Beauty Products Trading</span> <span>Pasig, NCR, Philippines</span></p>
      <ul className="marker:text-primaryRed dark:text-accentSoftGray flex flex-col gap-2 pl-4 pt-4 list-disc list-inside">
        <li>
          Automated repetive tasks for agents by creating digital forms with
          CRUD functionality, transitioning from paper to digital using HTML,
          CSS, JavaScript, PHP, MySQL, and Bootstrap.
        </li>
        <li>
          Enhanced the system’s UI, implemented code spliting, organized
          the folder structure, and optimized code by removing unused and
          repetive segments.
        </li>
      </ul>
    </div>
  )
}
export const Education = () => {
  return (
    <div className="flex flex-col text-base lg:text-lg font-normal font-sans h-[20rem] overflow-y-scroll px-5">
      <h3 className="text-2xl md:text-3xl font-semibold font-display dark:text-primaryWhite text-primaryBlack mb-4">My Education</h3>
      <h4 className="flex justify-between"><span className="text-accentBrightRed italic font-special text-xl">Bachelor of Science in Information Technology</span> <span>2018 - 2022</span></h4>
      <p className="flex justify-between"><span>Philippine Best Training System Colleges</span> <span>Binangonan, Rizal, Philippines</span></p>

      <h4 className="flex justify-between mt-4"><span className="text-accentBrightRed italic font-special text-xl">Information and
        Communications Technology</span> <span>2016 - 2018</span></h4>
      <p className="flex justify-between"><span>Philsin College Foundation Inc.</span> <span>Teresa, Rizal, Philippines</span></p>
      <h4 className="text-base md:text-xl font-semibold font-display dark:text-primaryWhite text-primaryBlack mt-4">Online Courses</h4>
      <h5 className="flex justify-between mt-4"><span className="text-accentBrightRed italic font-special text-xl">React JS - The Complete Guide
        2024 (incl. Next.js, Redux)</span></h5>
      <p className="flex justify-between"><span>Udemy/Academind - Maximilian Schwarzmüller</span> </p>
      <h5 className="mt-4"><span className="text-accentBrightRed italic font-special text-xl">JavaScript Essentials 1</span></h5>
      <p className="">Cisco Networking Academy</p>
      <h5 className="flex justify-between mt-4"><span className="text-accentBrightRed italic font-special text-xl">JavaScript Essentials 2</span> <span>(inprogress)</span></h5>
      <p className="">Cisco Networking Academy</p>
      <h5 className="flex justify-between mt-4"><span className="text-accentBrightRed italic font-special text-xl">Graphic Design Masterclass - Learn GREAT Design</span> <span>(inprogress)</span></h5>
      <p>Udemy - Lindsay Marsh</p>
    </div>
  )
}
export const Skills = () => {
  return (
    <div className="text-base lg:text-lg font-normal font-sans h-[20rem] px-5">
      <h3 className="text-2xl md:text-3xl font-semibold font-display dark:text-primaryWhite text-primaryBlack mb-4">My Skills</h3>
      <ul className="marker:text-primaryRed dark:text-accentSoftGray flex flex-col gap-2 pl-4 pt-4 list-disc list-inside">
        <li>Strong understanding of HTML, CSS, and JavaScript.</li>
        <li>Skilled in building responsive, cross-browser compatible websites.</li>
        <li>Ability to quickly learn and adapt to new technologies and frameworks.</li>
        <li>Creative approach to problemsolving and resourcefulness in finding solutions.</li>
      </ul>
    </div>
  )
}

type Section = 'aboutMe' | 'experience' | 'education' | 'skills';
const SummarySection = () => {

  const [selectedSection, setSelectedSection] = useState<Section>('aboutMe');

  const handleSectionChange = (section: Section) => {
    setSelectedSection(section);
  };
  return (
    <Section className="py-20 lg:py-40 !min-h-[50vh]">
      <h2 className="text-2xl md:text-3xl font-semibold font-display text-center py-10"><span className="font-special relative after:absolute after:block after:w-[130%] after:h-16 after:bg-transparent after:border-4 after:border-primaryRed after:bottom-[-1rem] after:-z-10 after:-left-6 after:transition-transform after:duration-300 hover:after:transform after:skew-x-12 after:rotate-1">Summary</span></h2>
      <div className="flex flex-col lg:flex-row  justify-center gap-5 lg:gap-10">
        <menu className="flex lg:flex-col gap-5 w-[20rem]">
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 ${selectedSection === 'aboutMe' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryTextWhite hover:text-primaryBlack dark:border-primaryWhite/[.5] border-primaryBlack/[.5]'}`}
              onClick={() => handleSectionChange('aboutMe')}
            >
              About Me
            </Button>
          </li>
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 ${selectedSection === 'experience' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryTextWhite hover:text-primaryBlack dark:border-primaryWhite/[.5] border-primaryBlack/[.5]'}`}
              onClick={() => handleSectionChange('experience')}
            >
              Experience
            </Button>
          </li>
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 ${selectedSection === 'education' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryTextWhite hover:text-primaryBlack dark:border-primaryWhite/[.5] border-primaryBlack/[.5]'}`}
              onClick={() => handleSectionChange('education')}
            >
              Education
            </Button>
          </li>
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 ${selectedSection === 'skills' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryTextWhite hover:text-primaryBlack dark:border-primaryWhite/[.5] border-primaryBlack/[.5]'}`}
              onClick={() => handleSectionChange('skills')}
            >
              Skills
            </Button>
          </li>

        </menu>
        <div className="lg:w-[55rem] text-secondaryDarkGray dark:text-accentSoftGray text-base lg:text-lg font-normal font-sans border dark:border-white/[0.2] border-black/[0.2] rounded-xl shadow-xl p-5 lg:p-10">
          {selectedSection === 'aboutMe' && <AboutMe />}
          {selectedSection === 'experience' && <Experience />}
          {selectedSection === 'education' && <Education />}
          {selectedSection === 'skills' && <Skills />}

        </div>
      </div>
    </Section>
  )
}

export default SummarySection

