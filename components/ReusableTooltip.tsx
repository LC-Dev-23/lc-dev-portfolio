import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface TooltipProps {
    triggerContent: React.ReactNode;
    tooltipText: string;
  }

const ReusableTooltip: React.FC<TooltipProps> = ({ triggerContent, tooltipText }) => {
  return (
    <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger asChild>{triggerContent}</TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default ReusableTooltip
