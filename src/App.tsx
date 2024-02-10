import RouterProvider from '@/router/RouterProvider'
import { useAppSelector } from '@/store/hooks'
import { Header } from '@/layout'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

function App() {
  const user = useAppSelector(state => state.user)
  console.log('user is: ', user)
  return (
    <Suspense fallback={<Loading />}>
      <Header user={user} />
      <RouterProvider user={user} />
    </Suspense>
  )
}

export default App
