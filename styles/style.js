import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import { Constants } from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#ffffff',
};

const { primary } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
`