import { LAYOUT } from '../constants'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DashboardScreen from '../containers/GuideScreen/DashboardScreen'
import CreateAccountSuccessScreen from '../containers/GuideScreen/CreateAccountSuccessScreen'
import NotificationsScreen from '../containers/GuideScreen/NotificationsScreen'
import MyReservationsScreen from '../containers/GuideScreen/MyReservationsScreen'
import MyachievementsScreen from '../containers/GuideScreen/MyachievementsScreen'
import MypartnersScreen from '../containers/GuideScreen/MypartnersScreen'
import MypartnersSearchScreen from '../containers/GuideScreen/MypartnersSearchScreen'
import MypartnersRefreshScreen from '../containers/GuideScreen/MypartnersRefreshScreen'
import StoresScreen from '../containers/GuideScreen/StoresScreen'
import ProfileScreen from '../containers/GuideScreen/ProfileScreen'
import MovementofthedayScreen from '../containers/GuideScreen/MovementofthedayScreen'
import CommissionstatementScreen from '../containers/GuideScreen/CommissionstatementScreen'
import ReservecardsScreen from '../containers/GuideScreen/ReservecardsScreen'
import HawaiiankiteshopsScreen from '../containers/GuideScreen/HawaiiankiteshopsScreen'
import LojashavaianasdepipaScreen from '../containers/GuideScreen/LojashavaianasdepipaScreen'
import LojahavaianasdepipaScreen from '../containers/GuideScreen/LojahavaianasdepipaScreen'
import MypartnersSearchshopScreen from '../containers/GuideScreen/MypartnersSearchshopScreen'
import WhatsappScreen from '../containers/GuideScreen/WhatsappScreen'

const GuideNavigator = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: LAYOUT.header,
    },
    CreateAccountSuccessScreen: {
      screen: CreateAccountSuccessScreen,
      navigationOptions: LAYOUT.header,
    },
    NotificationsScreen: {
      screen: NotificationsScreen,
      navigationOptions: LAYOUT.header,
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: LAYOUT.header,
    },
    MyachievementsScreen: {
      screen: MyachievementsScreen,
      navigationOptions: LAYOUT.header,
    },
    MypartnersScreen: {
      screen: MypartnersScreen,
      navigationOptions: LAYOUT.header,
    },
    MypartnersSearchScreen: {
      screen: MypartnersSearchScreen,
      navigationOptions: LAYOUT.header,
    },
    MypartnersRefreshScreen: {
      screen: MypartnersRefreshScreen,
      navigationOptions: LAYOUT.header,
    },
    MyReservationsScreen: {
      screen: MyReservationsScreen,
      navigationOptions: LAYOUT.header,
    },
    StoresScreen: {
      screen: StoresScreen,
      navigationOptions: LAYOUT.header,
    },
    MovementofthedayScreen: {
      screen: MovementofthedayScreen,
      navigationOptions: LAYOUT.header,
    },
    CommissionstatementScreen: {
      screen: CommissionstatementScreen,
      navigationOptions: LAYOUT.header,
    },
    ReservecardsScreen: {
      screen: ReservecardsScreen,
      navigationOptions: LAYOUT.header,
    },
    HawaiiankiteshopsScreen: {
      screen: HawaiiankiteshopsScreen,
      navigationOptions: LAYOUT.header,
    },
    LojashavaianasdepipaScreen: {
      screen: LojashavaianasdepipaScreen,
      navigationOptions: LAYOUT.header,
    },
    LojahavaianasdepipaScreen: {
      screen: LojahavaianasdepipaScreen,
      navigationOptions: LAYOUT.header,
    },
    MypartnersSearchshopScreen: {
      screen: MypartnersSearchshopScreen,
      navigationOptions: LAYOUT.header,
    },
    WhatsappScreen: {
      screen: WhatsappScreen,
      navigationOptions: LAYOUT.header,
    },
  },
  {
    initialRouteName: 'CreateAccountSuccessScreen',
  }
)

export default createAppContainer(GuideNavigator)