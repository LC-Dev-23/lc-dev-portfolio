"use client"
import H2 from "@/components/H2";
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export const AboutMe = () => {
  return (
    <div className="flex flex-col h-[20rem] overflow-y-scroll px-2 md:px-5">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading dark:text-primaryWhite text-primaryBlack mb-2">About Me</h3>
      <p>I&apos;ve been working as a web developer for two years, and I enjoy it a lot. The field is always evolving, which keeps me motivated to learn and tackle new problems. My curiosity and interest in technology drive my enthusiasm for development. I find it rewarding to turn an idea into a functional, user-friendly website.</p>
      <div>
        <ul className="grid grid-flow-row lg:grid-cols-2 gap-2 mt-2">
          <li>Name: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">Lord Christian Agra</span></li>
          <li>Experience: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">2 years</span></li>
          <li>Nationality: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">Filipino</span></li>
          <li>Address: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">Teresa, Rizal, Philippines</span></li>
          <li>Age: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">24 years old</span></li>
          <li>Phone: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">+63 948 921 4499</span></li>
          <li>Email: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">lordchristianagra23@gmail.com</span></li>
          <li>Languages: <span className="dark:text-primaryWhite text-primaryBlack font-semibold">Filipino, English</span></li>
        </ul>
      </div>
    </div>
  )
}
export const Experience = () => {
  return (
    <div className="flex flex-col h-[20rem] overflow-y-scroll px-2 md:px-5">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading dark:text-primaryWhite text-primaryBlack mb-4">My Experience</h3>
      <h4 className="flex flex-col md:flex-row md:justify-between"><span className="font-heading font-bold dark:text-primaryWhite text-primaryBlack">Web Developer / Mobile Developer</span> <span>10/2022 - 07/2024</span></h4>
      <p className="flex flex-col mt-2 md:mt-0 md:flex-row md:justify-between font-semibold"><span>MNLeistung Inc.</span> <span>Cainta, Rizal, Philippines</span></p>
      <ul className="flex flex-col gap-2 pl-4 pt-2 lg:pt-4 pb-10 list-disc list-inside">
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
      <h4 className="flex flex-col md:flex-row md:justify-between"><span className="font-heading font-bold dark:text-primaryWhite text-primaryBlack">Jr Full Stack Developer <span className="font-normal">(OJT)</span></span> <span>03/2022 – 07/2022</span></h4>
      <p className="flex flex-col mt-2 md:mt-0 md:flex-row md:justify-between font-semibold"><span>TEMA Health and Beauty Products Trading</span> <span>Pasig, NCR, Philippines</span></p>
      <ul className=" flex flex-col gap-2 pl-4 pt-4 list-disc list-inside">
        <li>
          Automated repetive tasks for agents by creating digital forms with
          CRUD functionality, transitioning from paper to digital using HTML,
          CSS, JavaScript, PHP, MySQL, and Bootstrap.
        </li>
        <li>
          Enhanced the system&apos;s UI, implemented code spliting, organized
          the folder structure, and optimized code by removing unused and
          repetive segments.
        </li>
      </ul>
    </div>
  )
}
export const Education = () => {
  return (
    <div className="flex flex-col h-[20rem] overflow-y-scroll px-2 md:px-5">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-heading dark:text-primaryWhite text-primaryBlack mb-4">My Education</h3>
      <h4 className="flex flex-col md:flex-row md:justify-between"><span className="dark:text-primaryWhite text-primaryBlack font-bold font-heading text-base md:text-md lg:text-xl">Bachelor of Science in Information Technology</span> <span>2018 - 2022</span></h4>
      <p className="flex flex-col mt-2 md:mt-0 md:flex-row md:justify-between font-medium"><span>Philippine Best Training System Colleges</span> <span>Binangonan, Rizal, Philippines</span></p>
      <h4 className="flex flex-col md:flex-row md:justify-between mt-4"><span className="dark:text-primaryWhite text-primaryBlack font-bold font-heading text-base md:text-md lg:text-xl">Information and
        Communications Technology</span> <span>2016 - 2018</span></h4>
      <p className="flex flex-col mt-2 md:mt-0 md:flex-row md:justify-between font-medium"><span>Philsin College Foundation Inc.</span> <span>Teresa, Rizal, Philippines</span></p>
      <h4 className="text-base md:text-xl font-semibold font-heading dark:text-primaryWhite text-primaryBlack mt-4">Online Courses</h4>
      <h5 className="flex flex-col md:flex-row md:justify-between mt-4"><span className="dark:text-primaryWhite text-primaryBlack font-bold font-heading text-base md:text-md lg:text-xl">React JS - The Complete Guide
        2024 (incl. Next.js, Redux)</span></h5>
      <p className="flex flex-col md:flex-row md:justify-between font-medium"><span>Udemy/Academind - Maximilian Schwarzmüller</span> </p>
      <h5 className="mt-4"><span className="dark:text-primaryWhite text-primaryBlack font-bold font-heading text-base md:text-md lg:text-xl">JavaScript Essentials 1</span></h5>
      <p className="font-medium">Cisco Networking Academy</p>
      <h5 className="flex flex-col md:flex-row md:justify-between mt-4"><span className="dark:text-primaryWhite text-primaryBlack font-bold font-heading text-base md:text-md lg:text-xl">JavaScript Essentials 2</span> <span>(inprogress)</span></h5>
      <p className="font-medium">Cisco Networking Academy</p>
      <h5 className="flex flex-col md:flex-row md:justify-between mt-4"><span className="dark:text-primaryWhite text-primaryBlack font-bold font-heading text-base md:text-md lg:text-xl">Graphic Design Masterclass - Learn GREAT Design</span> <span>(inprogress)</span></h5>
      <p className="font-medium">Udemy - Lindsay Marsh</p>
    </div>
  )
}
export const Skills = () => {
  return (
    <div className="h-[20rem] px-2 md:px-5">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading dark:text-primaryWhite text-primaryBlack mb-4">My Skills</h3>
      <ul className="flex flex-col gap-2 pl-4 list-disc list-inside font-semibold dark:text-primaryWhite text-primaryBlack">
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
    <Section className="py-20 lg:py-40 flex flex-col justify-center items-center">
      <H2 borderStyle="after:w-[150%] lg:after:w-[135%]">Summary</H2>
      <div className="flex flex-col  justify-center gap-5">
        <menu className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 dark:shadow-none shadow-md ${selectedSection === 'aboutMe' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryWhite hover:text-primaryBlack dark:border-white/[.2] border-black/[.2]'}`}
              onClick={() => handleSectionChange('aboutMe')}
            >
              About Me
            </Button>
          </li>
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 dark:shadow-none shadow-md ${selectedSection === 'experience' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryWhite hover:text-primaryBlack dark:border-white/[.2] border-black/[.2]'}`}
              onClick={() => handleSectionChange('experience')}
            >
              Experience
            </Button>
          </li>
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 dark:shadow-none shadow-md ${selectedSection === 'education' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryWhite hover:text-primaryBlack dark:border-white/[.2] border-black/[.2]'}`}
              onClick={() => handleSectionChange('education')}
            >
              Education
            </Button>
          </li>
          <li>
            <Button
              variant={"outline"}
              className={`w-full text-base md:text-md py-4 dark:shadow-none shadow-md ${selectedSection === 'skills' ? 'dark:hover:bg-primaryBlack dark:hover:text-primaryWhite hover:bg-primaryWhite hover:text-primaryBlack' : 'dark:hover:border-primaryRed dark:hover:bg-primaryBlack dark:hover:text-primaryWhite bg-secondaryLightGray hover:bg-primaryWhite hover:text-primaryBlack dark:border-white/[.2] border-black/[.2]'}`}
              onClick={() => handleSectionChange('skills')}
            >
              Skills
            </Button>
          </li>

        </menu>
        <div className="w-full md:w-[40rem] lg:w-[55rem] marker:text-primaryRed dark:text-primaryWhite/80 text-primaryBlack/80 text-sm mg:text-base lg:text-lg font-normal font-body border dark:border-white/[0.2] border-black/[0.2] dark:shadow-none rounded-xl shadow-md p-5 lg:p-10">
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

