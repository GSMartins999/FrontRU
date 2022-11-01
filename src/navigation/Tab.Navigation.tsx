import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { VideoAudioScreen, PerfilScreen, MapScreen, CameraScreen, ArquivoScreen, PedometroScreen, GyroscopioScreen, QrCodeScreen, AcelerometroScreen, SairScreen, MagnetoScreen } from "../Screens";
import { Ionicons, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import ChatNavigation from "./chat.navigation";
import Magneto from "../Screens/Magneto";

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
        name="Chat"
        component={ChatNavigation}
        options={{
          title: "Chat",
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
            <Ionicons name="camera"
              size={24} color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="play"
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
        name="Magneto"
        component={MagnetoScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="magnet"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Gyroscopio"
        component={GyroscopioScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="nuclear"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="foot"
              size={24} color={colors.white} />
          ),
        }}
      />


      <Tab.Screen
        name="acelerometro"
        component={AcelerometroScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="car"
              size={24} color={colors.white} />
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