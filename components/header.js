import Nav from './nav'
import Logo from './logo'
import Cart from './cart'
import Userbtn from './userbtn'

const Header = () => {
  return (
    <header class='bg-grey shadow-md'>
      <div class='container mx-auto flex justify-between items-center py-4 px-6'>
        <Logo />
        <Nav />
        <div class='flex items-center space-x-4'>
          <Cart />
          <Userbtn />
        </div>
      </div>
    </header>
  )
}

export default Header
