import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image, View, TouchableOpacity, Text, Modal } from 'react-native'
import { Container, Content, Icon, Button } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { Headers, UserItem } from '../../components'
import { navigate } from '../../redux/services/navigator'

const userinfo = {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color}

export class CheckininformaçõesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible:false
        }
    }

    componentDidMount(){
    }

    render() {
        const { 
            modalVisible,
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
                <Content style={[S.BKW]}>
                    <View style={[S.PH20, S.PV10]}>
                        <Text style={[S.F36, S.FW700, S.Tcenter, S.CLS]}>Confirmar Check-in</Text>
                        <View style={[S.MT20]}>
                            <Text style={[S.F18, S.FW700, S.Tleft, S.CLS]}>Parceiro:</Text>
                            <UserItem {...userinfo}/>
                        </View>
                        <View style={[S.MT20]}>
                            <Text style={[S.F18, S.FW700, S.Tleft, S.CLS]}>Cartões:</Text>
                            <Text style={[S.F36, S.FW700, S.Tcenter, S.CLB, S.BKPrincipal, S.PV10]}>04</Text>
                        </View>
                        <View style={[S.MT20]}>
                            <Text style={[S.F18, S.FW700, S.Tleft, S.CLS]}>Sequência:</Text>
                            <Text style={[S.F36, S.FW700, S.Tcenter, S.CLB, S.BKPrincipal, S.PV10]}>3,4,5,6:</Text>
                        </View>
                    </View>
                </Content>
                <View  style={[S.PV20, S.PH30, S.BKPrincipal]}>
                    <Button block style={[S.ButtonSuccess, S.MT10]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                        <Text style={[S.ButtonText]}>Check-in</Text>
                    </Button>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.setState({modalVisible:!modalVisible})}>
                    <View style={[S.modalCenteredView]}>
                        <TouchableOpacity style={[S.modalView, S.Radius5,S.PH100]} 
                            onPress={()=>{this.setState({modalVisible:!modalVisible}), navigate('DashboardScreen')}}
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


export default connect(mapStateToProps, mapDispatchToProps)(CheckininformaçõesScreen)
