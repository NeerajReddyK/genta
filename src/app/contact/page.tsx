import ContactForm from "@/components/ContactForm";
import ContactFromLg from "@/components/ContactFormLg";
import FooterLg from "@/components/FooterLg";
import FooterSm from "@/components/FooterSm";
import HeaderLg from "@/components/HeaderLg";
import HeaderSm from "@/components/HeaderSm";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:hidden">
        <HeaderSm />
        <div className="flex-1">
          <ContactForm />
        </div>
        <FooterSm />
      </div>
      <div className="min-h-screen md:flex md:flex-col hidden">
        <HeaderLg />
        <div className="flex-1">
          <ContactFromLg />
        </div>
        <FooterLg />
      </div>
    </>
   
  )
}
export default Contact;