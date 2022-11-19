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
import { Ionicons } from "@expo/vector-icons";
import Card from "../../components/Card";
import Loading from "../../components/Loading"
import {ChatTypes } from "../../types/Screen.types";
import { apiMensagem } from "../../services/data";
import { IMensageState } from "../../interfaces/Mensagem.interface";
import styles from "./styles";

export default function Chat({navigation}: ChatTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [mensagem, setMensagem] = useState<IMensageState[]>([]);
  function handleChat(){
    navigation.navigate("EnviarMensagem");
  }
  
  useEffect(() => {
    async function loadMensagem() {
      const response = await apiMensagem.index();
      setMensagem(response.data.data);
      setIsLoading(false);
    }
    navigation.addListener("focus", () => loadMensagem());
  }, []);

  const renderItem = ({ item }) => <Card data={item} />;

  return (
     <>
      {isLoading ? (
        <Loading />
      ) : (
        <View
          style={styles.container}
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.rowSearch}>
              <Ionicons name="search" styles={styles.icon} />
              <TextInput placeholder="Pesquisar Chat" />
            </View>
            {mensagem.length > 0 && (
              <FlatList
                data={mensagem}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
              />
            )}
            <TouchableOpacity style={styles.button} onPress={handleChat}>
              <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      )}
    </>
  );
}