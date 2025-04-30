import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image, View, TouchableOpacity, Text, Modal } from 'react-native'
import { Button, Container, Content, Icon, Title, CheckBox } from 'native-base'
import { COLOR, Images, defaultStyles, LAYOUT } from '../../constants'
import { Headers } from '../../components'

export class LojashavaianasdepipaScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.navigation.state.params,
            modalVisible:false,
            SmodalVisible:false,
        }
    }
    render() {
        const {
            modalVisible,
            SmodalVisible,
            ishand,
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
                    <Image style={[S.shopImage2]} source={Images.shopImage2}/>
                    <View style={[S.PH30, S.PV20, S.Acenter]}>
                        <View style={[S.ROW, S.PV10, S.W100P, S.Acenter, {borderBottomWidth:1, borderColor:COLOR.warning}]}>
                            <Icon name='map-pin' type='Feather' style={[S.F24,S.CLS]} />
                            <Text style={[S.F13, S.FW400, S.CLI, S.PH15]}>150 Rua Lorem ipsum dolor sit amet consectetur, adipisicing elit., Placeat, Quidem, Natal 61718-100 Brasil</Text>
                        </View>
                        <View style={[S.ROW, S.PV10, S.W100P, S.Acenter, {borderBottomWidth:1, borderColor:COLOR.warning}]}>
                            <Icon name='phone' type='Feather' style={[S.F24,S.CLS]} />
                            <Text style={[S.F13, S.FW400, S.CLI, S.PH15]}>+55 84 00000-0000</Text>
                        </View>
                        <View style={[S.ROW, S.PV10, S.W100P, S.Acenter]}>
                            <Icon name='clock' type='Feather' style={[S.F24,S.CLS]} />
                            <Text style={[S.F13, S.FW400, S.CLI, S.PH15]}>Aberto agora: 09:00 AM - 6:00 PM</Text>
                        </View>
                        <View style={[S.MT10, S.PV10, S.W100P, {borderBottomWidth:1, borderColor:COLOR.warning}]}>
                            <Text style={[S.F18, S.FW700, S.CLS]}>Informações de estrutura</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={false} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Local Coberto</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={false} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Gramado</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={true} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Banheiros</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={true} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Estacionamento</Text>
                        </View>
                        <View style={[S.MT10, S.PV10, S.W100P, {borderBottomWidth:1, borderColor:COLOR.warning}]}>
                            <Text style={[S.F18, S.FW700, S.CLS]}>Serviços</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={false} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Café da manhã</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={false} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Almoço</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}> 
                            <CheckBox checked={true} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Lanches</Text>
                        </View>
                        <View style={[S.ROW, S.W100P, S.MT10]}>
                            <CheckBox checked={true} color={COLOR.success} />
                            <Text style={[S.F14, S.FW400, S.PL20, S.CLI]}>Jantar</Text>
                        </View>
                        {ishand?
                            <Button block style={[S.ButtonSuccess, S.MT20]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                                <Text style={[S.ButtonText]}>      Enviar convite</Text>
                                <Icon name='chevron-small-right' type='Entypo' style={[S.CLT, S.F24]}/>
                            </Button>
                        :null}
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => this.setState({modalVisible:!modalVisible})}>
                        <View style={[S.modalCenteredView]}>
                            <View style={[S.modalView, {width:LAYOUT.window.width*0.85}]}>
                                <Text style={S.modalText}>Solicitação enviada</Text>
                                <View style={[S.MT10]}>
                                    <Text style={[S.modalText, S.CLI]}>{'Agora é só aguardar o\nadministrador do hostess\naceitar a sua solicitação'}</Text>
                                </View>
                                <View style={[S.ROW, S.Jbetween, S.MT20]}>
                                    <TouchableOpacity style={[S.BKS, S.MH10, S.Radius5]} onPress={()=>this.setState({modalVisible:!modalVisible, SmodalVisible:!SmodalVisible})}>
                                        <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Enviar convite</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={SmodalVisible}
                        onRequestClose={() => this.setState({SmodalVisible:!SmodalVisible})}>
                        <View style={[S.modalCenteredView]}>
                            <TouchableOpacity style={[S.modalView, S.Radius5,S.PH100]} 
                                onPress={()=>{this.setState({SmodalVisible:!SmodalVisible}), this.props.navigation.goBack()}}
                            >
                                <Image style={[S.modalSuccessIcon]} source={Images.SuccesIcon}/>
                                <Text style={[S.modalText, S.CLS]}>Sucesso</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(LojashavaianasdepipaScreen)
