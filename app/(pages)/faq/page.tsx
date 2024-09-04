import FAQSection from "@/components/Layouts/FaqLayout/FAQSection"

export const metadata = {
  title: 'FAQ',
  description: 'Frequently Asked Questions - Lord Christian L. Agra | Web Development Insights & Support',
  openGraph: {
    title: 'Frequently Asked Questions - Lord Christian L. Agra | Web Development Insights & Support',
    description: 'Find answers to common questions about Lord Christian L. Agra’s web development services, technical expertise, and project approach. This FAQ section addresses key topics to help you better understand his work process, technologies used, and how he delivers reliable, user-friendly web solutions. Get the information you need to learn more about working with a skilled front-end developer.',
  }
}

const ServicesPage = () => {
  return (
    <main>
      <FAQSection />
    </main>
  )
}

export default ServicesPage