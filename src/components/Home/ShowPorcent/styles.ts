import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    padding: 26px;
    width: 100%;

    margin-top:35px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const Percent = styled.Text`
    ${({ theme }) =>  css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE["3XG"]}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const PercentText = styled.Text`
    ${({ theme }) =>  css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`