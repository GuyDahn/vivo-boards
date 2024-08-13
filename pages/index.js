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
    <div className=''>
      {/* <h1 className='text-4xl font-bold mb-10 text-center text-gray-800'>
        Wivo Boards
      </h1> */}
      <Header />
      <ProductList products={products} />
    </div>
  )
}
