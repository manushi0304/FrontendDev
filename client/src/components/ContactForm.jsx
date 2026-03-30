import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import './Services.css';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import Hero from './Hero';
import heroImage from '../Website/5101597.jpg';
import { Building2, MapPin, Mail } from 'lucide-react';

const contactInfo = [
  { icon: <Building2 size={20} />, label: 'Company',  value: 'Softick LLC' },
  { icon: <MapPin size={20} />,    label: 'Location', value: 'United States' },
  { icon: <Mail size={20} />,      label: 'Email',    value: 'contact@softick.com' },
];

function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validateEmail = (email) =>
    /^([a-zA-Z0-9._%+-]{2,})@([a-zA-Z0-9.-]{2,})\.([a-zA-Z]{2,})$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(emailRef.current.value)) {
      emailRef.current.focus();
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        'service_jz3kf2i',
        'template_zx7gxhv',
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          subject: subjectRef.current.value,
          message: messageRef.current.value,
        },
        'weiG-GMz-4YrQxTdj'
      );
      setSent(true);
      nameRef.current.value = '';
      emailRef.current.value = '';
      subjectRef.current.value = '';
      messageRef.current.value = '';
    } catch (err) {
      console.error('Failed to send email:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <Hero image={heroImage} title="Contact Us" />

      <div className="contact-layout">
        {/* LEFT: Info */}
        <div className="contact-info">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-heading">
            Let's Start a <em>Conversation</em>
          </h1>
          <p className="about-text">
            Whether you have a project in mind, want to learn more about our services,
            or are looking for a technology partner — we'd love to hear from you.
          </p>
          <div className="contact-info-items">
            {contactInfo.map((item, i) => (
              <div className="contact-info-item" key={i}>
               <div className="contact-info-item-icon">{item.icon}</div>
                <div>
                  <p className="contact-info-item-label">{item.label}</p>
                  <p className="contact-info-item-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Send Us a Message</h2>
          <p className="contact-form-sub">Fill in the form and we'll get back to you promptly.</p>

          {sent && (
            <div className="form-success">
               Message sent successfully! We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input ref={nameRef} className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input ref={emailRef} type="email" className="form-input" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input ref={subjectRef} className="form-input" placeholder="Project inquiry, partnership, etc." required />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea ref={messageRef} className="form-textarea" placeholder="Tell us about your project or inquiry..." rows={6} required />
            </div>

            <button className="form-submit" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>

      <Bottombar />
    </div>
  );
}

export default ContactForm;