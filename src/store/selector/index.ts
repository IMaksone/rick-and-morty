import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { StoreState } from '../makeStore'

const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector

export default useStoreSelector