import { IoMdClose } from "react-icons/io"
import { RiDeleteBinLine } from "react-icons/ri"
import { useCart } from '../../contexts/CartContext'
import { useCartTotal } from '../../hooks/useCartTotal'

export default function Basket({ isOpen, onClose }) {
  const { cart, dispatch } = useCart()
  const { rawSubtotal, totalDiscount, finalTotal } = useCartTotal()
  if (!isOpen) return null
  const updateQuantity = (id, delta) => { dispatch({ type: 'UPDATE_QTY', payload: { id, delta } }) }
  const removeFromCart = (id) => { dispatch({ type: 'REMOVE_FROM_CART', payload: id }) }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#05070c] border border-emerald-500/30 rounded-2xl w-full max-w-5xl p-6 relative max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl transition-colors">
            <IoMdClose />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <div className="bg-[#080b11] border border-emerald-500/20 rounded-2xl p-8 text-center text-gray-400 italic">
                Səbəriniz hal-hazırda boşdur.
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="bg-[#080b11] border border-emerald-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img src={item.image} alt={item.title} className="w-28 h-24 rounded-xl object-cover shrink-0" />
                    <div className="flex flex-col justify-between py-1">
                      <h4 className="text-sm font-bold text-white max-w-[280px] leading-snug mb-3">{item.title}</h4>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-emerald-400 font-bold text-base">{item.price}$</span>
                        {item.oldPrice && (
                          <span className="text-xs text-gray-500 line-through">{item.oldPrice}$</span>
                        )}
                      </div>
                      <div className="flex items-center border border-gray-800 rounded-lg w-fit bg-[#05070c] px-2 py-1 gap-3">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white font-bold text-sm px-1"> - </button>
                        <span className="text-xs font-bold text-white">{item.qty}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white font-bold text-sm px-1"> + </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0 gap-4">
                    <div className="text-right">
                      <span className="text-emerald-400 font-extrabold text-base">
                        Total: {(item.price * item.qty).toFixed(2)}$
                      </span>
                      {item.oldPrice && (
                        <span className="text-xs text-gray-500 line-through block font-normal">
                          {(item.oldPrice * item.qty).toFixed(2)}$
                        </span>
                      )}
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-400 transition-colors p-1">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bg-[#080b11] border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between min-h-[320px]">
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Detallar</h3>
              <div className="space-y-4 text-sm text-gray-300 border-b border-gray-800/80 pb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Ümumi qiymət</span>
                  <span className="font-bold text-white">{rawSubtotal} $</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Ümumi endirim</span>
                  <span className="font-bold text-emerald-400">{totalDiscount} $</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-1">
                  <span>Yekun</span>
                  <span className="text-emerald-400">{finalTotal} $</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
              Satın al
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}