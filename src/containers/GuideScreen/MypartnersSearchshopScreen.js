import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { defaultStyles } from '../../constants'
import { Headers, PartnersItem1 } from '../../components'
import { navigate } from '../../redux/services/navigator'

export class MypartnersSearchshopScreen extends Component {
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
                    right={
                        <TouchableOpacity>
                            <Icon name='ios-search' type='Ionicons' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV10]}>
                        <Text style={[S.F18, S.Tcenter, S.MT10, S.FW400, S.CLB]}>Selecione um parceiro para ver os detalhes</Text>
                        <TouchableOpacity>
                            <PartnersItem1/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('HawaiiankiteshopsScreen')}>
                            <PartnersItem1/>    
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <PartnersItem1/>
                        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(MypartnersSearchshopScreen)
