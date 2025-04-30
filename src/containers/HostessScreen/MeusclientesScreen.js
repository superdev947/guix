import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Text } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { UserItem, Headers } from '../../components'
import { navigate } from '../../redux/services/navigator'

const userList = [
    {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color},
    {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color},
    {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color},
    {image:Images.defaultProfile2, name:'Pedro João da silva costa junior', email:'jp@olamundo.com.br', count:4, color:COLOR.Conquistan4Color},
    {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color},
    {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color},
    {image:Images.defaultProfile, name:'João Pedro', email:'pedrojoao@meumundo.com.br', count:2, color:COLOR.Conquistan2Color},
    {image:Images.defaultProfile2, name:'Pedro João da silva costa junior', email:'jp@olamundo.com.br', count:4, color:COLOR.Conquistan4Color},
]


export class MeusclientesScreen extends Component {
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
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }   
                    right={
                        <TouchableOpacity onPress={()=>navigate('')}>
                            <Icon type='MaterialIcons' name='search' style={[S.F25, S.CLT, S.PL15]} />
                        </TouchableOpacity>
                    }
                />
                <Content>
                    <View style={[S.PH30, S.PV10]}>
                        <Text style={[S.F40, S.FW700, S.Tleft, S.CLS]}>Clientes</Text>
                        {userList.map((item, key)=>
                            <TouchableOpacity key={key} onPress={()=>navigate('CheckininformaçõesScreen')}>
                                <UserItem {...item}/>
                            </TouchableOpacity>
                        )}
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
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MeusclientesScreen)
