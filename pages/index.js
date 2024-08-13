import { useEffect, useState } from 'react'
import '../app/globals.css'
import ProductList from '@/components/productList'
import Header from '@/components/header'

export default function Home () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts () {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data.products)
    }
    fetchProducts()
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(https://cdn.openart.ai/published/0gttZSQCpsDi4Ide7H7T/rz252SjM_D39w_1024.webp)`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '150vh',
        back: '0.9'
      }}
    >
      <Header />
      <ProductList products={products} />
    </div>
  )
}
