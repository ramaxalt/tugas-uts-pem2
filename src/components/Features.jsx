import Card from "./Card";

export default function Features() {
return (
        <section id="features" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
            <Card title="Lightning Fast" desc="Powered by Vite & React" />
            <Card title="Beautiful UI" desc="Modern glassmorphism design" />
            <Card title="Fully Responsive" desc="Works on all devices" />
        </section>
    );
}