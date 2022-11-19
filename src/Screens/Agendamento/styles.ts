import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:  colors.fundo
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.white,
        marginBottom: 20,
  },
  textTitulo:{
    color: colors.white ,
    fontSize: 25,
    padding: 0.3 ,
  },
  text:{
    alignItems: 'center',
    fontSize: 13,
    color: colors.white,
  },
  card1:{
    padding: 30 ,
  },

})

export default styles;