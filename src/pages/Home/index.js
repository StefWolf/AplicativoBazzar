import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Cabecalho from '../../components/cabecalho';
import Destaque from '../../components/Destaque';
import Saudacao from '../../components/Saudacao';
import {Pai} from '../../styles/index';
import Produtos from '../../components/produtos';
import Endereco from '../../components/endereco';
import Siga from '../../components/siga';

function Home(){
    return(
        <View style = {Pai.papai}>
            <Cabecalho/> 
            <ScrollView>
                <View style = {Pai.filhote}>
                    <Destaque />
                    <Saudacao/>
                    <View style = {Pai.produtos}>
                        <Produtos/>
                        <Endereco />
                    </View>
                    <Siga />
                </View>
            </ScrollView>
        </View>
    );
}
export default Home;