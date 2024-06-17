import ContactUsForm from '../src/components/Contact/ContactUsForm';
import AppLayout from '../src/components/Layout/AppLayout';

function ContactUs() {
  return (
    <>
      <AppLayout>
        <div className='main-box'>
          <ContactUsForm></ContactUsForm>
        </div>
      </AppLayout>
    </>
  );
}

export default ContactUs;