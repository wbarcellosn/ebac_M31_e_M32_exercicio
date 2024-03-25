import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './reducers/contactsReducer'

const store = configureStore({
  reducer: {
    contacts: contactsSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
