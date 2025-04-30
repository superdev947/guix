import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text, Modal } from 'react-native'
import { Button, Container, Content, Icon, Title, CheckBox } from 'native-base'
import { COLOR, Images, defaultStyles, LAYOUT } from '../../constants'
import { Headers, Rating } from '../../components'

class LojahavaianasdepipaScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.navigation.state.params
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
                    right={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='sharealt' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Loja havaianas de pipa</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.MT30,S.PH30]}>
                        <View style={[S.ROW, S.Acenter, S.ML20]}>
                            <Image source={this.state.image?Images.shopImage3:Images.defaultProfile} style={S.Profile1}/>
                            <Text style={[S.ML20, S.F18, S.FW400, S.CLI, S.Tcenter]}>{'Loja havaianas\nde pipa'}</Text>
                        </View>
                        <View style={[S.PH30, S.MT20, {borderBottomWidth:3, borderColor:COLOR.success, borderStyle:'dotted'}]}/>
                        <View style={[S.PH30, S.MT20]}>
                            <View style={[S.Acenter, {borderRadius:normalize(50), borderWidth:3, borderColor:COLOR.success}]}>
                                <View style={[S.MV20]}>
                                    <Rating
                                        defaultRating={0}
                                        showRating={false}
                                        size={normalize(25)}
                                    />
                                </View>
                                <Image style={[S.qrcodeImage1]} source={Images.qrcode1}/>
                                <Text style={[S.F36, S.FW700, S.CLI, S.Tcenter, S.MB30]}>ADF34373D</Text>
                            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LojahavaianasdepipaScreen)
