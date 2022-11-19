import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  PerfilScreen, SairScreen } from "../Screens";
import { Ionicons, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import ChatNavigation from "./chat.navigation";

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