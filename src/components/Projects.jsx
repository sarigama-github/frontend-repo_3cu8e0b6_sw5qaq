import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    title: 'AI Voice Assistant (Tony)',
    tag: 'AI',
    desc: 'Smart assistant with speech recognition, holographic popups, and Bing image API.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'AI Text-to-Image Generator',
    tag: 'AI',
    desc: 'Generate images from prompts using external AI APIs with gallery view.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Breezeline Interiors Website',
    tag: 'Web',
    desc: 'Full-stack site with real-time estimation, admin uploads, and email automation.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Masters Study Portal',
    tag: 'Web',
    desc: 'Study platform for BCA/MCA with material uploads and secure login.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
];

const tabs = ['All', 'Web', 'AI', 'Creative'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return allProjects;
    return allProjects.filter((p) => p.tag === active);
  }, [active]);

  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="flex gap-2 bg-white/5 p-1 rounded-full backdrop-blur border border-white/10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  active === t ? 'bg-gradient-to-r from-blue-600 to-fuchsia-600' : 'hover:bg-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-cyan-100/80">{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
