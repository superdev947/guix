import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Title, Button } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { navigate } from '../../redux/services/navigator'
import { Headers } from '../../components'

export class DetalhadasdocartãoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
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
                />
                <Content>
                    <View style={[S.PH20, S.PV20]}>
                        <TouchableOpacity style={[S.BKWAR, S.MH10, S.Radius5]}>
                            <Text style={[S.CLT, S.F48, S.PV5, S.Tcenter, S.FW700]}>Reservado</Text>
                        </TouchableOpacity>
                        <Text style={[S.CLB, S.F18, S.FW400, S.MT30]}>Dados da Reserva</Text>
                        <View style={[S.ROW]}>
                            <Text style={[S.CLB, S.F18, S.FW400]}>Cartão: </Text>
                            <Text style={[S.CLI, S.F18, S.FW400]}>06</Text>
                        </View>
                        <View style={[S.ROW]}>
                            <Text style={[S.CLB, S.F18, S.FW400]}>Parceiro: </Text>
                            <Text style={[S.CLI, S.F18, S.FW400]}>Pedro João</Text>
                        </View>
                        <View style={[S.ROW]}>
                            <Text style={[S.CLB, S.F18, S.FW400]}>Agência: </Text>
                            <Text style={[S.CLI, S.F18, S.FW400]}>Sempre viajando</Text>
                        </View>
                        <View style={[S.ROW]}>
                            <Text style={[S.CLB, S.F18, S.FW400]}>Reservado: </Text>
                            <Text style={[S.CLI, S.F18, S.FW400]}>12/12/2012 às 08:00</Text>
                        </View>
                        <View style={[S.MT40]}>
                            <Text style={[S.CLB, S.F18, S.FW400]}>Chegada Prevista: </Text>
                            <Text style={[S.CLI, S.F18, S.FW400]}>12/12/2012 às 15:00</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetalhadasdocartãoScreen)
