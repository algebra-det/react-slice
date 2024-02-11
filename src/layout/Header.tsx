import { useAppSelector } from '@/store/hooks'
import { Link } from 'react-router-dom'

function Header() {
  const user = useAppSelector(state => state.user)
  console.log('Header Rerendering')
  const adminLinks = () => {
    if (user.isLoggedIn && user.data?.role === 'admin')
      return (
        <>
          <div className='seperator'></div>
          <Link to='/admin'>Admin</Link>
          <div className='seperator'></div>
          <Link to='/admin/about'>Admin About</Link>
        </>
      )
    return <></>
  }

  return (
    <div className='py-2 px-12 h-8 text-xl text-white '>
      <div className='flex justify-between'>
        <Link to='/'>Home</Link>
        <div className='flex justify-end gap-2'>
          <Link to='/about'>About</Link>
          {adminLinks()}
        </div>
      </div>
    </div>
  )
}

export default Header
