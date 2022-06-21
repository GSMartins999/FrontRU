import "react-native-gesture-handler"  
import Navigation from "./src/navigations";
import {AuthProvider} from "./src/Hook/auth";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />;
    </AuthProvider>
  );
}