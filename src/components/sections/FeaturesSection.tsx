import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Cpu } from 'lucide-react';
import { cn } from '../../lib/utils';

const features = [
    {
        icon: Zap,
        title: 'Velocidad de la Luz',
        description: 'Genera cientos de fichas de productos y textos SEO en milisegundos usando nuestra infraestructura distribuida.',
        color: 'text-accent-1',
        bg: 'bg-accent-1/10',
    },
    {
        icon: Target,
        title: 'Precisión Semántica',
        description: 'Nuestra IA comprende el contexto de tus productos y utiliza PNL para identificar palabras clave Long-Tail con exactitud.',
        color: 'text-accent-2',
        bg: 'bg-accent-2/10',
    },
    {
        icon: TrendingUp,
        title: 'Máxima Conversión',
        description: 'Textos persuasivos diseñados no solo para rankear en Google, sino para convertir visitantes en compradores.',
        color: 'text-accent-3',
        bg: 'bg-accent-3/10',
    },
    {
        icon: Cpu,
        title: 'Aprendizaje Continuo',
        description: 'El modelo se adapta a la voz de tu marca y mejora continuamente basándose en los datos de rendimiento de tu e-commerce.',
        color: 'text-gray-800',
        bg: 'bg-gray-800/10',
    }
];

export const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        El cerebro detrás de tu <span className="text-gradient">crecimiento</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-secondary max-w-2xl mx-auto"
                    >
                        Nuestra arquitectura neuronal está optimizada específicamente para e-commerce y publicación masiva.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
                        >
                            {/* Hover flare effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10", feature.bg)}>
                                <feature.icon className={cn("w-7 h-7", feature.color)} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{feature.title}</h3>
                            <p className="text-secondary leading-relaxed relative z-10">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
