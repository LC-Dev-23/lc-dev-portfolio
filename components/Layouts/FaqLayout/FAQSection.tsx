import H2 from '@/components/H2'
import Section from '@/components/Section'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
    return (
        <Section className="py-20 lg:py-40 flex flex-col justify-center">
            <H2 borderStyle="after:w-[200%] lg:after:w-[180%]">FAQ</H2>
            <Accordion type="single" collapsible className="w-full md:w-[80%] mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What technologies do you specialize in?</AccordionTrigger>
                    <AccordionContent>
                        I specialize in front-end development using HTML, CSS, JavaScript, and TypeScript.
                        I work with frameworks like React and Next.js, and use Tailwind CSS for styling.
                        For building fast-paced landing pages, I use WordPress with Elementor.
                        I deploy projects on shared hosting platforms like GoDaddy and am familiar with cPanel.
                        I also have experience with version control using Git.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What types of projects have you worked on?</AccordionTrigger>
                    <AccordionContent>
                        Most of my experience is with business websites, focusing primarily on front-end tasks and consuming APIs.
                        I also have experience in mobile development. I am looking to join a team that creates enterprise projects
                        and offers mentorship, as I have mostly worked independently.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What is your preferred work setup?</AccordionTrigger>
                    <AccordionContent>
                        I prefer remote or hybrid work setups.
                        I find commuting to be a significant time drain,
                        and since there&apos;s no effective solution for traffic,
                        I&apos;d rather use that time to focus on my tasks and contribute more effectively.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Are you open to relocation?</AccordionTrigger>
                    <AccordionContent>
                        Yes, I am open to relocation and would love to work onsite. Currently,
                        I&apos;m focusing on saving money, but relocating is something I&apos;m planning to do in the future.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What is your internet connection speed?</AccordionTrigger>
                    <AccordionContent>
                        My internet speed is up to 100 Mbps with CHEETAH FIBER as my ISP. In case of an emergency,
                        I have backup mobile data, and if necessary, I can work from a relative&apos;s place about an hour away,
                        where I have the same internet speed as at home.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What are your system specifications?</AccordionTrigger>
                    <AccordionContent>
                        I use a Ryzen 5 5600 CPU, an RX 6600 8GB GPU, and 32GB of RAM.
                        I have a 1TB internal drive available for storage and a 1TB external drive for backups.
                        My setup includes a dual-monitor configuration for comfortable work, a Razer Kiyo X webcam,
                        and a Jabra MS 20 headset for clear communication during meetings.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Section>
    )
}

export default FAQSection
