import { useState } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/Hero'
import Footer from '../components/common/Footer'
import CartFilter from '../components/sections/CartFilter'
import ProductList from '../components/sections/ProductList'
import Basket from '../components/sections/Basket'

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Hamısı")
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const addToCart = (product) => {
    setCart(item => {
      const exists = item.find(item => item.id === product.id) 
      if (exists) { return item.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)}
      return [...item, { ...product, qty: 1 }]
    })
  } 
  return (
    <div className="bg-[#080b11] text-white min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
        <Hero />
        <CartFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ProductList selectedCategory={selectedCategory} addToCart={addToCart} />
      </div>
      <Footer />
      <Basket isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart}setCart={setCart} />
    </div>
  ) 
}