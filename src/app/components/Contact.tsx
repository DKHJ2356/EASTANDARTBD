import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Compose mailto link as a simple no-backend approach
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:rony@eastandart.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0e17]/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2
            className="text-sm tracking-[0.3em] text-cyan-400/80 mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact
          </h2>
          <p
            className="text-3xl md:text-4xl mt-4 max-w-xl"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Let's start a conversation.
          </p>
          <p className="text-white/60 mt-4 max-w-md leading-relaxed">
            Whether you have a project in mind or just want to understand what we do — reach out and we'll respond within one business day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <span className="text-xs text-cyan-400/60 tracking-wider block mb-2">Email</span>
              <a
                href="mailto:eastandart@gmail.com"
                className="text-white/80 hover:text-white transition-colors text-lg"
              >
                eastandart@gmail.com
              </a>
            </div>

            <div>
              <span className="text-xs text-cyan-400/60 tracking-wider block mb-2">Locations</span>
              <p className="text-white/70 leading-relaxed">
                Dhaka, Bangladesh
                <br />
              </p>
            </div>

            <div>
              <span className="text-xs text-cyan-400/60 tracking-wider block mb-2">Languages</span>
              <p className="text-white/70">Bengali · English · Japanese</p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-sm text-white/40 leading-relaxed">
                We work within your existing tools — Slack, GitHub, Notion, Backlog — and adapt to how your team operates.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="border border-white/10 rounded-xl p-10 bg-white/[0.01] flex flex-col items-center justify-center text-center min-h-[320px]">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="rgba(224,255,255,0.4)" strokeWidth="1.5" fill="none"/>
                    <path d="M16 24l6 6 10-12" stroke="rgba(224,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white/80 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Message opened in your email client.
                </p>
                <p className="text-white/40 text-sm mt-2">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-cyan-400/60 tracking-wider block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-xs text-cyan-400/60 tracking-wider block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-cyan-400/60 tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-colors resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 border border-cyan-400/30 text-cyan-400/80 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/5 rounded-lg text-sm tracking-wider transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
