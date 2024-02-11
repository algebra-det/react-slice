import { Header } from '@/layout'

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-slate-500 h-screen'>
      <Header />
      {children}
    </div>
  )
}

export default AppWrapper
