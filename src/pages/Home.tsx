import Counter from '@/components/Counter'
import { useAppDispatch } from '@/store/hooks'
import { loginUser, logoutUser } from '@/store/userSlice'

function Home() {
  console.log("Home rendered")
  const dispatcher = useAppDispatch()

  const setUserToStore = () => {
    const newUser = {
      id: 1,
      name: 'akash',
      email: 'akash@gmail.com',
      role: 'admin'
    }
    dispatcher(loginUser(newUser))
  }
  const removeUser = () => {
    dispatcher(logoutUser())
  }
  return (
    <div className='h-screen flex justify-center items-center text-white'>
      <div>
        <Counter />
        <button onClick={setUserToStore}>Toggle user</button>
        <br></br>
        <button onClick={removeUser}>Remove User</button>
      </div>
    </div>
  )
}

export default Home
