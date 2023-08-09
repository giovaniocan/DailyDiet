import { Container} from "./styled";
import LogoImg from '../../../../assets/Logo.png'

import AvatarImg from '../../../../assets/PerfilPhoto.png'
import { Image } from "react-native";

export function HomeHeader(){
    return(
        <Container>
            <Image source={LogoImg} />
            <Image source={AvatarImg} />
        </Container>
    )
}