import ContactInfoSection from '@/components/Layouts/ContactLayout/ContactInfoSection'

export const metadata = {
  title: 'Contact',
  description: 'Contact Lord Christian Agra - Get in Touch for Web Development Inquiries & Collaborations',
  openGraph: {
    title: 'Contact Lord Christian Agra - Get in Touch for Web Development Inquiries & Collaborations',
    description: 'Reach out to Lord Christian Agra for inquiries about web development services, project collaborations, or to discuss how his skills in front-end development, responsive design, and modern web technologies can benefit your business. Connect directly through the contact form, email, or social media to start a conversation today.',
  }
}

const ContactPage = () => {
  return (
    <main>
      <ContactInfoSection />
    </main>
  )
}

export default ContactPage
