import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlassShape } from './components/3d/GlassShape';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ExamplesSection } from './components/sections/ExamplesSection';
import { PricingSection } from './components/sections/PricingSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);

  return (
    <main className="relative w-full min-h-screen">

      {/* 3D Background Layer - Fixed behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 30], fov: 75 }} style={{ pointerEvents: 'none' }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <GlassShape isGenerating={isGenerating} />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full">

        {/* Navbar */}
        <header className="absolute top-0 w-full px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center z-50">
          <div className="text-xl font-bold tracking-tighter text-primary">
            Listing<span className="text-accent-1">-Automator</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 shadow-sm">
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#examples" className="hover:text-primary transition-colors">Ejemplos</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
          </nav>
          <button className="px-6 py-2.5 text-sm font-medium bg-primary text-white rounded-full hover:bg-black transition-colors shadow-xl shadow-primary/20">
            Iniciar Sesión
          </button>
        </header>

        {/* Sections */}
        <HeroSection
          isGenerating={isGenerating}
          setIsGenerating={setIsGenerating}
          generatedResult={generatedResult}
          setGeneratedResult={setGeneratedResult}
        />

        {/* Using smooth background transition into opaque sections */}
        <div className="relative bg-white/80 backdrop-blur-3xl rounded-t-[3rem] border-t border-white/50 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] pt-12 pb-24 mt-[-4rem]">
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
