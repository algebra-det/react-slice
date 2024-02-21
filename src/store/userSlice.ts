import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  id: number
  name: string
  email: string
  role: string
}

export type UserDataType = {
  data: User | undefined
  isLoggedIn: boolean
}

const INITIAL_STATE: UserDataType = {
  data: undefined,
  isLoggedIn: false
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload
      state.isLoggedIn = true
    },
    logoutUser: state => {
      state.data = undefined
      state.isLoggedIn = false
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
