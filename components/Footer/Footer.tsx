import Image from 'next/image'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SocmedIcons from '../SocmedIcons';

const Footer = () => {
  return (
    <footer className="relative font-sans text-base text-center bottom-0 w-full px-[5%] lg:px-[10%] dark:bg-primaryWhite dark:text-primaryTextDarkGray bg-primaryBlack text-primaryTextWhite backdrop-blur-sm shadow-sm rounded-t-xl">
      <div className="grid grid-cols-1 grid-rows-3 gap-5 lg:gap-0  lg:grid-cols-3 lg:grid-rows-1 py-5">
        <div className="mx-auto lg:mx-0">
          <Image
            className='w-auto h-16 dark:invert filter-none pb-2 mx-auto lg:mx-0'
            src="/images/lc-dev-logo-white.png"
            width={105}
            height={100}
            alt="LC Dev Logo"
            priority={true}
          />
          <li className="flex items-center gap-2"><span className="text-primaryRed text-xl"><FaMapMarkerAlt /></span><a href="https://maps.app.goo.gl/wF9G8z9dvMfiUNaMA" target="_blank">Teresa, Rizal, Philippines</a></li>
        </div>
        <div className='row-[3/4] lg:row-[1/2] lg:col-[2/3]'>
          <p className="font-bold text-primaryRed pb-2">Find me on</p>
          <SocmedIcons className="text-center text-3xl flex justify-center gap-4" />
          <p className="pt-2">Copyright © 2024 | Developed by <span className="font-special font-semibold text-primaryRed">LC Dev</span></p>
        </div>
        <div className="mx-auto">
          <p className="font-bold text-primaryRed pb-2">Contact Info</p>
          <ul className="text-left">
            <li className="flex items-center gap-2"><span className="text-primaryRed text-xl"><FaEnvelope /></span><a href="mailto:lordchristianagra23@gmail.com">lordchristianagra23@gmail.com</a></li>
            <li className="flex items-center gap-2"><span className="text-primaryRed text-xl"><FaPhoneAlt /></span><a href="tel:639489214499">+63 948 921 4499</a></li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
