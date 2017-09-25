import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { connect } from 'react-redux'
import ProductContainer from './ProductContainer'
import OrderContainer from './OrderContainer'
import ProductActions from '../Redux/ProductRedux'
import OrderActions from '../Redux/OrderRedux'
import styles from './Styles/ProductScreenStyle'
import FullButton from '../Components/FullButton'

class ProductScreen extends React.PureComponent {

  componentDidMount () {
    this.props.getProducts()
  }

  render () {
    const onPress = () => {
      if (this.props.order.orderId){
        const { navigate } = this.props.navigation
        navigate('OrderStatusScreen')
      } else {
        alert('No order submitted')
      }
    }

    const onClear = () => {
      this.props.clear()
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FullButton text={'Clear order'} style={styles.button} onPress={onClear}/>
          <FullButton text={'Orders >'} onPress={onPress}/>
        </View>
        <View>
          <ProductContainer navigator={this.props.navigation} products={this.props.products} />
        </View>
        <View>
          <OrderContainer />
        </View>    
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    products: state.products.productData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(ProductActions.getProductRequest()),
    clear: () => dispatch(OrderActions.clearOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
