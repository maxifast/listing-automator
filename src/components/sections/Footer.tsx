export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-xl font-bold tracking-tighter text-primary mb-4 md:mb-0">
                    Listing<span className="text-accent-1">-Automator</span>
                </div>
                <div className="text-sm text-secondary">
                    &copy; {new Date().getFullYear()} Listing-Automator. Todos los derechos reservados.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-secondary">
                    <a href="#" className="hover:text-primary transition-colors">Términos</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
                </div>
            </div>
        </footer>
    );
}
