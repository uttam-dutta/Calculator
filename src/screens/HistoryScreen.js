import { StyleSheet, FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class HistoryScreen extends Component {
  renderList(itemData) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.expressionText}>{itemData.item.exp}</Text>
        <Text style={styles.resultText}>{itemData.item.res}</Text>
      </View>
    )
  }
  render() {
    // console.log('history', this.props.history)
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.props.history}
        renderItem={this.renderList}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  textContainer: {
    marginRight: 20,
    marginTop: 10,
    flexDirection: 'column',
  },
  expressionText: {
    color: 'grey',
    fontSize: 18,
  },
  resultText: {
    color: 'white',
    fontSize: 25,
  },
})

const mapStateToProps = (state) => {
  console.log(state.history)
  return {
    history: state.history,
  }
}
export default connect(mapStateToProps)(HistoryScreen)
