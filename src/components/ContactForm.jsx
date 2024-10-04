import { useEffect, useRef } from 'react';
import { cursorHover } from "../utils/cursorHover";
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

    useEffect(()=> cursorHover(`send`))

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
            <div className="form__submit button hover--send">
                <input className="form__button" type="submit" value="Send" />
                <svg width="35" height="32" viewBox="0 0 35 32" fill="none">
                    <path d="M33.3602 16.0003L2.00022 2L9.83994 16M33.3602 16.0003L9.83994 16M33.3602 16.0003L2 30L9.83994 16" stroke="#0D0D0D" />
                </svg>
            </div>
        </form>
    );
};

export default ContactForm;