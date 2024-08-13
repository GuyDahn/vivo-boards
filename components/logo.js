import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Link
        className='text-xl font-bold text-gray-900'
        style={{ fontFamily: 'Pacifico, cursive' }}
        href='/'
      >
        Wivo Boards
      </Link>
    </div>
  )
}

export default Logo
