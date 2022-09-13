import { StackNavigationProp } from "@react-navigation/stack";

export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Map:undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

//Chat

export type ChatStackParamList = {
  Chat: undefined,
  EnviarMensagem: undefined
}
type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Chat'>
export type ChatTypes = {
  navigation: ChatScreenNavigationProp
}