import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4i5b0y",
        "template_i7s0u6h",
        form.current,
        "th8b-px1LJKKis6ew"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}