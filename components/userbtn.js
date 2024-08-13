import Link from 'next/link'

const Userbtn = () => {
    return(
        <Link href='/account' class='text-gray-700 hover:text-gray-900'>
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
            d='M5 8a7 7 0 1114 0 7 7 0 01-14 0zm14 14a9 9 0 01-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
      </Link>
    )
}

export default Userbtn