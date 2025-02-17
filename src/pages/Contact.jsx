import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import Connect from '../components/Connect.jsx';

import '../assets/styles/pages/Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <ContactForm />
            <Connect />
        </div>
    )
}

export default Contact