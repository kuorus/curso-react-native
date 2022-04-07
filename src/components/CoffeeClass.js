import React, { Component } from 'react'
import { Text, View } from 'react-native'

class CoffeeClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
    }
  }

  componentDidMount() {
    this.setState({
      number: 1,
    })
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.cafe.name}: {this.state.number}
        </Text>
      </View>
    )
  }
}

export default CoffeeClass
