import Link from 'next/link'

const Cart = () => {
    return(
        <Link href='/cart' class='relative text-gray-700 hover:text-gray-900'>
        <svg
          class='h-6 w-6'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          viewBox='0 0 24 24'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 6m8.4-6v6m-6-6v6M9 17h6'
          ></path>
        </svg>
        <span class='absolute top-0 right-0 block h-2 w-2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600'></span>
      </Link>
    )

}

export default Cart