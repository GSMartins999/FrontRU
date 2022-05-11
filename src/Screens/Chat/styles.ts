import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 25,
    marginTop: 50,
    alignItems: 'center',
    width: "80%",
    height: 45,
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 25,
    padding: 10
  }
})

export default styles;