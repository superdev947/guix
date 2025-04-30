import { LAYOUT } from '../constants'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DashboardScreen from '../containers/HostessScreen/DashboardScreen'
import CheckinScreen from '../containers/HostessScreen/CheckinScreen'
import SelecionarGuiaScreen from '../containers/HostessScreen/SelecionarGuiaScreen'
import CheckininformaçõesScreen from '../containers/HostessScreen/CheckininformaçõesScreen'
import PromoçõesdorestauranteScreen from '../containers/HostessScreen/PromoçõesdorestauranteScreen'
import InformaçõescartãoScreen from '../containers/HostessScreen/InformaçõescartãoScreen'
import DetalhadasdocartãoScreen from '../containers/HostessScreen/DetalhadasdocartãoScreen'
import MypartnersScreen from '../containers/HostessScreen/MypartnersScreen'
import LojashavaianasdepipaScreen from '../containers/HostessScreen/LojashavaianasdepipaScreen'
import MeusclientesScreen from '../containers/HostessScreen/MeusclientesScreen'
import GerenciarRecompensasScreen from '../containers/HostessScreen/GerenciarRecompensasScreen'
import DefinirrecompensasScreen from '../containers/HostessScreen/DefinirrecompensasScreen'
import GuiasvinculadosScreen from '../containers/HostessScreen/GuiasvinculadosScreen'
import VincularGuiaScreen from '../containers/HostessScreen/VincularGuiaScreen'
import GerenciarReservasScreen from '../containers/HostessScreen/GerenciarReservasScreen'
import GerenciarReservasFilterScreen from '../containers/HostessScreen/GerenciarReservasFilterScreen'
import CriarpromoçãoScreen from '../containers/HostessScreen/CriarpromoçãoScreen'
import CriarpromoçãoSearchScreen from '../containers/HostessScreen/CriarpromoçãoSearchScreen'
import StoresScreen from '../containers/HostessScreen/StoresScreen'

import NotificationsScreen from '../containers/GuideScreen/NotificationsScreen'

const HomeNavigator = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: LAYOUT.header,
    },
    NotificationsScreen: {
      screen: NotificationsScreen,
      navigationOptions: LAYOUT.header,
    },
    CheckinScreen: {
      screen: CheckinScreen,
      navigationOptions: LAYOUT.header,
    },
    SelecionarGuiaScreen: {
      screen: SelecionarGuiaScreen,
      navigationOptions: LAYOUT.header,
    },
    CheckininformaçõesScreen: {
      screen: CheckininformaçõesScreen,
      navigationOptions: LAYOUT.header,
    },
    PromoçõesdorestauranteScreen: {
      screen: PromoçõesdorestauranteScreen,
      navigationOptions: LAYOUT.header,
    },
    InformaçõescartãoScreen: {
      screen: InformaçõescartãoScreen,
      navigationOptions: LAYOUT.header,
    },
    DetalhadasdocartãoScreen: {
      screen: DetalhadasdocartãoScreen,
      navigationOptions: LAYOUT.header,
    },
    MypartnersScreen: {
      screen: MypartnersScreen,
      navigationOptions: LAYOUT.header,
    },
    LojashavaianasdepipaScreen: {
      screen: LojashavaianasdepipaScreen,
      navigationOptions: LAYOUT.header,
    },
    MeusclientesScreen: {
      screen: MeusclientesScreen,
      navigationOptions: LAYOUT.header,
    },
    GerenciarRecompensasScreen: {
      screen: GerenciarRecompensasScreen,
      navigationOptions: LAYOUT.header,
    },
    DefinirrecompensasScreen: {
      screen: DefinirrecompensasScreen,
      navigationOptions: LAYOUT.header,
    },
    GuiasvinculadosScreen: {
      screen: GuiasvinculadosScreen,
      navigationOptions: LAYOUT.header,
    },
    VincularGuiaScreen: {
      screen: VincularGuiaScreen,
      navigationOptions: LAYOUT.header,
    },
    GerenciarReservasScreen: {
      screen: GerenciarReservasScreen,
      navigationOptions: LAYOUT.header,
    },
    GerenciarReservasFilterScreen: {
      screen: GerenciarReservasFilterScreen,
      navigationOptions: LAYOUT.header,
    },
    CriarpromoçãoScreen: {
      screen: CriarpromoçãoScreen,
      navigationOptions: LAYOUT.header,
    },
    CriarpromoçãoSearchScreen: {
      screen: CriarpromoçãoSearchScreen,
      navigationOptions: LAYOUT.header,
    },
    StoresScreen: {
      screen: StoresScreen,
      navigationOptions: LAYOUT.header,
    },
  },
  {
    initialRouteName: 'DashboardScreen',
  }
)

export default createAppContainer(HomeNavigator)