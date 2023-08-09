import theme from "./src/theme";
import { Home } from "./src/screens/home";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";


export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  );
}
