import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Button, Container, Content, Header, Icon, Input, Item, Body, Left, Right, Badge, Title } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { Headers } from '../../components'
import PTRView from 'react-native-pull-to-refresh';

export class NotificationsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    _refresh() {
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000)
        });
    }

    render() {
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Notificações</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH10, S.PV10]}>
                    <PTRView onRefresh={this._refresh} >
                        <View style={[S.MT10, S.BKW, S.P10, S.Radius5]}>
                            <View style={[S.ROW, S.Acenter]}>
                                <Image source={Images.notificationprofile} style={S.notificationprofile}/>
                                <View style={[S.ROW, S.Acenter]}>
                                    <Text style={[S.CLS, S.F14, S.FW700, S.ML10]}>Nível</Text>
                                    <Text style={[S.CLS, S.F14, S.FW400]}> 12/12/2020</Text>
                                </View>
                            </View>
                            <Text style={[S.CLTG, S.F14, S.FW400, S.ML40]}>
                                Olá $! Estamos sempre procurando melhorar o nosso app e para isso nessa sexta-feira 13 nossa aplicação vai ficar fora do ar por 20 minutos, a partir das 18:00h. Algumas melhorias que estão chegando
                            </Text>
                        </View>
                        <View style={[S.MT10, S.BKW, S.P10, S.Radius5]}>
                            <View style={[S.ROW, S.Acenter]}>
                                <Image source={Images.notificationprofile} style={S.notificationprofile}/>
                                <View style={[S.ROW, S.Acenter]}>
                                    <Text style={[S.CLS, S.F14, S.FW700, S.ML10]}>Nível</Text>
                                    <Text style={[S.CLS, S.F14, S.FW400]}> 08/12/2020</Text>
                                </View>
                            </View>
                            <Text style={[S.CLTG, S.F14, S.FW400, S.ML40]}>
                            Olá !! Bem vindo ao !! Viva o turismo! :)
                            </Text>
                        </View>
                    </PTRView>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen)
