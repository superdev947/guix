import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Modal } from 'react-native'
import { Container, Content, Icon, Title, Text, Item, Input, CheckBox } from 'native-base'
import { COLOR, defaultStyles, Images, LAYOUT} from '../../constants'
import { Headers, GerenciarReservas } from '../../components'
const userinfo = {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color}

export class GerenciarReservasFilterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible:false,
            date:''
        }
    }
    render() {
        const {
            modalVisible,
            date,
        }=this.state;
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLI, S.F24]}/>
                        </TouchableOpacity>
                    }
                    right={
                        <TouchableOpacity onPress={() => this.setState({modalVisible:!modalVisible})}>
                            <Icon name='filter' type='Feather' style={[S.CLI, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title style={[S.CLS]}>Gerenciar Reservas</Title>}
                    color={COLOR.BackgroundPrincipal}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV10]}>
                        <GerenciarReservas 
                            {...userinfo} 
                            button={
                                <TouchableOpacity style={[S.BKS, S.MH10, S.Radius5, S.H40]}>
                                    <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Confirmada</Text>
                                </TouchableOpacity>
                            }
                            trashcolor={COLOR.danger}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(GerenciarReservasFilterScreen)
