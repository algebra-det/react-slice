import RouterProvider from '@/router/RouterProvider'
import { Suspense } from 'react'
import { useAppSelector } from '@/store/hooks'
import { Header } from '@/layout'
import { AppWrapper } from './components/wrappers'
import Loading from '@/components/Loading'
import '@/assets/app.css'

function App() {
  const user = useAppSelector(state => state.user)
  console.log('user is: ', user)
  return (
    <AppWrapper>
      <Suspense fallback={<Loading />}>
        <Header user={user} />
        <RouterProvider user={user} />
      </Suspense>
    </AppWrapper>
  )
}

export default App
