import { configureStore } from '@reduxjs/toolkit'
import userReduler from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReduler
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
