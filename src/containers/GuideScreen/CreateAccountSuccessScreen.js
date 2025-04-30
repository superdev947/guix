import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Container, Content, Button, Title } from 'native-base'
import { COLOR, defaultStyles, Images, LAYOUT } from '../../constants'
import { Headers } from '../../components'
import { navigate, setNavigator } from '../../redux/services/navigator'

export class CreateAccountSuccessScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        setNavigator(props.navigation)
    }
    componentDidMount(){
        if(this.props.screen){
            navigate(this.props.screen)
        }
    }
    render() {
        return (
            <Container>
                <Content style={[S.BKPrincipal]} scrollEnabled={false}>
                    <View style={[S.Acenter, S.PT150]}>
                        <View style={[S.PH40, S.PV20, S.BKS, S.W100P, S.PT70, {flex:1, height:LAYOUT.window.height*0.7, marginTop:normalize(20)}]}>
                            <Text style={[S.F55, S.FBOLD, S.CLT]}>Parabéns!    </Text>
                            <Text style={[S.F30, S.FW400, S.Tright, S.MB10, {color:COLOR.GreenColor}]}>{'Sua conta foi\ncriada com\nsucesso. '}</Text>
                            <Button block style={[S.BKW, S.MT100, S.Radius5]} onPressIn={()=>navigate('DashboardScreen')}>
                                <Text style={[S.ButtonText,S.CLS]}>Explorar App</Text>
                            </Button>
                        </View>
                        <View style={[S.profileCover]}>
                            <Image source={Images.defaultProfile} style={[S.Profile]}/>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const S = StyleSheet.create({
    ...defaultStyles,
    profileCover:{
        borderWidth:normalize(15),
        borderColor:COLOR.whiteColor,
        borderRadius:normalize(93),
        width:normalize(186), 
        height:normalize(186),
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        flex:1,
        position:'absolute',
        top:normalize(50)
    },
    Profile:{
        width:normalize(170), 
        height:normalize(170), 
        resizeMode:'contain',
    }
})


const mapStateToProps = (state) => ({
    screen:state.auth.screen
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountSuccessScreen)
