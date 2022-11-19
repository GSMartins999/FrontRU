import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
    backgroundColor: colors.orangeLight

  },

  image: {
    padding: 5
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    marginBottom: 20,
    marginTop: 10
  },
  
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    },
    
  icon:{
    fontSize: 50,
    
  },
 
  input: {
    fontSize: 20,
  },
})

export default styles;