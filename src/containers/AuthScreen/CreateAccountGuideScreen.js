import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Button, Container, Content, Header, Icon, Input, Item, Textarea } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { Login } from '../../redux/actions/authActions'

class CreateAccountGuideScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            email : '',
            cpf : '',
            whatsapp : '',
            password : '',
            details : '',
        }
    }

    render() {
        const {
            name,
            email,
            cpf,
            whatsapp,
            password,
            details,
        } = this.state;
        return (
            <Container>
                <Header style={[S.BKS, S.H80]} androidStatusBarColor={COLOR.StatusBarColor} iosBarStyle={COLOR.StatusBarColor}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={[S.W100P, S.P10]}>
                        <Icon name='arrowleft' type='AntDesign' style={[S.CLT, S.F23]}/>
                    </TouchableOpacity>
                    <Image source={Images.Logo} style={[S.Logo, S.POSA, {bottom:-normalize(60), flex:1}]}/>
                </Header>
                <Content style={[S.PH25]}>
                    <View style={[S.MT70, S.MB20, S.BKW]}>
                        <Item regular style={[S.PH10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Icon name='user' type='Feather' style={[S.InputIcon]} />
                            <Input 
                                placeholder='Nome*' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={name}
                                onChangeText={e=>this.setState({name:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Icon name='envelope-o' type='FontAwesome' style={[S.InputIcon]} />
                            <Input 
                                placeholder='E-mail*' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={email}
                                onChangeText={e=>this.setState({email:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Icon name='text-document' type='Entypo' style={[S.InputIcon]} />
                            <Input 
                                placeholder='CPF*' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={cpf}
                                onChangeText={e=>this.setState({cpf:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Icon name='phone' type='Feather' style={[S.InputIcon]} />
                            <Input
                                placeholder='WhatsApp*' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={whatsapp}
                                onChangeText={e=>this.setState({whatsapp:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10, {backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Icon name='key' type='Feather' style={[S.InputIcon]} />
                            <Input 
                                placeholder='Senha*' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={password}
                                onChangeText={e=>this.setState({password:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10,  {alignItems:'flex-start', backgroundColor:COLOR.BackgroundPrincipal}]}>
                            <Icon name='book-open' type='Feather' style={[S.PT10,S.InputIcon]} />
                             <Textarea 
                                rowSpan={4}
                                value={details}
                                onChangeText={e=>this.setState({details:e})}
                                style={[S.PR50,S.PT10,{borderColor:'transparent'}]}
                                placeholderTextColor={COLOR.InputBorder}
                                placeholder="Fale um pouco mais sobre você(Não obrigatório)"
                            />
                        </Item>
                    </View>
                    <Button block style={[S.ButtonSuccess]} onPress={()=>this.props.Login({...this.state, loginMethod:'Hostess'})}>
                        <Text style={[S.ButtonText]}>Criar</Text>
                    </Button>
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
    Login
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountGuideScreen)
