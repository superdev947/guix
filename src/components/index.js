import React from "react"
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { Body, Header, Left, Right, Icon, Button } from "native-base"
import { COLOR, defaultStyles, Images, LAYOUT } from "../constants"
import { navigate } from "../redux/services/navigator"
import Rating from "./Rating"
import normalize from "react-native-normalize"
export { Rating }
export const Headers = ({left=null, right=null, body=null, color=COLOR.success, android=COLOR.StatusBarColor, ios=COLOR.StatusBarColor }) =>(
  <Header 
    hasSegment 
    style={[S.H60, {backgroundColor:color}]} 
    androidStatusBarColor={android} 
    iosBarStyle={ios}
  >
    <Left>{left?left:null}</Left>
    <Body style={{alignItems:'center'}}>{body?body:null}</Body>
    <Right>{right?right:null}</Right>
  </Header>
)

export const DButton1 = ({icon,title,screen}) =>(
  <TouchableOpacity style={[S.BKS, S.PV15, S.MT10, S.Acenter, {borderRadius:5}]} onPress={()=>navigate(screen)}>
    <Image source={icon} style={S.DIcon1}/>
    <Text style={[S.CLT, S.F15, S.FW700]}>{title}</Text>
  </TouchableOpacity>
)

export const DButton2 = ({icon,title,screen,big=false}) =>(
  <TouchableOpacity style={[S.BKS, S.PV15, S.MT10, S.Acenter, {borderRadius:5, width:LAYOUT.window.width*0.28}]} onPress={()=>navigate(screen)}>
    <Image source={icon} style={big?S.DIcon2B:S.DIcon2}/>
    <Text style={[S.CLT, S.F15, S.FW700, S.Tcenter]}>{title}</Text>
  </TouchableOpacity>
)

export const PartnersItem1 = ({}) =>(
  <View style={[S.ROW, S.Acenter, S.BKW,S.MT10, {borderRadius:5, overflow:'hidden'}]}>
    <Image source={Images.shopImage} style={S.shopImage}/>
    <View style={[S.P5]}>
      <Text style={[S.F18, S.FW700, S.CLS]}>Loja havaianas de pipa</Text>
      <Text style={[S.F14, S.FW400, S.MT30, {color:COLOR.Cinzadosdeuses} ]}>Natal, RN</Text>
    </View>
  </View>
)

export const PartnersItem2 = ({ishand=false}) =>(
  <TouchableOpacity style={[S.ROW, S.Acenter, S.BKW, S.MT10, {borderRadius:5, overflow:'hidden'}]} onPress={()=>navigate('LojashavaianasdepipaScreen', {ishand})}>
    <Image source={Images.shopImage} style={S.shopImage}/>
    <View style={[S.P5]}>
      <Text style={[S.F18, S.FW700, S.CLS]}>Loja havaianas de pipa</Text>
      <Text style={[S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>Contato: 84 3261 2229</Text>
      <View style={[S.MT30, S.Aend, S.ROW, S.Jbetween]}>
        <Text style={[S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>Natal, RN</Text>
        {ishand?null:<Icon type='FontAwesome' name='handshake-o'  style={[S.CLS, S.F24]}/>}
      </View>
    </View>
  </TouchableOpacity>
)

export const PartnersItem3 = ({}) =>(
  <TouchableOpacity style={[S.ROW, S.Acenter, S.BKW, S.MT10, {borderRadius:5, overflow:'hidden'}]} onPress={()=>navigate('CriarpromoçãoSearchScreen')}>
    <Image source={Images.shopImage} style={S.shopImage}/>
    <View style={[S.P5]}>
      <Text style={[S.F18, S.FW700, S.CLS]}>Loja havaianas de pipa</Text>
      <Text style={[S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>Contato: 84 3261 2229</Text>
      <View style={[S.MT30, S.Aend, S.ROW, S.Jbetween]}>
        <Text style={[S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>Natal, RN</Text>
        <Icon type='FontAwesome' name='handshake-o'  style={[S.CLS, S.F24]}/>
      </View>
    </View>
  </TouchableOpacity>
)

export const ReservationItem = ({}) =>(
  <View style={[S.ROW, S.Acenter, S.BKW, S.MT10, {borderRadius:5, overflow:'hidden'}]}>
    <Image source={Images.shopImage1} style={S.shopImage1}/>
    <View style={[S.P5]}>
      <Text style={[S.F18, S.FW700, S.CLS]}>Loja havaianas de pipa</Text>
      <View style={[S.ROW]}>
        <View style={[S.PH5]}>
          <Text style={[S.MT10, S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>Você reservou:</Text>
          <Text style={[S.MT10, S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>Para o dia:</Text>
          <Text style={[S.MT10, S.F14, S.FW400, {color:COLOR.Cinzadosdeuses} ]}>às:</Text>
        </View>
        <View style={[S.PH5]}>
          <Text style={[S.MT10, S.F14, S.FW400, S.CLS ]}> 40 Cartões</Text>
          <Text style={[S.MT10, S.F14, S.FW400, S.CLS ]}> 12/12/2012</Text>
          <Text style={[S.MT10, S.F14, S.FW400, S.CLS ]}>  08:00</Text>
        </View>
      </View>
      <View style={[S.MT20, S.Acenter, S.ROW, S.Jbetween]}>
        <Button style={[S.BKS, S.H30]}>
          <Text style={[S.F14, S.FW400, S.CLT, S.PH10]}>Confirmada</Text>
        </Button>
        <Icon type='Feather' name='trash-2'  style={[S.CLDAN, S.F24]}/>
      </View>
    </View>
  </View>
)

export const Movementoftheday = ({number, value, type}) =>(
  <View style={[S.PR20, S.Acenter, S.PV10, S.ROW, S.Jbetween, S.MB15, S.BKW, {borderRadius:5}]}>
    <View style={[S.ROW, S.Acenter]}>
      <View style={[type===1?S.BKS:S.BKDAN, {borderTopLeftRadius:0, borderTopRightRadius:3, borderBottomLeftRadius:0, borderBottomRightRadius:3, width:4, height:normalize(25)}]}/>
      <Text style={[S.PL20, S.F18, S.FW400, {color:COLOR.IconColor2}]}>{number}</Text>
    </View>
    <Text style={[S.F18, S.FW700, type===1?S.CLS:S.CLDAN]}>{value}</Text>
  </View>
)

export const Hawaiiankiteshops = () =>(
  <View style={[S.Radius5, S.MV10, S.Hidden, S.BKW]}>
    <Image source={Images.bear} style={[S.M0,{height:normalize(200), resizeMode:'contain'}]}/>
    <View style={[S.P20]}>
        <Text style={[S.F18, S.FW700, S.CLS]}>Na compra de uma pizza GG e uma coca-cola 3,5L ganha um Heineken 0800</Text>
        <Text style={[S.F14, S.FW400, S.CLI]}>Essa promoção é válida apenas para as pizzas de chocolate e leite condensado</Text>
        <View style={[S.ROW, S.Jend]}>
            <Text style={[S.F14, S.FW400, S.CLI]}>Válido até: </Text>
            <Text style={[S.F14, S.FW700, S.CLS]}>12/12/2012</Text>
        </View>
    </View>
  </View>
)

//====================agency===================================
export const UserItem = ({image, name, email, count, color=COLOR.Conquistan2Color}) =>(
  <View style={[S.ROW, S.PV10, {borderBottomWidth:1, borderColor:COLOR.InputBorder}]}> 
    <View style={[S.P5, {borderWidth:2, borderRadius:normalize(45), borderColor:color}]}>
      <Image source={image} style={S.defaultProfile}/>
      <Text style={[S.POSA, S.Radius10, S.CLT, S.F13, {top:-5, left:-5, backgroundColor:color}]}>  {count}  </Text>
    </View>
    <View style={[S.ML20]}>
      <Text style={[S.FW700, S.F18, S.CLI]}>{name}</Text>
      <Text style={[S.FW300, S.F18, S.CLI]}>{email}</Text>
    </View>
  </View>
)

export const Promoçõesdorestaurante = () =>(
  <View style={[S.Radius5, S.MV10, S.Hidden, S.BKW, S.ROW]}>
    <Image source={Images.bear1} style={[S.M0,{width:normalize(125),height:normalize(110), resizeMode:'contain'}]}/>
    <View style={[S.P10, {width:LAYOUT.window.width-normalize(150)}]}>
      <Text style={[S.F14, S.FW400, S.CLI, S.PB30]}>Na compra de uma pizza GG e uma coca-cola 3,5L ganha um Heineken 0800</Text>
      <View style={[S.ROW, S.Jend, S.PH10]}>
        <Text style={[S.F14, S.FW700, S.CLB]}>Válido até: </Text>
        <Text style={[S.F14, S.FW700, S.CLS]}>12/12/2012</Text>
      </View>
    </View>
  </View>
)

export const GerenciarRecompensa = ({index}) =>(
<View style={[S.BKW, S.MT10,S.Radius5,S.Hidden]}>
  <View style={[S.ROW, S.Jbetween, S.Acenter, S.PH20, S.PV10, {backgroundColor:COLOR[`Conquistan${index}Color`]}]}>
    <View style={[S.ROW, S.Jbetween, S.Acenter]}>
        <Text style={[S.CLT, S.F18, S.FW700, S.MR10]}>Nível</Text>
        <Text style={[S.CLT, S.F18, S.FW700, S.PH10, S.Tcenter, S.Tvcenter, {borderWidth:2, borderRadius:normalize(20), borderColor:COLOR.whiteColor}]}>{index}</Text>
    </View>
    <TouchableOpacity>
        <Icon type='SimpleLineIcons' name='lock-open' style={[S.F25, S.CLT]} />
    </TouchableOpacity>
  </View>
  <View style={[S.P20, S.PB50]}>
    <View style={[S.ROW, S.Acenter]}>
        <Icon type='MaterialCommunityIcons' name='checkbox-blank-circle' style={[S.F15, {color:COLOR[`Conquistan${index}Color`]}]} />
        <Text style={[S.ML10, S.F18, S.FW700, {color:COLOR[`Conquistan${index}Color`]}]}>1% extra na comissão</Text>
    </View>
    <View style={[S.ROW, S.Acenter]}>
        <Icon type='MaterialCommunityIcons' name='checkbox-blank-circle' style={[S.F15, {color:COLOR[`Conquistan${index}Color`]}]} />
        <Text style={[S.ML10, S.F18, S.FW700, {color:COLOR[`Conquistan${index}Color`]}]}>1% extra na comissão</Text>
    </View>
    <View style={[S.ROW, S.Acenter]}>
        <Icon type='MaterialCommunityIcons' name='checkbox-blank-circle' style={[S.F15, {color:COLOR[`Conquistan${index}Color`]}]} />
        <Text style={[S.ML10, S.F18, S.FW700, {color:COLOR[`Conquistan${index}Color`]}]}>1% extra na comissão</Text>
    </View>
  </View>
</View>
)

export const GerenciarReservas = ({image, name, email, count, color, button, trashcolor}) =>(
  <View style={[S.Radius5, S.Hidden, S.BKW, S.PH10, S.PV10, S.MT20]}>
    <View style={[S.ROW, S.Jbetween, S.PV10]}>
      <View style={[S.ROW]}> 
        <View style={[S.P5, {borderWidth:2, borderRadius:normalize(45), borderColor:color}]}>
          <Image source={image} style={S.defaultProfile}/>
          <Text style={[S.POSA, S.Radius10, S.CLT, S.F13, {top:-5, left:-5, backgroundColor:color}]}>  {count}  </Text>
        </View>
        <View style={[S.ML20]}>
          <Text style={[S.FW700, S.F18, S.CLI]}>{name}</Text>
          <Text style={[S.FW300, S.F18, S.CLI]}>{email}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon type='Feather' name='trash-2'  style={[S.F24, {color:trashcolor}]}/>
      </TouchableOpacity>
    </View>
    <View style={[S.ROW, S.Jbetween, S.Aend]}>
      {button}
      <View>
        <View style={[S.ROW, S.Jbetween]}>
          <Text style={[S.F14, S.FW400, S.CLI]}>Reservou: </Text>
          <Text style={[S.F14, S.FW400, S.CLS]}>40 Cartões</Text>
        </View>
        <View style={[S.ROW, S.Jbetween]}>
          <Text style={[S.F14, S.FW400, S.CLI]}>Para o dia: </Text>
          <Text style={[S.F14, S.FW400, S.CLS]}>12/12/2012</Text>
        </View>
        <View style={[S.ROW, S.Jbetween]}>
          <Text style={[S.F14, S.FW400, S.CLI]}>às: </Text>
          <Text style={[S.F14, S.FW400, S.CLS]}>08:00</Text>
        </View>
      </View>
    </View>
  </View>
)


const S = StyleSheet.create({
  ...defaultStyles,
})