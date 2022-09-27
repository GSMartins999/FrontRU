import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import { format } from "date-fns";

export default function Card({ data }: IMensagem) {
  return (
    <View style={styles.card}>
      <Text>
      {data.user.name} - {" "}
          {format(new Date(data.created_at), "dd/MM/yyyy  HH:mm:ss")}
      </Text>
      <View>
        <Text>Título: {data.titulo}</Text>
        <Text>Mensagem: {data.mensagem}</Text>
       
      </View>
    </View>
  );
}