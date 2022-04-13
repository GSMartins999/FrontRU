import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.green,
    marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 5,
  },
  icon: {
    fontSize: 24,
    color: colors.green,
    padding: 10
  },
  input: {
    fontSize: 18,
    color: colors.green,
    padding: 10
  }
})

export default styles