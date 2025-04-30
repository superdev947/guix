import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import normalize from 'react-native-normalize'
import { Button, Container, Content, Header, Icon, Input, Item, Left } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { navigate, setNavigator } from '../../redux/services/navigator'
import { Login } from '../../redux/actions/authActions'

class LogInScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
        }
        setNavigator(props.navigation)
    }

    Login(loginMethod){
        this.props.Login({...this.state, loginMethod})
    }
    
    render() {
        const {
            email,
            password,
        } = this.state
        return (
            <Container>
                <Header style={[S.BKS, S.H80]} androidStatusBarColor={COLOR.StatusBarColor} iosBarStyle={COLOR.StatusBarColor}>
                    <Image source={Images.Logo} style={[S.Logo, S.POSA, {bottom:-normalize(60)}]}/>
                </Header>
                <Content style={[S.PH25]}>
                    <View style={[S.PT130, S.PB50]}>
                        <Item regular style={[S.PH10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Input 
                                placeholder='E-mail' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={email}
                                onChangeText={e=>this.setState({email:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MV10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Input 
                                placeholder='Senha' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={password}
                                onChangeText={e=>this.setState({password:e})}
                            />
                        </Item>
                        <TouchableOpacity>  
                            <Text style={[{textAlign:'right', width:'100%'}]}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>navigate('CreateAccountScreen')}>
                        <Text style={[S.W100P,{textAlign:'center'}]}>Criar conta</Text>
                    </TouchableOpacity>
                    <Button block style={[S.ButtonSuccess, S.MT10]} onPress={()=>this.Login('Guide')}>
                        <Text style={[S.ButtonText]}>Entrar</Text>
                    </Button>
                    <View style={[S.MT10, S.PV10, S.ROW, {justifyContent:'space-between', justifyContent:'space-between', alignItems:'center'}]}>
                        <View style={[{width:'45%',borderColor:COLOR.Background1, borderBottomWidth:1}]}></View>
                        <Text style={[{width:'10%', color:COLOR.Background1, textAlign:'center'}]}>ou</Text>
                        <View style={[{width:'45%',borderColor:COLOR.Background1, borderBottomWidth:1}]}></View>
                    </View>
                    <View style={[S.ROW, S.PB20, S.PH10, {justifyContent:'space-between'}]}>
                        <Button style={[S.BoxShadow, {backgroundColor:'#000', width:'45%', justifyContent:'center', borderRadius:5}]}>
                            <Icon name='apple' type='FontAwesome' style={[S.CLT, S.F20]}/>
                        </Button>
                        <Button style={[S.BKW,S.BoxShadow, {width:'45%', justifyContent:'center', borderRadius:5}]}>
                            <Image source={Images.Google} style={[S.IconImage]}/>
                        </Button>
                    </View>
                    <View style={[S.ROW, S.PB20, S.PH10, {justifyContent:'space-between'}]}>
                        <TouchableOpacity onPress={()=>this.Login('Guide')}>
                            <Text style={[S.W100P,S.CLI,{textAlign:'center'}]}>Login guia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.Login('Hostess')}>
                            <Text style={[S.W100P,S.CLI,{textAlign:'center'}]}>Login Hostess</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.Login('Agency')}>
                            <Text style={[S.W100P,S.CLI,{textAlign:'center'}]}>Login agência</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}


const S = StyleSheet.create({
    ...defaultStyles,
  })

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    Login
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)
