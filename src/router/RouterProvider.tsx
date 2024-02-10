import { Routes, Route } from 'react-router-dom'
import { publicRoutes, userRoutes, adminRoutes } from '@/router/routes'
import { UserDataType } from '@/store/userSlice'

function RouterProvider({ user }: { user: UserDataType }) {
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
        <Route path='/admin'>
          {adminRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      )}
    </Routes>
  )
}

export default RouterProvider
