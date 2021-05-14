import React from 'react';
import {View, ScrollView} from 'react-native';
import Cabecalho from '../../components/cabecalho';
import Categoria from '../../components/categorias';
import {Pai} from '../../styles/index';
import Endereco from '../../components/endereco';
import Siga from '../../components/siga';

function Categorias(){
    return(
        <View style = {Pai.papai}>
            <Cabecalho />
            <ScrollView>
                <View style = {Pai.filhote}>
                    <Categoria />
                    <Endereco />
                    <Siga />
                </View>
            </ScrollView>
        </View>
    );
}
export default Categorias;