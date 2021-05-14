import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {ende} from '../styles/index';


class Endereco extends Component{
    render(){
        return(
            <View style = {ende.fundoende}>
               <Text style = {ende.endereco}>
                   Rua Eusébio 10{"\n"}
                   Centro, Cidade das Águas{"\n"}{"\n"}

                   Aberta de segunda a sexta das 10:00 as 21:00
               </Text>
            </View>
        );
    }
}
export default Endereco;