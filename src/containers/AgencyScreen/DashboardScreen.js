import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { DButton1, DButton2, Headers } from '../../components'
import { navigate, setNavigator } from '../../redux/services/navigator'
import { logOut } from '../../redux/actions/authActions'

const button1 = [
    {title:'Extrato de comissões', screen:'', icon:Images.receiptoutlineIcon},
    {title:'Movimento do dia', screen:'', icon:Images.dollarIcon},
    {title:'Conquistas', screen:'', icon:Images.awardIcon},
]

const button2 = [
    {title:'Meus\nParceiros', screen:'MypartnersScreen', icon:Images.starIcon},
    {title:'Pré\nCheckin', screen:'ReservecardsScreen', icon:Images.cardIcon},
    {title:'\nLojas', screen:'StoresScreen', icon:Images.storefrontoutlineIcon},
]

const button3 = [
    {title:'Meus\nGuia', screen:'MeusGuiasScreen', icon:Images.userMenuIcon},
]

export class DashboardScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        setNavigator(props.navigation)
    }

    componentDidMount(){
    }

    render() {
        return (
            <Container>
                <Headers
                    left={
                        <TouchableOpacity onPress={()=>this.props.logOut()}>
                            <Icon type='Feather' name='log-out' style={[S.F25, S.CLT]} />
                        </TouchableOpacity>
                    }   
                    right={
                        <TouchableOpacity onPress={()=>navigate('ProfileScreen')}>
                            <Icon type='AntDesign' name='setting' style={[S.F25, S.CLT, S.PL15]} />
                        </TouchableOpacity>
                    }
                />
                <Content>
                    <View style={[S.PH20, S.PV20]}>
                        <View style={[S.ROW]}>
                            <Text style={[S.F18, S.FW700, S.CLB]}>Agência: </Text>
                            <Text style={[S.F18, S.FW400, S.CLB]}>Viagens do nosso dia a dia</Text>
                        </View>
                        <Text style={[S.F18, S.FW700, S.CLB]}>CNPJ: 43.765.210/0001-83</Text>
                        {button1.map((item, key)=><DButton1 key={key} {...item}/>)}
                        <View style={[S.ROW, S.Jbetween, S.Wrap]}>
                            {button2.map((item, key)=><DButton2 key={key} {...item}/>)}
                        </View>
                        <View style={[S.ROW, S.Jcenter]}>
                            {button3.map((item, key)=><DButton2 key={key} {...item}/>)}
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
    screen:state.auth.screen
})

const mapDispatchToProps = {
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
