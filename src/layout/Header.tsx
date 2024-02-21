import { useAppSelector } from '@/store/hooks'
import { Link } from 'react-router-dom'
import AdminLinks from '@/layout/AdminLinks'

function Header() {
  const user = useAppSelector(state => state.user)
  const isAdmin = user.isLoggedIn && user.data?.role === 'admin'
  console.log('Header Rerendering')
  const userBasedLinks = () => {
    if (!isAdmin) return <Link to='/about'>About</Link>
    return <AdminLinks />
  }

  return (
    <div className='py-2 px-12 h-8 text-xl text-white '>
      <div className='flex justify-between'>
        <Link to='/'>Home</Link>
        <div className='flex justify-end gap-2'>{userBasedLinks()}</div>
      </div>
    </div>
  )
}

export default Header
