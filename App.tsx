import theme from "./src/theme";
import { Home } from "./src/screens/home";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans'


export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme} >
      {fontsLoaded ? <Home />  : <Text>Ta carregando carai</Text>}
      
    </ThemeProvider>
  );
}
