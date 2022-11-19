import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "../../Hook/auth";
import * as Notifications from "expo-notifications";
import {registerForPushNotificationsAsync} from "../../services/data/Push"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Perfil() {
  const { user } = useAuth();
 
  
  useEffect(() => {
    async function fetchToken(){
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  


  return (



<View style={styles.container}>
  <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
   <Text style={styles.title}>{user?.name}</Text>
   <Button
        title="Editar Perfil"
        type="purple"
        onPress={() => console.log("Editar Perfil")}
      />
      <Button
        title="Alterar Senha"
        type="purple"
        onPress={() => console.log("Alterar Senha")}
      />

</View>



  );
}