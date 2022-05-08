import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import { withSafeAreaInsets } from 'react-native-safe-area-context'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundimage: {
    alignItems: "center",
    width: "100%"

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
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
    color: colors.white,
    padding: 10
   
  },
  input: {
    fontSize: 18,
    color: colors.white,
    padding: 10,
    width: '90%',
  }
})

export default styles