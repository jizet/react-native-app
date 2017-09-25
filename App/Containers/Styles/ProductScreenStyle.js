import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background,
    flex: 1
  },
  row: {
    backgroundColor: Colors.eggplant,
    marginVertical: Metrics.navBarHeight,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  button: {
   width: 10,
   borderTopWidth: 0
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingTop: 15,
    backgroundColor: Colors.background,
    justifyContent: 'space-between'
  }
})
