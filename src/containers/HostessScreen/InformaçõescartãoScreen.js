import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import { COLOR, defaultStyles } from '../../constants'
import { Headers } from '../../components'
import { navigate } from '../../redux/services/navigator'
const numbers = [
    {number:1, color:COLOR.Conquistan1Color},
    {number:2, color:COLOR.Conquistan1Color},
    {number:3, color:COLOR.Conquistan7Color},
    {number:4, color:COLOR.Conquistan7Color},
    {number:5, color:COLOR.Conquistan7Color},
    {number:6, color:COLOR.Conquistan7Color},
    {number:7, color:COLOR.Conquistan1Color},
    {number:8, color:COLOR.Conquistan7Color},
    {number:9, color:COLOR.Conquistan1Color},
    {number:10, color:COLOR.Conquistan7Color},
    {number:11, color:COLOR.Conquistan7Color},
    {number:12, color:COLOR.Conquistan7Color},
    {number:13, color:COLOR.Conquistan7Color},
    {number:14, color:COLOR.ButtonDescartar},
    {number:15, color:COLOR.ButtonDescartar},
    {number:16, color:COLOR.Conquistan1Color},
    {number:17, color:COLOR.Conquistan1Color},
    {number:18, color:COLOR.Conquistan1Color},
]
export class InformaçõescartãoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    }

    onActive(item){
        if(item.number===6){
            navigate('DetalhadasdocartãoScreen')
        }
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
                />
                <Content>
                    <View style={[S.PH20, S.PV10]}>
                        <Text style={[S.F40, S.FW700, S.Tcenter, S.CLS]}>Consultar</Text>
                        <View style={[S.ROW, S.Jbetween, S.Acenter, S.Wrap]}>
                            {numbers.map((item, key)=>(
                                <TouchableOpacity key={key} style={[S.MB10, S.PV20, S.Radius10, S.Jcenter, S.Acenter, S.W30P, {backgroundColor:item.color}]} 
                                    onPress={()=>this.onActive(item)}>
                                    <Text style={[S.F48, S.FW700, S.CLT]}>{item.number}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(InformaçõescartãoScreen)
