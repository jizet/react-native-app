import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Product from '../Components/ProductItem'
import OrderActions from '../Redux/OrderRedux'
import FullButton from '../Components/FullButton'

class OrderStatusContainer extends React.Component {
  componentDidMount () {
    this.props.getOrder()
  }

  render () {
    const onPress = () => {
      this.props.getOrder()
    }

    const { products, order } = this.props
    
    return (
      <View>
        <ScrollView>
          {order.submittedOrder.map(product => 
            <Product
              key={product.id}
              name={product.attributes.name}
              description={product.attributes.description}
              price={product.attributes.price}
              show={false}
            />
          )}
        </ScrollView>
        <View>
          <FullButton text={'get order'} onPress={onPress} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusContainer)