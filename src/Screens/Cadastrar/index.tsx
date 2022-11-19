import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import styles from "./styles";
import { useAuth } from "../../Hook/auth";
import { IRegister } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.Interface";

export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);

  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IResponse;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={require("../../assets/cefetLogo.png")}
            />
            <KeyboardAvoidingView>
              <Text style={styles.title}>
                Para se cadastrar, insira os dados abaixo!
              </Text>
              <View style={styles.formRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Matricula: "
                  placeholderTextColor="#FFF"
                  onChangeText={(i) => handleChange({ name: i })}
                />
              </View>
              <View style={styles.formRow}>
                <TextInput
                  style={styles.input}
                  placeholder="email:"
                  placeholderTextColor="#FFF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={(i) => handleChange({ email: i })}
                />
              </View>
              <View style={styles.formRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  placeholderTextColor="#FFF"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={(i) => handleChange({ password: i })}
                />
              </View>
              <Button title="Salvar" type="purple" onPress={handleRegister} />
            </KeyboardAvoidingView>
          </View>
        </View>
      )}
    </>
  );
}
