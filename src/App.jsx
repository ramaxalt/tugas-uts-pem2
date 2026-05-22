import { useState } from "react";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      <BackgroundGlow />
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

/*   BACKGROUND  */
function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] top-0 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] bottom-0 right-0"></div>
    </div>
  );
}

/*   HEADER   */
function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur bg-white/5 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-lg tracking-wide">WebKeren</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#features" className="hover:text-blue-400 transition">Features</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

/*   HERO   */
function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 text-center px-4">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Build Stunning UI
        </span>
        <br />
        with React & Tailwind
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Desain modern, clean, dan profesional untuk project kamu.
        Siap tampil seperti startup beneran.
      </p>

      <div className="flex justify-center gap-4">
        <a href= "#features" className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </a>
      </div>
    </section>
  );
}

/*   FEATURES    */
function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
      <Card title="Lightning Fast" desc="Powered by Vite & React" />
      <Card title="Beautiful UI" desc="Modern glassmorphism design" />
      <Card title="Fully Responsive" desc="Works on all devices" />
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur hover:scale-105 hover:border-blue-400 transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

/* CTA */
function CTA() {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold mb-4">
        Siap bikin website keren?
      </h2>
      <p className="text-gray-400 mb-6">
        Mulai sekarang dan buat project kamu terlihat profesional
      </p>
      <button href="#contact" className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
        Mulai Sekarang
      </button>
    </section>
  );
}

/*   CONTACT   */
function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    judul: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim");
  };

  return (
    <section id="contact" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white/5 border border-white/10 backdrop-blur p-8 rounded-2xl space-y-4"
      >
        <input type="text" name="nama" placeholder="Nama Lengkap"
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none" required />

        <input type="email" name="email" placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none" required />

        <input type="text" name="judul" placeholder="Judul Pesan"
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none" required />

        <textarea name="pesan" rows="4" placeholder="Pesan"
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none" required />

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}

/*   FOOTER   */
function Footer() {
  return (
    <footer className="text-center py-6 text-gray-500 border-t border-white/10">
      © 2026 Tugas UTS TRPL — M. Rizki Ramadhan
    </footer>
  );
}