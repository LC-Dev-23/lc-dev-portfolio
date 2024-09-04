import Section from '@/components/Section'
import H2 from '@/components/H2'
import Link from 'next/link'
import { FaEnvelope, FaFacebookF, FaFacebookMessenger, FaGithubAlt, FaGitlab, FaLaptopCode, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from 'react-icons/fa'
import ReusableTooltip from '@/components/ReusableTooltip'



const InformationSection = () => {
  return (
    <Section className="py-20 lg:py-40 flex flex-col justify-center items-center">
      <H2 borderStyle="after:w-[140%] md:after:w-[130%]">Contact Me</H2>
      <div className="flex flex-col justify-center text-primaryBlack dark:text-accentSoftGray  md:min-w-[25rem] lg:min-w-[45rem]  border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-5 lg:px-10">
        <h1 className="text-xl md:text-3xl font-display font-bold dark:text-primaryWhite">Let&apos;s Build Something Great Together</h1>
        <h3 className="text-base md:text-xl font-special italic mb-5">Feel free to contact me for any project inquiries or collaboration opportunities.</h3>
        <ul className="grid grid-col-1 md:grid-cols-2 gap-2 text-sm md:text-lg font-sans">
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"/about"}><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaUserTie /></span><span className="flex flex-col"><span className="text-xs">Name:</span><span className="dark:text-primaryWhite text-primaryBlack">Lord Christian Agra</span></span></Link>} tooltipText="Learn more about me" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"/project"}><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaLaptopCode /></span><span className="flex flex-col"><span className="text-xs">Position:</span><span className="dark:text-primaryWhite text-primaryBlack">Web Developer</span></span></Link>} tooltipText="See my projects in action" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"mailto:lordchristianagra23@gmail.com"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaEnvelope /></span><span className="flex flex-col"><span className="text-xs">Email:</span><span className="dark:text-primaryWhite text-primaryBlack">lordchristianagra23<span className="hidden md:block lg:hidden" />@gmail.com</span></span></Link>} tooltipText="Email me directly" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"https://www.facebook.com/lord.christian.agra.23"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaFacebookF /></span><span className="flex flex-col"><span className="text-xs">Facebook:</span><span className="dark:text-primaryWhite text-primaryBlack">facebook.com/lord.christian.agra.23</span></span></Link>} tooltipText="Check out my Facebook profile" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"tel:639489214499"}><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaPhoneAlt /></span><span className="flex flex-col"><span className="text-xs">Phone:</span><span className="dark:text-primaryWhite text-primaryBlack">+63 948 921 4499</span></span></Link>} tooltipText="Give me a call" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"https://m.me/lord.christian.agra.23"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaFacebookMessenger /></span><span className="flex flex-col"><span className="text-xs">Messenger:</span><span className="dark:text-primaryWhite text-primaryBlack">m.me/lord.christian.agra.23</span></span></Link>} tooltipText="Got questions? Message me!" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"https://www.linkedin.com/in/lc-dev-ph"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaLinkedinIn /></span><span className="flex flex-col"><span className="text-xs">Linkedin:</span><span className="dark:text-primaryWhite text-primaryBlack">linkedin.com/in/lc-dev-ph</span></span></Link>} tooltipText="Connect with me on LinkedIn" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"https://maps.app.goo.gl/wF9G8z9dvMfiUNaMA"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaMapMarkerAlt /></span><span className="flex flex-col"><span className="text-xs">Address:</span><span className="dark:text-primaryWhite text-primaryBlack">Teresa, Rizal</span></span></Link>} tooltipText="View my location on Google Maps" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"https://github.com/LC-Dev-23"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaGithubAlt /></span><span className="flex flex-col"><span className="text-xs">GitHub:</span><span className="dark:text-primaryWhite text-primaryBlack">github.com/LC-Dev-23</span></span></Link>} tooltipText="Collaborate with me on GitHub" /></li>
          <li><ReusableTooltip triggerContent={<Link className="flex items-center gap-4" href={"https://gitlab.com/LC-Dev"} target="_blank"><span className="text-accentBrightRed border dark:border-white/[0.2] border-black/[0.2] shadow-xl rounded-xl p-2"><FaGitlab /></span><span className="flex flex-col"><span className="text-xs">GitLab:</span><span className="dark:text-primaryWhite text-primaryBlack">gitlab.com/LC-Dev</span></span></Link>} tooltipText="Collaborate with me on GitLab" /></li>
        </ul>
      </div>
    </Section>
  )
}

export default InformationSection
