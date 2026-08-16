import { useState } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/Hero'
import Footer from '../components/common/Footer'
import CartFilter from '../components/sections/CartFilter'
import ProductList from '../components/sections/ProductList'
import Basket from '../components/sections/Basket'
import { useCart } from '../contexts/CartContext'

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Hamısı")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart } = useCart()
  
  return (
    <div className="bg-[#080b11] text-white min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
        <Hero />
        <CartFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ProductList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <Footer />
      <Basket isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  ) 
}