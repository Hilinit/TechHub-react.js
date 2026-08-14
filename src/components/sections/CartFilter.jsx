

const categories = ["Hamısı", "Maus", "Klaviatura", "Flaş Yaddaş", "Qulaqlıq", "Sistem Bloku", "Monitor", "Audio", "Veb-Kamera", "Daxili Yaddaş", "Aksesuar"]

export default function CartFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-6">
      <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
      <div className="grid grid-cols-3  md:flex gap-3">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`py-2.5 px-4 lg:p-6 rounded-xl border text-xs font-medium transition-all 
              ${ selectedCategory === cat ? "bg-emerald-500/15 border-emerald-500 text-emerald-400" : "bg-[#111726] border-gray-800 text-gray-300" }`} >
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}