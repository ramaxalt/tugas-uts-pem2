export default function Card({ title, desc }) {
    return (
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur hover:scale-105 hover:border-blue-400 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{desc}</p>
        </div>
    );
}