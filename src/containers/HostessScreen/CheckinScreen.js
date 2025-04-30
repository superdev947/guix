import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, Button } from 'native-base'
import { COLOR, defaultStyles } from '../../constants'
import { Headers } from '../../components'
import { navigate } from '../../redux/services/navigator'

const numbers = [
    {number:1, color:COLOR.Conquistan1Color, type:1},
    {number:2, color:COLOR.Conquistan1Color, type:1},
    {number:3, color:COLOR.Conquistan1Color, type:1},
    {number:4, color:COLOR.Conquistan1Color, type:1},
    {number:5, color:COLOR.Conquistan1Color, type:1},
    {number:6, color:COLOR.Conquistan1Color, type:1},
    {number:7, color:COLOR.Conquistan1Color, type:1},
    {number:8, color:COLOR.Conquistan7Color, type:2},
    {number:9, color:COLOR.Conquistan1Color, type:1},
    {number:10, color:COLOR.Conquistan7Color, type:2},
    {number:11, color:COLOR.Conquistan7Color, type:2},
    {number:12, color:COLOR.Conquistan7Color, type:2},
    {number:13, color:COLOR.Conquistan7Color, type:2},
    {number:14, color:COLOR.ButtonDescartar, type:3},
    {number:15, color:COLOR.ButtonDescartar, type:3},
    {number:16, color:COLOR.Conquistan1Color, type:1},
    {number:17, color:COLOR.Conquistan1Color, type:1},
    {number:18, color:COLOR.Conquistan1Color, type:1},
]

export class CheckinScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active:[]
        }
    }

    componentDidMount(){
    }

    onCheckIn(e, type){
        if(type===1){
            if(this.state.active.indexOf(e)>-1){
                let active = this.state.active.filter(a=>a!==e);
                this.setState({active})
            }else{
                this.setState({active:[...this.state.active, e]})
            }
        }
    }

    render() {
        const { 
            active,
        }=this.state
        return (
            <Container>
                <Headers
                    left={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                />
                <Content>
                    <View style={[S.PH20, S.PV10]}>
                        <Text style={[S.F40, S.FW700, S.Tcenter, S.CLS]}>Check-in</Text>
                        <View style={[S.ROW, S.Jbetween, S.Acenter, S.Wrap]}>
                            {numbers.map((item, key)=>(
                                <TouchableOpacity 
                                    key={key} 
                                    style={[S.MB10, S.PV20, S.Radius10, S.Jcenter, S.Acenter, S.W30P, {backgroundColor:active.indexOf(key)>-1?COLOR.ItemSelecionado:item.color}]} 
                                    onPress={()=>this.onCheckIn(key, item.type)}
                                >
                                    <Text style={[S.F48, S.FW700, S.CLT]}>{item.number}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </Content>
                {
                    active.length?<View style={[S.BKW, S.PH30, S.PV15]}>
                        <Text style={[S.F18, S.FW700, S.Tcenter, S.CLDAN]}>{active.length} cartão selecionado{active.length>1?'s':''}</Text>
                        <Button block style={[S.ButtonSuccess, S.MT10]} onPress={()=>navigate('SelecionarGuiaScreen')}>
                            <Text style={[S.ButtonText]}>Avançar</Text>
                        </Button>
                    </View>:null
                }
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


export default connect(mapStateToProps, mapDispatchToProps)(CheckinScreen)
