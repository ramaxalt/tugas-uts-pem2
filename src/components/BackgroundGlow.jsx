export default function BackgroundGlow() {
    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] top-0 left-0"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] bottom-0 right-0"></div>
        </div>
        );
    }