import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login.navigation";
import TabNavigation from "./Tab.Navigation";
import {useAuth} from "../Hook/auth"; 

export default function Navigation() {
  const {acess_token} = useAuth();
  return (
    <NavigationContainer>

      {acess_token ? <TabNavigation /> : <LoginNavigation/> }
      
    </NavigationContainer>
  );
}
