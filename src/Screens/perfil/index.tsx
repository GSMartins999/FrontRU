import React from "react";
import { Text, ImageBackground, Image, } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Perfil() {

  return (
    <ImageBackground
      source={require("../../assets/fundo.png")}
      style={styles.container}
    >
      <Image source={require("../../assets/leonardo.png")} ></Image>
      <Text style={styles.title}> Bem vindo, Leonardo!</Text>
      
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
