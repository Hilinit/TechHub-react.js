import  { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { FaShoppingBasket } from "react-icons/fa"
export default function Navbar({ cartCount, onOpenCart }) {
  const { token, user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const getUserInitial = () => {
    if (user?.fullName) return user.fullName.charAt(0).toUpperCase()
    if (user?.email) return user.email.charAt(0).toUpperCase()
    return 'U'
  }
  return (
    <nav className="border-b border-gray-800/80 bg-[#080b11]/90 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-9 h-9 lg:w-12 lg:h-12  flex items-center justify-center text-emerald-400">
            <img src="../../../public/logo.png"/>
          </div>
          <span className="text-xl font-extrabold tracking-wide">
            <span className="text-emerald-400">Tech</span>Hub
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-300 uppercase tracking-widest">
          <a href="#home" className="hover:text-emerald-400 transition-colors">HOME</a>
          <a href="#categories" className="hover:text-emerald-400 transition-colors">CATEGORIES</a>
          <a href="#products" className="hover:text-emerald-400 transition-colors">PRODUCTS</a>
          <a href="#footer" className="hover:text-emerald-400 transition-colors">FOOTER</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onOpenCart}className="relative p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center justify-center">
            <FaShoppingBasket className='text-[20px]'/>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-black text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>
          {token ? (
            <div className="flex items-center gap-3 pl-2 border-l border-gray-800">
              <div className="flex items-center gap-2.5 bg-[#0e1422] border border-emerald-500/20 rounded-xl px-3 py-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center shadow-inner">
                  {getUserInitial()}
                </div>
                <span className="text-xs text-gray-200 hidden sm:inline-block font-semibold max-w-[120px] truncate">
                  {user?.fullName || user?.email}
                </span>
              </div>
              <button onClick={logout}className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white text-xs px-3 py-2 rounded-xl transition-all font-semibold" title="Çıxış et">
                Çıxış
              </button>
            </div>
          ) : (
            <button  onClick={() => navigate('/login')} className="bg-emerald-500 hover:bg-emerald-400 text-black text-xs px-5 py-2.5 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Giriş / Qeydiyyat
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}