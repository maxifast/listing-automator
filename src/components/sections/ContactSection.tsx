import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-bg relative z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">

                    {/* Decorative background glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-1/10 rounded-full blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-3/10 rounded-full blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="text-4xl md:text-5xl font-bold text-primary mb-6"
                            >
                                ¿Listo para dominar <br /> tu <span className="text-gradient">nicho</span>?
                            </motion.h2>
                            <p className="text-xl text-secondary mb-10 max-w-md">
                                Agenda una demo técnica con nuestro equipo y descubre el poder de la automatización SEO.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-1/10 text-accent-1 flex items-center justify-center">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Email</h4>
                                        <p className="text-sm text-secondary">hello@listing-automator.ai</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-accent-2/10 text-accent-2 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Soporte</h4>
                                        <p className="text-sm text-secondary">Lunes a Viernes, 9am - 6pm CET</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-6 bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-gray-100/50"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-primary">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Jhon Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-primary">Email de empresa</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                        placeholder="jhondoe@company.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary">¿Qué CMS utilizas?</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all text-secondary">
                                    <option>Shopify</option>
                                    <option>WooCommerce</option>
                                    <option>Magento</option>
                                    <option>A medida / API</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary">Mensaje (Opcional)</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-1 focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                                    placeholder="Cuéntanos sobre tu volumen de catálogo..."
                                />
                            </div>
                            <button type="button" className="w-full flex items-center justify-center space-x-2 py-4 bg-primary text-white rounded-xl font-medium hover:bg-black transition-colors shadow-lg active:scale-95">
                                <span>Solicitar Demo</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
