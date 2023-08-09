import { Container } from "./styles";
import { HomeHeader } from "../../components/Home/Header";
import { HomeShowPorcent } from "../../components/Home/ShowPorcent";


export function Home(){
    return(
        <Container>
            <HomeHeader />
            <HomeShowPorcent title={90.86} />
        </Container>
    )

}