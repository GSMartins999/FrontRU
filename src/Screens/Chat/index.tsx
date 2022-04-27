import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import data from "../../services/data";
import Card from "../../components/Card";

export default function Chat() {
  const renderItem = ({ item }: any) => <Card data={item} />;
  return (
    <ImageBackground source={require("../../assets/fundo.png")}>
      <SafeAreaView>
        <View>
          <FontAwesome5 name="search" size={24} color="black" />
          <TextInput placeholder="Pesquisar chat" />
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