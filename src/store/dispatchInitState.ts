import { InitialState, Store } from './makeStore'
import threadsSlice from './slices/charactersSlice'
import fieldsSlice from './slices/fieldsSlice'
import switchesSlice from './slices/switchesSlice'

const dispatchInitState = (store: Store, initialState: InitialState) => {
  const { threads, fields, switches } = initialState

  const dispatch = store.dispatch

  if (threads) {
    const { initThreads } = threadsSlice.actions
    dispatch(initThreads(threads))
  }
  if (fields) {
    const { initFields } = fieldsSlice.actions
    dispatch(initFields(fields))
  }
  if (switches) {
    const { initSwitches } = switchesSlice.actions
    dispatch(initSwitches(switches))
  }
}

export default dispatchInitState
