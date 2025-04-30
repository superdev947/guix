import React from 'react'
import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen'
import { connect } from 'react-redux'
import { LogBox } from 'react-native'
import { Root } from "native-base"
import Splash from "./containers/Splash"
import GuestNavigation from './navigate/Guest'
import GuideNavigation from './navigate/Guide'
import HostessNavigation from './navigate/Hostess'
import AgencyNavigation from './navigate/Agency'

export class App extends React.Component {

  constructor(props) {
    LogBox.ignoreLogs(['Setting a timer']);
    super(props)
    this.state = {
      isLoadingComplete:false
    }
  }
  
  componentDidMount() {
    this.loadResourcesAndDataAsync();
  }

  async loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHideAsync()
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      })
    } catch (e) {
      console.warn(e);
    } finally {
      SplashScreen.hideAsync()
      this.setState({ isLoadingComplete: true })
    }
  }

  render() {
    const { isLogin, loginMethod } = this.props
    if(!this.state.isLoadingComplete){
      return <Splash />
    }else if(isLogin) {
      return (
        <Root>
          {loginMethod==='Guide'&&<GuideNavigation />}
          {loginMethod==='Hostess'&&<HostessNavigation />}
          {loginMethod==='Agency'&&<AgencyNavigation />}
        </Root>
      )
    } else {
      return (
        <Root>
          <GuestNavigation />
        </Root>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLogin:state.auth.isLogin,
  loginMethod:state.auth.loginMethod,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
