import Image from 'next/image'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SocmedIcons from '../SocmedIcons';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="relative font-sans text-base text-center bottom-0 w-full px-[5%] lg:px-[10%] dark:bg-primaryWhite dark:text-primaryTextDarkGray bg-primaryBlack text-primaryTextWhite backdrop-blur-sm shadow-sm rounded-t-xl">
      <div className="grid grid-cols-1 grid-rows-3 gap-5 lg:gap-0  lg:grid-cols-3 lg:grid-rows-1 py-5">
        <div className="mx-auto flex flex-col gap-2 justify-center">
          <Link href={"/"}>
            <Image
              className='w-auto h-16 dark:invert filter-none pb-2 mx-auto lg:mx-0'
              src="/images/lc-dev-logo-white.png"
              width={105}
              height={100}
              alt="LC Dev Logo"
              priority={true}
            />
          </Link>
          <ul>
            <li><Link className="flex items-center gap-2" href="https://maps.app.goo.gl/wF9G8z9dvMfiUNaMA" target="_blank"><span className="text-accentBrightRed border border-white/[0.2] dark:border-black/[0.2] shadow-xl rounded-xl p-2"><FaMapMarkerAlt /></span>Teresa, Rizal, Philippines</Link></li>
          </ul>
        </div>
        <div className='row-[3/4] lg:row-[1/2] lg:col-[2/3]'>
          <p className="font-bold text-accentBrightRed pb-2">Find me on</p>
          <div className="flex flex-col gap-4 justify-center">
            <SocmedIcons className="text-center text-3xl flex justify-center gap-4" />
            <p>Copyright © 2024 | Developed by <span className="font-special font-semibold text-accentBrightRed">LC Dev</span></p>
          </div>
        </div>
        <div className="mx-auto">
          <p className="font-bold text-accentBrightRed pb-2">Contact Info</p>
          <ul className="text-left flex flex-col gap-2 justify-center">
            <li><Link className="flex items-center gap-2" href="mailto:lordchristianagra23@gmail.com"><span className="text-accentBrightRed border border-white/[0.2] dark:border-black/[0.2] shadow-xl rounded-xl p-2"><FaEnvelope /></span>lordchristianagra23@gmail.com</Link></li>
            <li><Link className="flex items-center gap-2" href="tel:639489214499"><span className="text-accentBrightRed border border-white/[0.2] dark:border-black/[0.2] shadow-xl rounded-xl p-2"><FaPhoneAlt /></span>+63 948 921 4499</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
