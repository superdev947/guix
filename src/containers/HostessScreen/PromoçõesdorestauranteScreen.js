import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { defaultStyles } from '../../constants'
import { Promoçõesdorestaurante, Headers } from '../../components'

export class PromoçõesdorestauranteScreen extends Component {
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
                    body={<Title>Loja havaianas de pipa</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV10]}>
                        <Promoçõesdorestaurante/>
                        <Promoçõesdorestaurante/>
                        <Promoçõesdorestaurante/>
                        <Promoçõesdorestaurante/>
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


export default connect(mapStateToProps, mapDispatchToProps)(PromoçõesdorestauranteScreen)