import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[95vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              Nandhan K
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-cyan-100/90"
          >
            Web Developer | Front-End & Back-End | MERN Stack | Dubai, UAE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105"
            >
              Hire Me
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#projects"
              className="rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-cyan-100 backdrop-blur transition-colors hover:bg-white/10"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="ml-auto hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 blur-xl opacity-40" />
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
              alt="Nandhan K profile"
              className="relative z-10 h-56 w-56 rounded-full object-cover shadow-2xl ring-2 ring-white/10 hover:ring-fuchsia-400/40 transition"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
