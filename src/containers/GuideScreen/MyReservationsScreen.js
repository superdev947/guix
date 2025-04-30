import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Modal, Text } from 'react-native'
import { CheckBox, Container, Content, Icon, Input, Item, Title } from 'native-base'
import { COLOR, defaultStyles, LAYOUT} from '../../constants'
import { Headers, ReservationItem } from '../../components'
import { navigate } from '../../redux/services/navigator'

export class MyReservationsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible:false,
            confirmed1:false,
            confirmed2:false,
            confirmed3:false,
            date:new Date(),
        }
    }
    render() {
        const{
            modalVisible,
            confirmed1,
            confirmed2,
            confirmed3,
            date,
        }=this.state
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    right={
                        <TouchableOpacity onPress={()=>this.setState({modalVisible:!modalVisible})}>
                            <Icon name='filter' type='Feather' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Minhas Reservas</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV10]}>
                        <ReservationItem/>
                        <ReservationItem/>
                        <ReservationItem/>
                    </View>  
                </Content>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.setState({modalVisible:!modalVisible})}>
                    <View style={[S.modalCenteredView]}>
                        <View style={[S.modalView, {width:LAYOUT.window.width*0.85}]}>
                            <Text style={[S.modalText, S.CLI]}>Filtro</Text>
                            <TouchableOpacity style={[S.ROW, S.W100P, S.MT10]} onPress={()=>this.setState({confirmed1:!confirmed1})}>
                                <CheckBox checked={confirmed1} color={COLOR.InputBorder}/>
                                <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Confirmada</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[S.ROW, S.W100P, S.MT10]} onPress={()=>this.setState({confirmed2:!confirmed2})}> 
                                <CheckBox checked={confirmed2} color={COLOR.InputBorder}/>
                                <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Não confirmada</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[S.ROW, S.W100P, S.MT10]} onPress={()=>this.setState({confirmed3:!confirmed3})}>
                                <CheckBox checked={confirmed3} color={COLOR.InputBorder}/>
                                <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Cancelada</Text>
                            </TouchableOpacity>
                            <View style={[S.MT10]}>
                                <Item regular style={[S.PH10, S.MT10, S.W100P, S.Radius5, S.BKW]}>
                                    <Input
                                        placeholder='12/12/2012' 
                                        placeholderTextColor={COLOR.InputBorder} 
                                        style={[S.InputText]}
                                        value={date}
                                        onChangeText={e=>this.setState({date:e})}
                                    />
                                </Item>
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.MT20]}>
                                <TouchableOpacity style={[S.BKDAN, S.MH10, S.Radius5]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                                    <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Descartar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[S.BKS, S.MH10, S.Radius5]} onPress={()=>{
                                    this.setState({modalVisible:!modalVisible}), navigate('GerenciarReservasFilterScreen')
                                }}>
                                    <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyReservationsScreen)
