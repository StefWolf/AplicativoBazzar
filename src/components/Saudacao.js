import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Cab, Desq, Sau} from '../styles/index';
import Destaque from './Destaque';
class Saudacao extends Component{
    render(){
        return(
            <View style = {Sau.fundo}>
              
                <Text style = {Sau.titulo}>Bem vindos ao BAZZAAR</Text>
                <Text style = {Sau.texto}>Nossos produtos são inspirados pelas pessoas que estão
                 à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você.
                  Descubra our story e aproveite as promoções.</Text>
            </View>
        );
    }
}
export default Saudacao;