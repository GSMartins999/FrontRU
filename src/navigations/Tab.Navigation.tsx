import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen } from "../Screens";
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
            <Ionicons name="person" size={24} color={colors.green} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.green} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}