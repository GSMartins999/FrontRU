import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import { withSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.fundo
  },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.white,
        marginBottom: 20,
  },
  img:{
    height: 290,
    width: 290,
  },
  formRow: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 15,
    backgroundColor: colors.inputFundo,

  },
  icon: {
    fontSize: 20,
    color: colors.white,
    padding: 10
  },
  input: {
    fontSize: 18,
    color: colors.white,
    padding: 10,
    width: "80%"
  },
  text:{
    alignItems: 'center',
    fontSize: 13,
    color: colors.white,
  }
})

export default styles