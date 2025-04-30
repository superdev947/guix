import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import * as ImagePicker from 'expo-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, TouchableOpacity, Modal, Text, Image } from 'react-native'
import { Container, Content, Icon, Title, Item, Input, CheckBox, Footer, FooterTab, Button } from 'native-base'
import { COLOR, defaultStyles, Images, LAYOUT} from '../../constants'
import { Headers } from '../../components'
import { navigate } from '../../redux/services/navigator'
import normalize from 'react-native-normalize'
import { Slider } from "@miblanchard/react-native-slider"


export class CriarpromoçãoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Promotion:'',
            date1:new Date(),
            date2:new Date(),
            date3:new Date(),
            percent:0,
            photo:null,
            show1:false,
            show2:false,
            show3:false,
        }
    }
    async pickImage(){
        try{
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
          })
          if(!result.cancelled) {
            this.setState({photo:result.uri})
          }
        }catch(e){console.log(e)}
    }

    render() {
        const {
            Promotion,
            date1,
            date2,
            date3,
            percent,
            photo,
            show1,
            show2,
            show3,
        }=this.state;
        return (
            <Container>
                <Headers 
                    left={
                        <TouchableOpacity onPress={()=>navigate('DashboardScreen')}>
                            <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                        </TouchableOpacity>
                    }
                    body={<Title>Criar promoção</Title>}
                />
                <Content style={[S.BKW]}>
                    <View style={[S.PH20, S.PV10]}>
                        {
                            photo?
                            <TouchableOpacity onPress={()=>this.pickImage()} style={[[S.cameraCover, S.Hidden]]}>
                                <Image source={{uri:photo}} style={[S.W100P, S.H100P, {resizeMode:'cover'}]}/>
                            </TouchableOpacity>:
                            <View style={[S.cameraCover]}>
                                <TouchableOpacity onPress={()=>this.pickImage()}>
                                <Image source={Images.cameraIcon} style={[S.cameraIcon]}/>
                                </TouchableOpacity>
                            </View>
                        }
                        <Item regular style={[S.PH10, S.MT20, {borderColor:COLOR.Tag1Color}]}>
                            <Icon type='Feather' name='tag' style={[S.CLI, S.F24]}/>
                            <Input 
                                placeholder='Promoção*' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={Promotion}
                                onChangeText={e=>this.setState({Promotion:e})}
                            />
                        </Item>
                        <Text style={[S.F14, S.FW400, S.MT15, S.Tleft]}>Início da promoção</Text>
                        <Item regular style={[S.PH10,  {borderColor:COLOR.Tag1Color}]}>
                            <Icon type='Feather' name='calendar' style={[S.CLI, S.F24]}/>
                            <Input 
                                placeholder='12/12/2012' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={Moment(date1).format('MM/DD/YYYY')}
                                onFocus={()=>this.setState({show1:!show1})}
                            />
                        </Item>
                        <Text style={[S.F14, S.FW400, S.MT15, S.Tleft]}>Fim da promoção</Text>
                        <Item regular style={[S.PH10,  {borderColor:COLOR.Tag1Color}]}>
                            <Icon type='Feather' name='calendar' style={[S.CLI, S.F24]}/>
                            <Input 
                                placeholder='12/12/2012' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={Moment(date2).format('MM/DD/YYYY')}
                                onFocus={()=>this.setState({show2:!show2})}
                            />
                        </Item>
                        <Text style={[S.F14, S.FW400, S.MT15, S.Tleft]}>Sobre a promoção</Text>
                        <Item regular style={[S.PH10,  {borderColor:COLOR.Tag1Color}]}>
                            <Icon type='Feather' name='calendar' style={[S.CLI, S.F24]}/>
                            <Input 
                                placeholder='12/12/2012' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={Moment(date3).format('MM/DD/YYYY')}
                                onFocus={()=>this.setState({show3:!show3})}
                            />
                        </Item>
                        <View style={[S.ROW, S.MT15]}>
                            <Text style={[S.F14, S.FW400, S.CLB]}>Quantos porcentos de desconto: </Text>
                            <Text style={[S.F14, S.FW700, S.CLS]}>{Math.floor(percent*100)}%</Text>
                        </View>
                        <Text style={[S.F14, S.FW400, S.CLI]}>Se sua promoção não tiver desconto, desconsidere esse campo</Text>
                        <Slider
                            thumbTintColor={COLOR.success}
                            maximumTrackTintColor={COLOR.InputBorder}
                            minimumTrackTintColor={COLOR.success}
                            value={percent}
                            useNativeDriver={true}
                            onValueChange={(e) => this.setState({percent:e[0]})} 
                        />
                        <Button block style={[S.ButtonSuccess, S.MV20]}>
                            <Text style={[S.ButtonText]}>Criar</Text>
                        </Button>
                    </View>
                    {show1?<DateTimePicker
                        testID="dateTimePicker"
                        value={date1}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={(a,e)=>this.setState({date1:e, show1:false})}
                    />:null}
                    {show2?<DateTimePicker
                        testID="dateTimePicker"
                        value={date2}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={(a,e)=>this.setState({date2:e, show2:false})}
                    />:null}
                    {show3?<DateTimePicker
                        testID="dateTimePicker"
                        value={date3}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={(a,e)=>this.setState({date3:e, show3:false})}
                    />:null}
                    
                </Content>
                <Footer style={[S.H60]}>
                    <FooterTab style={[S.BKS]}>
                        <Button vertical>
                            <Image source={Images.user1} style={S.footerIcon}/>
                            <Text style={[S.F14, S.FW700, {color:COLOR.Green4Color}]}>Geral</Text>
                        </Button>
                        <View style={{borderColor:COLOR.whiteColor, borderLeftWidth:1}}/>
                        <Button vertical onPress={()=>navigate('StoresScreen')}>
                            <Image source={Images.heartIcon} style={S.footerIcon}/>
                            <Text style={[S.F14, S.FW700, S.CLT]}>Exclusiva</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const S = StyleSheet.create({
    ...defaultStyles,
    cameraCover:{
        marginTop:normalize(20),
        width:'100%',
        height:normalize(180),
        borderRadius:5,
        borderColor:COLOR.Tag1Color,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    cameraIcon:{
        width:normalize(50),
        height:normalize(50),
        resizeMode:'contain'
    },
    
})


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CriarpromoçãoScreen)
