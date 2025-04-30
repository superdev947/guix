import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import { defaultStyles } from "../../constants"

class HomeScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      products:[],
    }
  }
  render(){
    return(
      <Container>
        <Content>
        </Content>
      </Container>
    )
  }
}

const S = StyleSheet.create({
  ...defaultStyles,
})

const mapStateToProps = (state) => ({
  user:state.auth.user,
})

export default connect(mapStateToProps, {})(HomeScreen)