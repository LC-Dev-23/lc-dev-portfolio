import ReusableTooltip from './ReusableTooltip'
import { RiDownloadLine } from 'react-icons/ri'
import { Button } from './ui/moving-border'




const ResumeBtn = () => {
    return (
        <ReusableTooltip triggerContent={<a href="/lc-dev-resume.pdf" rel="Click to download my resume" download="LC-Dev-Resume" target="_blank"><Button className="dark:bg-white bg-primaryBlack dark:hover:bg-black flex hover:bg-white font-semibold font-heading text-primaryWhite dark:text-primaryBlack hover:text-primaryBlack dark:hover:text-primaryWhite rounded-none border-[3px] hover:border-accentRed px-5 py-2 border-primaryWhite dark:border-primaryBlack gap-2"><RiDownloadLine /> Resume</Button></a>} tooltipText="Get my resume with a click!" />
    )
}

export default ResumeBtn
