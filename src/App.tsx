import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlassShape } from './components/3d/GlassShape';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ExamplesSection } from './components/sections/ExamplesSection';
import { PricingSection } from './components/sections/PricingSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { useMediaQuery } from './lib/utils';
import { Menu, X } from 'lucide-react';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen">

      {/* 3D Background Layer - Disabled on mobile for max frame rate */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {!isMobile && (
          <Canvas camera={{ position: [0, 0, 30], fov: 75 }} style={{ pointerEvents: 'none' }} dpr={[1, 1]}>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <GlassShape isGenerating={isGenerating} />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full">

        {/* Navbar */}
        <header className="absolute top-0 w-full px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex justify-between items-center z-50">
          <div className="text-xl font-bold tracking-tighter text-primary">
            Listing<span className="text-accent-1">-Automator</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 shadow-sm">
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#examples" className="hover:text-primary transition-colors">Ejemplos</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden p-2 rounded-xl glass border border-white/30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </header>

        {/* Mobile slide-down menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
            <nav className="absolute top-[72px] left-4 right-4 glass rounded-2xl border border-white/30 p-6 flex flex-col space-y-4 text-base font-medium text-primary shadow-2xl z-50">
              <a href="#features" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-100">Características</a>
              <a href="#examples" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-100">Ejemplos</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-100">Precios</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2">Contacto</a>
            </nav>
          </div>
        )}

        {/* Sections */}
        <HeroSection
          isGenerating={isGenerating}
          setIsGenerating={setIsGenerating}
          generatedResult={generatedResult}
          setGeneratedResult={setGeneratedResult}
        />

        {/* Opaque sections wrapper */}
        <div className="relative bg-white/95 md:bg-white/80 md:backdrop-blur-3xl rounded-t-[3rem] border-t border-white/50 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] pt-12 pb-24 mt-[-4rem] overflow-hidden">
          <FeaturesSection />
          <ExamplesSection />
          <PricingSection />
          <ContactSection />
        </div>

        <Footer />

      </div>
    </main>
  )
}

export default App

