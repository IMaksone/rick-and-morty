import { useRef } from 'react'
import { Provider } from 'react-redux'

import dispatchInitState from './dispatchInitState'
import makeStore, { InitialState, Store } from './makeStore'

type StoreProviderProps = {
  children: React.ReactNode
  initialState?: InitialState
}

function StoreProvider({ children, initialState }: StoreProviderProps) {
  const storeRef = useRef<Store>()

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  if (initialState) dispatchInitState(storeRef.current, initialState)

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
