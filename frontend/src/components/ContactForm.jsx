import { useState } from "react";
import { submitCareer, submitContact } from "../utils/api";

const initialContact = { name: "", email: "", phone: "", subject: "", message: "" };
const initialApplication = { full_name: "", email: "", phone: "", role: "", portfolio_url: "", message: "" };

export default function ContactForm() {
  const [contact, setContact] = useState(initialContact);
  const [application, setApplication] = useState(initialApplication);
  const [contactMsg, setContactMsg] = useState(null);
  const [appMsg, setAppMsg] = useState(null);
  const [loading, setLoading] = useState("");

  async function handleContactSubmit(event) {
    event.preventDefault();
    setLoading("contact");
    setContactMsg(null);
    try {
      const result = await submitContact(contact);
      setContactMsg({ type: "success", text: result.message || "Message sent successfully!" });
      setContact(initialContact);
    } catch (error) {
      setContactMsg({ type: "error", text: error.message || "Could not send message. Please try again." });
    } finally {
      setLoading("");
    }
  }

  async function handleApplicationSubmit(event) {
    event.preventDefault();
    setLoading("application");
    setAppMsg(null);
    try {
      const result = await submitCareer(application);
      setAppMsg({ type: "success", text: result.message || "Application submitted successfully!" });
      setApplication(initialApplication);
    } catch (error) {
      setAppMsg({ type: "error", text: error.message || "Could not submit application. Please try again." });
    } finally {
      setLoading("");
    }
  }

  const messageClass = (message) =>
    `p-4 rounded-md mb-4 font-medium ${
      message?.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
    }`;

  return (
    <section id="contact" className="py-24 bg-light-card dark:bg-dark-card border-y border-light-border dark:border-dark-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Whether you want to start a project, apply for a job, or collaborate, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="form-container reveal flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form id="contactForm" className="flex flex-col flex-grow space-y-4" onSubmit={handleContactSubmit}>
              {contactMsg && <div className={messageClass(contactMsg)}>{contactMsg.text}</div>}
              <div>
                <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" required className="form-input" value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} />
              </div>
              <div>
                <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" required className="form-input" value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} />
              </div>
              <div>
                <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="4" required className="form-input" value={contact.message} onChange={(event) => setContact({ ...contact, message: event.target.value })} />
              </div>
              <button type="submit" className="btn-form-submit" disabled={loading === "contact"}>
                {loading === "contact" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="form-container reveal flex flex-col h-full" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Collaboration & Registration</h3>
            <form id="appForm" className="flex flex-col flex-grow space-y-4" onSubmit={handleApplicationSubmit}>
              {appMsg && <div className={messageClass(appMsg)}>{appMsg.text}</div>}
              <div>
                <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="app-name">Full Name</label>
                <input type="text" id="app-name" name="full_name" required className="form-input" value={application.full_name} onChange={(event) => setApplication({ ...application, full_name: event.target.value })} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="app-email">Email</label>
                  <input type="email" id="app-email" name="email" required className="form-input" value={application.email} onChange={(event) => setApplication({ ...application, email: event.target.value })} />
                </div>
                <div>
                  <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="app-phone">Phone</label>
                  <input type="tel" id="app-phone" name="phone" required className="form-input" value={application.phone} onChange={(event) => setApplication({ ...application, phone: event.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="app-type">Type</label>
                <select id="app-type" name="role" required className="form-input" value={application.role} onChange={(event) => setApplication({ ...application, role: event.target.value })}>
                  <option value="">Select an option</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="MOU">MOU</option>
                  <option value="Job">Job / Position</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-light-muted dark:text-dark-muted mb-1" htmlFor="app-message">Message / Details</label>
                <textarea id="app-message" name="message" rows="3" required className="form-input" value={application.message} onChange={(event) => setApplication({ ...application, message: event.target.value })} />
              </div>
              <button type="submit" className="btn-form-submit" disabled={loading === "application"}>
                {loading === "application" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
