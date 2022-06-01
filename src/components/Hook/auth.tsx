import React, {
   createContext,
   useContext,
   useCallback,
   useState,
   useEffect,

} from "react";
import {apiUser} from "../services/data";
import api from "../services/api";
import { IAuthState, IAuthContextData } from "../interfaces/User.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IncomingHttpStatusHeader } from "http2";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({children}) => {

   const[auth, setAuth] = useState<IAuthState>({} as IAuthState);

   const sigIn = useCallback(async({email, password}) => {
      const response = await apiUser.login({
         email,
         password,
      });
      const {acess_token, user} = response.data.data;
      api.defaults.headers.common.Authorization = `Bearer ${acess_token}`;
      setAuth({acess_token, user});

      await AsyncStorage.setItem("acess_token", acess_token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
   }, []);

   const register = useCallback(async({name, email, password}) => {
      const response = await apiUser.register({
         name,
         email,
         password,
      });
      const { access_token, user }= response.data.data;
      api.defailts.headers.common.Authorization = `Bearer ${access_token}`;
      setAuth({access_token, user});

      await AsyncStorage.setItem("acess_token", access_token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
   }, []);

   const removeLocalStorage = async () => {
      await AsyncStorage.removeItem("acess_token");
      await AsyncStorage.removeItem("user");
   };

   const signOut = useCallback(async () => {
      setAuth ({} as IAuthState);
      removeLocalStorage();
      delete api.defaults.headers.commom.authorization;
      await apiUser.logout();
   }, []);

});