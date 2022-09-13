import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  cardSocial: {
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    height: 45,
  },
  img:{
    width: 100,
    height: 100,
  },
})

export default styles