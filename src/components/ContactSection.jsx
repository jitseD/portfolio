import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className="contact">
            <div className="contact__wrapper">
                <h2 className="contact__title title--wrapped">Let&#39;s <em className="emph">Connect</em></h2>
                <div className="contact__content">
                    <p className="contact__cta">Got a question, idea, or opportunity? Or just want to say hi? Don&#39;t hesitate to contact me!</p>
                    <div className="contact__intership">
                        <p><strong>Looking for a passionate designer & developer to join your team?</strong></p>
                        <p>I&#39;m seeking an internship from February 2025 through May 2025.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;