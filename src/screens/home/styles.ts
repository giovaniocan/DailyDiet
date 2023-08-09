import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.COLORS.RED_DARK};
    padding: 24px;
    background: ${({theme}) => theme.COLORS.GRAY_700};
`
