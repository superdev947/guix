import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image, View, TouchableOpacity, Text, Modal } from 'react-native'
import { Container, Content, Icon, Title, Button, Item, Input } from 'native-base'
import { COLOR, defaultStyles, Images, LAYOUT } from '../../constants'
import { Headers } from '../../components'

export class VincularGuiaScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible:false,
            SmodalVisible:false,
            third:'',
        }
    }

    componentDidMount(){
    }

    render() {
        const { 
            modalVisible,
            SmodalVisible,
            third,
        }=this.state
        return (
            <Container>
                <Headers
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                />
                <Content style={[S.BKPrincipal]}> 
                    <View style={[S.PH30, S.PV10, S.Acenter]}>
                        <Text style={[S.F24, S.FW700, S.Tcenter, S.CLS, S.MV10]}>Vincular Parceiro</Text>
                        <Image source={Images.qrcodescanner} style={[{
                            width:LAYOUT.window.width*0.8, resizeMode:'contain'
                        }]}/>
                        <Text style={[S.F14, S.FW400, S.Tleft, S.CLB, S.MV10]}>Digite o CPF do Guia</Text>
                        <Item regular style={[S.PH10, S.MT10,S.BKPrincipal, {borderColor:COLOR.Tag1Color}]}>
                            <Input 
                                style={[S.F14, S.FW400, S.CLI]}
                                placeholder='000-000-000-00' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={third}
                                onChangeText={e=>this.setState({third:e})}
                            />
                        </Item>
                    </View>
                </Content>
                <View style={[S.PH30, S.PV20]}>
                    <Button block style={[S.ButtonSuccess]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                        <Text style={[S.ButtonText]}>Pesquisar</Text>
                    </Button>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.setState({modalVisible:!modalVisible})}>
                    <View style={[S.modalCenteredView]}>
                        <View style={[S.modalView, {width:LAYOUT.window.width*0.85}]}>
                            <Text style={S.modalText}>Confirmar Informações</Text>
                            <View style={[S.MT10]}>
                                <Image source={Images.defaultProfile1} style={[S.Profile]}/>
                                <Text style={[S.modalText, S.CLI]}>João Pedro</Text>
                                <Text style={[S.modalText, S.CLI]}>129-999-999-98</Text>
                                <Text style={[S.modalText, S.CLI]}>84-99999-9090</Text>
                                <Text style={[S.modalText, S.CLI]}>joaopedro@souguia.com.br</Text>
                                <Text style={[S.modalText, S.CLI]}>Agência siga bem</Text>
                            </View>
                            <View style={[S.ROW, S.Jbetween, S.MT20]}>
                                <TouchableOpacity style={[S.BKDAN, S.MH10, S.Radius5]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                                    <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Descartar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[S.BKS, S.MH10, S.Radius5]} 
                                    onPress={()=>this.setState({modalVisible:!modalVisible, SmodalVisible:!SmodalVisible})}
                                >
                                    <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Confirmar</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(VincularGuiaScreen)