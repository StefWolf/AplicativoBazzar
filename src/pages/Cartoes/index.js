import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Cabecalho from '../../components/cabecalho';
import {Pai} from '../../styles/index';
import Cartao from '../../components/cartao';

function Cartoes(){
    return(
        <View style = {Pai.papai}>
            <Cabecalho />
            <View style = {Pai.filhote}>
                <Cartao />
            </View>
        </View>
    );
}
export default Cartoes;