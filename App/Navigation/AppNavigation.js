import { StackNavigator } from 'react-navigation'
import ProductScreen from '../Containers/ProductScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import OrderStatusScreen from '../Containers/OrderStatusScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProductScreen: { screen: ProductScreen },
  LaunchScreen: { screen: LaunchScreen },
  OrderStatusScreen: { screen: OrderStatusScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ProductScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
