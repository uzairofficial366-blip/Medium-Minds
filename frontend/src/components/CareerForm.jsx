import { useState } from "react";
import { submitCareer } from "../utils/api";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  role: "",
  portfolio_url: "",
  message: "",
};

export default function CareerForm({ role, onClose }) {
  const [form, setForm] = useState({ ...initialForm, role: role || "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const result = await submitCareer(form);
      setStatus({ type: "success", text: result.message || "Application submitted successfully!" });
      setForm({ ...initialForm, role: role || "" });
      window.setTimeout(onClose, 2000);
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Failed to submit application." });
    } finally {
      setLoading(false);
    }
  }

  const updateField = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 md:p-8 w-full max-w-3xl relative shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-light-muted dark:text-dark-muted hover:text-primary transition-colors"
          aria-label="Close application form"
        >
          <i className="fas fa-times" />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Apply for <span className="text-primary">{role}</span>
        </h2>
        <p className="text-light-muted dark:text-dark-muted mb-6 text-sm">
          Please fill out the form below to submit your application.
        </p>

        <form id="careerForm" className="space-y-4" onSubmit={handleSubmit}>
          {status && (
            <div
              className={`p-4 rounded-md mb-4 font-medium text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {status.text}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-light-muted dark:text-dark-muted mb-1 font-semibold">Full Name *</label>
              <input type="text" name="full_name" required className="form-input" value={form.full_name} onChange={updateField("full_name")} />
            </div>
            <div>
              <label className="block text-sm text-light-muted dark:text-dark-muted mb-1 font-semibold">Email Address *</label>
              <input type="email" name="email" required className="form-input" value={form.email} onChange={updateField("email")} />
            </div>
            <div>
              <label className="block text-sm text-light-muted dark:text-dark-muted mb-1 font-semibold">Phone Number *</label>
              <input type="tel" name="phone" required className="form-input" value={form.phone} onChange={updateField("phone")} />
            </div>
            <div>
              <label className="block text-sm text-light-muted dark:text-dark-muted mb-1 font-semibold">Portfolio URL</label>
              <input type="url" name="portfolio_url" className="form-input" placeholder="https://..." value={form.portfolio_url} onChange={updateField("portfolio_url")} />
            </div>
          </div>

          <div>
            <label className="block text-sm text-light-muted dark:text-dark-muted mb-1 font-semibold">Role *</label>
            <input type="text" name="role" required className="form-input" value={form.role} onChange={updateField("role")} />
          </div>

          <div>
            <label className="block text-sm text-light-muted dark:text-dark-muted mb-1 font-semibold">Cover Letter / Message</label>
            <textarea name="message" rows="4" className="form-input" placeholder="Tell us why you are a great fit..." value={form.message} onChange={updateField("message")} />
          </div>

          <div className="pt-4">
            <button type="submit" id="submit-career-btn" className="btn-form-submit w-full md:w-auto px-10" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
