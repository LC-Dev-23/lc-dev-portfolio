import ReusableTooltip from './ReusableTooltip'
import { RiDownloadLine } from 'react-icons/ri'
import { Button } from './ui/moving-border'




const ResumeBtn = () => {
    return (
        <ReusableTooltip triggerContent={<a href="/lc-dev-resume.pdf" rel="Click to download my resume" download="LC-Dev-Resume" target="_blank"><Button borderRadius="1rem" className="flex items-center gap-1 bg-white dark:bg-black text-black dark:text-white dark:border-white/[0.2] border-black/[0.2]"><span className="hover:scale-110 text-lg"><RiDownloadLine /></span>Resume</Button></a>} tooltipText="Get my resume with a click!" />
    )
}

export default ResumeBtn
