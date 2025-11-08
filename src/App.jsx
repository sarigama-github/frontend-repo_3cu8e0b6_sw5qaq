import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Estimator from './components/Estimator';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">Nandhan K</a>
          <nav className="hidden gap-6 md:flex text-sm text-cyan-100/90">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#estimate" className="hover:text-white">Estimation</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-4 py-2 text-sm shadow-lg md:inline-block">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Estimator />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/70 py-6 text-center text-cyan-200/70">
        © {new Date().getFullYear()} Nandhan K — Built with love, motion, and code.
      </footer>
    </div>
  );
}

export default App;
