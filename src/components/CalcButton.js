import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Component } from 'react'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    margin: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})

class CalcButton extends Component {
  static defaultProps = {
    onPress: () => {},
    title: '0',
    color: 'white',
    backgroundColor: '#191A19',
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          { backgroundColor: this.props.backgroundColor },
        ]}
      >
        <Text style={[styles.text, { color: this.props.color }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default CalcButton
