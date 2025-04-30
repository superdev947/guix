import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { COLOR, defaultStyles } from '../../constants'
import { GerenciarRecompensa, Headers } from '../../components'

export class MyachievementsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                    body={<Title>Minhas Conquistas</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV20]}>
                        <View style={[S.PH20, S.ROW, S.Jbetween, S.Acenter]}>
                            <Text style={[S.F18, S.FW700, S.CLB]} numberOfLines={1}>Restaurante Seja sempre viajante</Text>
                            <TouchableOpacity>
                                <Icon type='Feather' name='refresh-cw' style={[S.F25, S.PH10, {color:COLOR.IconColor2}]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[S.F18, S.Tcenter, S.MT10, S.FW700, {color:COLOR.Conquistan2Color}]}>Você está no Nível 2</Text>
                        <Text style={[S.F16, S.Tcenter, S.MT10]}>{'Continue empenhado para alcaçar\no mais alto nível'}</Text>
                        <GerenciarRecompensa index={1}/>
                        <GerenciarRecompensa index={2}/>
                        <GerenciarRecompensa index={3}/>
                        <GerenciarRecompensa index={4}/>
                        <GerenciarRecompensa index={5}/>
                        <GerenciarRecompensa index={6}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyachievementsScreen)
