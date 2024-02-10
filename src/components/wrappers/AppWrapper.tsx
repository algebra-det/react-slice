function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className='bg-slate-500 text-white h-screen'>{children}</div>
}

export default AppWrapper
