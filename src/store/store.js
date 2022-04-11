import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { calculatorReducer } from './reducer'

const presistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(presistConfig, calculatorReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
