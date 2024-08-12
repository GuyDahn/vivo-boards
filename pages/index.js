import { useEffect, useState } from 'react'
import '../app/globals.css'
import ProductList from '@/components/productList'

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
    <div className='container mx-auto px-4 py-8 max-w-7xl'>
      <h1 className='text-4xl font-bold mb-10 text-center text-gray-800'>
        Wivo Boards
      </h1>
      <ProductList products={products} />
    </div>
  )
}
