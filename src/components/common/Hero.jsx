export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-black text-white leading-tight mb-4"> Build Your <span className="text-emerald-400">Ultimate</span> Gaming Setup</h1>
        <p className="text-gray-400 text-sm">High-performance gear engineered for competitive gamers.</p>
      </div>
      <div className="rounded-2xl overflow-hidden border border-emerald-500/20">
        <img src="https://i.pinimg.com/736x/a1/16/fa/a116fa8a41d434d8eb548fb9e04081e0.jpg" alt="Setup" className="w-full h-80 object-cover" />
      </div>
    </section>
  )
}