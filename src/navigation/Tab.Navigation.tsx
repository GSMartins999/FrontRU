import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen, MapScreen, CameraScreen, ArquivoScreen, QrCodeScreen, SairScreen } from "../Screens";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.black,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.black,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Avaliações"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />


      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="camera"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />



      <Tab.Screen
        name="Arquivo"
        component={ArquivoScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="file-tray-outline"
              size={24} color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="qr-code-outline"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="exit"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}