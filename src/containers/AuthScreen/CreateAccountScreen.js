import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base'
import { COLOR, defaultStyles } from '../../constants'
import { navigate } from '../../redux/services/navigator'

class CreateAccountScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    

    render() {
        return (
            <Container>
                <Header hasSegment style={[S.BKS]} androidStatusBarColor={COLOR.StatusBarColor} iosBarStyle={COLOR.StatusBarColor}>
                    <Left>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='arrowleft' type='AntDesign' style={[S.CLT, S.F20]}/>
                        </TouchableOpacity>
                    </Left>
                    <Body style={{alignItems:'center'}}>
                        <Title >Essa conta é para...</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content style={[S.PH25]}>
                    <Button block style={[S.ButtonSuccess, S.MT20]} onPress={()=>navigate('CreateAccountHostessScreen')}>
                        <Text style={[S.ButtonText]}>Hostess</Text>
                    </Button>
                    <Button block style={[S.ButtonSuccess, S.MT20]} onPress={()=>navigate('CreateAccountGuideScreen')}>
                        <Text style={[S.ButtonText]}>Guia</Text>
                    </Button>
                    <Button block style={[S.ButtonSuccess, S.MT20]} onPress={()=>navigate('CreateAccountAgencyScreen')}>
                        <Text style={[S.ButtonText]}>Agência</Text>
                    </Button>
                    <Button block style={[S.BKL, S.MT20]}>
                        <Text style={[S.ButtonText]}>Dono</Text>
                    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen)
