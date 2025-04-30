import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native'
import { Container, Content, Icon, Input, Item, Title } from 'native-base'
import { COLOR, defaultStyles, LAYOUT } from '../../constants'
import { Headers, Hawaiiankiteshops } from '../../components'
import { navigate } from '../../redux/services/navigator'

export class HawaiiankiteshopsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible:false,
            name:'',
            whatsapp:'',
        }
    }
    render() {
        const {
            modalVisible,
            name,
            whatsapp,
        }=this.state
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Lojas havaianas de pipa</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV20, S.Acenter]}>
                        <Text style={[S.F18, S.FW700, S.CLB, S.Tcenter ]}>Escolha um promoção</Text>
                        <TouchableOpacity onPress={()=>this.setState({modalVisible:!modalVisible})}>
                            <Hawaiiankiteshops/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({modalVisible:!modalVisible})}>
                            <Hawaiiankiteshops/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({modalVisible:!modalVisible})}>
                            <Hawaiiankiteshops/>
                        </TouchableOpacity>
                    </View>
                </Content>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.setState({modalVisible:!modalVisible})}>
                    <View style={[S.modalCenteredView]}>
                        <View style={[S.modalView, {width:LAYOUT.window.width*0.85, borderRadius:10}]}>
                            <Text style={[S.modalText, S.CLI]}>Enviar e-voucher para</Text>
                            <View style={[S.MT10]}>
                                <Item regular style={[S.PH10, S.W100P, S.Radius5, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                                    <Icon name='award' type='Feather' style={[S.InputIcon]} />
                                    <Input 
                                        placeholder='Nome' 
                                        placeholderTextColor={COLOR.InputBorder} 
                                        style={[S.InputText]}
                                        value={name}
                                        onChangeText={e=>this.setState({name:e})}
                                    />
                                </Item>
                                <Item regular style={[S.PH10, S.MT10, S.W100P, S.Radius5, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                                    <Icon name='phone' type='Feather' style={[S.InputIcon]} />
                                    <Input
                                        placeholder='WhatsApp' 
                                        placeholderTextColor={COLOR.InputBorder} 
                                        style={[S.InputText]}
                                        value={whatsapp}
                                        onChangeText={e=>this.setState({whatsapp:e})}
                                    />
                                </Item>
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.MT20]}>
                                <TouchableOpacity style={[S.BKDAN, S.MH10, S.Radius5]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                                    <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Descartar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[S.BKS, S.MH10, S.Radius5]} onPress={()=>{
                                    this.setState({modalVisible:!modalVisible}), navigate('WhatsappScreen')
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

export default connect(mapStateToProps, mapDispatchToProps)(HawaiiankiteshopsScreen)
