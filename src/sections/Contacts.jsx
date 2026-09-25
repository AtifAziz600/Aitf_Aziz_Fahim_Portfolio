import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

import TitleHeader from "../component/TitleHeader";
import ContactExperience from "../component/Models/Contact/ContactExperience";
import Toast from "../component/Toast";

const Contacts = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = (
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "service_x6dhnla"
    )
      .trim()
      .replace(/;$/, "");
    const templateId = (
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "template_014h3yk"
    )
      .trim()
      .replace(/;$/, "");
    const publicKey = (
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || "3oO3n5AFLi0f_RaZg"
    )
      .trim()
      .replace(/;$/, "");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Md Atif Aziz",
          name: form.name,
          from_email: form.email,
          email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        publicKey
      );

      setToast({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        duration: 5000,
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToast({
        type: "error",
        message:
          "Unable to send message via the form. Please email directly at mdatifazizfahim@gmail.com",
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding relative">
      <Toast toast={toast} onClose={() => setToast(null)} />

      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="I’m always excited to hear about new projects, opportunities, or collaborations."
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch mt-14">
          {/* Left Form Column */}
          <div className="xl:col-span-5 flex">
            <div className="w-full relative rounded-3xl p-6 sm:p-10 bg-[#13161c]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              {/* Decorative gradient blur */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-10 w-full flex flex-col gap-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-2"
                  >
                    <FaUser className="text-amber-400 text-xs" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-slate-500 bg-[#1a1f2c]/80 rounded-xl border border-white/10 focus:border-amber-400/70 focus:bg-[#202737] focus:ring-2 focus:ring-amber-400/20 focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-2"
                  >
                    <FaEnvelope className="text-amber-400 text-xs" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-slate-500 bg-[#1a1f2c]/80 rounded-xl border border-white/10 focus:border-amber-400/70 focus:bg-[#202737] focus:ring-2 focus:ring-amber-400/20 focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-2"
                  >
                    <FaCommentDots className="text-amber-400 text-xs" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-slate-500 bg-[#1a1f2c]/80 rounded-xl border border-white/10 focus:border-amber-400/70 focus:bg-[#202737] focus:ring-2 focus:ring-amber-400/20 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    <div
                      className={`cta-button group ${loading ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                    >
                      <div className="bg-circle" />
                      <p className="text font-semibold">
                        {loading ? "Sending Message..." : "Send Message"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right 3D Model Column */}
          <div className="xl:col-span-7 min-h-[420px] lg:min-h-[500px] flex">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;