import ContactForm from "@/components/ContactForm";
import FooterSm from "@/components/FooterSm";
import HeaderSm from "@/components/HeaderSm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSm />
      <div className="flex-1">
        <ContactForm />
      </div>
      <FooterSm />
    </div>
  )
}
export default Contact;