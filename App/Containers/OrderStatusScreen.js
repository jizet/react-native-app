import React from 'react'
import { View, Picker, Button } from 'react-native'
import { connect } from 'react-redux'
import OrderActions from '../Redux/OrderRedux'
import OrderStatusContainer from './OrderStatusContainer'

import styles from './Styles/OrderStatusScreenStyles'

class OrderStatusScreen extends React.PureComponent {

  componentDidMount () {
    this.props.getOrder()
  }

  render () {
  const onPress = () => {
    this.props.navigation.goBack()
  }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Button title={'<'} onPress={onPress}/>
      </View>
      <View>
        <OrderStatusContainer getOrder={this.props.getOrder} products={this.props.order.submittedOrder} />
      </View>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrder: () => dispatch(OrderActions.orderFetchRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusScreen)