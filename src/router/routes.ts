import { About, Home, Profile, UserTable } from '@/pages'

const userRoutes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const adminRoutes = [
  {
    path: 'table',
    name: 'table',
    component: UserTable
  },
  {
    path: '',
    name: 'Admin',
    component: Home
  },
  {
    path: 'about',
    name: 'About',
    component: About
  }
]

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
export { publicRoutes, adminRoutes, userRoutes }
