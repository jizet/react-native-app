import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ProductItemStyle'
import Button from './FullButton'

class ProductItem extends React.Component {
  renderButton () {
    const { isAdded, onAdd, onRemove, show } = this.props
    
    if (show) {
      return isAdded ? <Button text={'remove'} styles={styles.removeButton} onPress={onRemove}/> 
      : <Button text={'add'} styles={styles.addButton} onPress={onAdd}/>
    } else {
      return null
    }
  }
  render () {
    const { name, description, price } = this.props
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'white'}}>$  {price}</Text>
          {this.renderButton()}
        </View>
      </View>
    )
  }
}

export default ProductItem
