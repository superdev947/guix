import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet,  View, TouchableOpacity, Text } from 'react-native'
import { Button, Container, Content, Icon, Title } from 'native-base'
import { COLOR, defaultStyles, LAYOUT } from '../../constants'
import { Headers, Movementoftheday } from '../../components'

const MovementofthedayData = [
    {number:'22/10/2020', value:'+ R$ 1,50', type:1},
    {number:'22/10/2020', value:'+ R$ 12,50', type:1},
    {number:'22/10/2020', value:'+ R$ 102,50', type:1},
    {number:'22/10/2020', value:'+ R$ 12,50', type:1},
    {number:'22/10/2020', value:'+ R$ 12,50', type:1},
    {number:'22/10/2020', value:'+ R$ 102,50', type:1},
    {number:'22/10/2020', value:'+ R$ 12,50', type:1},
    {number:'22/10/2020', value:'+ R$ 102,50', type:1},
]

export class CommissionstatementScreen extends Component {
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
                    body={<Title>Extrato</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.BKW, S.PT20]}>
                        <View style={[S.PH20, S.ROW, S.Jbetween, S.Acenter]}>
                            <Text style={[S.F18, S.FW700, S.CLB]} numberOfLines={1}>Restaurante Seja sempre viajante</Text>
                            <TouchableOpacity>
                                <Icon type='Feather' name='refresh-cw' style={[S.F25, S.PH10, {color:COLOR.IconColor2}]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[S.ROW, S.Jcenter, S.MT20]}>
                            <Button style={[S.H40, S.MH20,S.Radius5, {backgroundColor:COLOR.BackgroundPrincipal, width:LAYOUT.window.width*0.35}]}>
                                <Text style={[S.F18, S.FW400, S.Tcenter, S.W100P, {color:COLOR.BackgroundGrey}]}>Em aberto</Text>
                            </Button>
                            <Button style={[S.H40, S.MH20,S.Radius5, S.BKS,{width:LAYOUT.window.width*0.35}]}>
                                <Text style={[S.F18, S.FW400, S.Tcenter, S.W100P, S.CLT]}>Pagas</Text>
                            </Button>
                        </View>
                        <View style={[S.ROW, S.Jcenter, S.MT20, S.Acenter]}>
                            <TouchableOpacity style={[S.Radius5]}>
                                <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV5, {color:COLOR.BackgroundGrey}]}>{'Últimos 7\ndias'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[S.BKS, S.Radius5]}>
                                <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV5, S.CLT]}>{'Últimos 30\ndias'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[S.Radius5]}>
                                <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV5, {color:COLOR.BackgroundGrey}]}>Intervalo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[S.PH20, S.PT20, {paddingBottom:normalize(70)}]}>
                        {MovementofthedayData.map((item, key)=><Movementoftheday key={key} {...item}/>)}
                    </View>
                </Content>
                <View style={[S.POSA, S.W100P, {bottom:normalize(10)}]}>
                    <View style={[S.MH20, S.Acenter, S.PV10, S.ROW, S.BKS, S.Radius5]}>
                        <View style={[S.BKW, { borderTopLeftRadius:0, borderTopRightRadius:3, borderBottomLeftRadius:0, borderBottomRightRadius:3, width:4, height:normalize(40)}]}/>
                        <View style={[S.PL20, S.ROW, S.Jbetween, S.PR30, S.W100P]}>
                            <View style={[S.ROW]}>
                                <Text style={[S.F18, S.FW400, S.CLT]}>Total: </Text>
                                <Text style={[S.F18, S.FW700, S.CLT]}>R$ 340,00</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon type='FontAwesome5' name='eye-slash' style={[S.CLT, S.F24]}/>
                            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(CommissionstatementScreen)
