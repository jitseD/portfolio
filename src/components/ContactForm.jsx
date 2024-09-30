import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5nko7ba', 'template_1w93bdl', form.current, {
                publicKey: 'pmgMv_0BvYQysekXt',
            })
            .then(
                () => { console.log('SUCCESS!'); },
                (error) => { console.log('FAILED...', error.text); },
            );
    };

    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <label className="label__wrapper">
                <input className="form__input" type="text" name="user_name" placeholder="John Doe" required />
                <span className="form__label">Your name *</span>
            </label>
            <label className="label__wrapper">
                <input className="form__input" type="email" name="user_email" placeholder="john.doe@gmail.com" required />
                <span className="form__label">Your email *</span>
            </label>
            <label className="label__wrapper label__wrapper--textarea">
                <textarea className="form__input" name="message" placeholder="Hellow" required />
                <span className="form__label">Your message *</span>
            </label>
            <input className="form__sbumit button" type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;