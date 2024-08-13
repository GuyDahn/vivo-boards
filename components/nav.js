import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='hidden md:flex space-x-6'>
      <Link className='text-gray-700 hover:text-gray-900' href='/'>
        Home
      </Link>
      <Link className='text-gray-700 hover:text-gray-900' href='/shop'>
        Shop
      </Link>
      <Link className='text-gray-700 hover:text-gray-900' href='/about'>
        About
      </Link>
      <Link className='text-gray-700 hover:text-gray-900' href='/contact'>
        Contact
      </Link>
    </nav>
  )
}

export default Nav
