import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 95, color: 'from-orange-400 to-red-500' },
  { name: 'CSS3', level: 92, color: 'from-sky-400 to-blue-600' },
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-amber-500' },
  { name: 'React', level: 92, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', level: 85, color: 'from-emerald-400 to-green-600' },
  { name: 'MongoDB', level: 84, color: 'from-lime-400 to-green-500' },
  { name: 'Angular', level: 70, color: 'from-red-400 to-pink-500' },
  { name: 'Next.js', level: 80, color: 'from-slate-300 to-slate-500' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      {/* Liquid blob background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-16 h-80 w-80 rounded-full bg-gradient-to-r from-fuchsia-500/40 to-blue-500/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-10 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500/30 to-violet-600/30 blur-3xl animate-[spin_18s_linear_infinite]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">Me</span>
            </h2>
            <p className="mt-4 text-cyan-100/90 leading-relaxed">
              I’m Nandhan K, a Dubai-based Front-End & Full-Stack Web Developer specializing in the MERN stack. I craft high-performance, visually immersive web apps with HTML, CSS, JavaScript, React, Node.js, and MongoDB — often blending AI capabilities for next-gen experiences. My work focuses on clean architecture, smooth motion, and seamless user journeys.
            </p>
            <p className="mt-4 text-cyan-100/80">
              From AI assistants to full-scale business platforms, I build solutions that are fast, secure, and scalable — designed to look stunning on every device.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-cyan-200">Core Skills</h3>
            <div className="mt-6 space-y-5">
              {skills.map((s) => (
                <div key={s.name} className="group">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-cyan-100">{s.name}</span>
                    <span className="text-xs text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100">Experience: {s.level}%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-white/10 backdrop-blur">
                    <div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${s.color} shadow-[0_0_20px_rgba(56,189,248,0.35)]`}
                      style={{ width: `${s.level}%` }}
                      aria-label={`${s.name} skill ${s.level}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
