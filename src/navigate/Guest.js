import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { LAYOUT } from '../constants'
import LogInScreen from '../containers/AuthScreen/LogInScreen'
import CreateAccountScreen from '../containers/AuthScreen/CreateAccountScreen'
import CreateAccountHostessScreen from '../containers/AuthScreen/CreateAccountHostessScreen'
import CreateAccountGuideScreen from '../containers/AuthScreen/CreateAccountGuideScreen'
import CreateAccountAgencyScreen from '../containers/AuthScreen/CreateAccountAgencyScreen'

const HomeNavigator = createStackNavigator(
	{
		LogInScreen: {
			screen: LogInScreen,
			navigationOptions: LAYOUT.header,
		},
		CreateAccountScreen: {
			screen: CreateAccountScreen,
			navigationOptions: LAYOUT.header,
		},
		CreateAccountHostessScreen: {
			screen: CreateAccountHostessScreen,
			navigationOptions: LAYOUT.header,
		},
		CreateAccountGuideScreen: {
			screen: CreateAccountGuideScreen,
			navigationOptions: LAYOUT.header,
		},
		CreateAccountAgencyScreen: {
			screen: CreateAccountAgencyScreen,
			navigationOptions: LAYOUT.header,
		},
	},
	{
		initialRouteName: 'LogInScreen',
	}
)
	
export default createAppContainer(HomeNavigator)