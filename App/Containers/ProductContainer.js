import React from 'react'
import { View, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import Product from '../Components/ProductItem'
import OrderActions from '../Redux/OrderRedux'

import styles from './Styles/ProductContainerStyle'

class ProductContainer extends React.Component {

  onAdd = (id) => {
    this.props.addProduct(id)
  }

  onRemove = (id) => {
    this.props.removeProduct(id)
  }

  render () {
    const { products, order, navigator } = this.props

    return (
      <View>
        <ScrollView>
          {products.map(product => 
            <Product
              key={product.id} 
              name={product.attributes.name}
              description={product.attributes.description}
              price={product.attributes.price}
              onAdd={this.onAdd.bind(this, product.id)}
              isAdded={order.orderData.indexOf(product.id) > -1}
              onRemove={this.onRemove.bind(this, product.id)}
              show={true}
            />
          )}
        </ScrollView> 
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
    addProduct: (id) => dispatch(OrderActions.addProduct(id)),
    removeProduct: (id) => dispatch(OrderActions.removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)