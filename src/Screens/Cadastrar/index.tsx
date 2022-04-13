import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Cadastrar({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <Text style={styles.title}>Cadastre-se</Text>
          <View style={styles.formRow}>
            <Ionicons name="person" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Nome" />
          </View>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Salvar" type="purple" onPress={handleSignIn} />
          <Button title="Voltar" type="green" onPress={handleLogin} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}