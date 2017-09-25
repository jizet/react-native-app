import React from 'react'
import { View, Picker } from 'react-native'
import { connect } from 'react-redux'
import OrderActions from '../Redux/OrderRedux'
import ProductActions from '../Redux/ProductRedux'
import Button from '../Components/FullButton'
import {Colors} from '../Themes'
import styles from './Styles/OrderContainerStyle'

const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class OrderContainer extends React.Component {

  onSubmit = () => {
    this.props.submitOrder()
    this.props.clear()
  }

  render () {
    return (
      <View style={{backgroundColor: Colors.background}}>
        <Picker
          selectedValue={this.props.orderAmount}
          onValueChange={this.props.changeAmount}
          style={{backgroundColor: 'white'}}
        >
          {amounts.map(amount =>
            <Picker.Item label={amount.toString()} value={amount} />
          )}
        </Picker>
        <Button text={'Submit Order'} onPress={this.onSubmit} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderAmount: state.order.amount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (amount) => dispatch(OrderActions.changeAmount(amount)),
    submitOrder: () => dispatch(OrderActions.orderSubmitRequest()),
    clear: () => dispatch(OrderActions.clearOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)