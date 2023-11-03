import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { InnerContainer, PageLogo, StyledContainer } from '../styles/style';

const Login = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/images/Exams_re_4ios-removebg-preview.png')} />
      </InnerContainer>
    </StyledContainer>
  )
}



export default Login