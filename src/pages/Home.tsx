import Counter from '@/components/Counter'
import { useAppDispatch } from '@/store/hooks'
import { loginUser, logoutUser } from '@/store/userSlice'

function Home() {
  const dispather = useAppDispatch()
  const setUserToStore = () => {
    const newUser = {
      id: 1,
      name: 'akash',
      email: 'akash@gmail.com',
      role: 'admin'
    }
    dispather(loginUser(newUser))
  }
  const removeUser = () => {
    dispather(logoutUser())
  }
  return (
    <div>
      <h1>Home</h1>
      <Counter />
      <button onClick={setUserToStore}>Set User</button>
      <br></br>
      <button onClick={removeUser}>Remove User</button>
    </div>
  )
}

export default Home
