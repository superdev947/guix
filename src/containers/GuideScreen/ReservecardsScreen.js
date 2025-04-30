import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import normalize from 'react-native-normalize'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert, StyleSheet, Image, View, TouchableOpacity, Text, Platform, Modal, TouchableHighlight } from 'react-native'
import { Button, Container, Content, Header, Icon, Input, Item, Body, Left, Right, Badge, Title } from 'native-base'
import { COLOR, Images, defaultStyles, LAYOUT } from '../../constants'
import { Headers, PartnersItem2 } from '../../components'

export class ReservecardsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:14,
            show:false,
            date:new Date(),
            time:new Date(),
            modalVisible:false,
            SmodalVisible:false,
        }
    }

    render() {
        const {
            number,
            show,
            time,
            date,
            modalVisible,
            SmodalVisible,
        }=this.state
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Reservar Cartões</Title>}
                />
                <Content style={[S.BKW]}>
                    <View style={[S.PH20, S.PV20, S.Acenter]}>
                        <View style={[S.BKPrincipal, S.W75P]}>
                            <Text style={[S.F18, S.FW700, S.CLS, S.Tcenter ]}>QUANTAS PESSOAS?</Text>
                            <View style={[S.ROW, S.PH10, S.Jcenter]}>
                                <TouchableOpacity onPress={()=>this.setState({number:(number===0?number:number-1)})}>
                                    <Text style={[S.F72, S.FW400, S.CLB, S.Tcenter ]}>-</Text>
                                </TouchableOpacity>
                                <Text style={[S.F72, S.FW400, S.CLB, S.Tcenter ]}> {number} </Text>
                                <TouchableOpacity onPress={()=>this.setState({number:number+1})}>
                                    <Text style={[S.F72, S.FW400, S.CLB, S.Tcenter ]}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[S.BKPrincipal, S.W100P, S.MT20, S.PH20, S.PV10]}>
                            <Text style={[S.F18, S.FW700, S.CLS ]}>Quando?</Text>
                            <TouchableOpacity onPress={()=>this.setState({show:'date'})}>
                                <Text style={[S.F48, S.FW400, S.CLB, S.Tcenter ]}>{Moment(date).format('MM/DD/YYYY')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[S.BKPrincipal, S.W100P, S.MT20, S.PH20, S.PV10]}>
                            <Text style={[S.F18, S.FW700, S.CLS ]}>Horário:</Text>
                            <TouchableOpacity onPress={()=>this.setState({show:'time'})}>
                                <Text style={[S.F72, S.FW400, S.CLB, S.Tcenter ]}>{Moment(time).format('hh:mm')}</Text>
                            </TouchableOpacity>
                        </View>
                        <Button block style={[S.ButtonSuccess, S.MT50]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                            <Text style={[S.ButtonText]}>Realizar reserva</Text>
                        </Button>
                    </View>
                    {show?<DateTimePicker
                        testID="dateTimePicker"
                        value={this.state[show]}
                        mode={show}
                        is24Hour={true}
                        display="default"
                        onChange={(a,e)=>this.setState({[show]:e, show:false})}
                    />:null}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => this.setState({modalVisible:!modalVisible})}>
                        <View style={[S.modalCenteredView]}>
                            <View style={[S.modalView, {width:LAYOUT.window.width*0.85}]}>
                                <Text style={S.modalText}>Confirmar Informações</Text>
                                <View style={[S.MT10]}>
                                    <Text style={[S.modalText, S.CLI]}>Agência siga bem</Text>
                                    <Text style={[S.modalText, S.CLI]}>53.787.902/0001-86</Text>
                                    <Text style={[S.modalText, S.CLI]}>sigabem@souguia.com.br</Text>
                                    <Text style={[S.modalText, S.CLI]}>Você está fazendo a</Text>
                                    <Text style={[S.modalText, S.CLI]}>reserva de </Text>
                                    <Text style={[S.modalText, S.CLS]}>{number}</Text>
                                    <Text style={[S.modalText, S.CLI]}>Cartões</Text>
                                </View>
                                <View style={[S.ROW, S.Jbetween, S.MT20]}>
                                    <TouchableOpacity style={[S.BKDAN, S.MH10, S.Radius5]} onPress={()=>this.setState({modalVisible:!modalVisible})}>
                                        <Text style={[S.F18, S.FW400, S.Tcenter, S.PH20, S.PV10, S.CLT]}>Descartar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[S.BKS, S.MH10, S.Radius5]} onPress={()=>this.setState({modalVisible:!modalVisible, SmodalVisible:!SmodalVisible})}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReservecardsScreen)
