import React from "react";
import { Text, ImageBackground, Image, View } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { user } from "../../Hook/auth";

export default function Perfil() {  

  return (
    <ImageBackground
      source={require("../../assets/fundo.png")}
      style={styles.container}
    >
     <View style={styles.image}>
        <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
        <Text style={styles.title}>{user?.name}</Text>
      </View>
      
      <Button
        title="Salvar"
        type="purple"
        onPress={() => console.log("Salvar")}
      />
      <Button
        title="Alterar Senha"
        type="purple"
        onPress={() => console.log("Alterar Senha")}
      />

      
          <FontAwesome5 name="facebook" style={styles.icon} /> 
     

          <FontAwesome5 name="instagram" style={styles.icon} />

      
          <FontAwesome5 name="linkedin" style={styles.icon} />    
     
    </ImageBackground>
  );
}