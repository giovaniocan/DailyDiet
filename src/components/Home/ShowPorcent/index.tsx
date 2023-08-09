import { Container, Percent, PercentText } from "./styles"

import { TouchableOpacityProps } from "react-native";


type Props = TouchableOpacityProps & {
    title: number
}


export function HomeShowPorcent({title, ...rest}:Props){
    return(
        <Container {...rest} >
            <Percent>
                {title}%
            </Percent>
            <PercentText>
                das refeições dentro da dieta
            </PercentText>
        </Container>
    )
}