import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Desq} from '../styles/index';

let fundolocal = require('../img/fundo.jpg');

class Destaque extends Component{
    render(){
        return(
            <View>
                <ImageBackground source = {fundolocal} style = {Desq.fundoimage}> 
                    <View style = {Desq.caixotedesconto}>
                        <Text style = {Desq.textdesq}>Até 50% de desconto</Text>
                        <TouchableOpacity style = {Desq.botaodesq}>
                            <Text style = {Desq.textbotaodesq}>Comprar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );

    }
}
export default Destaque;