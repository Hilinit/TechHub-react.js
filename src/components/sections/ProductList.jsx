import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'
import { useProducts } from '../../hooks/useProducts'
import NotFound from './NotFound'

export default function ProductList({ selectedCategory, setSelectedCategory }) {
  const { filteredProducts, loading } = useProducts(selectedCategory)
  const { token } = useContext(AuthContext)
  const { dispatch } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    if (!token) {
      navigate('/login')
      return
    }
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  if (loading) {  return <div className="text-center py-10 text-emerald-400">Məhsullar yüklənir...</div> }

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-black text-white mb-6">
        Featured <span className="text-emerald-400">Products</span>
      </h2>
      {filteredProducts.length === 0 ? (
        <NotFound resetFilter={() => setSelectedCategory("Hamısı")} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-[#0e1422] border border-emerald-500/50 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-4 bg-black/50 h-48">
                  <span className="absolute top-2 left-2 bg-gray-900/90 text-gray-300 text-[10px] px-2.5 py-1 rounded-md border border-gray-700">{p.category}</span>
                  {p.discount && <span className="absolute top-2 right-2 bg-emerald-500 text-black text-[11px] font-extrabold px-2 py-0.5 rounded-md">{p.discount}</span>}
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mb-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> {p.stock} in stock
                </div>
                <h3 className="text-xs font-semibold text-white mb-3 line-clamp-2 h-9 leading-snug">{p.title}</h3>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold text-emerald-400">{p.price}$</span>
                  {p.oldPrice && <span className="text-xs text-gray-500 line-through">{p.oldPrice}$</span>}
                </div>
                <button onClick={() => handleAddToCart(p)} className="w-full py-2.5 rounded-xl border border-emerald-500/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-500 hover:text-black transition-all">
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}