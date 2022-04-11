import { Component } from 'react'
import CalcButton from '../components/CalcButton'
import { View, StyleSheet } from 'react-native'
import CalcDisplay from '../components/CalcDisplay'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#191A19',
  },
  buttonContainer: {
    borderTopRightRadius: 10,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})

class CalculatorScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      displayText: '0',
    }
  }

  calculate() {
    const { displayText } = this.state
    const res = eval(displayText).toString()
    let value = Number.isInteger(Number(res)) ? res : parseFloat(res).toFixed(4)
    value = value.toString()
    return value
  }

  isvalid(displayText) {
    let regexNumbers = /[0-9]+$/
    let regexSigns = new RegExp(/[\+\-\/\*]+$/g)
    if (displayText.match(regexSigns) || displayText.match(regexNumbers)) {
      if (
        displayText.includes('+') ||
        displayText.includes('-') ||
        displayText.includes('*') ||
        displayText.includes('/') ||
        displayText.includes('%')
      )
        return true
    }
    return false
  }

  updateDisplayText = (val) => {
    const exp = this.state.displayText
    this.setState({
      displayText: val,
    })
    this.props.dispatch({
      type: 'update',
      payload: { exp, res: val },
    })
  }

  buttonPressHandler = async (text) => {
    const { displayText } = this.state //, result
    if (text === '=') {
      if (!this.isvalid(displayText)) return
      const val = this.calculate()
      this.updateDisplayText(val)
      return
    }
    this.setState({
      ...this.state,
      displayText:
        displayText === '0' ? text.toString() : displayText + text.toString(),
    })
  }
  operatorPressHandler = (text) => {
    const { displayText } = this.state
    let operators = ['del', '+', '-', 'x', '/', '%']
    if (text == 'del') {
      let str = displayText.toString().substring(0, displayText.length - 1)
      this.setState({
        ...this.state,
        displayText: displayText.length == 1 ? '0' : str,
      })
      return
    }

    if (text == 'AC') {
      this.setState({
        ...this.state,
        displayText: '0',
      })
      return
    }
    let str = displayText
    if (operators.includes(str.charAt(str.length - 1))) return
    this.setState({
      ...this.state,
      displayText: displayText + text.toString(),
    })
  }
  render() {
    const { displayText } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <CalcDisplay display={displayText} />
        </View>
        <View>
          <View
            style={{
              ...styles.buttonRow,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <CalcButton
              title='AC'
              onPress={() => {
                this.operatorPressHandler('AC')
              }}
            />
            <CalcButton
              title={<Feather name='delete' size={28} color='white' />}
              onPress={() => {
                this.operatorPressHandler('del')
              }}
            />
            <CalcButton
              title='%'
              onPress={() => {
                this.operatorPressHandler('%')
              }}
            />
            <CalcButton
              title='/'
              color='#FFD124'
              onPress={() => {
                this.operatorPressHandler('/')
              }}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title='7'
              onPress={() => {
                this.buttonPressHandler(7)
              }}
            />
            <CalcButton
              title='8'
              onPress={() => {
                this.buttonPressHandler(8)
              }}
            />
            <CalcButton
              title='9'
              onPress={() => {
                this.buttonPressHandler(9)
              }}
            />
            <CalcButton
              title='*'
              color='#FFD124'
              onPress={() => {
                this.operatorPressHandler('*')
              }}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title='4'
              onPress={() => {
                this.buttonPressHandler(4)
              }}
            />
            <CalcButton
              title='5'
              onPress={() => {
                this.buttonPressHandler(5)
              }}
            />
            <CalcButton
              title='6'
              onPress={() => {
                this.buttonPressHandler(6)
              }}
            />
            <CalcButton
              title='-'
              color='#FFD124'
              onPress={() => {
                this.operatorPressHandler('-')
              }}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title='1'
              onPress={() => {
                this.buttonPressHandler(1)
              }}
            />
            <CalcButton
              title='2'
              onPress={() => {
                this.buttonPressHandler(2)
              }}
            />
            <CalcButton
              title='3'
              onPress={() => {
                this.buttonPressHandler(3)
              }}
            />
            <CalcButton
              title='+'
              color='#FFD124'
              onPress={() => {
                this.operatorPressHandler('+')
              }}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              title='.'
              onPress={() => {
                this.buttonPressHandler('.')
              }}
            />
            <CalcButton
              title='0'
              onPress={() => {
                this.buttonPressHandler(0)
              }}
            />
            <CalcButton
              title='('
              onPress={() => {
                this.buttonPressHandler('(')
              }}
            />
            <CalcButton
              title=')'
              onPress={() => {
                this.buttonPressHandler(')')
              }}
            />
            <CalcButton
              title='='
              backgroundColor='#FFD124'
              onPress={() => {
                this.buttonPressHandler('=')
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  }
}

export default connect(mapStateToProps)(CalculatorScreen)
