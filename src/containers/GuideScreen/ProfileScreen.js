import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { Headers } from '../../components'

export class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Headers
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='arrowleft' type='AntDesign' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }   
                    body={<Title>Perfil</Title>}
                    right={
                        <TouchableOpacity>
                            <Icon name='edit' type='Feather' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                />
                <Content style={[S.P10,S.BKPrincipal]}>
                    <View style={[ S.PV20, S.BKW, S.Radius5]}>
                        <View style={[S.Acenter]}>
                            <Image source={Images.defaultProfile} style={S.Profile}/>
                            <Text style={[S.F24, S.FW700, S.CLB]}>Pedro João</Text>
                            <Text style={[S.F15, S.FW400, {color:COLOR.IconColor2}]}>Natal - RN</Text>
                        </View>
                        <View style={[S.PH20]}>
                            <View style={[S.ROW, S.Jbetween, S.Acenter, S.MT20]}>
                                <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                                    <Icon name='phone' type='Feather' style={[S.InputIcon]} />
                                    <Text style={[S.F16, S.FW400, {color:COLOR.success}]}>  WhatsApp </Text>
                                </View>
                                <Text style={[S.F17, S.FW400, {color:COLOR.IconColor2}]}>84-9-9999-9999</Text>
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.Acenter, S.MT20]}>
                                <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                                    <Icon name='envelope-o' type='FontAwesome' style={[S.InputIcon]} />
                                    <Text style={[S.F16, S.FW400, {color:COLOR.success}]}>  E-mail </Text>
                                </View>
                                <Text style={[S.F17, S.FW400, {color:COLOR.IconColor2}]}>pedrojoao@ctsi.com.br</Text>
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.Acenter, S.MT20]}>
                                <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                                    <Icon name='credit-card' type='Feather' style={[S.InputIcon]} />
                                    <Text style={[S.F16, S.FW400, {color:COLOR.success}]}>  CPF </Text>
                                </View>
                                <Text style={[S.F17, S.FW400, {color:COLOR.IconColor2}]}>126-999-999-99</Text>
                            </View>
                        </View>
                        <Text style={[S.F18, S.FW700, S.CLB, S.Tcenter, S.MT20]}>Configurações</Text>
                        <View style={[S.PH10]}>
                            <View style={[S.ROW, S.Jbetween, S.Acenter, S.PH10, S.PV10, {borderBottomWidth:0.5, borderColor:COLOR.InputBorder}]}>
                                <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                                    <Icon name='adduser' type='AntDesign' style={[S.F24, S.CLS]} />
                                    <Text style={[S.F16, S.FW400, {color:COLOR.InputBorder}]}>  Convidar amigos </Text>
                                </View>
                                <Icon name='chevron-right' type='Entypo' style={[S.F24, S.CLS]} />
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.Acenter, S.PH10, S.PV10, {borderBottomWidth:0.5, borderColor:COLOR.InputBorder}]}>
                                <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                                    <Icon name='key' type='Feather' style={[S.F24, S.CLS]} />
                                    <Text style={[S.F16, S.FW400, {color:COLOR.InputBorder}]}>  Alterar senha </Text>
                                </View>
                                <Icon name='chevron-right' type='Entypo' style={[S.F24, S.CLS]} />
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.Acenter, S.PH10, S.PT10]}>
                                <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                                    <Icon name='text-document' type='Entypo' style={[S.F24, S.CLS]} />
                                    <Text style={[S.F16, S.FW400, {color:COLOR.InputBorder}]}>  Termos </Text>
                                </View>
                                <Icon name='chevron-right' type='Entypo' style={[S.F24, S.CLS]} />
                            </View>
                        </View>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
