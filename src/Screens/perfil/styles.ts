import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    marginBottom: 20,
    marginTop: 10
  },
  
  input: {
    fontSize: 20,
  },
})

export default styles;