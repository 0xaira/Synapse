import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our support team will get back to you ASAP via email."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
