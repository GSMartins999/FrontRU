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
      <Text style={styles.title}> Seja bem vindo, Leonardo!</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocial>
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
    </ImageBackground>
  );
}
