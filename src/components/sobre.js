import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Sob} from '../styles/index';

class SLoja extends Component{
    render(){
        return( 
            <View> 
                <Text style = {Sob.titulo}>Sobre a Loja</Text>
                <View style = {Sob.caixona}>
                    <Text style = {Sob.texto}>Bem vindo à maior loja de roupas que há em Cidade das Águas!</Text>
                </View>
                <Image source = {require('../img/sobre.jpg')} style = {Sob.image} />
                <Text style = {Sob.outroTexto}>
                    Olá, somos uma empresa focada em oferecer o melhor de nosso produto para embelezar nossos clientes!
                </Text>
                <Text style = {Sob.titulo}>História</Text>
                <Text style = {Sob.outroTexto}>
                    Nossa empresa começou em 2017, em uma pequena garagem localizado na Rua Eusébio,
                    Aos poucos, a loja foi crescendo e se espalhando entre a população local, até que, pá! 
                    Juntos, conseguimos abrir nosso primeiro estabelecimento no Shopping Águas Razas, e assim
                    expandimos nossa empresa para outras cidades do Estado.
                </Text>
                <Image source = {require('../img/persuadir.jpg')} style = {Sob.outraImage} />
                <Text style = {Sob.titulo}>Objetivos</Text>
                <Text style = {Sob.outroTexto}>
                    Nosso objetivo principal é trazer aos nossos clientes o melhor que temos a oferecer
                    de nossas roupas, além disso, também reclicamos roupas!
                </Text>
            </View>

        );
    }
}
export default SLoja;