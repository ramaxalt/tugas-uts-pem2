export default function Header() {
    return (
        <header className="fixed top-0 w-full backdrop-blur bg-white/5 border-b border-white/10 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="font-bold text-lg tracking-wide">WebKeren</h1>

                <nav className="space-x-6 text-sm">
                    <a href="#home" className="hover:text-blue-400 transition">
                        Home
                    </a>

                    <a href="#features" className="hover:text-blue-400 transition">
                        Features
                    </a>

                    <a href="#contact" className="hover:text-blue-400 transition">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}