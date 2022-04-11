import { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  display: {
    fontSize: 50,
    color: 'white',
    textAlign: 'right',
  },
})
class CalcDisplay extends Component {
  static defaultProps = {
    display: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    )
  }
}

export default CalcDisplay
