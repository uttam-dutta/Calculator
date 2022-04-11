import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
export default function HistoryIcon() {
  const navigation = useNavigation()
  const navigateToHistory = () => {
    navigation.navigate('History')
  }
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={navigateToHistory}>
      <MaterialCommunityIcons name='history' size={24} color='white' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
