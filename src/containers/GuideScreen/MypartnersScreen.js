import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { defaultStyles } from '../../constants'
import { Headers, PartnersItem2 } from '../../components'

export class MypartnersScreen extends Component {
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
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Meus Parceiros</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV10]}>
                        <PartnersItem2/>
                        <PartnersItem2/>
                        <PartnersItem2/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MypartnersScreen)
