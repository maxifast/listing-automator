import { motion } from 'framer-motion';

export const ExamplesSection = () => {
    return (
        <section id="examples" className="py-24 bg-bg relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Resultados que <span className="text-gradient">hablan por sí solos</span>
                    </motion.h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        Descubre cómo transformamos descripciones aburridas en máquinas de conversión SEO.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Example 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative bg-white rounded-3xl p-1 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-2/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                        <div className="relative h-full bg-white rounded-[22px] p-8 md:p-10 border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
                                    <span>Antes</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-accent-1">Después IA</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Auriculares Inalámbricos X200</h3>

                                <div className="space-y-6">
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 relative opacity-70">
                                        <span className="absolute -top-3 left-4 bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Original</span>
                                        <p className="text-sm text-gray-500 italic">"Auriculares bluetooth con batería larga. Sonido bueno. Color negro."</p>
                                    </div>

                                    <div className="p-5 bg-gradient-to-br from-accent-1/5 to-transparent rounded-xl border border-accent-1/20 relative shadow-inner">
                                        <span className="absolute -top-3 left-4 bg-accent-1 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase shadow-md shadow-accent-1/30">Generado por IA</span>
                                        <p className="text-sm text-primary font-medium leading-relaxed">
                                            "Experimenta la libertad acústica definitiva con los auriculares inalámbricos X200 Bluetooth 5.3. Diseñados para audiófilos exigentes, ofrecen cancelación activa de ruido profunda y hasta 40 horas de reproducción ininterrumpida. Su acabado en negro ónix añade un toque de elegancia a tu rutina diaria."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase font-semibold">Incremento SEO</span>
                                    <span className="text-2xl font-bold text-green-500">+340%</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-xs text-gray-500 uppercase font-semibold">Conversión</span>
                                    <span className="text-xl font-bold text-primary">+4.2%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Example 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white rounded-3xl p-1 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-2/20 to-accent-3/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                        <div className="relative h-full bg-white rounded-[22px] p-8 md:p-10 border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
                                    <span>Antes</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-accent-2">Después IA</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Silla Ergonómica Pro-Fit</h3>

                                <div className="space-y-6">
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 relative opacity-70">
                                        <span className="absolute -top-3 left-4 bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Original</span>
                                        <p className="text-sm text-gray-500 italic">"Silla para oficina. Se ajusta la altura. Cómoda para la espalda."</p>
                                    </div>

                                    <div className="p-5 bg-gradient-to-br from-accent-2/5 to-accent-3/5 rounded-xl border border-accent-2/20 relative shadow-inner">
                                        <span className="absolute -top-3 left-4 bg-accent-2 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase shadow-md shadow-accent-2/30">Generado por IA</span>
                                        <p className="text-sm text-primary font-medium leading-relaxed">
                                            "Transforma tu jornada laboral con la silla de oficina ergonómica Pro-Fit. Su soporte lumbar adaptativo en malla transpirable elimina la fatiga postural. Ajuste neumático de precisión, reposabrazos 4D y base reforzada de aluminio. Recomendada por fisioterapeutas para jornadas de más de 8 horas."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase font-semibold">Tasa de rebote</span>
                                    <span className="text-2xl font-bold text-blue-500">-45%</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-xs text-gray-500 uppercase font-semibold">Impresiones Orgánicas</span>
                                    <span className="text-xl font-bold text-primary">x2.8</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
