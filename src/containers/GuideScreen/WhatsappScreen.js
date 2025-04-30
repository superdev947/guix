import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { StyleSheet,  View, TouchableOpacity, Text, Image } from 'react-native'
import { Button, Container, Content, Footer, Icon, Item, Input } from 'native-base'
import { COLOR, defaultStyles, Images } from '../../constants'
import { Headers } from '../../components'
import { navigate } from '../../redux/services/navigator'

class WhatsappScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'Você ganhou um voucher',
            messageList:[
                {me:false, message:'Você ganhou'},
                {me:true, see:true, message:'Você'},
                {me:false, message:'um voucher'},
                {me:true, see:true, message:'um voucher'},
            ],
            emojiList:[]
        }
    }
    send(){
        let message ={
            me:true,
            see:false,
            message:this.state.message,
            link:'https://guix.com.br/evoucher?ADF34373D'
        }
        this.setState({messageList:[...this.state.messageList, message], message:''})
    }

    render() {
        const {
            message,
            messageList,
            emojiList 
        } =this.state
        return (
            <Container>
                <Headers
                    color={COLOR.Green1Color}
                    ios={COLOR.Green2Color}
                    android={COLOR.Green2Color}
                    left={
                        <View style={[S.Acenter, S.ROW]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Icon type='AntDesign' name='arrowleft' style={[S.CLT, S.F24]}/>
                            </TouchableOpacity>
                            <View style={[S.Aend, S.ROW]}>
                                <Image source={Images.defaultProfile} style={[S.defaultProfile]}/>
                            <   Text style={[S.F15, S.CLT, S.FW300]}>Online</Text>
                            </View>
                        </View>
                    }
                    right={
                        <View style={[S.Acenter, S.ROW]}>
                            <TouchableOpacity>
                                <Icon type='FontAwesome' name='video-camera' style={[S.CLT, S.F24]}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon type='MaterialIcons' name='local-phone' style={[S.CLT, S.F24, S.PH25]}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon type='Feather' name='more-vertical' style={[S.CLT, S.F24]}/>
                            </TouchableOpacity>
                        </View>
                    }
                />
                <Content style={[{backgroundColor:COLOR.GrayColor}]}>
                    <View style={[S.P20]}>
                        {
                            messageList.length?messageList.map((item, key)=>(
                                <View key={key} style={[S.W100P]}>
                                    {item.me===true?
                                        <View style={[S.W100P, S.Aend]}>
                                            <View style={[S.message1Cover, S.Aend]}>
                                                <Text style={S.messageText}>{item.message}</Text>
                                                {item.link?
                                                    <TouchableOpacity onPress={()=>navigate('LojahavaianasdepipaScreen', {image:true})}>
                                                        <Text style={[S.messageText, {color:COLOR.Blue1Color}]}>{item.link}</Text>
                                                    </TouchableOpacity>
                                                :null}
                                                <Icon type='MaterialIcons' name={item.see?'done-all':'done'} style={[S.CLT, S.F24, S.PH10,{color:COLOR.BlueColor}]}/>
                                            </View>
                                            <View style={[S.message1IconCover]}>
                                                <Image source={Images.PolygonIcon1} style={[S.messageIcon]}/>
                                            </View>
                                        </View>
                                        :
                                        <View style={[S.W100P, S.Astart]}>
                                            <View style={[S.message2Cover]}>
                                                <Text style={S.messageText}>{item.message}</Text>
                                            </View>
                                            <View style={[S.message2IconCover]}>
                                                <Image source={Images.PolygonIcon2} style={[S.messageIcon]}/>
                                            </View>
                                        </View>
                                    }
                                </View>
                            )):null
                        }
                    </View>
                </Content>
                <Footer style={[{backgroundColor:COLOR.GrayColor, elevation:0}, S.Acenter]}>
                    <View style={[{flex:1}, S.PB10, S.PH10]}>
                        <Item rounded style={[S.BKW]}>
                            <TouchableOpacity>
                                <Icon type='MaterialIcons' name='tag-faces' style={[S.CLI, S.F25]}/>
                            </TouchableOpacity>
                            <Input 
                                keyboardType='visible-password'
                                placeholder='Message' 
                                placeholderTextColor={COLOR.InputBorder} 
                                style={[S.InputText]}
                                value={message}
                                onChangeText={e=>this.setState({message:e})}
                            />
                            <TouchableOpacity>
                                <Icon type='Feather' name='paperclip' style={[S.CLI, S.F25]}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[S.PR10]}>
                                <Icon type='MaterialIcons' name='photo-camera' style={[S.CLI, S.F25]}/>
                            </TouchableOpacity>
                        </Item>
                    </View>
                    <Button rounded style={[{backgroundColor:COLOR.Green1Color}, S.MR10]} onPress={()=>this.send()}>
                        <Icon type='MaterialIcons' name='send' style={[S.CLT, S.F24]}/>
                    </Button>
                </Footer>
            </Container>
        )
    }
}

const S = StyleSheet.create({
    ...defaultStyles,
    messageText:{
        ...defaultStyles.PH20, 
        ...defaultStyles.PV10, 
        ...defaultStyles.F18, 
        ...defaultStyles.FW300, 
    },
    message1Cover:{
        ...defaultStyles.MT10, 
        ...defaultStyles.BoxShadow, 
        ...defaultStyles.Radius5,
        maxWidth:'60%', 
        backgroundColor:COLOR.Green3Color,
    },
    message2Cover:{
        ...defaultStyles.MT10, 
        ...defaultStyles.BoxShadow, 
        ...defaultStyles.Radius5,
        ...defaultStyles.BKW,
        maxWidth:'60%', 
    },
    messageIcon:{
        width:normalize(23),
        height:normalize(18),
        resizeMode:'contain',
    },
    message1IconCover:{
        elevation:3,
        position:'absolute',
        right:-normalize(15),
        top:normalize(5),
    },
    message2IconCover:{
        elevation:3,
        position:'absolute',
        left:-normalize(15),
        top:normalize(5),
    },
})


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatsappScreen)
