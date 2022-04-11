import { StatusBar } from 'expo-status-bar'
import { StyleSheet, TouchableOpacity } from 'react-native'
import CalculatorScreen from './src/screens/CalculatorScreen'
import HistoryScreen from './src/screens/HistoryScreen'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HistoryIcon from './src/components/HistoryIcon'
import { PersistGate } from 'redux-persist/integration/react'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Calculator'
              component={CalculatorScreen}
              options={{
                headerStyle: { ...styles.headerStyle },
                headerTintColor: '#ffffff',
                headerRight: () => <HistoryIcon />,
              }}
            />
            <Stack.Screen
              name='History'
              component={HistoryScreen}
              options={{
                headerStyle: { ...styles.headerStyle },
                headerTintColor: '#ffffff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
})
