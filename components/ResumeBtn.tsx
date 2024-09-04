
import { RiDownloadLine } from 'react-icons/ri'
import ReusableTooltip from './ReusableTooltip'
import { Button } from './ui/moving-border'
import Link from 'next/link'



const ResumeBtn = () => {
    return (
        <ReusableTooltip triggerContent={<Link href="/lc-dev-resume.pdf" rel="Click to download my resume" download="LC-Dev-Resume" target="_blank"><Button borderRadius="1rem" className="flex items-center gap-1 bg-white dark:bg-black text-black dark:text-white dark:border-white/[0.2] border-black/[0.2]"><span className="hover:scale-110 text-lg"><RiDownloadLine /></span>Resume</Button></Link>} tooltipText="Get my resume with a click!" />
    )
}

export default ResumeBtn
