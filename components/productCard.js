import { useState } from 'react'

function ProductCard ({ product }) {
  const [hover, setHover] = useState(false)

  const image =
    product.images.length > 0
      ? hover && product.images.length > 1
        ? product.images[1].src
        : product.images[0].src
      : null

  return (
    <div
        className='border-2 border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-[410px] w-[340px] flex flex-col justify-between bg-cover bg-center ml-2 my-4'
        style={image ? { backgroundImage: `url(${image})` } : {}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
      <div className='bg-white bg-opacity-50 p-4 rounded w-full'>
        <h2 className='text-1xl font-semibold mb-2 text-gray-800'>
          {product.title}
        </h2>
        <div
          className='text-gray-600 text-xs'
          dangerouslySetInnerHTML={{ __html: product.body_html }}
        />
      </div>
      <div className='flex justify-between items-center mt-4 px-2'>
        <p className='text-gray-800 font-bold text-2xl bg-yellow-200 bg-opacity-50 px-2 py-1 rounded'>
            
          ${product.variants[0].price}
        </p>
        <button className='bg-blue-100 hover:bg-blue-500 text-gray-700 font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
          Choose Options
        </button>
      </div>
    </div>
  )
}

export default ProductCard
