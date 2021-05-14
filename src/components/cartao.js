import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Cart, Sob} from '../../src/styles/index';

class Cartao extends Component{
    render(){
        return(
            <View style = {Cart.cabine}>
                <Text style = {Cart.titulo}>Cartões aceitos</Text>
                <Image source = {require('../img/visa.png')} style = {Cart.image} />
                <Image source = {require('../img/money.png')} style = {Cart.image} />
                <Image source = {require('../img/mastercard.png')} style = {Cart.image} />
            </View>
        );
    }
}
export default Cartao;