import { useState, useEffect } from 'react'

export function useProducts(selectedCategory) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Hilinit/datas/main/TechHubData/products-recat.js.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("API Xətası:", err)
        setLoading(false)
      })
  }, [])

  const filteredProducts = selectedCategory === "Hamısı"  ? products  : products.filter(p => p.category === selectedCategory)
  return { filteredProducts, loading }
}