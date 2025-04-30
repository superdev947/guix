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
    {title:'Movimento do dia', screen:'MovementofthedayScreen', icon:Images.dollarIcon},
    {title:'Extrato de comissões', screen:'CommissionstatementScreen', icon:Images.receiptoutlineIcon},
    {title:'Conquistas', screen:'MyachievementsScreen', icon:Images.awardIcon},
]

const button2 = [
    {title:'Pré\nCheckin', screen:'MypartnersSearchScreen', icon:Images.cardIcon},
    {title:'Meus\nParceiros', screen:'MypartnersScreen', icon:Images.starIcon},
    {title:'Minhas\nReservas', screen:'MyReservationsScreen', icon:Images.bookmarkIcon},
    {title:'\nE-Voucher', screen:'MypartnersSearchshopScreen', icon:Images.Group},
    {title:'Meu\nQR Code', screen:'LojahavaianasdepipaScreen', icon:Images.qrcode},
    {title:'\nLojas', screen:'StoresScreen', icon:Images.storefrontoutlineIcon},
]

export class DashboardScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                        <View style={[S.ROW]}>
                            <TouchableOpacity onPress={()=>navigate('NotificationsScreen')}>
                                <Icon type='Fontisto' name='bell' style={[S.F25, S.CLWAR]} />
                                <Text style={[S.POSA, S.Radius10, S.BKWAR, S.CLT, S.F13, {top:-5, right:-5}]}>  2  </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigate('ProfileScreen')}>
                                <Icon type='AntDesign' name='setting' style={[S.F25, S.CLT, S.PL15]} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                <Content>
                    <View style={[S.PH20, S.PV20]}>
                        <View style={[S.ROW, S.Jbetween, S.Acenter]}>
                            <Text style={[S.F18]}>Bem vindo João Pedro!</Text>
                            <TouchableOpacity style={[S.P5, {borderWidth:2, borderRadius:normalize(45), borderColor:COLOR.Conquistan2Color}]} onPress={()=>navigate('MyachievementsScreen')}>
                                <Image source={Images.defaultProfile} style={S.defaultProfile}/>
                                <Text style={[S.POSA, S.Radius10, S.CLT, S.F13, {top:-5, right:-5, backgroundColor:COLOR.Conquistan2Color}]}>  2  </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[S.ROW, S.Jbetween, S.Acenter, S.PT20]}>
                            <Text style={[S.F18]}>Trabalhando por: Agência SEMPRE...</Text>
                            <TouchableOpacity onPress={()=>navigate('MypartnersRefreshScreen')}>
                                <Icon type='Feather' name='refresh-cw' style={[S.F25, S.CLS, S.PH10]} />
                            </TouchableOpacity>
                        </View>
                        {button1.map((item, key)=><DButton1 key={key} {...item}/>)}
                        <View style={[S.ROW, S.Jbetween, S.Wrap]}>
                            {button2.map((item, key)=><DButton2 key={key} {...item}/>)}
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
