import { Text } from "react-native";
import { Container } from "./styles";
import { HomeHeader } from "../../components/Home/Header";
import { HomeShowPorcent } from "../../components/Home/ShowPorcent";

export function Home(){
    return(
        <Container>
            <HomeHeader />
            <HomeShowPorcent />
        </Container>
    )

}