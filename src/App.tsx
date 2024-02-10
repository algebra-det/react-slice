import RouterProvider from '@/router/RouterProvider'
import { Suspense } from 'react'
import { AppWrapper } from './components/wrappers'
import Loading from '@/components/Loading'
import '@/assets/app.css'

function App() {
  console.log('App Render')
  return (
    <AppWrapper>
      <Suspense fallback={<Loading />}>
        <RouterProvider />
      </Suspense>
    </AppWrapper>
  )
}

export default App
