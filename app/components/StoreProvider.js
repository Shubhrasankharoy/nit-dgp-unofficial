import appStore from '@/reduxStore/appStore'
import React from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }) {
  return (
    <Provider store={appStore}>
      {children}
    </Provider>
  )
}
