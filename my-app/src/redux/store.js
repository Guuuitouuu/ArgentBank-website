import { configureStore } from '@reduxjs/toolkit'
import userProfileReducer from './features/userProfile'

const store = configureStore({
 reducer: {
      userProfile: userProfileReducer
  }
}
)

export default store
