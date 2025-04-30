import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Title } from 'native-base'
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


export class MeusGuiasScreen extends Component {
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
                        <TouchableOpacity onPress={()=>navigate('VincularGuiaScreen')}>
                            <Icon type='AntDesign' name='plus' style={[S.F25, S.CLT, S.PL15]} />
                        </TouchableOpacity>
                    }
                    body={<Title>Meus Guias</Title>}
                />
                <Content>
                    <View style={[S.PH30, S.PV10]}>
                        {userList.map((item, key)=><UserItem key={key} {...item}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(MeusGuiasScreen)
