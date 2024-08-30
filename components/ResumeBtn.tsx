import { Button } from './ui/moving-border'
import { RiDownloadLine } from 'react-icons/ri'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const ResumeBtn = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="/lc-dev-resume.pdf" rel="Click to download my resume" download="LC-Dev-Resume" target="_blank"><Button borderRadius="1rem" className="flex items-center gap-1 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-gray-800"><span className="hover:scale-110 text-lg"><RiDownloadLine /></span>Resume</Button></a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Click to download my resume</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default ResumeBtn
