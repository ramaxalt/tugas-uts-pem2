export default function Hero() {
return (
    <section id="home" className="pt-32 pb-24 text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Build Stunning UI
            </span>
            <br/>
            with React & Tailwind
        </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Desain modern, clean, dan profesional untuk project kamu.
                Siap tampil seperti startup beneran.
            </p>

            <div className="flex justify-center gap-4">
                <a href="#features"className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                    Get Started
                </a>
            </div>
            </section>
    );
}