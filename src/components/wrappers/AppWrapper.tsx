import { useAppSelector } from '@/store/hooks'
import { Header } from '@/layout'

function AppWrapper({ children }: { children: React.ReactNode }) {
  const user = useAppSelector(state => state.user)
  return (
    <div className='bg-slate-500 h-screen'>
      <Header user={user} />
      {children}
    </div>
  )
}

export default AppWrapper
