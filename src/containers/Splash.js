import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet, Text } from 'react-native';
import normalize from 'react-native-normalize';
import { defaultStyles, Images, LAYOUT } from '../constants';
class Splash extends Component {
  render() {
    return (
      <ImageBackground
        style={{width:LAYOUT.window.width, height:LAYOUT.window.height, alignItems:'center'}}
        source={LAYOUT.Logo}
        resizeMode='cover'
      >
        <Image 
          source={Images.Logo}
          style={{
            marginTop:normalize(100),
            width:normalize(130),
            height:normalize(130),
            resizeMode:'contain'
          }}
        />
        <Text style={[S.FBOLD, S.F40, S.TextAlignCenter, {color:'#91af80'}]}>Soar</Text>
        <Text style={[S.FBOLD, S.F20, S.TextAlignCenter, {color:'#91af80', position:'absolute', bottom:normalize(100)}]}>By Project Puff Co.</Text>
      </ImageBackground>
    );
  }
}
export default Splash;
const S = StyleSheet.create({...defaultStyles})
