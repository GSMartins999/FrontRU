import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  buttonGreen: {
    backgroundColor: colors.green,
    borderRadius: 5,
    margin: 10
  },
  buttonPurple: {
    backgroundColor: colors.purple,
    borderRadius: 5,
    margin: 10
  },
  buttonOrange: {
    backgroundColor: colors.orange,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18
  }
})

export default styles