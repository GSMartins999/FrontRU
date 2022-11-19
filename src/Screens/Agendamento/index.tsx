import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { useAuth } from "../../Hook/auth";

export default function agendamento() {
  const { user } = useAuth();

  function handleCard() {}
  function handleYes() {}
  function handleNo() {}

  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Text style={styles.textTitulo}>
          {" "}
          Olá, nos informe se você irá almoçar (11:40 - 13:40){" "}
        </Text>
        <Button title="Ver Cardápio" type="purple" onPress={handleCard} />
        <Button title="Sim" type="purple" onPress={handleYes} />
        <Button title="Não" type="orange" onPress={handleNo} />
      </View>
      <View style={styles.card1}>
        <Text style={styles.textTitulo}>
          {" "}
          Olá, nos informe se você irá jantar (17:50 - 18:40){" "}
        </Text>
        <Button title="Ver Cardápio" type="purple" onPress={handleCard} />
        <Button title="Sim" type="orange" onPress={handleYes} />
        <Button title="Não" type="orange" onPress={handleNo} />
      </View>
    </View>
  );
}
