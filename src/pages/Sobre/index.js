import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Cabecalho from '../../components/cabecalho';
import {Pai} from '../../styles/index';
import SLoja from '../../components/sobre';
import Endereco from '../../components/endereco';
import Siga from '../../components/siga';

function Sobre(){
    return(
        <View style = {Pai.papai}>
            <Cabecalho />
            <ScrollView>
                <View style = {Pai.filhote}>
                    <SLoja />
                    <Endereco />
                    <Siga />
                </View>
            </ScrollView>
        </View>
    );
}
export default Sobre;