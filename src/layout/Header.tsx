import { UserDataType } from '@/store/userSlice'
import { Link } from 'react-router-dom'

function Header({ user }: { user: UserDataType }) {
  console.log('Component updated')

  const adminLinks = () => {
    if (user.isLoggedIn && user.data?.role === 'admin')
      return (
        <>
          <Link to='/admin'>Admin</Link>
          <Link to='/admin/about'>Admin About</Link>
          <Link to='/admin/new'>New</Link>
        </>
      )
    return <></>
  }

  return (
    <div className='flex justify-between'>
      <Link to='/'>Home</Link>
      <div>
        <Link to='/about'>About</Link>
        {adminLinks()}
      </div>
    </div>
  )
}

export default Header
