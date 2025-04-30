import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Button, Container, Content, Header, Icon, Input, Item, Body, Left, Right, Badge, Title, Footer, FooterTab } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { Headers, PartnersItem3 } from '../../components'
import { navigate } from '../../redux/services/navigator'

export class StoresScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>navigate('DashboardScreen')}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    right={
                        <TouchableOpacity>
                            <Icon name='ios-search' type='Ionicons' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Lojas</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV10]}>
                        <PartnersItem3/>
                        <PartnersItem3/>
                        <PartnersItem3/>
                    </View>
                </Content>
                <Footer style={[S.H60]}>
                    <FooterTab style={[S.BKS]}>
                        <Button vertical onPress={()=>navigate('CriarpromoçãoScreen')}>
                            <Image source={Images.userMenuIcon} style={S.footerIcon}/>
                            <Text style={[S.F14, S.FW700, S.CLT]}>Geral</Text>
                        </Button>
                        <View style={{borderColor:COLOR.whiteColor, borderLeftWidth:1}}/>
                        <Button vertical>
                            <Image source={Images.heartIcon1} style={S.footerIcon}/>
                            <Text style={[S.F14, S.FW700, {color:COLOR.Green4Color}]}>Exclusiva</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoresScreen)
