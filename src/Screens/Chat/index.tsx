import React, {useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card , Loading } from "../../components";
import {ChatTypes } from "../../types/Screen.types";
import { apiMensagem } from "../../services/data";
import { IMensagemState, IMensageState } from "../../interfaces/Mensagem.interface";
import styles from "./styles";

export default function Chat({navigation}: ChatTypes) {
  const [isLoading, setIsloading] = useState (true);
  const [mensagem, setMensagem] = useState<IMensageState[]>([]);
  function handleChat(){
    navigation.navigate("EnviarMensagem");
  }
  
  useEffect(() => {
    async function loadMensagem() {
      const response = await apiMensagem.index();
      //parei aqui
    }
  }
  return (
    <ImageBackground source={require("../../assets/fundo.png")}
      style={styles.container}>
       <SafeAreaView style={styles.container}>
        <View style={styles.rowSearch}>
          <FontAwesome5 name="search" style={styles.icon} />
          <TextInput placeholder="Pesquisar chat" style={styles.input} />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
