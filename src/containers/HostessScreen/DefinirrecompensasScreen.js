import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import normalize from 'react-native-normalize'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Header, Icon, Input, Item } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import DateTimePicker from '@react-native-community/datetimepicker';

class DefinirrecompensasScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first : '',
            second : '',
            third : '',
            date:new Date(),
            show : false,
        }
    }

    render() {
        const {
            first,
            second,
            third,
            date,
            show,
        } = this.state;
        return (
            <Container>
                <Header style={[S.BKWAR, S.H80]} androidStatusBarColor={COLOR.warning} iosBarStyle={COLOR.warning}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={[S.W100P, S.P10]}>
                        <Icon name='arrowleft' type='AntDesign' style={[S.CLT, S.F23]}/>
                    </TouchableOpacity>
                    <Image source={Images.Logo1} style={[S.Logo, S.POSA, {bottom:-normalize(60), flex:1}]}/>
                </Header>
                <Content style={[S.PH25]}>
                    <View style={[S.MT80, S.MB50, S.BKW]}>
                        <Text style={[S.CLWAR, S.F30, S.FW700]}>Bem vindo ao sistema de recompensas!</Text>
                        <Text style={[S.CLB, S.F16, S.FW400, S.MT30]}>Defina abaixo quais os prêmios o guia vai ganhar quando atingir esse nível.</Text>
                        <Item regular style={[S.PH10, S.MT10,S.BKPrincipal, {borderColor:COLOR.Tag3Color}]}>
                            <Icon name='award' type='Feather' style={[S.InputIcon]} />
                            <Input 
                                placeholder='Primeiro Prêmio' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={first}
                                onChangeText={e=>this.setState({first:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10,S.BKPrincipal, {borderColor:COLOR.Tag3Color}]}>
                            <Icon name='award' type='Feather' style={[S.InputIcon]} />
                            <Input 
                                placeholder='Segundo Prêmio' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={second}
                                onChangeText={e=>this.setState({second:e})}
                            />
                        </Item>
                        <Item regular style={[S.PH10, S.MT10,S.BKPrincipal, {borderColor:COLOR.Tag3Color}]}>
                            <Icon name='award' type='Feather' style={[S.InputIcon]} />
                            <Input 
                                placeholder='Terceiro Prêmio' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={third}
                                onChangeText={e=>this.setState({third:e})}
                            />
                        </Item>
                        <Text style={[S.CLB, S.F16, S.FW400, S.MT30]}>Até quando essa promoção vai durar?</Text>
                        <Item regular style={[S.PH10, S.MT10,S.BKPrincipal, {borderColor:COLOR.Tag3Color}]}>
                            <Icon name='award' type='Feather' style={[S.InputIcon]} />
                            <Input 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={Moment(date).format('MM/DD/YYYY')}
                                onFocus={e=>this.setState({show:'date'})}
                            />
                        </Item>
                    </View>
                </Content>
                {show?<DateTimePicker
                    testID="dateTimePicker"
                    value={this.state[show]}
                    mode={show}
                    is24Hour={true}
                    display="default"
                    onChange={(a,e)=>this.setState({[show]:e, show:false})}
                />:null}
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

export default connect(mapStateToProps, mapDispatchToProps)(DefinirrecompensasScreen)
