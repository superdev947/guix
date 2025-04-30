import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
import { COLOR, defaultStyles } from '../../constants'
import { Headers, GerenciarRecompensa } from '../../components'
import { navigate } from '../../redux/services/navigator'

export class GerenciarRecompensasScreen extends Component {
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
                    body={<Title>Gerenciar Recompensas</Title>}
                />
                <Content style={[S.BKPrincipal]}>
                    <View style={[S.PH20, S.PV20]}>
                        <TouchableOpacity onPress={()=>navigate('DefinirrecompensasScreen')}>
                            <GerenciarRecompensa index={1}/>
                        </TouchableOpacity>
                        <GerenciarRecompensa index={2}/>
                        <GerenciarRecompensa index={3}/>
                        <GerenciarRecompensa index={4}/>
                        <GerenciarRecompensa index={5}/>
                        <GerenciarRecompensa index={6}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GerenciarRecompensasScreen)
