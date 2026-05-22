import { useState } from "react";

export default function Contact() {
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
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/5 border border-white/10 backdrop-blur p-8 rounded-2xl space-y-4">
            <input type="text"name="nama"placeholder="Nama Lengkap"onChange={handleChange}className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none"required/>

            <input type="email" name="email"placeholder="Email"onChange={handleChange} className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none"required/>

            <input type="text" name="judul" placeholder="Judul Pesan" onChange={handleChange} className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none" required/>

            <textarea name="pesan" rows="4" placeholder="Pesan" onChange={handleChange} className="w-full p-3 bg-white/10 border border-white/10 rounded-lg focus:border-blue-400 outline-none"required/>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Kirim Pesan
            </button>
        </form>
    </section>
    );
}