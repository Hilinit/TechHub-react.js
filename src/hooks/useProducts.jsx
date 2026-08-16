import { useState, useEffect } from 'react'

export function useProducts(selectedCategory) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://69c53df08a5b6e2dec2c09e9.mockapi.io/data')
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