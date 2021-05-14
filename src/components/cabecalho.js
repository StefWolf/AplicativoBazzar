import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Cab, Desq} from '../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();
// <Image source = {require('../img/botao-de-menu.png')} style = {Cab.imagelist}></Image>

class Cabecalho extends Component{
    render(){
        return(
            <View style = {Cab.fundoCab}>
                <View style = {Cab.cabtitle}>
                    <Text style = {Cab.texttitle}>BAZZAAR</Text>
                </View>
                <View style = {Cab.outrosicons}>
                    <View style = {Cab.iconsoutros}>
                        <Icon name = 'search-sharp' size = {35} color = "white" />   
                    </View>
                    <View style = {Cab.iconsoutros}>
                        <Icon name = 'cart-outline' size = {35} color = "white" />
                    </View>
                    <View style = {Cab.iconsoutros}>
                        <Icon name = 'ios-person-circle-outline' size = {35} color = "white" />
                    </View>
                </View>
            </View>
        );
    }
}
export default Cabecalho;