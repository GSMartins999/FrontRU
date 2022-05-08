import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <ImageBackground
    source={require("../../assets/fundo.png")}
    style={styles.container}
  >
    <Image source={require("../../assets/leonardo.png")} ></Image>
    <Text style={styles.title}> Seja bem vindo, Leonardo!</Text>
    <Button
        title="Salvar"
        type="green"
        onPress={() => console.log("Salvar")}
      />
      <Button
        title="Alterar Senha"
        type="green"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="green" onPress={() => console.log("Sair")} />
    </ImageBackground>
  );
}
