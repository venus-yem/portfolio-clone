import React, { useEffect, useState } from 'react';
import { PROFILE, SOCIAL_LINKS } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight, SocialSvgIcon } from '../components/Icons';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contact — Perez';
  }, []);

  const headingColor = isDark ? 'text-white' : 'text-dark';
  const strokeColor = isDark ? '#fff' : '#080808';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmittedMessage('Please fill in your name, email, and message before submitting.');
      return;
    }
    setSubmittedMessage(`Thank you, ${form.name.trim()}! Your message has been received.`);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section
      className={`${
        isDark ? 'bg-black dark-paragraph contact-dark-button' : 'bg-white'
      } pt-20 pb-120`}
    >
      <div className="container mx-auto">
        <div className="row mb-n6">
          {/* Left Column: Contact Details & Social */}
          <div className="col-12 col-lg-6 mb-6" data-aos="fade-up">
            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
              <span className="text-warning text-xl">Contact</span>
              <h3 className={`section-title ${headingColor}`}>
                <span className="position-relative circle-shape portfolio-shape">Le</span>t’s{' '}
                <br className="hidden d-lg-block" /> connect
              </h3>
            </div>

            <div className="d-flex flex-wrap flex-column gap-7">
              <div className="d-flex flex-wrap address-item">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M5.33366 5.33325H26.667C28.1337 5.33325 29.3337 6.53325 29.3337 7.99992V23.9999C29.3337 25.4666 28.1337 26.6666 26.667 26.6666H5.33366C3.86699 26.6666 2.66699 25.4666 2.66699 23.9999V7.99992C2.66699 6.53325 3.86699 5.33325 5.33366 5.33325Z"
                      stroke={strokeColor}
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.3337 8L16.0003 17.3333L2.66699 8"
                      stroke={strokeColor}
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="d-flex flex-wrap flex-column flex-1">
                  <span className="paragraph leading-none">Email us</span>
                  <h5 className={`text-xl fw-bold font-Syne ${headingColor} leading-7`}>{PROFILE.email}</h5>
                </div>
              </div>

              <div className="d-flex flex-wrap address-item">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M20.0663 6.66658C21.3686 6.92067 22.5654 7.55759 23.5037 8.49583C24.4419 9.43407 25.0788 10.6309 25.3329 11.9333M20.0663 1.33325C22.772 1.63383 25.295 2.84548 27.2212 4.76926C29.1474 6.69304 30.3623 9.2146 30.6663 11.9199M29.3329 22.5599V26.5599C29.3344 26.9313 29.2584 27.2988 29.1096 27.639C28.9608 27.9793 28.7427 28.2847 28.469 28.5357C28.1954 28.7868 27.8724 28.9779 27.5206 29.0969C27.1688 29.2158 26.7961 29.26 26.4263 29.2266C22.3234 28.7808 18.3823 27.3788 14.9196 25.1333C11.698 23.0861 8.9667 20.3548 6.91959 17.1333C4.66622 13.6549 3.26391 9.69458 2.82625 5.57325C2.79293 5.20454 2.83675 4.83293 2.95492 4.48208C3.07309 4.13124 3.26301 3.80884 3.51261 3.53541C3.7622 3.26199 4.06599 3.04353 4.40464 2.89395C4.74329 2.74436 5.10937 2.66693 5.47959 2.66659H9.47959C10.1267 2.66022 10.754 2.88936 11.2446 3.3113C11.7352 3.73323 12.0557 4.31918 12.1463 4.95992C12.3151 6.24001 12.6282 7.49689 13.0796 8.70659C13.259 9.18382 13.2978 9.70247 13.1915 10.2011C13.0851 10.6997 12.8381 11.1574 12.4796 11.5199L10.7863 13.2133C12.6843 16.5513 15.4482 19.3152 18.7863 21.2133L20.4796 19.5199C20.8421 19.1614 21.2998 18.9144 21.7984 18.808C22.297 18.7017 22.8157 18.7405 23.2929 18.9199C24.5026 19.3713 25.7595 19.6844 27.0396 19.8533C27.6873 19.9446 28.2788 20.2709 28.7016 20.7699C29.1245 21.269 29.3491 21.906 29.3329 22.5599Z"
                      stroke={strokeColor}
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="d-flex flex-wrap flex-column flex-1">
                  <span className="paragraph leading-none">Call us</span>
                  <h5 className={`text-xl fw-bold font-Syne ${headingColor} leading-7`}>
                    {PROFILE.contactPhones}
                  </h5>
                </div>
              </div>

              <div className="d-flex flex-wrap address-item">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 29C6 28.4477 6.44772 28 7 28H25C25.5523 28 26 28.4477 26 29C26 29.5523 25.5523 30 25 30H7C6.44772 30 6 29.5523 6 29Z"
                      fill={strokeColor}
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10ZM11 13C11 10.2386 13.2386 8 16 8C18.7614 8 21 10.2386 21 13C21 15.7614 18.7614 18 16 18C13.2386 18 11 15.7614 11 13Z"
                      fill={strokeColor}
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 17.1399 9.31185 20.9096 11.7546 23.7188C12.9638 25.1094 14.1755 26.2305 15.0851 27.0037C15.4449 27.3095 15.7562 27.5599 16 27.75C16.2438 27.5599 16.5551 27.3095 16.9149 27.0037C17.8245 26.2305 19.0362 25.1094 20.2454 23.7188C22.6882 20.9096 25 17.1399 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4ZM16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.8601 24.3118 22.0904 21.7546 25.0312C20.4638 26.5156 19.1755 27.707 18.2101 28.5276C17.2 29.38 16.3 30 16 30C15.7 30 14.8 29.38 13.7899 28.5276C12.8245 27.707 11.5362 26.5156 10.2454 25.0312C7.68815 22.0904 5 17.8601 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2Z"
                      fill={strokeColor}
                      fillOpacity="0.9"
                    />
                  </svg>
                </span>
                <div className="d-flex flex-wrap flex-column flex-1">
                  <span className="paragraph leading-none">Office address</span>
                  <h5 className={`text-xl fw-bold font-Syne ${headingColor} leading-7`}>
                    {PROFILE.officeAddress}
                  </h5>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-10 border-top border-secondary">
              <div className="d-flex flex-wrap align-items-center gap-6">
                <span className={`text-xl fw-bold font-Syne ${headingColor}`}>Follow me</span>
                <ul className="d-flex flex-wrap gap-4 align-items-center p-0 m-0 list-unstyled">
                  {SOCIAL_LINKS.map((s, idx) => (
                    <li key={s.name}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`contact-social-link ${headingColor}`}
                        aria-label={s.name}
                      >
                        <SocialSvgIcon index={idx} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled React Form */}
          <div className="col-12 col-lg-6 mb-6" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit} className="wpcf7-form" noValidate>
              <div id="contact-form" className="row g-4">
                <div className="col-12 col-md-6">
                  <label
                    className={`text-sm fw-normal font-Inter leading-tight mb-3 d-block ${headingColor}`}
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name*"
                    className="fw-normal w-full leading-7 contact-form-control"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    className={`text-sm fw-normal font-Inter leading-tight mb-3 d-block ${headingColor}`}
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email*"
                    className="fw-normal w-full leading-7 contact-form-control"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    className={`text-sm fw-normal font-Inter leading-tight mb-3 d-block ${headingColor}`}
                    htmlFor="contact-phone"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your number"
                    className="fw-normal w-full leading-7 contact-form-control"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    className={`text-sm fw-normal font-Inter leading-tight mb-3 d-block ${headingColor}`}
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Your subject"
                    className="fw-normal w-full leading-7 contact-form-control"
                  />
                </div>

                <div className="col-12">
                  <label
                    className={`text-sm fw-normal font-Inter leading-tight mb-3 d-block ${headingColor}`}
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message*"
                    className="fw-normal w-full leading-7 contact-form-control"
                  />
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className={`d-inline-flex align-items-center gap-2 ${
                      isDark ? 'btn-primary-outline text-white' : 'btn-primary'
                    }`}
                  >
                    Submit
                    <span className="animate-arrow-up">
                      <ArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>

              {submittedMessage && (
                <div className={`contact-status-banner ${headingColor}`} role="status">
                  {submittedMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
