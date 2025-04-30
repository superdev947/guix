import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { COLOR, defaultStyles } from '../../constants'
import { Headers, Movementoftheday } from '../../components'
import { navigate } from '../../redux/services/navigator'

const MovementofthedayData = [
    {number:'403', value:'+ R$ 1,50', type:1},
    {number:'404', value:'+ R$ 12,50', type:1},
    {number:'405', value:'+ R$ 102,50', type:1},
    {number:'406', value:'Em aberto', type:2},
    {number:'418', value:'Em aberto', type:2},
    {number:'404', value:'+ R$ 12,50', type:1},
    {number:'404', value:'+ R$ 12,50', type:1},
    {number:'405', value:'+ R$ 102,50', type:1},
    {number:'406', value:'Em aberto', type:2},
    {number:'418', value:'Em aberto', type:2},
    {number:'404', value:'+ R$ 12,50', type:1},
    {number:'405', value:'+ R$ 102,50', type:1},
]

export class MovementofthedayScreen extends Component {
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
                            <Icon name='arrowleft' type='AntDesign' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Movimento do dia</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PT20, {paddingBottom:normalize(70)}]}>
                        <View style={[S.PH20, S.ROW, S.Jbetween, S.Acenter]}>
                            <Text style={[S.F18, S.FW700, S.CLB]} numberOfLines={1}>Restaurante Seja sempre viajante</Text>
                            <TouchableOpacity onPress={()=>navigate('MypartnersSearchScreen')}>
                                <Icon type='Feather' name='refresh-cw' style={[S.F25, S.PH10, {color:COLOR.IconColor2}]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[S.PH20, S.PV10, S.ROW, S.Jbetween, S.MT20, S.BKS, {borderTopLeftRadius:5,borderTopRightRadius:5}]}>
                            <Text style={[S.F18, S.FW700, S.CLT]}>Nº Cartão</Text>
                            <Text style={[S.F18, S.FW700, S.CLT]}>Comissão</Text>
                        </View>
                        {MovementofthedayData.map((item, key)=><Movementoftheday key={key} {...item}/>)}
                    </View>
                </Content>
                <View style={[S.POSA, S.W100P, {bottom:normalize(10)}]}>
                    <View style={[S.MH20, S.Acenter, S.PV10, S.ROW, S.BKS, S.Radius5]}>
                        <View style={[S.BKW, { borderTopLeftRadius:0, borderTopRightRadius:3, borderBottomLeftRadius:0, borderBottomRightRadius:3, width:4, height:normalize(40)}]}/>
                        <View style={[S.Column, S.PL20]}>
                            <Text style={[S.F18, S.FW400, S.CLT]}>Seu Saldo Hoje</Text>
                            <Text style={[S.F18, S.FW700, S.CLT]}>Total: R$ 1140,00</Text>
                        </View>
                    </View>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovementofthedayScreen)
