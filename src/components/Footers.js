import React from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { Image, StyleSheet } from 'react-native'
import { Footer, Button, FooterTab, View } from 'native-base'
import { COLOR, defaultStyles, LAYOUT } from "../constants"
import { navigate } from '../redux/services/navigator'

class Footers extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      products:[],
    }
  }

  render(){
    const { active } = this.props;
    return(
      <Footer>
        <FooterTab style={{backgroundColor:COLOR.greenColor}}>
          <Button vertical onPress={()=>navigate('HomeScreen')}>
            <Image source={active===0?LAYOUT.world_select:LAYOUT.world} style={S.footerIcon}/>
          </Button>
          <Button vertical onPress={()=>navigate('DispensariesScreen')}>
            <Image source={active===1?LAYOUT.bottle_select:LAYOUT.bottle} style={S.footerIcon}/>
          </Button>
          <Button vertical onPress={()=>navigate('GlobalActivityScreen')}>
            <Image source={active===2?LAYOUT.center_select:LAYOUT.center} style={S.footerIcon}/>
          </Button>
          <Button vertical onPress={()=>navigate('ProductsScreen')}>
            <Image source={active===3?LAYOUT.star_select:LAYOUT.star} style={S.footerIcon}/>
          </Button>
          <Button vertical onPress={()=>navigate('ProfileScreen')}>
            <View style={{borderRadius:normalize(20),borderWidth:2, borderColor:active===4?COLOR.pinkColor:COLOR.whiteColor}}>
              <View style={[S.profileicon]}>
                <Image source={{uri:this.props.user.profile_image}} style={S.footerIcon}/>
              </View>
            </View>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const S = StyleSheet.create({
  ...defaultStyles,
  profileicon:{
    height:normalize(33), 
    width:normalize(32), 
    borderRadius:normalize(16), 
    overflow:'hidden',
  }
})

const mapStateToProps = (state) => ({
  user:state.auth.user,
})

export default connect(mapStateToProps, {})(Footers)