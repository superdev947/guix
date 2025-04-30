import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Button, Container, Content, Header, Icon, Body, Left, Right, Title } from 'native-base'
import { defaultStyles } from '../../constants'
import { PartnersItem2 } from '../../components'

export class MypartnersRefreshScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Container>
                <Header 
                    hasSegment 
                    style={[S.BKPrincipal, S.H80]} 
                    androidStatusBarColor={COLOR.StatusBarColor} 
                    iosBarStyle={COLOR.StatusBarColor}
                >
                    <Left>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLTG, S.F24]}/>
                        </TouchableOpacity>
                    </Left>
                    <Body style={{alignItems:'center'}}><Title style={[S.CLTG]}>Meus Parceiros</Title></Body>
                    <Right/>
                </Header>
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20]}>
                        <PartnersItem2/>
                        <PartnersItem2/>
                        <PartnersItem2/>
                        <Button block style={[S.ButtonSuccess, S.MT100]}>
                            <Text style={[S.ButtonText]}>Nenhum</Text>
                        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MypartnersRefreshScreen)
