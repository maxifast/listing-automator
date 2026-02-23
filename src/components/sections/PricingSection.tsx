import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

const tiers = [
    {
        name: 'Starter',
        price: '29',
        description: 'Perfecto para tiendas pequeñas comenzando con SEO automation.',
        features: ['500 Generaciones / mes', 'Soporte Email', 'Exportación a CSV', '1 Idioma'],
        cta: 'Empezar Gratis',
        popular: false,
    },
    {
        name: 'Pro',
        price: '99',
        description: 'El motor definitivo para e-commerce en crecimiento.',
        features: ['5,000 Generaciones / mes', 'API Access', 'Integración Shopify/WooCommerce', 'Multi-idioma (30+)', 'Soporte Prioritario 24/7'],
        cta: 'Obtener Pro',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Personalizado',
        description: 'Soluciones a medida para corporaciones y agencias.',
        features: ['Generaciones Ilimitadas', 'Infraestructura Dedicada', 'Modelos de IA Personalizados', 'Account Manager Dedicado'],
        cta: 'Contactar Ventas',
        popular: false,
    }
];

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Planes Simples. <span className="text-gradient">ROI Infinito.</span></h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">Escala la creación de tu contenido sin escalar tus costos operativos.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2",
                                tier.popular
                                    ? "bg-primary text-white shadow-2xl shadow-primary/30 ring-2 ring-accent-1 ring-offset-4 ring-offset-white"
                                    : "bg-white border border-gray-100 shadow-xl shadow-gray-100"
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-accent-1 to-accent-2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={cn("text-2xl font-bold mb-2", tier.popular ? "text-white" : "text-primary")}>{tier.name}</h3>
                                <p className={cn("text-sm min-h-[40px]", tier.popular ? "text-gray-300" : "text-secondary")}>{tier.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline text-5xl font-extrabold">
                                {tier.price !== 'Personalizado' && <span className="text-3xl font-medium mr-1 tracking-tight">€</span>}
                                <span className={tier.price === 'Personalizado' ? 'text-3xl' : ''}>{tier.price}</span>
                                {tier.price !== 'Personalizado' && <span className={cn("text-lg font-medium ml-2", tier.popular ? "text-gray-300" : "text-secondary")}>/mes</span>}
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start">
                                        <Check className={cn("w-5 h-5 mr-3 shrink-0", tier.popular ? "text-accent-1" : "text-primary")} />
                                        <span className={cn("text-sm", tier.popular ? "text-gray-200" : "text-gray-600")}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={cn(
                                    "w-full py-4 rounded-xl font-medium transition-all duration-300 active:scale-95",
                                    tier.popular
                                        ? "bg-white text-primary hover:bg-gray-50 shadow-lg"
                                        : "bg-primary text-white hover:bg-black"
                                )}
                            >
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
