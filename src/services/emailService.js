import emailjs from '@emailjs/browser';
import { PROFILE_DATA } from '../data/portfolioData';

export async function sendDirectEmail({ name, email, subject, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const isEmailJsConfigured =
    serviceId &&
    templateId &&
    publicKey &&
    serviceId !== 'your_service_id';

  if (isEmailJsConfigured) {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        to_name: PROFILE_DATA.name,
        to_email: PROFILE_DATA.email,
        subject: subject || `Portfolio Inquiry from ${name}`,
        message,
        reply_to: email,
      },
      { publicKey }
    );

    return {
      mode: 'emailjs',
      status: response.status,
      text: 'Your message has been delivered directly to Pranto Chakrobortty.',
    };
  }

  const mailSubject = encodeURIComponent(
    subject ? `[Portfolio] ${subject}` : `[Portfolio Inquiry] From ${name}`
  );
  const mailBody = encodeURIComponent(
    `Hello Pranto,\n\n${message}\n\nBest regards,\n${name}\nReply-to: ${email}`
  );

  const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${mailSubject}&body=${mailBody}`;
  window.open(mailtoUrl, '_blank', 'noopener,noreferrer');

  return {
    mode: 'mailto',
    mailtoUrl,
    text: `Opened your default mail client addressed directly to ${PROFILE_DATA.email}.`,
  };
}
