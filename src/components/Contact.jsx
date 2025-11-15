import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    emailjs
      .send(
        "service_9lp6s5f",
        "template_k1pvtqt",
        formData,
        "sg5zZV3JUafRK9Zzq"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  }

  return (
    <section className="container py-5" id="contact">
      <h2 className="fw-bold mb-4">Contact Me</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control"
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary btn-lg" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {status === "success" && (
        <p className="text-success mt-3 fw-bold">Your message has been sent! ✔️</p>
      )}
      {status === "error" && (
        <p className="text-danger mt-3 fw-bold">Something went wrong. Please try again.</p>
      )}
    </section>
  );
} 