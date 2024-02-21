import { Link } from 'react-router-dom'

const AdminLinks = () => {
  return (
    <>
      <Link className='text-xl' to='/admin/table'>
        User Table
      </Link>

      <div className='seperator'></div>
      <Link className='text-xl' to='/admin/about'>
        About
      </Link>
    </>
  )
}

export default AdminLinks
