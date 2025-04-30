import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import { defaultStyles, Images } from '../../constants'
import { DButton1, DButton2, Headers } from '../../components'
import { navigate, setNavigator } from '../../redux/services/navigator'
import { logOut } from '../../redux/actions/authActions'

const button1 = [
    {title:'Check-in', screen:'CheckinScreen', icon:Images.SuccesIconWhite},
]

const button2 = [
    {title:'Minhas\n Promoções', screen:'PromoçõesdorestauranteScreen', icon:Images.dollarIcon},
    {title:'Vincular\n Guia', screen:'VincularGuiaScreen', icon:Images.userMenuPlues},
    {title:'Gerenciar\n Reservas', screen:'GerenciarReservasScreen', icon:Images.bookmarkIcon},
    {title:'Criar\n promoções', screen:'CriarpromoçãoScreen', icon:Images.shoppingcartIcon},
    {title:'Ver Guias\n vinculados', screen:'GuiasvinculadosScreen', icon:Images.userMenuIcon},
    {title:'\n Consultar', screen:'InformaçõescartãoScreen', icon:Images.SearchIcon},
    {title:'\n E-Voucher', screen:'', icon:Images.Group},
    {title:'\n Agências', screen:'MypartnersScreen', icon:Images.briefcaseIcon},
    {title:'Meus\n Clientes', screen:'MeusclientesScreen', icon:Images.userMenuIcon},
    {title:'Gerenciar\n Recompensas', screen:'GerenciarRecompensasScreen', icon:Images.smileIcon},
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
                        <Text style={[S.F40, S.Tcenter, S.CLS, S.FW700]}>Hostess</Text>
                        <Text style={[S.F18, S.Tcenter, S.CLB, S.FW400, S.MB10]}>Restaurante seja sempre bem vindo</Text>
                        {button1.map((item, key)=><DButton1 key={key} {...item}/>)}
                        <View style={[S.ROW, S.Jbetween, S.Wrap, S.MT10]}>
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
