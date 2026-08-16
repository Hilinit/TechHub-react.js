import { createContext, useContext, useReducer, useEffect } from 'react'
export const CartContext = createContext()

function cartReducer(state, action) {
  if (action.type === 'ADD_TO_CART') {
    const productId = action.payload.id ?? action.payload._id ?? action.payload.title
    const exists = state.find(item => String(item.id) === String(productId))
    if (exists) 
       { return state.map(item =>  String(item.id) === String(productId) ? { ...item, qty: (item.qty || 1) + 1 } : item) }
    return [...state, { ...action.payload, id: productId, qty: 1 }]
  }
  if (action.type === 'UPDATE_QTY') {
    return state.map(item => {
      if (String(item.id) === String(action.payload.id)) {
        const newQty = (item.qty || 1) + action.payload.delta
        return newQty > 0 ? { ...item, qty: newQty } : item
      }
      return item
    })
  }
  if (action.type === 'REMOVE_FROM_CART') {  return state.filter(item => String(item.id) !== String(action.payload))}
  return state
}
const initCart = () => {
  try {
    const localData = localStorage.getItem('cart')
    return localData ? JSON.parse(localData) : []
  } catch (error) {
    console.error("LocalStorage oxunarkən xəta:", error)
    return []
  }
}
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], initCart)
  useEffect(() => {  localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)