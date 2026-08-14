import { FiSearch } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full"></div>
        <div className="relative w-20 h-20 bg-[#0e1422] border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl shadow-[0_0_25px_rgba(16,185,129,0.15)]">
          <FiSearch />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Axtardığınız kateqoriyada məhsul tapılmadı</h3>
      <p className="text-gray-400 text-xs max-w-md mb-6 leading-relaxed">Seçdiyiniz kriteriyalara uyğun heç bir məhsul mövcud deyil.</p>
    </div>
  )
}