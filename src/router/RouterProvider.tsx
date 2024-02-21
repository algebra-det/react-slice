import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks'
import { publicRoutes, userRoutes, adminRoutes } from '@/router/routes'

function RouterProvider() {
  const user = useAppSelector(state => state.user)
  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route>
        {userRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      {user && (
        <Route path='/admin/*'>
          {adminRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      )}
    </Routes>
  )
}

export default RouterProvider
