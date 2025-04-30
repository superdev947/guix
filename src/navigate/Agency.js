import { LAYOUT } from '../constants'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DashboardScreen from '../containers/AgencyScreen/DashboardScreen'
import MeusGuiasScreen from '../containers/AgencyScreen/MeusGuiasScreen'

import MypartnersScreen from '../containers/GuideScreen/MypartnersScreen'
import LojashavaianasdepipaScreen from '../containers/GuideScreen/LojashavaianasdepipaScreen'
import ReservecardsScreen from '../containers/GuideScreen/ReservecardsScreen'
import StoresScreen from '../containers/GuideScreen/StoresScreen'
import VincularGuiaScreen from '../containers/AgencyScreen/VincularGuiaScreen'

const HomeNavigator = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: LAYOUT.header,
    },
    MeusGuiasScreen: {
      screen: MeusGuiasScreen,
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
    ReservecardsScreen: {
      screen: ReservecardsScreen,
      navigationOptions: LAYOUT.header,
    },
    StoresScreen: {
      screen: StoresScreen,
      navigationOptions: LAYOUT.header,
    },
    VincularGuiaScreen: {
      screen: VincularGuiaScreen,
      navigationOptions: LAYOUT.header,
    },
  },
  {
    initialRouteName: 'DashboardScreen',
  }
)

export default createAppContainer(HomeNavigator)