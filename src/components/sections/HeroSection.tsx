import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Loader2, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export const HeroSection = ({
    isGenerating,
    setIsGenerating,
    generatedResult,
    setGeneratedResult
}: {
    isGenerating: boolean;
    setIsGenerating: (v: boolean) => void;
    generatedResult: string | null;
    setGeneratedResult: (v: string | null) => void;
}) => {
    const [query, setQuery] = useState('');
    const [typingText, setTypingText] = useState('');

    // Fake typing effect when generating
    useEffect(() => {
        if (isGenerating) {
            setTypingText('');
            setGeneratedResult(null);

            let i = 0;
            const userKeyword = query.trim() || 'Producto';
            const titleCasedKeyword = userKeyword.charAt(0).toUpperCase() + userKeyword.slice(1).toLowerCase();
            const rawWords = userKeyword.split(' ').filter(w => w.length > 2);
            const mainWord = rawWords[0] || userKeyword;

            const mockSeoResponse = `Optimización SEO Generada:\n\nTítulo Meta (60 chars):\n"✨ ${titleCasedKeyword} - Mejor Precio Online garantizado"\n\nDescripción Meta (155 chars):\n"Descubre todo sobre ${userKeyword.toLowerCase()}. Analizamos especificaciones, ventajas y te damos la mejor recomendación. Compra ahora con envío rápido y seguro."\n\nPalabras clave identificadas:\n${userKeyword.toLowerCase()}, comprar ${mainWord.toLowerCase()}, mejor ${titleCasedKeyword}, oferta ${mainWord.toLowerCase()}, precio ${userKeyword.toLowerCase()}.`;

            const interval = setInterval(() => {
                setTypingText((prev) => prev + mockSeoResponse.charAt(i));
                i++;
                if (i >= mockSeoResponse.length) {
                    clearInterval(interval);
                    setIsGenerating(false);
                    setGeneratedResult(mockSeoResponse);
                }
            }, 40); // Fast typing speed

            return () => clearInterval(interval);
        }
    }, [isGenerating]);

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim() || isGenerating) return;
        setIsGenerating(true);
    };

    return (
        <section className="relative w-full min-h-[auto] lg:min-h-screen flex items-center justify-center pt-24 pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-6 lg:space-y-8 z-10"
                >
                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full w-full sm:w-max text-xs sm:text-sm font-medium border border-accent-1/30">
                        <Sparkles className="w-4 h-4 text-accent-1 shrink-0" />
                        <span className="text-secondary truncate">Listing-Automator IA 3.0 Disponible</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                        Crea contenido <br />
                        <span className="text-gradient">que domina</span> <br />
                        los buscadores.
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-secondary max-w-xl font-light leading-relaxed">
                        Automatización inteligente para redacción SEO y fichas técnicas.
                        Experimenta el poder del diseño premium y la IA generativa en tiempo real.
                    </p>

                    {/* Interactive Demo Input */}
                    <div className="mt-2 lg:mt-4">
                        <form onSubmit={handleGenerate} className="relative max-w-xl glass rounded-2xl p-2 flex items-center shadow-2xl shadow-accent-2/10">
                            <input
                                type="text"
                                placeholder='Ej: "Cafetera Delonghi"...'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                disabled={isGenerating}
                                className="w-full bg-transparent border-none focus:ring-0 text-base lg:text-lg px-4 py-3 outline-none text-primary placeholder:text-gray-400 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isGenerating || !query.trim()}
                                className={cn(
                                    "flex items-center justify-center space-x-2 px-5 lg:px-6 py-3 lg:py-4 rounded-xl font-medium text-white transition-all duration-300 shrink-0",
                                    isGenerating ? "bg-accent-2 cursor-wait" : "bg-primary hover:bg-black active:scale-95",
                                    "disabled:opacity-70 disabled:hover:bg-primary disabled:active:scale-100"
                                )}
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Creando...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Generar</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                        <p className="text-xs text-secondary mt-3 ml-2 flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1 text-accent-1" /> Prueba la generación instantánea sin registro.
                        </p>
                    </div>
                </motion.div>

                {/* Right Output/Visual Column — hidden on mobile until generating */}
                {(isGenerating || generatedResult) && (
                    <div className="relative min-h-[300px] lg:h-[600px] w-full flex items-center justify-center z-10">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="w-full max-w-lg h-max glass border border-white/40 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col"
                            >
                                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200/50">
                                    <div className={cn("p-2 rounded-lg", isGenerating ? "bg-accent-2/20 text-accent-2" : "bg-accent-1/20 text-accent-1")}>
                                        {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : <FileText className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary">{isGenerating ? "Analizando semántica..." : "Análisis Completado"}</h3>
                                        <p className="text-sm text-secondary">Motor IA de Rendimiento SEO</p>
                                    </div>
                                </div>

                                <div className="flex-1 bg-white/40 rounded-xl p-4 lg:p-6 font-mono text-sm text-gray-800 whitespace-pre-wrap overflow-y-auto max-h-[250px] lg:max-h-[350px]">
                                    {isGenerating ? typingText : generatedResult}
                                    {isGenerating && <span className="inline-block w-2 h-4 bg-accent-2 ml-1 animate-pulse" />}
                                </div>

                                {!isGenerating && generatedResult && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-6 flex justify-end space-x-3"
                                    >
                                        <button className="px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors">
                                            Editar
                                        </button>
                                        <a href="#pricing" className="px-5 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-black transition-colors shadow-lg">
                                            Exportar
                                        </a>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}

            </div>
        </section>
    );
};
