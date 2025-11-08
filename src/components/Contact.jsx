import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      {/* Animated liquid waves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute -bottom-10 left-0 w-[120%] animate-[pulse_8s_ease-in-out_infinite] opacity-30" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#grad)" fillOpacity="1" d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,138.7C672,107,768,85,864,106.7C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Let’s build something futuristic</h2>
            <p className="mt-4 text-cyan-100/85">I’m available for freelance projects, collaborations and consulting. Drop a message and I’ll get back within 24 hours.</p>

            <div className="mt-6 space-y-2 text-cyan-100/90">
              <p>Email: <a className="underline decoration-dotted hover:text-white" href="mailto:nandhankd@gmail.com">nandhankd@gmail.com</a></p>
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com" target="_blank" className="hover:text-white" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" className="hover:text-white" rel="noreferrer">GitHub</a>
                <a href="https://x.com" target="_blank" className="hover:text-white" rel="noreferrer">X</a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 to-fuchsia-600/20 blur-2xl" />
            <div className="relative grid gap-4">
              <input required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-cyan-100/60" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-cyan-100/60" />
              <textarea rows="4" placeholder="Tell me about your project" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none placeholder:text-cyan-100/60" />
              <button className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3">Send Message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
