import { StyleSheet } from 'react-native'

import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.eggplant,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'space-between'
  },
  addButton: {
    width: 100,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'green'
  },
  removeButton: {
    width: 100,
    borderTopWidth: 0,
    borderBottomWidth: 0,
   },
   nameText:{
    color: Colors.frost,
    fontSize: Fonts.size.h5
   },
   descriptionText: {
     color: Colors.steel,
     fontStyle: 'italic'
   }
})