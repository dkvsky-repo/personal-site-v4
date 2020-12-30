import ContactForm from '../../components/ContactForm/ContactForm';
import PagesLayout from '../../components/PagesLayout';

export default function Contact() {
  return (
    <PagesLayout>
      <section className='container'>
        <h1>Wanna Say Hello..?</h1>
        <ContactForm />
      </section>
    </PagesLayout>
  );
}
