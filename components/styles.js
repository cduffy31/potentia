import styled from 'styled-components';
import { View, Image, Text,TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {LinearGradient } from 'expo-linear-gradient';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary:'#ffffff',
    secondary:'#54B4B2',
    tertiary:"#2C96BF",
    darkLight:"9CA3AF",
    brand:'#2C96BF',
    green:'#10B981',
    red:'#EF4444',
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex:1;
    padding: 20px;
    padding-top: ${StatusBarHeight + 40};
    background-color: ${primary};
`;
export const OuterContainer = styled.View`
    flex:1;
    padding: 20px;
    padding-top:${StatusBarHeight + 30};
    background-color: ${primary}; 
`

export const InnerContainer = styled.View`
    flex:1;
    width:100%;
    align-items: center;
`;

export const RegText = styled.Text`

`

export const WelcomeContainer = styled(InnerContainer)`

`;

export const PageLogo = styled.Image`
    width:250px;
    height:250px;
`;

export const PageTitle = styled.Text`
    font-size:28px;
    text-align:left;
    color:${darkLight};

`;

export const SubTitle = styled.Text`
    font-size:17px;
    margin-bottom: 20px;
    letter-spacing:1px;
    color: ${brand};
`;

export const StyledFormArea = styled.View`
    width: 100%;

`;

export const StyledTextInput = styled.TextInput`
    background-color: ${'#F5F5F4'};
    padding: 5px;
    padding-left:17px;
    padding-right:55px;
    border-radius:10px;
    font-size:16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${darkLight};
`;

export const StyledTextLabel = styled.Text`
    color:${tertiary};
    font-size:13px;
    text-align:left;
`;

export const LeftIcon = styled.View`
    left:15px;
    top:38px;
    position:absolute;
    z-index:1;
`;

export const RightIcon = styled.TouchableOpacity`
    right:15px;
    top:38px;
    position:absolute;
    z-index:1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding:15px;
    background-color: ${brand};
    position:center;
    padding-left:15px;
    padding-right:15px;
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size:17px;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height:1px;
    width:100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;