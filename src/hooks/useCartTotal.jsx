import { useCart } from '../contexts/CartContext'

export function useCartTotal(discountPercent = 0) {
  const { cart } = useCart()
  
  const rawSubtotal = cart.reduce((acc, item) => acc + (item.oldPrice || item.price) * item.qty, 0)
  const currentSubtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  const baseDiscount = rawSubtotal - currentSubtotal
  const promoDiscount = (currentSubtotal * discountPercent) / 100
  const totalDiscount = baseDiscount + promoDiscount
  const finalTotal = rawSubtotal - totalDiscount
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0)

  return { rawSubtotal: rawSubtotal.toFixed(2), totalDiscount: totalDiscount.toFixed(2), finalTotal: finalTotal.toFixed(2), totalCount }
}