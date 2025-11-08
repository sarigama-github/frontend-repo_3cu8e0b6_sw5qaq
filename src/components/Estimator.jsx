import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BASE_PRICES = {
  Portfolio: 1200,
  Business: 2000,
  'E-commerce': 3500,
  'Custom Web App': 5000,
};

const PAGE_PRICE = 200;

const FEATURES = [
  { key: 'admin', label: 'Admin Panel', price: 800 },
  { key: 'payment', label: 'Payment Integration', price: 1000 },
  { key: 'seo', label: 'SEO Setup', price: 350 },
  { key: 'hosting', label: 'Hosting Support', price: 250 },
];

export default function Estimator() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Portfolio');
  const [pages, setPages] = useState(5);
  const [opts, setOpts] = useState({ admin: false, payment: false, seo: true, hosting: true });

  const total = useMemo(() => {
    const base = BASE_PRICES[type] || 0;
    const pageCost = Math.max(0, pages) * PAGE_PRICE;
    const featureCost = FEATURES.reduce((sum, f) => (opts[f.key] ? sum + f.price : sum), 0);
    return base + pageCost + featureCost;
  }, [type, pages, opts]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <section id="estimate" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Project Estimation</h2>
          <button onClick={() => setOpen(true)} className="rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 shadow-lg shadow-blue-500/30">
            💰 Get Estimation
          </button>
        </div>

        <p className="mt-3 text-cyan-100/80">Quickly estimate your project budget in AED based on scope and features.</p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              className="relative mx-4 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-r from-blue-600/30 to-fuchsia-600/30 blur-3xl" />
              <h3 className="relative z-10 text-2xl font-bold">Estimate your project</h3>

              <div className="relative z-10 mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-cyan-100">Project Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 outline-none">
                      {Object.keys(BASE_PRICES).map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-cyan-100">Number of Pages</label>
                    <input type="number" min={1} value={pages} onChange={(e) => setPages(parseInt(e.target.value || '0', 10))} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-cyan-100">Optional Features</span>
                  <div className="mt-1 grid grid-cols-2 gap-3">
                    {FEATURES.map((f) => (
                      <label key={f.key} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2">
                        <input type="checkbox" checked={opts[f.key]} onChange={(e) => setOpts((o) => ({ ...o, [f.key]: e.target.checked }))} />
                        <span className="text-sm">{f.label} <span className="text-cyan-300/80">(+{f.price} AED)</span></span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-100/80">Estimated Cost</p>
                  <p className="text-3xl font-extrabold tracking-tight">AED {total.toLocaleString()}</p>
                </div>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 shadow-lg">Continue</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
